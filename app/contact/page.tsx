import { title } from "@/components/primitives";
import Contact from "@/components/contact";

export default function ContactPage() {
  return (
    <div>
      <h1 className={title()}>Contact</h1>
      <main className="flex min-h-[75vh] flex-col items-center justify-center">
        <Contact />
      </main>
    </div>
  );
}
