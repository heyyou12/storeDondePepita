const mongoose = require("mongoose");

const dbConnection = async () => {

    try { 
        await mongoose.connect(process.env.BD_CONNECTION,{
            useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true,
            useUnifiedTopology:true,
            
        });
        
        console.log("connected to mongo db");
    } catch (error) {
        console.log("Error connecting to mongodb ", error);
        throw new Error("Error connecting to mongodb");
    }

}

module.exports = {dbConnection};
