import { BsTwitterX } from "react-icons/bs";
import { LuTwitter } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { SiLinkedin } from "react-icons/si";

const Contact = () => {
  return (
    <div className="bg-[#1b263b] grid place-content-center h-96">
      <div className="bg-[#4a4e69] text-[#4cc9f0] font-sans w-[280px] md:w-[600px] xl:w-[760px] grid place-content-center gap-y-2 xl:gap-y-4 h-72 rounded-2xl ">
        <p className="text-xl md:text-2xl xl:text-3xl font-bold text-center">Get in Touch</p>
        <div className=" w-[270px] md:w-[450px] xl:w-[580px] m-auto  ">
          <p className="text-center leading-6 text-base md:text-lg xl:leading-8 xl:text-xl ">
            Connect with me on email if my works interests you, also get in
            touch on my socials
            <span className="inline-block mx-2 ">
              <a href="https://linkedin.com/in/your-profile" rel="noopener noreferrer" target="_blank">
                <SiLinkedin />
              </a>
            </span>
            {"or"}
            <span className="inline-block mx-2 ">
              <a href="https://twitter.com/KTumex" target="_blank">
                <BsTwitterX />
              </a>
            </span>
            {"if that suits you more."}
          </p>
        </div>
        <a
          href="mailto:tunmisearowolo094@email.com"
          className="text-lg xl:text-xl flex items-center justify-center gap-2"
        >
          <MdEmail className=" text-lg xl:text-xl" />
          Send Email
        </a>
      </div>
    </div>
  );
};
export default Contact;
