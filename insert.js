const dbConnect = require('./mongodb');

const insert =async () => {

    const db = await dbConnect();


   await db.insertMany(

  [
    { name: 'max 3', brand: 'samesung', price: '80.0', catergory: 'mobile'},
    { name: 'max 4', brand: 'infinix', price: '100.0', catergory: 'mobile'},
    { name: 'max 5', brand: 'techno', price: '500.0', catergory: 'mobile'}
  ]
   ).then((_)=> {

    console.log("Data is Inserted SuccessFully");

   })

}

insert();