import mongoose from 'mongoose';

async function databaseSetUp() {
  const connected: boolean = await connectToDatabase();
  if (!connected) {
    process.exit(1);//node js process exit
  }
}

async function connectToDatabase(): Promise<boolean> {
  const connectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  try {

    await mongoose.connect(`mongodb://localhost/giladdb`, connectionOptions);//if using web Atlass db, just change the connectionstring
    console.log('Connected to database');
    return true;
  } catch (error) {
    console.log('Error occured while connecting to database', error);
    return false;
  }

}

export { databaseSetUp };