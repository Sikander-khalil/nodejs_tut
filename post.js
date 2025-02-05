const express = require('express');

require('./config');

const product = require('./product');

const app = express();

app.use(express.json());


app.post("/create", async (req, res) => {


    let data = new product(req.body);

    let result = await data.save();


    console.log(result);

    res.send(result);



});

app.get("/list", async(req, resp) => {

    let data = await product.find();

    resp.send(data);






});

app.delete("/delete/: _id", async(req, res)=> {


    console.log(req.params);

    let data = await product.deleteOne(req.params);

    resp.send(data);



});

app.put('/update/: _id', async(req,resp) => {


    let data = await product.updateOne(

        req.params,
    
    
        {$set: req.body}
    );

    resp.send(data);

});

app.listen(5000);