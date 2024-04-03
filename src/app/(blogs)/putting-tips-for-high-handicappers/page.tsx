import type { Metadata } from "next";

import BlogWrapper from "~/app/_components/blogStyleComponents/BlogWrapper";
import BulletedList from "~/app/_components/blogStyleComponents/BulletedList";
import Paragraph from "~/app/_components/blogStyleComponents/Paragraph";
import Subheading from "~/app/_components/blogStyleComponents/Subheading";
import TableOfContents from "~/app/_components/blogStyleComponents/TableOfContents";
import Title from "~/app/_components/blogStyleComponents/Title";
import H3Heading from "~/app/_components/blogStyleComponents/H3Heading";

export const metadata: Metadata = {
  title: "Putting Tips for High Handicappers",
  description:
    "Here are some of the best putting tips I have for high handicappers.",
};

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
          <H3Heading heading="Three balls (practice almost everywhere)" />
          <Paragraph paragraph="Get three balls and draw a big vertical line on it. Every time you hit a put, you should use this line to point to the exact point you want to hit. " />
          <Paragraph paragraph="Start from 3ft from the hole and make all three. When you make all three move back 1ft. Then repeat. If you miss one of them move forward 1ft and if you make all three move back. " />
          <Paragraph paragraph="What you’re trying to do is find feel and a little bit of green reading. After a few times of practicing this drill, you’ll be able to make 3 balls at distances you won’t believe. " />
          <Paragraph paragraph="The repetitive nature of this drill is what will improve your stroke and make it very consistent. You’ll also be able to confidently line up and make these puts. It will help you solidify your setup too. " />
          <H3Heading heading="More advanced version" />
          <Paragraph paragraph="Start from 3ft and the same rules apply, however you’re not trying to just make these balls. This time you only want the ball to go in on one side of the cup. It during this drill I will aim for a blade of grass on one side of the hole and try to make the ball stop on that particular blade. " />
          <Paragraph paragraph="If you don’t have a green to practice on or the weather is bad, you can do this at home and aim for the corners of furniture or anything that is really small. Remember, try and make the ball, just tap the spot barely making a sound. " />
          <Paragraph
            paragraph="These next 2 drills need to be done on a practice green with long puts
Randomize putting with one ball
"
          />
          <Paragraph
            paragraph="Long puts only 2ft and in.
Fight against three puts and assume you will miss so that your next put is on the right side of the hole. 
"
          />
          <Subheading id={subs[2]?.sub} subheading={subs[2]?.sub} />

          <Subheading id={subs[3]?.sub} subheading={subs[3]?.sub} />
        </div>
      </div>
    </BlogWrapper>
  );
}
