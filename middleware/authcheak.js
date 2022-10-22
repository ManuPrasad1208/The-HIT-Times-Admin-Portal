var jwt = require('jsonwebtoken')
const User=require("../mongoSchema/userSchema")

const authcheak=(req,res,next)=>{
        const token=req.cookies.jwtoken;
        if(token==null){
            res.redirect('/login');
        }
        else{
        const verifiedtoken=jwt.verify(token,process.env.SECRET_KEY);
        if(verifiedtoken){
            next()
        }
        else{
            res.redirect("/login");
        }
        }
        
}

const authcheakForsignin=(req,res,next)=>{
    const token=req.cookies.jwtoken;
    if(token!=null){
       res.redirect("/");
    }
    next();
}

module.exports={authcheak,authcheakForsignin}