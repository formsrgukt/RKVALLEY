import { NextResponse } from "next/server";
import { RGUKT_DATA } from "@/data/rguktData";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status");
  const query = searchParams.get("q");

  let tenders = RGUKT_DATA.tenders;

  if (status && status !== "All") {
    tenders = tenders.filter(
      (t) => t.status.toLowerCase() === status.toLowerCase()
    );
  }

  if (query) {
    const q = query.toLowerCase();
    tenders = tenders.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.refNo.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q)
    );
  }

  return NextResponse.json({
    status: "success",
    total: tenders.length,
    data: tenders
  });
}
