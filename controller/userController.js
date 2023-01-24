

const users = [];

module.exports.signup=(req, res)=>{
    let user = req.body;
    if(!user.email || !user.password){
        return res.status(400).send("Email and Password is required");
    }
    users.push(req.body);
    return res.status(200).send();
}

//http://localhost:4000/api/user/signup

module.exports.signin=(req, res)=>{
    let user = req.body;
    if(!user.email || !user.password){
        return res.status(400).send("Email and Password is required");
    }
    let foundUser = users.find(i=> i.email==user.email && i.password==user.password);
    if(!foundUser){
        return res.status(400).send("Email or Password is incorrect");
    }else{
        return res.status(200).send();
    }
    
}