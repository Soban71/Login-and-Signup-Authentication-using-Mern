const express = require('express')
const moogoose=require('mongoose');
const cors=require('cors')

const app =  express();
app.use(express.json());
app.use(cors());


//Moognose connection 
//const Db= "mongodb+srv://Soban:123@cluster0.fboiaie.mongodb.net/LoginAuth?retryWrites=true&w=majority"

moogoose.connect("mongodb+srv://Soban:123@cluster0.fboiaie.mongodb.net/LoginAuth?",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>

    console.log("Successfully Connected")
).catch((err)=> console.log("No connection")); 


//Mongoose Schema
const userSchema=new moogoose.Schema({
    Name :String ,
    Email : String ,
    Password: String
});

//models
const User=new moogoose.model("user" , userSchema);

//Routes

app.post('/Login',async(req , res)=>{
    const {Email, Password}=req.body
     
    const user = await User.findOne({ Email: req.body.Email });
    if (!user) {
      return res.send({message :'Incorrect Email'});
    }
    // check password
    if (user.Password !== Password) {
      return res.send({message :'Incorrect password'});
    }
    // password is correct
   return res.send({message :'Login successful', user : user});                               
  })


  /*
   const match = await bcrypt.compare(Password, user.Password);

  
   if (!match) {
     return res.send({ message: 'Incorrect password' });
   }
 
   return res.send({ message: 'Login successful' });*/
   
app.post('/Signup',(req , res)=>{
  const {Name ,Email, Password}=req.body
    const user=new User({
        
        Name,
        Email ,
        Password
    })
    user.save();
  // console.log(req.body);
});






app.listen(9270, ()=>
{
console.log("Working on this port");
});

