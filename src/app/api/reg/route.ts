import { IContact, IOrderParams, IUser } from '@/store/interfaces';
import { prisma } from '../../../../prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const data = await req.json();
  
  const user:IUser = await prisma.user.create({
    data: {
      email: data.email,
      pass: data.pass,
      company:"",
      inn:0,
      fav:[]
    },
  });
  const contact = await prisma.contact.create({
    data: { 
      userId: user.id,
      name: "",
      phone: "",
      defaultContact: true,
    }
  }) 
  const adress = await prisma.adress.create({
    data: {
      userId: user.id,
      adress: "",
      defaultAdress: true,
    }
  })
  const order:IOrderParams = await prisma.order.create({
    data: {
      userId: user.id,
      status: "inCart",
      contact:contact.id,
      deliveryType:"",
      adress:0,
      transport:"",
    }
  })
 
  //if(user&&contact)
  user.contact = [contact]
  user.adress = [adress]
  order.productParams=[]
  user.orderHistory = [order]
  //console.log("111", user)


  return NextResponse.json(user);
} 