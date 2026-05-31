import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { profileLists } from "../../constants";

const About = () => {
  useGSAP(() => {
    const titleSplit = new SplitText("#about h2", { type: "words" });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
        toggleActions: "play reverse play reverse",
      },
    });

    scrollTimeline.from(titleSplit.words, {
      yPercent: "100",
      opacity: 0,
      duration: 1,
      ease: "expo.out",
      stagger: 0.02,
    });

    scrollTimeline.from(".top-grid div , .bottom-grid div", {
      opacity: 0,
      y: 100,
      ease: "power1.inOut",
      stagger: 0.05,
    });

    // Animate the avatar pill and circles
    scrollTimeline.from(
      ".avatar-container",
      {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.5)",
      },
      "-=0.5",
    );

    scrollTimeline.from(
      ".avatar-circle",
      {
        x: -30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "back.out(2)",
      },
      "-=0.3",
    );
  }, []);

  return (
    <div id="about">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best Cocktails</p>
            <h2>
              Where every detail matters <span className="text-white">-</span>
              from muddle to garnish
            </h2>
          </div>

          <div className="sub-content">
            <p>
              Every cocktail we serve is a reflection of our obsession with
              detail — from the first muddle to the final garnish. That care is
              what turns a simple drink into something truly memorable.
            </p>

            <div className="flex flex-wrap gap-5 items-center mt-5 md:mt-0">
              <div className="flex items-center bg-[#111] rounded-full p-2 w-fit avatar-container">
                {profileLists.slice(0, 3).map((profile, index) => (
                  <img
                    key={index}
                    src={profile.imgPath}
                    alt="customer"
                    className={`avatar-circle w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white object-cover ${
                      index !== 0 ? "-ml-4" : ""
                    }`}
                  />
                ))}
                <div className="avatar-circle w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white bg-[#a0a5ff] text-black flex items-center justify-center -ml-4 font-bold text-sm md:text-base relative z-10">
                  +12k
                </div>
              </div>

              <div className="stats">
                <p className="md:text-3xl text-xl font-bold">
                  <span>4.5</span>/5
                </p>
                <p className="text-sm text-white/70">
                  More than +12000 customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/abt1.png" alt="grid-img-1" />
        </div>

        <div className="md:col-span-6">
          <div className="noisy" />
          <img src="/images/abt2.png" alt="grid-img-2" />
        </div>

        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/abt5.png" alt="grid-img-5" />
        </div>
      </div>

      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div className="noisy" />
          <img src="/images/abt3.png" alt="grid-img-3" />
        </div>

        <div className="md:col-span-4">
          <div className="noisy" />
          <img src="/images/abt4.png" alt="grid-img-4" />
        </div>
      </div>
    </div>
  );
};

export default About;
