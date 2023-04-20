import { Schema, model } from 'mongoose';

const chatSchema = new Schema(
  {
    chatName: {
      type: String
    },
    isGroupChat: {
      type: Boolean,
      default: false
    },
    users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    ],
    latestMessage: {
        type: Schema.Types.ObjectId,
        ref: "Message"
    },
    groupAdmin: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
  },
  {
    timestamps: true
  }
);

export default model('Chat', chatSchema);
