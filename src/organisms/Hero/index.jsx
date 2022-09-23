import React from "react";
import Description from "../../molecules/DescriptionCard";
import { HeroWrapper } from "./heroStyles";
import Illustration from "../../atoms/vectors/Illustration.png";
import AlternativeButton from "../../atoms/Button/AlternativeButton";
import { useEffect } from "react";
import { gsap } from "gsap";
import { useRef } from "react";

const Hero = () => {
  const imgRef = useRef();
  const el = useRef();

  useEffect(() => {
    gsap.fromTo(imgRef.current, { x: 300 }, { x: 0 });
    gsap.fromTo(".description", { y: 200 }, { y: 0 });
  });

  return (
    <HeroWrapper>
      <div className="description">
        <Description
          Title={<h1>Secured Wallet Services for your Transactions</h1>}
          description={
            "Connect to our blockchain wallet service and seamlessly carry out transactions. Securely initiate crypto transactions, and store them with one simple integration"
          }
          cta={{ text: "Get Started" }}
          secondaryCta={"Watch a demo"}
          width="31rem"
          heroSection
        />
        <div className="alt-cont">
          <AlternativeButton />
        </div>
      </div>
      <div className="img-cont" ref={imgRef}>
        <img src={Illustration} alt="hero-img" />
      </div>
    </HeroWrapper>
  );
};

export default Hero;
