const mongoose = require('mongoose');

const { MONGO_CONNECTION_STRING } = process.env;

(async () => {
  try {
    const conn = await mongoose.connect(MONGO_CONNECTION_STRING, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (e) {
    console.log(e);
  }
})();
