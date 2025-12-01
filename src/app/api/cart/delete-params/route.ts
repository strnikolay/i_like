import { prisma } from '../../../../../prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const data = await req.json();
  //console.log("11",data.paramsId)

  const response = await prisma.cartItemParam.delete({
    where: {
      id: data.paramsId,
    },
  });
    
  return NextResponse.json(response)
} 
