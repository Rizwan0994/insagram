const express = require('express')
  const app = express()
  const flash = require('express-flash')
  const session = require('express-session')
  const methodOverride = require('method-override')
  const Login=require("./signup")
  //db conection
  const mongoose=require('mongoose');
  const url="mongodb+srv://Rizwanx:1234@cluster0.l9rkzno.mongodb.net/Insagram?retryWrites=true&w=majority"
  mongoose.connect(url)
  .then((result)=>console.log('connected to db'))
  .catch((err)=>console.log(err))

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(__dirname));


   //new 

 
   app.get('/', function(req, res) { 
    res.render('index');
    });
   app.get('/insta', function(req, res) { 
       res.render('insta');
   });
   app.get('/login', function(req, res) { 
    res.render('login');
});

  app.post('/login',  async (req, res) => {
    try {
    //  const hashedPassword = await bcrypt.hash(req.body.password, 10)
     const mysignup=new Login({
      
      username: req.body.username,
      password: req.body.password
     });
     mysignup.save()
     .then((result)=>{res.send(result)})
     .catch((err)=>{
       console.log(err)
     });
     
      res.status(201).redirect('/home')
    } catch {
      res.redirect('/login')
    }
  })

  



  app.post('/login', (req, res, next) => {
    passport.authenticate('local', {
      successRedirect: '/',
       failureRedirect: '/login',
      failureFlash: true
    })(req, res, next);
  });

  app.listen(8090);
  console.log("run")