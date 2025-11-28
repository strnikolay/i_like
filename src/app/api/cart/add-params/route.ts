import { prisma } from '../../../../../prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const data = await req.json();
  //console.log("11",data.itemId)
  const params = data.params
  console.log("22",params)

  const ItemParams = await prisma.cartItemParam.create({
      data: {
        itemId:params.itemId,
        size:params.size,
        color:params.color,
        count:params.count,
      },
  });
    
  return NextResponse.json(ItemParams)
} 
