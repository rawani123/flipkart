// pages/api/deleteProductById.ts

import { NextResponse } from "next/server";
import { deleteProductById } from "@/utils/dataHandler"; // Adjust the path based on your file structure

export async function DELETE(req) {
  const body = await req.json();
  const { id } = body;
//   console.log(id);

  if (!id) {
    return NextResponse.json(
      { error: "Product ID is required" },
      { status: 400 }
    );
  }

  const wasDeleted = deleteProductById(id);
//   console.log(wasDeleted)

  if (wasDeleted) {
    return NextResponse.json(
      {
        message: `Product with ID ${id} deleted successfully`,
      },
      {
        status: 200,
      }
    );
  } else {
    return NextResponse.json(
      {
        error: `Product with ID ${id} not found`,
      },
      { status: 404 }
    );
  }
}
