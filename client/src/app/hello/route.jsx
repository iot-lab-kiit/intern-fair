import { getAllPost } from "@/actions/post";
import { getsubSubtopics, getDummySubSubtopics } from "@/actions/topic";
import { resetPasswordRequest } from "@/actions/user";
// export async function GET() {
//   const subTopicData = await getDummySubSubtopics(
//     "5c79df97-8074-42f6-97cf-6113e06934ad"
//   );
//   return Response.json(subTopicData);
// }

export async function GET() {
  const AllPost= await getAllPost(
  
  );
  return Response.json(AllPost);
}

// export async function GET(){
//   const resetPassword=await resetPasswordRequest(email);
//   return Response.json(resetPassword);
// }

