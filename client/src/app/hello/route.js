import { result } from "@/actions/article";

export async function GET() {
  return Response.json(result);
}
