const mongoose = require('mongoose');



const dbConnect = async () => {
    try {
        await mongoose.connect("mongodb+srv://kanchan:<password>@cluster0.avauu5c.mongodb.net/?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //useFindAndModify: false,
            //useCreateIndex: true,
        })
        console.log("DB connection established")
    }
    catch (error) {
        console.log(` ${error.message}`)

    }
};


module.exports = dbConnect;