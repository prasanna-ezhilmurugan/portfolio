import { Link } from "@nextui-org/link";
// import { Snippet } from "@nextui-org/snippet";
// import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block text-center justify-center">
        <h1 className={title()}>Hi,I&apos;m&nbsp;</h1>
        <br />
        <br />
        <h1 className={title({ color: "violet" })}>Prasanna&nbsp;</h1>
        <br />
        <br />
        <h1 className={title()}>software developer</h1>
        <br />
        <h2 className={subtitle({ class: "mt-4" })}>
          Passionate About Coding And Innovative Solutions
        </h2>
      </div>
      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={"Prasanna-Ezhilmurugan-Resume.pdf"}
        >
          Resume
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>
    </section>
  );
}
