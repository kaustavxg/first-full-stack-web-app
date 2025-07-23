const express = require('express');
const cors = require('cors')

const jwt = require('jsonwebtoken');

const JWT_SECRET = "random@kg.com";

/*

anyone can encode JWT
# BUT IT CAN BE VEFIFIED BY ME ONLY
// VERIFY?
mtlb mein hi token dalke pta laga skta hua actual username or password
// baki gpt btayega 

*/

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.static('public'));

let users = []

// what is this logger middleware?
// basically btayega konsi reqquest ham access kr rhe hai
// post, get etc .....

function logger(req, res, next){
    console.log(`${req.method} request came`);
    next();   
}

app.get('/', function(req, res){
    res.sendFile(__dirname + "/public/index.html")
})

app.post('/signup',logger ,function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    // check if username or password is empty
    if(!username || !password){
        res.status(404).json({
            error: "username or password missing"
        })
        return;
    }

    // check if username is same or not
    const duplicate = users.find(u => u.username === username)
    if(duplicate){
        res.status(404).json({
            error: "username already exist"
        })
        return;
    }


    users.push({
        username,
        password
    })

    res.json({
        message: `user added successfully with username: ${username} and password: ${password}`
    })

})

app.post('/signin',logger , function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    // check karo user exist krta hai ya nai
    const foundUser = users.find(u => u.username === username && u.password === password)

    if(!foundUser){
        res.status(404).json({
            error: "Invalid credentials"
        })
    } else {
        //# generate a JWT
        const token = jwt.sign({
            username: username
        }, JWT_SECRET)

         res.json({
        token: token
        })
    }
})

function auth(req, res, next){

    const token = req.headers.token;

    if(!token){
        res.status(404).json({
            error: "token is missing"
        })
        return;
    } 

    try {
        const decodedInfo = jwt.verify(token, JWT_SECRET);
        //# VERIFY THE JWT
        // send them back their token
       
        // res.json(decodedInfo)
        // decodedInfo returns me
        // 1. username
        // 2. iat --- what the fuck is iat
        
        req.username = decodedInfo.username;
        next();

    } catch (error) {
        res.status(404).json({
            error: "Invalid token!"
        })
    }
}

app.get('/me', auth ,logger ,function(req, res){
    
    const currentUser = req.username;

    const foundUser = users.find(u => u.username === currentUser)
        
    if(foundUser){
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    } else {
        res.status(404).json({
            error: "Invalid token!"
        })
    }
})

app.listen(8080, () => {
    console.log("listening on port 8080");
})