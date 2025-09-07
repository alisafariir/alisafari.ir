import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 mt-10">
      <div className="col-span-8 md:pe-16 order-last md:order-first mt-8 md:mt-0">
        <h1 className="text-6xl font-black text-center md:text-start mb-12">
          ALI SAFARI
        </h1>
        <span className="text-2xl  pb-2">
          Front-End &#123;Developer&#125; & Designer
        </span>
        <p className="text-justify mt-3 ">
          For over 15 years, I&apos;ve been passionate about both designing and
          building websites. I love working where looks meet logic – creating
          interfaces that don&apos;t just function well, but also feel right to
          use. I was also one of the co-founders at{" "}
          <a
            className="border-b border-primary"
            href="https://ui.acorex.io/"
            target="_blank"
          >
            ACoreX
          </a>
          , where I got to turn ideas into a real product people use. My goal is
          always to make things that are clear, intuitive, and genuinely helpful
          – without overcomplicating it. Good front-end, to me, is when the user
          doesn&apos;t even notice it&apos;s there; they just achieve what they
          came to do.
        </p>
      </div>
      <div className="col-span-4 flex items-end order-first md:order-last ">
        <Image
          src="https://gravatar.com/avatar/555280ee36f23bedcfcfec6e068d1a85d7e1fd14676ca07e05958fc762199def?size=180"
          className="rounded-full mx-auto "
          alt="Next.js logo"
          width={180}
          height={180}
          priority
        />
      </div>
    </div>
  );
}
