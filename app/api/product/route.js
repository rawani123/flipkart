import { addOrUpdateProduct } from '@/utils/dataHandler';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const body = await req.json();
  const product = body; // Assuming body is the product object

  if (!product || !product.id) {
    return NextResponse.json({ error: 'Product data is required and must include an id' }, { status: 400 });
  }

  const added = addOrUpdateProduct(product);

  if (added) {
    return NextResponse.json({ message: 'Product added successfully' }, { status: 201 });
  } else {
    return NextResponse.json({ message: 'Product count incremented successfully' }, { status: 200 });
  }
}
