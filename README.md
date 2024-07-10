# Google Front Page Clone

## Context

This repository contains two project the one for `Backend side` to get all the necessary APIs for searching in Google Front Page and also the one for the `Fronted side` as a web of Google Front Page Clone.

This repostory contains also two Parts <br/>
Backend `B. Setup [Backend Project]` <br/>
Frontend `A. Setup [Backend Project]`

## Prerequisites

- Laptop/Desktop
- Node
- Web Browser
- Stable Internet

# Technology used

## Frontend (FE)

- JavaScript
- CSS
- React.js
- NextJs
- TailwindCSS
- Axios

## Backend(BE)

- JavaScript
- Nodejs
- Express
- Postman

# Get Started

# A. Setup [Frontend Project]

1. Clone the repository
   `https://github.com/Dom58/Coding-Challenge-Alight.git`

In your terminal, run
`   cd frontend
  `
to navigate to the Google front project for frontend codebase.
After navigatin g to the frontend project/folder, follow the below steps

2. Install dependencies

   `pnpm install`or `yarn install` or `npm install` depends on your favorite

3. Create your environment variable(`.env` file)

Copy and paste the `.env.example` file and rename the copied file to `.env`.

## Start the project

### For Development

1. `pnpm dev` or `yarn dev` or `npm dev` depends on your favorite

### For Build

To Build the project start by running in your terminal `pnpm build` or `yarn build` or `npm build` to serve the project

1. `pnpm start` or `yarn start` or `npm start` depends on your favorite

2. The browser will be opended itself.
   Otherwise, Copy and Paste this to [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Some Screenshots

### Homescreen of the Project

--Loading-----

### Responsivines on mobile

--Loading-----

### Filtered Products/Items

--Loading-----

### Video

---Loading-----

# B. Setup [Backend Project]

1. In the same reposriory from `A` section above, just to the root folder of the cloned project

In your terminal, run
`    cd backend
   `
to navigate to the backend project

2. Install dependencies

   `pnpm install` or `yarn install` or `npm install`

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
| GET   | /items/<id>     | Get a single id by ID    |http://localhost:8000/2 |
| GET     | /search?q=:keyword       | search items by category or by name, `keyword` should be any thing      | http://localhost:8000/search?q=electronics
|      |        |    |  |
