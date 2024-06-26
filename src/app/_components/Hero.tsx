import Link from "next/link";

export default function Hero() {
  return (
    <div
      className="hero h-[calc(100vh-64px)] "
      style={{
        backgroundImage: "url(/hero-matthew-mcbrayer.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-25"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Golf Kept Simple</h1>
          <p className="mb-5">
            Welcome to the internet&apos;s best source for improving your game.
            At Golf Mastery, we recognize that golf is difficult and takes time
            and practice to improve. Together, we can disect every facet of your
            game with articles about the basics, drills, strategies, and buying
            guides to the industry&apos;s best equipment.
          </p>
          <Link href="/blogs">
            <button className="btn btn-primary">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
