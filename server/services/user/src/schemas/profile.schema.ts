import * as mongoose from "mongoose";

function transformValue(_: any, ret: { [key: string]: unknown }) {
  delete ret._id;
}

export const ProfileSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      required: [true, "User can not be empty"],
    },
    first_name: {
      type: String,
      required: [true, "First name can not be empty"],
    },
    last_name: {
      type: String,
    },
  },
  {
    toObject: {
      virtuals: true,
      versionKey: false,
      transform: transformValue,
    },
    toJSON: {
      virtuals: true,
      versionKey: false,
      transform: transformValue,
    },
  }
);

ProfileSchema.methods.getDisplayName = function () {
  return Promise.resolve("test test");
};
