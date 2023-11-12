const userdb = require('../Model/Model');
const bcrypt = require('bcrypt');

// Create a new user
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: 'Content cannot be empty!'
    });
    return;
  }

  // Create a new user instance based on the userdb model
  const user = new userdb({
    username: req.body.username,
    password:req.body.password
    
  });

  user
  .save(user)
    .then(data => {
      res.send(data);
      //.redirect('/')
    })
    .catch(err => {
      res.status(500).send({
        message:err.message||'Oops! Some error occurred while creating a user.'
      });
    });
};

exports.find=(req,res)=>{
   userdb.find()
   .then(user=>{
    res.send(user)
   })
   .catch(err=>{
    res.send(err)
   })
   }




exports.signIn = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Content cannot be empty!'
    });
  }

  const { username, password } = req.body;

  try {
    // Find the user by username
    const user = await userdb.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: 'User not found. Please sign up first.' });
    }

    // Compare the provided password with the stored password
    if (password !== user.password) {
      return res.status(401).json({ message: 'Invalid password.' });
    }

    // Password is valid, user is authenticated
    res.status(200).json({ message: 'Sign in successful.' });
  } catch (error) {
    res.status(500).json({
      message: error.message || 'Oops! Some error occurred while signing in.'
    });
  }
};




// app.post('/login', (req, res) => {
//     const user = {
//         id: "1",
//         name: "zoha",
//         email: "zoha@gmail.com"
//     };

//     jwt.sign(user, security_key, (err, token) => {
//         if (err) {
//             console.error(err);
//             res.status(500).json({ error: 'Error creating JWT' });
//         } else {
//             console.log(token); 
//             res.json({ token });
//         }
//     });
// });
// app.use(verifyToken)

// app.post('/profile',(req,res)=>{
//     jwt.verify(req.token,security_key, (err,authData)=>{
//         if(err){
//             res.send({
//                 result:"invalid token"
//             })
//         }
//         else{
//             res.json({
//                 message:"profile accessed",
//                 authData
//             })
//         }
//     })
// })

// function verifyToken(req,res,next)
// {
//  const req_token= req.headers['authorization']
//  if(typeof req_token !== "undefined")
//  {
//      const bearer= req_token.split(" ")
//      const token=bearer[1]
//      req.token=token
//      next() 
//  }
//  else{
//     res.send("Token not available")
//  }
// }