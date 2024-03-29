import Paragraph from "~/app/_components/blogStyleComponents/Paragraph";
import Subheading from "~/app/_components/blogStyleComponents/Subheading";
import Title from "~/app/_components/blogStyleComponents/Title";

export default function FirstBlog() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Title title="By order of the Peaky Blinders" />
      <Paragraph paragraph="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." />
      <Subheading subheading="Why we do it this way?" />
      <Paragraph paragraph="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." />
    </div>
  );
}
