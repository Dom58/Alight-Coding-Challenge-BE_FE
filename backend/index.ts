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
  HTTP_BAD_REQUEST,
  HTTP_CREATED,
  HTTP_EXIST,
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

app.post("/items/create", async (req: Request, res: Response) => {
  try {
    const item: Item = req.body;
    if (item.name == '' || item.category == '' || item.description == '' || item.price == null) {
      res.status(HTTP_BAD_REQUEST).json({ error: 'Field name, category, price and description are required' });
    }
    const findItem = items.find(itm => itm.name === item.name);

    if (findItem) {
      return res.status(HTTP_EXIST).json({ error: `Item with name #${item.name}# already exist` })
    }

    const newItem = {
      ...item,
      id: items.length + 1
    }

    items.push(newItem);
    res.status(HTTP_CREATED).json({
      message: "New item created successfully",
      item: newItem
    });
  } catch (e: any) {
    res.json(req.body);
  }
});

app.get("/items", async (req: Request, res: Response) => {
  try {
    if (!items.length) {
      return res.status(HTTP_NOT_FOUND).json({ error: 'No item created!' })
    }
    return res.status(HTTP_OK).json(items);
  } catch (e: any) {
    res.json({ error: e });
  }
});

app.get('/search', (req: Request, res: Response) => {
  const { q } = req.query;

  let filteredItems: Item[] = items;
  if (q) {
    const searchTerms = (q as string).toLowerCase().split(' ');
    filteredItems = filteredItems.filter(item => {
      return searchTerms.some(term =>
        item.name.toLowerCase().includes(term) ||
        item.category.toLowerCase().includes(term)
      );
    });
  }
  res.status(HTTP_OK).json(filteredItems);
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
