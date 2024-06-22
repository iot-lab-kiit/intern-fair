import { getAllPost } from "@/actions/post";
import { getsubSubtopics, getDummySubSubtopics } from "@/actions/topic";
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

// const handleSubmit = async () => {
//   const file = fileInputRef.current.files[0];


//   const formData = new FormData();
//   if (file) {
//     formData.append("file", file);
//   }

//   const postData = {
//     content: data.description,
//     tag: data.tag,
//   };

//   try {
//     const response = await createPost(postData, formData);

//     if (response.success) {
//       // Update the state to include the new post
//       setPostData([response.result, ...postData]);
//       setFilteredPosts([response.result, ...filteredPosts]);
//       setData({ description: "", tag: [] });
//       setIsEditing(false);
//       setError("");
//       toast.success("Post created successfully!");
//     } else {
//       setError("Failed to create post.");
//     }
//   } catch (e) {
//     console.error("Error uploading post:", e);
//     setError("Error uploading post.");
//   }
// };