import { NextResponse } from "next/server";
import { RGUKT_DATA } from "@/data/rguktData";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const query = searchParams.get("q");

  let notices = RGUKT_DATA.notices;

  if (category && category !== "All") {
    notices = notices.filter(
      (n) => n.category.toLowerCase() === category.toLowerCase() || n.tag.toLowerCase().includes(category.toLowerCase())
    );
  }

  if (query) {
    const q = query.toLowerCase();
    notices = notices.filter(
      (n) => n.title.toLowerCase().includes(q) || n.summary.toLowerCase().includes(q)
    );
  }

  return NextResponse.json({
    status: "success",
    total: notices.length,
    data: notices
  });
}
