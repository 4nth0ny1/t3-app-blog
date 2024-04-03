"use client";

import BlogWrapper from "~/app/_components/blogStyleComponents/BlogWrapper";
import BulletedList from "~/app/_components/blogStyleComponents/BulletedList";
import Paragraph from "~/app/_components/blogStyleComponents/Paragraph";
import Subheading from "~/app/_components/blogStyleComponents/Subheading";
import TableOfContents from "~/app/_components/blogStyleComponents/TableOfContents";
import Title from "~/app/_components/blogStyleComponents/Title";
import H3Heading from "~/app/_components/blogStyleComponents/h3Heading";

const subs = [
  { id: 1, sub: "Part 1 - Fundamentals " },
  { id: 2, sub: "Part 2 - Drills " },
  { id: 3, sub: "Part 3 - Reading Greens " },
  { id: 4, sub: "Part 4 - Summary" },
];

const bulletArray = [
  {
    id: 1,
    name: "The routine before you address the ball, should be the same every time.",
  },
  { id: 2, name: "Eyes over the ball [or as close as you can] but never past" },
  {
    id: 3,
    name: "Balance is more important that you think.",
  },
  { id: 4, name: "Follow thru must be greater than the back swing" },
  {
    id: 5,
    name: "A smooth stroke is what you’re going for Straight back and straight forward.",
  },
  { id: 6, name: "Eyes over the ball [or as close as you can] but never past" },
  {
    id: 7,
    name: "Ball position How to achieve this.",
  },
  {
    id: 8,
    name: "Use a mirror when you practice.",
  },
];

export default function PuttingTipsForHighHandicappers() {
  return (
    <BlogWrapper>
      <Title title="Putting Tips for High Handicappers" blog={true} />
      <hr></hr>
      <div className="flex flex-col py-8 lg:flex-row">
        <div className="flex w-full flex-col items-center justify-center py-2 lg:w-1/5 lg:items-start lg:justify-start">
          <h2 className="pb-2 text-xl">Table of Contents</h2>
          <TableOfContents subs={subs} />
        </div>
        <div className="flex min-h-screen w-full flex-col items-center px-4 lg:w-4/5 lg:items-start lg:px-0">
          <Paragraph paragraph="Being able to improve at putting is a matter of fundamentals, practice drills, and experience. Many of the tips in this article can be done from anywhere, but some of them are needed. The key is to practice all of these things continuously over time, but I guarantee if you learn the fundamentals and do the drills, you will get better by at least 5 strokes. I know this, because these are the same that I have used to go from a struggling 20 handicapper to a handicap of 4." />
          <Subheading id={subs[0]?.sub} subheading={subs[0]?.sub} />
          <BulletedList bullets={bulletArray} />
          <H3Heading heading="Always aim for the exact position. Aim small miss small." />
          <Paragraph paragraph="Many teachers will tell you that you should try to get your put to have the speed that can go 12-18 inches past the hole. I disagree with this especially during practice. What helped me tremendously, was trying to be as specific as possible. With  putting, “aim small, miss small” is the mantra I recite when I decide how to putt. " />
          <Subheading id={subs[1]?.sub} subheading={subs[1]?.sub} />
          <Paragraph paragraph="If you really want to get good at golf, practicing needs to be just as fun or more fun than playing itself. The drills below are meant to be done the way they are. These drills helped me quite a bit. Focus on results, if you feel that you’re lacking in an area then practice that area more. If you’re conscious enough of something that you’re not doing well, then you’re halfway there. All you have to do is execute and get results. " />
          <Subheading id={subs[2]?.sub} subheading={subs[2]?.sub} />
          <Subheading id={subs[3]?.sub} subheading={subs[3]?.sub} />
        </div>
      </div>
    </BlogWrapper>
  );
}
