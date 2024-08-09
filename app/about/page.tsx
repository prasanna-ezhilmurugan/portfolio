import { subtitle, title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div>
      <h1 className={title()}>About</h1>
      <h2 className={subtitle({ class: "mt-4" })}>Hi, I'm Prasanna</h2>
      <h2>an Undergrad Student at Vellore Institute of Technology, Chennai.</h2>
      <br />
      <h2>
        I build and optimize complex applications with a focus on precision and
        performance. My work involves solving technical challenges.
      </h2>
      <br />
      <h2>
        When I'm not coding, I'm at the gym, playing outdoor games, or enjoying
        music—all of which keep me disciplined, collaborative, and creative.
      </h2>
    </div>
  );
}
