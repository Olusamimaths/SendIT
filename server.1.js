import express from 'express';
import pg from 'pg';
const app = express();
const connectionString = 'postgres://postgres:solathecoder@localhost:5432/postgres';
 
app.get('/', (req, res, next) => {
  pg.connect(connectionString, (req, res, next) => {
    pg.connect(connectionString, (err, client, done) => {
      if (err) {
        console.log(`not able to get connection  ${err}`);
        res.status(400).send(err);
      }
      client.query('SELECT * FROM student where id = $1', [1], (error, result) => {
        done(); // closing the connection;
        if (error) {
          console.log(error);
          res.status(400).send(error);
        }
        res.status(200).send(result.rows);
      });
    });
  });
});

app.listen(4000, () => {
  console.log('Server is running.. on Port 4000');
});
