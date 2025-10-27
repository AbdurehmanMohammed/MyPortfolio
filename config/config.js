const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 5000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: process.env.MONGODB_URI || "mongodb+srv://mabdul2224_db_user:Abdulrahman1$@cluster0.qhmqldp.mongodb.net/Portfolio?retryWrites=true&w=majority&appName=Cluster0"  // ← Fixed: mongoUri (not mongolri)
}

export default config