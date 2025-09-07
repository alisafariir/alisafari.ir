import Image from "next/image";

export default function AboutSection() {
  return (
    <>
      <h1 className="text-6xl font-black text-center md:text-start">
        ALI SAFARI
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-12 mt-10">
        <div className="col-span-8 md:pe-16 order-last md:order-first mt-8 md:mt-0">
          <span className="text-2xl  pb-2">
            Front-End &#123;Developer&#125; & Designer
          </span>
          <p className="text-justify mt-3 ">
            With over 15 years in front-end development and design, I possess a
            unique dual-perspective: the eye of a designer and the mind of a
            developer. I specialize in constructing robust, high-performance web
            interfaces that are both beautiful to look at and effortless to use.
            This hands-on expertise was fundamental in my role as a co-founder
            of{" "}
            <a
              className="border-b border-primary"
              href="https://ui.acorex.io/"
              target="_blank"
            >
              ACoreX
            </a>
            , where I helped translate a vision into a tangible and impactful
            product. My core philosophy is that great front-end work is
            invisible—it simply works, feels right, and delivers the user to
            their goal without friction. I thrive on solving complex problems
            with elegant, future-proof solutions.
          </p>
        </div>
        <div className="col-span-4 flex items-center order-first md:order-last ">
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
    </>
  );
}
