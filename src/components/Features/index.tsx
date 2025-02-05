import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-12 dark:bg-gray-dark">
        <div className="container">
          <SectionTitle
            title="We are your Best Service solution"
            paragraph=""
            center
          />

          <div className="w-full grid grid-cols-1 justify-center text-center gap-x-5 lg:gap-y-16 gap-y-24 md:grid-cols-2 lg:grid-cols-3 mb-5">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>

          <div className="img-content-hero">
            <div className="content-frame-img-1">
                <div className="hexagon-image bg-primary bg-opacity-50">
                  <img className="img-service-cs-1" src="/images/icon-service/mobile.png" alt=""></img>
                </div>
            </div>
          </div>

          <div className="img-content-hero">
            <div className="content-frame-img-2">
                <div className="hexagon-image bg-primary bg-opacity-50">
                  <img className="img-service-cs-1" src="/images/icon-service/web.png" alt=""></img>
                </div>
            </div>
          </div>

          <div className="img-content-hero">
            <div className="content-frame-img-3">
                <div className="hexagon-image bg-primary bg-opacity-50">
                  <img className="img-service-cs-1" src="/images/icon-service/design.png" alt=""></img>
                </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Features;
