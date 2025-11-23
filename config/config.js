const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 5000,
  mongoUri: process.env.MONGODB_URI || 'mongodb+srv://mabdul2224_db_user:Abdulrahman1%24@cluster0.qhmqldp.mongodb.net/Portfolio?retryWrites=true&w=majority&appName=Cluster0',
  jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret_key_here'
};

export default config;