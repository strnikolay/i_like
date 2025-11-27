import { prisma } from '../../../../prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { IcartItem } from '@/store/interfaces';

export async function POST(req: NextRequest) {
  const data = await req.json();

  //console.log("route add-to-cart", data)

  const cartItem = await prisma.cartItem.create({
    data: {
      orderId: data.orderId,
      productId: data.productId
    },
  })
  //console.log("222",res)
  const itemParams = await prisma.cartItemParam.create({
    data:{
      itemId: cartItem.id,
      size:-1,
      color:-1,
      count:0
    }
  })
  const returnedCart:IcartItem = {
    id:cartItem.id,
    orderId:cartItem.orderId,
    productId:cartItem.productId,
    itemParams:[itemParams]
  }

  return NextResponse.json(returnedCart)
} 
 