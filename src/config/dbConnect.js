const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB, {
      useUnifiedTopology: true, //Configurations for mongodb
      useNewUrlParser: true,
      autoIndex: true,
    });
    console.log("DB connected successfully!");
  } catch (error) {
    console.log("Error:" + error.message);
  }
};

module.exports = dbConnect;

//xqJ4sM6hF10sPkGZ
//mongodb+srv://Naman:<password>@cluster0.uwia0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority