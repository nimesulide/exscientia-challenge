import mongoose from 'mongoose';
import { createMongooseSchema } from 'convert-json-schema-to-mongoose';
import jsonSchema from './schema.json';

const compoundSchema = new mongoose.Schema(createMongooseSchema(null, jsonSchema), { autoCreate: true });

const Compounds = mongoose.model('Compound', compoundSchema);

export default Compounds;
