import { prisma } from '../../../../prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

export async function PATCH(req: NextRequest) {
  const data = await req.json();

  console.log("route user patch data", data)

  /*if(data.cart){
    const updateOrder = await prisma.order.update({
      where: {
        id: data.cart.id,
      },
      data: {
        productParams: data.cart.productParams,
      },
    })
  }

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
 