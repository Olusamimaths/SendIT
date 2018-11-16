import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => res.status(200).send({
  message: 'First endpoint made',
}));

app.listen(port);
console.log(`Server started at port ${port}...`);
