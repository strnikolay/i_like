import { prisma } from '../../../../prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

/*export async function GET(email:string) {
  // SELECT * FROM users WHERE email = 'emasd'
  const users = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  

  return NextResponse.json(users);
}*/

export async function POST(req: NextRequest) {
  const data = await req.json();
  //console.log("login route",data.email)
  const res = await prisma.user.findUnique({
    relationLoadStrategy: 'join',
    where: {
      email: data.email,
    },
    include: {
      contact: true,
      adress: true,
      orderHistory: true,
    }

  })
    
  return NextResponse.json(res)
} 
