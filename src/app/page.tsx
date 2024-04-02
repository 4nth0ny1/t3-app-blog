import Link from "next/link";
import Hero from "./_components/Hero";
import TextImage from "./_components/blogStyleComponents/TextImage";
import BlogWrapper from "./_components/blogStyleComponents/BlogWrapper";

// import { CreatePost } from "~/app/_components/create-post";
// import { getServerAuthSession } from "~/server/auth";
// import { api } from "~/trpc/server";

export default async function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });
  // const session = await getServerAuthSession();

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <BlogWrapper addPadding="py-36">
        <h2 className="pb-12 text-center text-4xl">
          What can you find on this website?
        </h2>
        <TextImage
          halfParagraphText="How to Guides"
          srcLink="/how-to-savannah-lakes.jpg"
          flexReverse={true}
        />
        <TextImage
          halfParagraphText="Buying Guides"
          srcLink="/how-to-savannah-lakes.jpg"
          flexReverse={false}
        />
      </BlogWrapper>
    </main>
  );
}

// async function CrudShowcase() {
//   const session = await getServerAuthSession();
//   if (!session?.user) return null;

//   const latestPost = await api.post.getLatest();

//   return (
//     <div className="w-full max-w-xs">
//       {latestPost ? (
//         <p className="truncate">Your most recent post: {latestPost.name}</p>
//       ) : (
//         <p>You have no posts yet.</p>
//       )}

//       <CreatePost />
//     </div>
//   );
// }
