const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/e-comm");

const productsSch = new mongoose.Schema(

    {

        name:String,
        price:Number
    });


const saveInDB = async () =>{


   

    const productsModel = mongoose.model('products', productsSch);

    let data = new productsModel({name:"m8", price:1000});

    let result = await data.save();


    console.log(result);

}




const updateInDB = async () => {


    const product = mongoose.model('products', productsSch);

    let data = await product.updateOne({

        name: 'm8'
    },

    {

        $set: {

            price: 1200

            
        }});



}



const findInDB = async () => {


    const product = mongoose.model('products', productsSch);


    let data = await product.find({name: 'm8'});

    console.log(data);

}


const deleteInDB = async() => {



    const product = mongoose.model('products', productsSch);

    let data = await product.deleteOne({name: 'm8'});


    console.log(data);


}


deleteInDB();



