import express from 'express';
import { v4 } from 'uuid';
import mongoose from 'mongoose';
const app = express();

const db = await mongoose.connect("mongodb://mymongo/ejemplodb")
console.log(db.connection.db.databaseName)

const productSchema = new mongoose.Schema({
    name: String,

})

const ProductModel = mongoose.model('Product', productSchema)

app.get('/', (req, res) => {

    const product = new ProductModel({
        name: "Product "
    })
    res.json({
        id: v4(),
        product
    });
})
app.listen(3000);
console.log("server on port 3000")