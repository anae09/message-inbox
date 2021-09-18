import mongoose from 'mongoose'

const Schema = mongoose.Schema;

let Thread = new Schema(
    {
        title: {
            type: String
        },
        participants: {
            type: Array
        }
    }
);

export default mongoose.model('Thread', Thread, 'threads');