import { NextResponse } from "next/server";
import prisma from "@/utils/prisma";

export async function GET () {
    
    const result = await prisma.categories.findMany({where:{count:{gt:0}}})
    
    return NextResponse.json({categories:result})
}