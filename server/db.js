const mongoose = require('mongoose');

const { MONGO_CONNECTION_STRING } = process.env;

(async () => {
  try {
    await mongoose.connect(MONGO_CONNECTION_STRING, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(`MongoDB Connected!`)
  } catch (e) {
    console.log(e);
  }
})();
