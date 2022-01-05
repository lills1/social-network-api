const { Schema } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionRequirements: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1
    },
    username: {
      type: String,
      required: true,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    }
  }
);

module.exports = reactionSchema;
