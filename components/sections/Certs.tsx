'use client'

import Image from "next/image";
import Container from "../Container";
import { motion } from "motion/react";
import RevealText from "../RevealText";

const images = [
  { src: "/cert1.jpg", alt: "react certificate" },
  { src: "/cert2.jpg", alt: "react certificate" },
  { src: "/cert3.jpg", alt: "react certificate" },
  { src: "/cert4.jpg", alt: "react certificate" },
  { src: "/cert5.jpg", alt: "react certificate" },
];

const Certs = () => {
  return (
    <div className="bg-[#4a4e69] pb-12 lg:pb-16 font-sans">
      <Container>
        <div className="flex items-center gap-5 pb-8">
          <div className="bg-white h-px flex-1 "></div>
          <motion.p
            initial={{ translateX: 50, opacity: 0, filter: "blur(5px)" }}
            whileInView={{ translateX: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="text-white text-xl xl:text-4xl text-end "
          >
            Certifications
          </motion.p>
        </div>
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 place-content-center place-items-center gap-8">
          {images.map((img, i) => (
            <RevealText key={i}>
              <Image
                src={img.src}
                width={200}
                height={100}
                alt={img.alt}
                priority
                className="rounded-xl w-full sm:w-72 "
              />
            </RevealText>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Certs
