import Link from "next/link";

export default function Features(): JSX.Element {
  return (
    <div className="w-full h-full flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <p>
          Ever found yourself lost in a sea of receipts and budget sheets? That&apos;s where my financial
          tracking app comes into play, born out of my own journey to navigate the financial maze.
        </p>
        <p>
          Picture this: late nights, coffee-fueled coding sessions, and a burning desire for
          financial control. It all started as a personal mission during my time at Holberton
          School, where I realized managing money wasn&apos;t just about numbers but a reflection of my
          life choices.
        </p>

        <p>
          This app is more than just pixels on a screen. It&apos;s a piece of my financial story, a tool
          I wished I had during those budgeting battles. Check out my creation, a Portfolio Project
          for Holberton School, and see how it&apos;s more than lines of code—it&apos;s a solution forged from
          real-life financial struggles.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className=" text-primary font-medium">Team member:</h3>
        <ul>
            <li className="flex items-center gap-2">
                <span>Thierry Bakera:</span> <ul className="flex items-center gap-2"><Link key={'linkedin'} href={'https://www.linkedin.com/in/thierrybakera/'}><li className=" underline">Linkedin</li></Link><Link key={'github'} href={'https://github.com/CREDO23'}><li className=" underline">Github</li></Link><Link key={'twitter'} href={'https://twitter.com/ThierryBakera'}><li className=" underline">Twiter</li></Link></ul>
            </li>
        </ul>
      </div>
    </div>
  );
}
