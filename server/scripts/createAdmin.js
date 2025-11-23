import mongoose from 'mongoose';
import User from './models/user.model.js';
import config from '../config/config.js';

const createAdmin = async () => {
  try {
    console.log('Connecting to MongoDB...');
    
    await mongoose.connect(config.mongoUri);
    
    console.log('✅ Connected to MongoDB successfully!');
    
    // Check if admin already exists
    const adminExists = await User.findOne({ email: 'admin@portfolio.com' });
    if (adminExists) {
      console.log('✅ Admin user already exists');
      console.log('📧 Email:', adminExists.email);
      console.log('👑 Role:', adminExists.role);
      await mongoose.connection.close();
      process.exit(0);
    }

    // Create admin user
    const adminUser = new User({
      name: 'Portfolio Admin',
      email: 'admin@portfolio.com',
      password: 'admin123',
      role: 'Admin'
    });

    await adminUser.save();
    console.log('✅ Admin user created successfully!');
    console.log('📧 Email: admin@portfolio.com');
    console.log('🔑 Password: admin123');
    console.log('👑 Role: Admin');
    
    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('❌ Error creating admin:', error);
    process.exit(1);
  }
};

createAdmin();