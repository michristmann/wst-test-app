# WST Test App

To run this apliccation it's crucial to have [Docker](https://www.docker.com/) installed and running in your machine!

## Docker Setup

In the project directory, to test the app, run the following command lines:

#### `Build with no cache`

```
docker-compose build --no-cache
```

#### `Start the services`

```
docker-compose up
```

Once the Docker `services` are running, open [localhost](http://localhost:3000) to view it in the browser.

You can also check the running services and containers, by inputing the commands listed bellow:

#### `List the services`

```
docker-compose ps
```

#### `List the containers`

```
docker ps
```

To stop the whole Docker process, run:

#### `Stop services`

```
docker-compose stop
```
