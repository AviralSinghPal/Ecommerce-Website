const app = require("./app");
require("dotenv").config();



// app.get("/",(req,res)=>{
//     res.send("AAGYE HOME PAGE PE ")
// })

app.listen(process.env.PORT,()=>{
    console.log(`Server is running at port : ${process.env.PORT}`);
})