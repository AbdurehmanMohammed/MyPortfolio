import mongoose from 'mongoose';
import app from './server/express.js';  // Updated path
import config from './config/config.js'; // Updated path

// MongoDB connection
mongoose.Promise = global.Promise;

mongoose.connect(config.mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB successfully');
})
.catch(err => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

// Start server
app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info('Server started on port %s.', config.port);
});