import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/prisma";

export async function GET (req:Request) {
    const brands = await prisma.brands.findMany()
    
    return NextResponse.json({brands:brands})
}