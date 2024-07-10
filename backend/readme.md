# Backend of Product Items with different EndPoints

## Setup project
1. After cloning the repository
   `https://github.com/Dom58/Alight-Coding-Challenge-BE_FE.git`

In your terminal, run
`     cd backend
    `
to navigate to the backend project

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

### APIs

| Method         | Endpoint             | Description  | API Example |
| ---         |     ---      |          --- | ---|
| POST   | /create     | Create an item   | http://localhost:8000/create|
| GET     | /items      | Fetch all items      |http://localhost:8000/items |
| GET   | /items/:id     | Get a single id by ID    |http://localhost:8000/2 |
| GET     | /search?q=:keyword       | search items by category or by name, `keyword` should be any thing      | http://localhost:8000/search?q=Gadget
|      |        |    |  |
