import { prisma } from '../../../../../prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(req: NextRequest) {
  const data = await req.json();
  //console.log("11",data)
  //const params = data.params
  console.log("22",data.params.id)

  const ItemParams = await prisma.cartItemParam.update({
      where: {
        id: data.params.id,
      },
      data: {
        size:data.params.size,
        color:data.params.color,
        count:data.params.count,
      },
  });
    
  return NextResponse.json(ItemParams)
} 
