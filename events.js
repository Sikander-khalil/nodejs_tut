const express = require("express");


const eventEmitter = require("events");


const event = new eventEmitter();

const count = 0;

event.on("countApi", ()=> {

    count++;
    console.log("Events Called", count);


});



const app= express();

app.get("/", (req, resp) => {



    resp.send("APi Called");
    event.emit("countApi");

});


app.listen(5000);