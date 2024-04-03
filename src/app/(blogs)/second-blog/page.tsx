"use client";

import BlogWrapper from "~/app/_components/blogStyleComponents/BlogWrapper";
import LinkButton from "~/app/_components/blogStyleComponents/LinkButton";
import Paragraph from "~/app/_components/blogStyleComponents/Paragraph";
import Subheading from "~/app/_components/blogStyleComponents/Subheading";
import TableOfContents from "~/app/_components/blogStyleComponents/TableOfContents";
import TextImage from "~/app/_components/blogStyleComponents/TextImage";
import Title from "~/app/_components/blogStyleComponents/Title";

const subs = [
  { id: 1, sub: "Titleist Scotty Cameron Mallet" },
  { id: 2, sub: "Ping G20" },
];

export default function SecondBlog() {
  return (
    <BlogWrapper>
      <Title title="Best Putters for High Handicappers in 2024" blog={true} />
      <hr></hr>
      <div className="flex flex-col py-8 lg:flex-row">
        <div className="flex w-full flex-col items-center justify-center py-2 lg:w-1/5 lg:items-start lg:justify-start">
          <h2 className="pb-2 text-xl">Table of Contents</h2>
          <TableOfContents subs={subs} />
        </div>
        <div className="flex min-h-screen w-full flex-col items-center px-4 lg:w-4/5 lg:items-start lg:px-0 lg:pl-12">
          {/* ITEM ONE */}
          <Subheading
            id={subs[0]?.sub}
            subheading={subs[0]?.sub}
            numberOfItem={1}
            linkTrue={true}
            linkUrl="/first-blog"
          />
          <TextImage
            halfParagraphText="Bullets"
            srcLink="/putting-richard-stott.jpg"
            altTag="putting-richard-stott.jpg"
          />
          <Paragraph paragraph="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." />
          <Paragraph paragraph="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." />
          <LinkButton
            linkUrl="/first-blog"
            buttonText="Link to AFFILIATE LINK"
            buttonStyles="bg-orange-600 hover:bg-orange-400"
          />

          {/* ITEM TWO */}
          <Subheading
            id={subs[1]?.sub}
            subheading={subs[1]?.sub}
            numberOfItem={2}
            linkTrue={true}
            linkUrl="/first-blog"
          />
          <TextImage
            halfParagraphText="Bullets"
            srcLink="/putting-richard-stott.jpg"
            altTag="putting-richard-stott.jpg"
          />
          <Paragraph paragraph="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." />
          <LinkButton
            linkUrl="/first-blog"
            buttonText="Link to AFFILIATE LINK"
            buttonStyles="bg-orange-600 hover:bg-orange-400"
          />
        </div>
      </div>
    </BlogWrapper>
  );
}
