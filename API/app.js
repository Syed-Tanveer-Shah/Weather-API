// app.js
import express from 'express';
import connectDB from './db/connectdb.js';
import web from './routes/web.js';

const app = express();
const port = process.env.PORT || '8000';
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017';

connectDB(DATABASE_URL); // Function to establish the database connection

app.use(express.json());

app.use('/weather', web);


app.get ('/', (rqe,res)=>{
  res.send("hello from server")

})



app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
  console.log('interval server is running');
});
