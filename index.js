const express = require('express');
const app = express();
const mongoose = require('mongoose');
const errors = require('./middleware/errors');
const PORT = 3000;

mongoose
.connect('mongodb+srv://devkeyurkasvala:@cluster0.xqdxmvf.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
  console.log('Connected to Database Successfully');
}   )
.catch((e) => {
    console.log('Error connecting to MongoDB', e);
    }   );

app.use(express.json());
app.use("/api", require("./routes/app.routes"));
app.use(errors.errorHandler);

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on port: ${PORT}`);
  }   ); 