const bigPromise = require("../middleware/bigPromise");



//using Promise method
exports.home=bigPromise(async(req,res)=>{
    res.status(200).json({
        sucess: true,
        greeting:"Hello from API"
    });
});


//Using Try Catch method
exports.homeDummy=(req,res)=>{
    try{
    res.status(200).json({
        sucess: true,
        greeting:"Hello from dummy"
    });
    }   
    catch(error){
    console.log(error);
    }
};

