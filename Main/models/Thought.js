const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction')
// Schema to create a course model
const thoughtSchema = new Schema(
  {
    thoughtBody: {
      type: String,
      required: true,
      maxLength: 280,
      minlength: 1
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
