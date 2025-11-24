import { prisma } from '../../../../prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { IcartItem } from '@/store/interfaces';

export async function POST(req: NextRequest) {
  const data = await req.json();

  //console.log("route add-to-cart", data)

  const cartItem:IcartItem = await prisma.cartItem.create({
    data: {
      orderId: data.orderId,
      productId: data.productId
    },
  })
  //console.log("222",res)
  const itemParams = await prisma.cartItemParam.create({
    data:{
      itemId: cartItem.id,
      size:0,
      color:0,
      count:0
    }
  })
  cartItem.params=[itemParams]

  return NextResponse.json(cartItem)

  /*if(data.cart){
    const updateOrder = await prisma.order.update({
      where: {
        id: data.cart.id,
      },
      data: {
        productParams: data.cart.productParams,
      },
    })
  }*/

  //console.log("patch11", req)
  //console.log("data", data)
  //console.log("data в route",data.email)
  /*const res = await prisma.user.findUnique({
    relationLoadStrategy: 'join',
    where: {
      email: data.email,
    },
    include: {
      contact: true,
      adress: true,
      orderHistory: true,
    }
  })*/

  //console.log("route", res)
    
  //return NextResponse.json(res)
} 
 