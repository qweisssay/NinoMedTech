import { NextResponse } from "next/server";
import prisma from "@/utils/prisma";
import { NextApiRequest } from "next";

import { coonfigurateQuery } from "@/app/helpers/configurateQuery";
export async function GET (req:Request) {
    const { searchParams } = new URL(req.url!)
    const page = searchParams.get('skip') ? Number(searchParams.get('skip')) : 0
    const size = searchParams.get('size') ? Number(searchParams.get('size')) : 12
    const search = searchParams.get('search')
    const category = searchParams.get('category')
    const brand = searchParams.get('brand')
    const orderBy = searchParams.get('orderBy')
    
    const config = coonfigurateQuery({brand:brand,category:Number(category),size:size,skip:page * size,search:search,orderedBy:orderBy}) 
    
    const products = await prisma.products.findMany({...config,select:{id:true,name:true,price:true,image:true,description:true}})
        
    return NextResponse.json({products:products})
    
    
    
    
}