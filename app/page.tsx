"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Lenis from "lenis";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function Home() {
  useGSAP(() => {
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    const initTextSplit = () => {
      const textElements = document.querySelectorAll(".col-3 h1, .col-3 p");

      textElements.forEach((element) => {
        const split = new SplitText(element, {
          type: "lines",
          linesClass: "line",
        });
        split.lines.forEach(
          (line) => (line.innerHTML = `<span>${line.textContent}</span>`)
        );
      });
    };

    initTextSplit();

    gsap.set(".col-3 .col-content-wrapper .line span", {
      y: "0%",
    });
    gsap.set(".col-3 .col-content-wrapper-2 .line span", {
      y: "-125%",
    });

    let currentPhase = 0;

    ScrollTrigger.create({
      trigger: ".sticky-cols",
      start: "top top",
      end: `+=${window.innerHeight * 5}px`,
      pin: true,
      pinSpacing: true,
      onUpdate: (self) => {
        const progress = self.progress;

        if (progress >= 0.25 && currentPhase === 0) {
          currentPhase = 1;

          gsap.to(".col-1", {
            opacity: 0,
            scale: 0.75,
            duration: 0.75,
          });
          gsap.to(".col-2", {
            x: "0%",
            duration: 0.75,
          });
          gsap.to(".col-3", {
            y: "0%",
            duration: 0.75,
          });

          gsap.to(".col-img-1 img", { scale: 1.25, duration: 0.75 });
          gsap.to(".col-img-2", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 0.75,
          });
          gsap.to(".col-img-2 img", { scale: 1, duration: 0.75 });
        }

        if (progress >= 0.5 && currentPhase === 1) {
          currentPhase = 2;

          gsap.to(".col-2", { opacity: 0, scale: 0.75, duration: 0.75 });
          gsap.to(".col-3", { x: "0%", duration: 0.75 });
          gsap.to(".col-4", { y: "0%", duration: 0.75 });

          gsap.to(".col-3 .col-content-wrapper .line span", {
            y: "-125%",
            duration: 0.75,
          });
          gsap.to(".col-3 .col-content-wrapper-2 .line span", {
            y: "0%",
            duration: 0.75,
            delay: 0.5,
          });
        }

        if (progress < 0.25 && currentPhase >= 1) {
          currentPhase = 0;

          gsap.to(".col-1", { opacity: 1, scale: 1, duration: 0.75 });
          gsap.to(".col-2", { x: "100%", duration: 0.75 });
          gsap.to(".col-3", { y: "100%", duration: 0.75 });

          gsap.to(".col-img-1 img", { scale: 1, duration: 0.75 });
          gsap.to(".col-img-2", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            duration: 0.75,
          });
          gsap.to(".col-img-2 img", { scale: 1.25, duration: 0.75 });
        }

        if (progress < 0.5 && currentPhase === 2) {
          currentPhase = 1;

          gsap.to(".col-2", { opacity: 1, scale: 1, duration: 0.75 });
          gsap.to(".col-3", { x: "100%", duration: 0.75 });
          gsap.to(".col-4", { y: "100%", duration: 0.75 });

          gsap.to(".col-3 .col-content-wrapper .line span", {
            y: "0%",
            duration: 0.75,
            delay: 0.5,
          });
          gsap.to(".col-3 .col-content-wrapper-2 .line span", {
            y: "-125%",
            duration: 0.75,
          });
        }
      },
    });
  }, {});
  return (
    <>
      <section className="intro">
        <h1>
          We create modern website designs that feel effortlessly personal.
        </h1>
      </section>
      <section className="sticky-cols">
        <div className="sticky-cols-wrapper">
          <div className="col col-1">
            <div className="col-content">
              <div className="col-content-wrapper">
                <h1>We design websites where modern meets elevation.</h1>
                <p>
                  Layered textures, rich tones, and thoughtful details come
                  together to create a website that feels elevated.
                </p>
              </div>
            </div>
          </div>
          <div className="col col-2">
            <div className="col-img col-img-1">
              <div className="col-img-wrapper">
                <img src="img-1.jpg" alt="" />
              </div>
            </div>
            <div className="col-img col-img-2">
              <div className="col-img-wrapper">
                <img src="img-2.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="col col-3">
            <div className="col-content-wrapper">
              <h1>Our websites are crafted to feel as calm as they look.</h1>
              <p>
                Each website is designed with intentional balance between warmth
                and modernity, light and shadow, function and beauty.
              </p>
            </div>
            <div className="col-content-wrapper-2">
              <h1>
                Every detail is chosen to bring ease and elegance into your
                website.
              </h1>
              <p>
                From custom animations to illustrations, we shape websites that
                reflect your brand with timeless clarity.
              </p>
            </div>
          </div>
          <div className="col col-4">
            <div className="col-img">
              <div className="col-img-wrapper">
                <img src="img-3.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="outro">
        <h1>Timeless design begins with a conversation.</h1>
      </section>
    </>
  );
}
