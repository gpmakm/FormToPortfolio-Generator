const express=require('express');
const app=express();
const path=require('path');
const bp=require('body-parser');
const port=3000;

app.listen(port,(error)=>{
    if(!error){
        console.log("Server is running");
    }
    else{
        console.log(error);
    }
});
app.get('/',(request,response)=>{
    response.send("hello world");
})