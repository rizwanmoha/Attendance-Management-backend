const JWT = require('jsonwebtoken');
// const adminModel =  require('../models/admin.js');
// const teacherModel = require('../models/teacher.js')

exports.requireSignIn = async(req , res , next) =>{
   
    try{
        const authHeader = req.headers.authorization || req.headers.Authorization;
        
        // if (!authHeader) {
        //     return res.status(401).send({
        //         success: false,
        //         message: 'Authorization header is missing',
        //     });
        // }

        // let token = authHeader;
        // if (authHeader.startsWith('Bearer ')) {
        //     token = authHeader.slice(7);  
        // }

        // console.log('Extracted Token:', token);

        // if (!token) {
        //     return res.status(401).send({
        //         success: false,
        //         message: 'Token is missing',
        //     });
        // }

        // const decode = JWT.verify(token, process.env.JWT_SECRET);
        // req.user = decode;
        next();
    }
    catch(error){
        res.status(401).send({
            success: false,
            error, 
            message: 'Unauthorized Access',
        })
        console.log(error);
    }
}
