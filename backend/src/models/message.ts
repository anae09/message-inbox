import mongoose from 'mongoose'

const Schema = mongoose.Schema;

let Message = new Schema(
    {
        threadId: {
            type: String
        },
        sender: {
            type: String
        },
        receiver: {
            type: String
        },
        timestamp: {
            type: Date
        },
        body: {
            type: String
        }
    }
);

export default mongoose.model('Message', Message, 'messages');