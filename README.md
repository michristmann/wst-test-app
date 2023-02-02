# WST Test App

To run this application it's crucial to have [Docker](https://www.docker.com/) installed and running in your machine!

Now, in the project directory, to test the app, run the following command lines:

#### `Build & Start the Services`

```
docker-compose up --build
```

##### `Note: Sometimes the database is created after the migration code, which will trigger an Database Connection Error. In this case, run the command line above a second time!`

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

- Failing to save the data, there will be a code `400` informing the error on you browser console and screen.
