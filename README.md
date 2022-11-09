<h1 align="center">Clean Arch with Javascript</h1>

## Instalation and Usage

### Must have
1. Node.js v18
2. Docker

### Step-by-step without docker
1. Copy the content of `.env.example` and paste in a file called `.env`
2. Instal the dependencies: `npm install`
3. To run the project: `npm run start`. Or with watch mode: `npm run start:dev`

### Step-by-step with docker
1. Copy the content of `.env.example` and paste in a file called `.env`
2. Run: `docker-compose up`

### URLs
* (GET and POST) localhost:8000/notes
  * (GET) localhost:8000/notes?author=[AuthorNameHere]
  * (GET) localhost:8000/notes/?id=[NoteIdHere]
