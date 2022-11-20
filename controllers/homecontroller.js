

exports.home=(req,res)=>{
    res.status(200).json({
        sucess: true,
        greeting:"Hello from API"
    });
};

