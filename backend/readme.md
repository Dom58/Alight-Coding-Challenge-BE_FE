# Backend of Product Items with different EndPoints

## Setup project
1. After cloning the repository
   `https://github.com/Dom58/Alight-Coding-Challenge-BE_FE.git`

In your terminal, run
`cd Alight-Coding-Challenge-BE_FE` and then
`cd backend` or simply run `cd Alight-Coding-Challenge-BE_FE/backend`
to navigate to the Google front project for the backend codebase.

After you navigate to the backend project/folder, follow the below steps to run backend project.

2. Install dependencies

   `pnpm install` or  `yarn install` or `npm install`

3. Create your environment variable(`.env` file)

Copy and paste the `.env.example` file and rename the copied file to `.env`.

## Start the project

### For Development

1. `pnpm dev` or `yarn dev` or `npm dev` depends on your favorite

### For Build

- To Build the project start by running in your terminal <br />
  `pnpm build` or `yarn build` or `npm build` depends on your favorite <br/>

- To serve the project<br/>
  `pnpm start` or `yarn start` or `npm start` depends on your favorite

## EndPoints (APIS)

### NOTE

By default the are `50 items` that are hardcoded in the Backend project
To add more products view this endpoints you can use `Postman` to create more items and display them.

### APIs Testing with Postman [Screenshots]

#### Create a new item
![image](https://github.com/Dom58/Alight-Coding-Challenge-BE_FE/assets/33524053/22812fe7-b3cd-45e8-b8c0-9d8f07e62a1e)

#### Search a created item
![image](https://github.com/Dom58/Alight-Coding-Challenge-BE_FE/assets/33524053/936fe50f-6dd9-4152-879e-3ea77fafcd72)

### APIs

| Method         | Endpoint             | Description  | API Example |
| ---         |     ---      |          --- | ---|
| POST   | /items/create     | Create an item   | http://localhost:8000/items/create|
| GET     | /items      | Fetch all items      |http://localhost:8000/items |
| GET   | /items/:id     | Get a single id by ID    |http://localhost:8000/items/2 |
| GET     | /search?q=:keyword       | search items by category or by name, `keyword` should be any thing      | http://localhost:8000/search?q=Gadget
|      |        |    |  |
