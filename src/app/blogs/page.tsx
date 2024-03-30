import Card from "../_components/Card";
import BlogWrapper from "../_components/blogStyleComponents/BlogWrapper";

export default function BlogsPage() {
  return (
    <BlogWrapper>
      <h1 className="py-12 text-center text-4xl">Blogs</h1>
      <div className="flex shrink flex-wrap gap-6">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </BlogWrapper>
  );
}
