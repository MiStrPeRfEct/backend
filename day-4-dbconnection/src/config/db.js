const { default: mongoose } = require("mongoose")

const connectDb = async() =>{
    try{
        await mongoose.connect("mongodb+srv://priyanshusharma9305_db_user:cohort12345@cohort-cluster.yuiyads.mongodb.net/")
    console.log("mongodb connected")

    }catch(err){
        console.log("error while connecting",err)
    }
}

module.exports = connectDb