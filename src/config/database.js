const mongoose = require('mongoose');

const dbUser = process.env.DB_USER ;
const dbPassword = process.env.DB_PASS;
const dbName = process.env.DB_NAME;

const uri = `mongodb+srv://${dbUser}:${dbPassword}@farma-pessoal.jr7kg.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=farma-pessoal`;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = mongoose;