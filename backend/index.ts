import express, {
  Express,
  Request,
  Response
} from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from "cors";
import { Id, Item } from './types';
import { items } from './database/menu';
import {
  HTTP_CREATED,
  HTTP_NOT_FOUND,
  HTTP_OK
} from './constants/httpStatusCodes';

dotenv.config();

const port = process.env.PORT;

const app: Express = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());


app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Express with TypeScript Server APIs',
    data: items
  });
});

app.post("/create", async (req: Request, res: Response) => {
  try {
    const item: Item = req.body;
    items.push(item);
    res.status(HTTP_CREATED).json({ data: items });
  } catch (e: any) {
    res.json(req.body);
  }
});

app.get("/items", async (req: Request, res: Response) => {
  try {
    if (!items.length) {
      return res.status(HTTP_NOT_FOUND).json({ error: 'No item created!' })
    }
    return res.status(HTTP_OK).json({ data: items });
  } catch (e: any) {
    res.json({ error: e });
  }
});

app.get('/search', (req: Request, res: Response) => {
  // const { name, category } = req.query;
  // let filteredItems: Item[] = items;

  // if (name) {
  //   filteredItems = filteredItems.filter(item =>
  //     item.name.toLowerCase().includes((name as string).toLowerCase())
  //   );
  // }

  // if (category) {
  //   filteredItems = filteredItems.filter(item =>
  //     item.category.toLowerCase() === (category as string).toLowerCase()
  //   );
  // }



  const { q } = req.query;

  // Initialize the 'filteredItems' array with the full 'items' array
  let filteredItems: Item[] = items;

  // Filter the items by name and category if the 'q' query parameter is provided
  if (q) {
    const searchTerms = (q as string).toLowerCase().split(' ');
    filteredItems = filteredItems.filter(item => {
      // Check if any of the search terms match the item's name or category
      return searchTerms.some(term =>
        item.name.toLowerCase().includes(term) ||
        item.category.toLowerCase().includes(term)
      );
    });
  }

  res.status(HTTP_OK).json({ data: filteredItems });
});

app.get("/items/:id", async (req: Request, res: Response) => {
  try {
    const id: Id['id'] = parseInt(req.params.id);
    const findItem = items.find(itm => itm.id === id);
    if (!findItem) {
      return res.status(HTTP_NOT_FOUND).json({ error: 'Item  not found' })
    }
    return res.status(HTTP_OK).json(findItem);
  } catch (e: any) {
    res.json({ error: e });
  }
});


app.all('*', (_req, res) => {
  res.status(HTTP_NOT_FOUND).json({
    error: 'address Not found',
  });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
