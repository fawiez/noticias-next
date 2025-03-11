import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }) {
    const searchParams = req.nextUrl.searchParams
    const title = searchParams.get('title')
    console.log(title)
    const res = await fetch("https://api.vercel.app/blog");
    const data = await res.json()
    return NextResponse.json(data)
}