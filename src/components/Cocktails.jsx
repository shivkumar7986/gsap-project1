import React from "react";
import { cocktailLists, mockTailLists } from "../../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";

const Cocktails = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    gsap.from(".popular h2, .popular li, .loved h2, .loved li", {
      scrollTrigger: {
        trigger: ".list",
        start: "top 60%",
        end: "bottom 50%",
        toggleActions: "play reverse play reverse",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
    });

    const startVal = isMobile ? "top 10%" : "top 30%";
    const endVal = isMobile ? "bottom 90%" : "bottom 80%";

    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: startVal,
        end: endVal,
        scrub: true,
      },
    });

    parallaxTimeline
      .from("#c-left-leaf", {
        x: -100,
        y: 100,
      })
      .from("#c-right-leaf", {
        x: 100,
        y: 100,
      });
  }, []);

  return (
    <section id="cocktails" className="noisy">
      <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id="c-left-leaf" />
      <img
        src="/images/cocktail-right-leaf.png"
        alt="r-leaf"
        id="c-right-leaf"
      />

      <div className="list">
        <div className="popular">
          <h2>Most popular cocktails:</h2>

          <ul>
            {cocktailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="md:me-28">
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="loved">
          <h2>Most loved mocktails:</h2>

          <ul>
            {mockTailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="me-28">
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
