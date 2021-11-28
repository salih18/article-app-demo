# Article Fullstack Demo Web Application

##### React | React Hooks | React Redux | Django Rest | Postgres 


# S-Magazine as a Single Page Application

- The authenticated user can create, update, delete articles.
- All visitors of the web site can read the articles.

### Desktop View

<img src="https://i.imgur.com/a642d1y.png" title="S Magazine Demo "/>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The SPA with 4 pages (routes):

- A Homepage to render articles,
- An article detail page
- A Login Page
- An Article page for Edit/Create


### Production Deployment

Online Deployment of this project is available at [S-Magazine](https://smagazine.salihsert.com/).

- [Docker Swarm](https://docs.docker.com/engine/swarm/) container orchestration tool is used for deployment of this project to the the VPS Cloud.

- Nginx is used for to serve the production build of the app and to serve image files seperately as a file server.

- [Traefik](https://traefik.io/) is used as a reverse proxy.

### Getting Started in Development Mode

To get started you can simply clone the repo and in the root folder

With _docker-compose_

`docker-compose -f development.yml up --build`

Runs the client app in the development mode.<br />
Open [http://localhost:3003](http://localhost:3003) to view it in the browser.

Runs the backend app in the development mode.<br />
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

You can access Django admin from [http://localhost:8000/admin](http://localhost:8000/admin) to view it in the browser. You can use admin password below to login. 

```
email: user@test.com
password: test123456
```

Admin for Django Admin

```
email: admin@test.com
password: test123456
```



#### Tech Stacks

- Reactstrap | SCSS

- React | React Hooks 

- Redux | Redux Hooks

- Django Rest Api | Postgres

- Docker | Docker Compose | Docker Swarm

- Traefik | Ngnix

### Authors

- [Salih](https://github.com/salih18)
- email@salihsert.com
