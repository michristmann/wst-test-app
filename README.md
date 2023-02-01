# WST Test App

To run this application it's crucial to have [Docker](https://www.docker.com/) installed and running in your machine!

## Docker Setup

To set up the PostgresSQL database that this project requires, run, in your console, the command lines bellow:

#### `Get Official Postgres Docker Image`

```
docker pull postgres
```

#### `Set the Master Password and Run`

```
docker run --name wst -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d postgres
```

#### `Create the Database`

```
npx sequelize:db
```

#### `Run Migrations`

```
npx sequelize db:migrate
```

Now, in the project directory, to test the app, run the following command lines:

#### `Build with no Cache`

```
docker-compose build --no-cache
```

#### `Start the Services`

```
docker-compose up
```

Once the Docker `services` are running, open [localhost](http://localhost:3000) to view it in the browser.

You can also check the running services and containers, by inputing the commands listed bellow:

#### `List the Services`

```
docker-compose ps
```

#### `List the Containers`

```
docker ps
```

To stop the Docker services, run:

#### `Stop Services`

```
docker-compose stop
```

#

## Usage

After initializing the application, go to the [upload file page](http://localhost:3000/send-sample), and use the mocked tables - `project mocked-tables folder` - to run some tests.

The app will convert the `.xlsx` documents, turn it into a JSON and send it to the backend API. Then the api will validade JSON object, comparing it's object keys and fiedls (values and types) with the `Sample Model`.

- On success, a code `201` will be sent, and the file content will be displayed in the [index file page](http://localhost:3000/sample-submissions), and;

- Failing to save the data, there will be a code `400` informing the error on you browser console.
