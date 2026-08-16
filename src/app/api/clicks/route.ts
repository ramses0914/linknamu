import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

type ClickDoc = {
  _id: string;
  count: number;
};

export async function GET() {
  const client = await clientPromise;
  const collection = client.db("linknamu").collection<ClickDoc>("clicks");

  const docs = await collection.find().toArray();
  const counts: Record<string, number> = {};
  for (const doc of docs) {
    counts[doc._id] = doc.count ?? 0;
  }

  return NextResponse.json(counts);
}
