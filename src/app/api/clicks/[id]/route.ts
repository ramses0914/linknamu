import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

type ClickDoc = {
  _id: string;
  count: number;
};

export async function POST(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const client = await clientPromise;
  const collection = client.db("linknamu").collection<ClickDoc>("clicks");

  const result = await collection.findOneAndUpdate(
    { _id: id },
    { $inc: { count: 1 } },
    { upsert: true, returnDocument: "after" },
  );

  return NextResponse.json({ id, count: result?.count ?? 1 });
}
