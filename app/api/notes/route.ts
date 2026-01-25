import { connectDB } from "../../../lib/db";
import Note from "../../../models/Note";

// GET all notes
export async function GET() {
  await connectDB();
  const notes = await Note.find();
  return Response.json(notes);
}

// POST create note
export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();
  const note = await Note.create(body);
  return Response.json(note);
}

// DELETE note
export async function DELETE(req: Request) {
  await connectDB();
  const { id } = await req.json();
  await Note.findByIdAndDelete(id);
  return Response.json({ success: true });
}



