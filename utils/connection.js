const  mongoose =require("mongoose");

const connect = () => {
  mongoose.connect("mongodb+srv://admin123:admin123@sliitrpm.uw5wb.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.once("open", () => {
    console.log("connected to MongoDb");
  });
};

const disconnect = (done) => {
  mongoose.disconnect(done);
};

module.exports = connect, disconnect;