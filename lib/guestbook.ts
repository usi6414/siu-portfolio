import { connectDB } from "./mongodb";
import { Guestbook as GuestbookModel } from "@/models/Guestbook";

export type Guestbook = {
  id: string;
  author: string;
  content: string;
  createdAt: string;
};

type GuestbookDocLike = {
  _id: unknown;
  author: string;
  content: string;
  createdAt?: Date;
};

function toGuestbook(doc: GuestbookDocLike): Guestbook {
  return {
    id: String(doc._id),
    author: doc.author,
    content: doc.content,
    createdAt: (doc.createdAt ?? new Date()).toISOString().slice(0, 10),
  };
}

export async function getGuestbooks(): Promise<Guestbook[]> {
  await connectDB();
  const docs = await GuestbookModel.find().sort({ createdAt: -1 }).lean();
  return docs.map((doc) => toGuestbook(doc as GuestbookDocLike));
}

export async function createGuestbook(input: {
  author: string;
  content: string;
}): Promise<Guestbook> {
  await connectDB();
  const doc = await GuestbookModel.create(input);
  return toGuestbook(doc);
}
