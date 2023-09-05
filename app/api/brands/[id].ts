
import prisma from '@/utils/prisma';
import { NextApiRequest } from 'next';
import {  NextResponse } from 'next/server'



export async function GET({params}:{params:{id:string}}) {
    
    

    const item = await prisma.brands.findUnique({where:{id:Number(params.id)}})
    
    
    return NextResponse.json({item:item});
  }