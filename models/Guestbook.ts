import { model, models, Schema } from "mongoose";

const guestbookSchema = new Schema(
  {
    author: { type: String, required: true, trim: true },
    content: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  },
);

export const Guestbook = models.Guestbook || model("Guestbook", guestbookSchema);
