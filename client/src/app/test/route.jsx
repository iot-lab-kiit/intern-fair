import { getAllPost } from "@/actions/post";
export async function GET() {
  const PostData = await getAllPost();

  return Response.json(PostData);
}
