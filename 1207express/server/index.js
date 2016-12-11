const express =require('express');
const app =express();
const User=require('./models/user.js')
const cors =require('cors');      //解决同源策略
app.use(cors());
const mongoose=require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/digicity');

var db = mongoose.connection;
db.on('error', console.log);
db.once('open', function() {
  // let user = new User({username: 'inCode'});
  //  user.save(function(err){
  //    if(err) console.log(err);
  //  })
  console.log('success!')
});

app.get('/users',function(req,res){
  User.find().exec(function(err,users){
    // console.log(users)
    res.json({users})
  })
  // res.json({"username":"happypeter"})
})
app.get('/users/:_id',function(req,res){
    User.findById({_id:req.params._id},function(err,user){
      if(err) return console.log(err);
      console.log(user);
      res.send(user)
    })
})
// app.get('/users/:id',function(req,res){
//     console.log(req.params.id);
//     res.send(req.params.id+'\n')
// })
app.get('/email',function(req,res){
  res.json({"emil":"happypeter1983@gmail.com"})
})
app.listen(3000,function(){
  console.log('running on port 3000 ...')
});
