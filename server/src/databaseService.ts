import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import Compounds from './compounds/compoundSchema';
import compoundsJSON from './assets/compounds.json';

const startMongoMemoryServer = async () => {
    const mongod = await MongoMemoryServer.create({ instance: { port: 51234 } });
    const memoryServerUri = mongod.getUri();
    console.log(memoryServerUri);

    process.on('SIGTERM', () => mongod.stop());

    return memoryServerUri;
};

const initializeMemoryDatabase = async () => {
    const memoryServerUri = await startMongoMemoryServer();
    mongoose.connect(`${memoryServerUri}exscientia`);
    mongoose.connection.on('open', function () {
        Compounds.insertMany(compoundsJSON);
    });
};

const connectToDatabase = async (uri?: string) => {
    if (uri) {
        mongoose.connect(uri);
    } else {
        await initializeMemoryDatabase();
    }

    mongoose.connection.on('error', console.error.bind(console, 'Connection error:'));
    mongoose.connection.on('open', function () {
        console.log('Connected to Mongo DB.');
    });
};

export default connectToDatabase;
