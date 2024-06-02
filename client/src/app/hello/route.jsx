import { getsubSubtopics } from "@/actions/topic";
export async function GET() {
  const subTopicData = await getsubSubtopics(
    "5c79df97-8074-42f6-97cf-6113e06934ad"
  );
  return Response.json(subTopicData);
}
