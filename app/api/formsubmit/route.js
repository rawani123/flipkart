import { addCustomer } from '@/utils/productHandler';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req ) {
  const body = await req.json();
  const customer = body; // Assuming body is the product object

  if (!customer) {
    return NextResponse.json({ error: 'Customer data is required' }, { status: 400 });
  }

  const added = addCustomer(customer);
  console.log(added)

  if (added) {
    return NextResponse.json({ message: 'Form submitted successfully' }, { status: 201 });
  }

}