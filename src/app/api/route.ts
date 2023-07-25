import { services } from "@/data";
import { NextResponse } from "next/server";


export async function GET() {
    const data = await services

    return NextResponse.json({ data })
}