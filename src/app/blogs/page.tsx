import Card from "../_components/Card";
import BlogWrapper from "../_components/blogStyleComponents/BlogWrapper";

const blogArray = [
  {
    id: 1,
    imgUrl: "/chipping-matt-seymour.jpg",
    imgAlt: "chipping-image",
    title: "first blog",
    newBlog: true,
    description: "This is the description",
    tagArray: [
      { id: 1, name: "wedges" },
      { id: 2, name: "short game" },
    ],
    linkUrl: "/first-blog",
  },
  {
    id: 2,
    imgUrl: "/putting-richard-stott.jpg",
    imgAlt: "putting-image",
    title: "second blog",
    newBlog: false,
    description: "This is the description",
    tagArray: [
      { id: 1, name: "wedges" },
      { id: 2, name: "short game" },
    ],
    linkUrl: "/second-blog",
  },
];

export default function BlogsPage() {
  return (
    <BlogWrapper>
      <h1 className="py-12 text-center text-4xl">Blogs</h1>
      <div className="flex shrink flex-wrap gap-6">
        {blogArray.map((blog) => {
          return (
            <Card
              id={blog.id}
              imgUrl={blog.imgUrl}
              imgAlt={blog.imgAlt}
              title={blog.title}
              newBlog={blog.newBlog}
              description={blog.description}
              tagArray={blog.tagArray}
              linkUrl={blog.linkUrl}
            />
          );
        })}
      </div>
    </BlogWrapper>
  );
}
