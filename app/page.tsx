import Image from "next/image";

export default function Home() {
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
              <div className="col-img-wrappe">
                <img src="img-1.jpg" alt="" />
              </div>
            </div>
            <div className="col-img col-img-2">
              <div className="col-img-wrappe">
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
