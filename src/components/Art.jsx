import gsap from "gsap";
import { goodLists, featureLists } from "../../constants";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";

const Art = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const start = isMobile ? "top 30%" : "top top";

    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        start: start,
        end: "bottom center",
        scrub: 1.3,
        pin: true,
      },
    });

    maskTimeline.to(".will-fade", {
      opacity: 0,
      stagger: 0.2,
      ease: "power1.inOut",
    });

    maskTimeline.to(".masked-img", {
      scale: "1.3",
      duration: 1,
      ease: "power1.inOut",
      maskPosition: "center",
      maskSize: "400%",
    });

    maskTimeline.to("#masked-content", {
      opacity: 1,
      ease: "power1.inOut",
      duration: 1,
    });

    maskTimeline.fromTo(
      ".side-drink",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        ease: "power1.inOut",
        duration: 1,
      },
      "<",
    );
  }, []);
  return (
    <div id="art">
      <div className="container mx-auto h-full pt-20">
        <h2 className="will-fade">The ART</h2>

        <div className="content">
          <ul className="space-y-4 will-fade">
            {goodLists.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <img src="/images/check.png" alt="check" />
                <p>{feature}</p>
              </li>
            ))}
          </ul>

          <div className="cocktail-img">
            <img
              src="/images/under-img.jpg"
              alt="cocktail"
              className="abs-center masked-img size-full object-contain"
            />
          </div>

          <ul className="space-y-4 will-fade">
            {featureLists.map((feature, index) => (
              <li key={index} className="flex items-center justify-start gap-2">
                <img src="/images/check.png" alt="check" />
                <p className="md:w-fit w-60">{feature}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="masked-container">
          <img
            src="/images/drink4.png"
            alt="drink4"
            className="side-drink absolute left-0 md:left-20 top-10 md:top-32 w-20 md:w-32 opacity-0 -rotate-12 object-contain"
          />
          <img
            src="/images/cup-2.png"
            alt="cup-2"
            className="side-drink absolute right-0 md:right-20 bottom-5 md:bottom-32 w-20 md:w-32 opacity-0 rotate-12 object-contain"
          />

          <h2 className="will-fade">Sip-Worthy Perfection</h2>
          <div id="masked-content">
            <h3>Made with Craft, Poured with Passion</h3>
            <p>
              This isn’t just a drink. It’s a carefully crafted moment made just
              for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;
