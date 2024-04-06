import BlogWrapper from "./_components/blogStyleComponents/BlogWrapper";
import LinkButton from "./_components/blogStyleComponents/LinkButton";

export default function NotFound() {
  return (
    <BlogWrapper>
      <div className="flex h-[calc(100vh-64px)] flex-col items-center justify-center ">
        <h1 className="py-8 text-3xl font-bold">This page was not found!</h1>
        <LinkButton
          linkUrl="/blogs"
          buttonText="Back to Blogs"
          buttonStyles="bg-green-500 text-white hover:bg-green-800"
        />
      </div>
    </BlogWrapper>
  );
}
