import { IContact, IOrderParams, IUser } from '@/store/interfaces';
import { prisma } from '../../../../prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const data = await req.json();
  
  const user = await prisma.user.create({
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
  const order = await prisma.order.create({
    data: {
      userId: user.id,
      status: "inCart",
      contact:contact.id,
      deliveryType:"",
      adress:0,
      transport:"",
    }
  })
  //order.productParams=[]
  //if(user&&contact)
  const returnedUser = {
    id:user.id,
    email:user.email,
    pass:user.pass,
    company:user.company,
    inn:user.inn,
    fav:user.fav,
    contact:[contact],
    adress:[adress],
    orderHistory:[order],
    cart:order
  } 



  return NextResponse.json(returnedUser);
} 