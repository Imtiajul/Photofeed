import { NextResponse } from "next/server";
import { getPhotoById } from "@/lib/image-data";

export const GET = async (request, {params: {id}}) => {
   // console.log(id);
   const data = await getPhotoById(id);

   return NextResponse.json(data);
}