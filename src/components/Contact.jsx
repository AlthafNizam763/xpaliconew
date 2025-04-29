import { useState } from "react";
import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} alt="" />
  </div>
);

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Close form modal
    setIsOpen(false);

    // Show success popup
    setShowSuccess(true);

    // Auto-close after 2 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 2000);
  };

  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10 relative z-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        {/* Background Image */}
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox src="./img/contact-1.webp" clipClass="contact-clip-path-1" />
          <ImageClipBox src="./img/contact-2.webp" clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60" />
        </div>

        {/* Sword Image */}
        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          {/* <ImageClipBox
            src="./img/swordman-partial.webp"
            clipClass="absolute md:scale-125"
          /> */}
          <ImageClipBox
            src="./img/ Slayer.jpeg"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <AnimatedTitle
            title="let&#39;s <b>c</b>ode the future <br /> of <br /> d<b>e</b>velopment t<b>o</b>gether"
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          <Button
            title="contact"
            containerClass="mt-10 cursor-pointer"
            onClick={openModal}
          />
        </div>
      </div>

      {/* Popup Contact Form */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-md animate-fade-slide-up">
          <div className="bg-white text-black rounded-2xl p-8 w-full max-w-md relative border border-gray-400 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-xl text-gray-600 hover:text-red-500 hover:scale-110 transition-transform duration-200"
            >
              &times;
            </button>
            <h2 className="text-2xl text-center text-black font-bold mb-4">Contact Us</h2>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input type="text" placeholder="Your Name" className="border border-gray-300 p-2 rounded" required />
              <input type="email" placeholder="Your Email" className="border border-gray-300 p-2 rounded" required />
              <textarea placeholder="Your Message" rows="4" className="border border-gray-300 p-2 rounded" required />
              <button type="submit" className="bg-black text-white py-2 rounded hover:bg-gray-800 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Success Toast Popup */}
      {showSuccess && (
  <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-[9999] w-[90%] max-w-xl rounded-xl shadow-lg border border-gray-200 overflow-hidden">
    <div className="relative">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="./videos/success-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 flex items-center gap-3 px-4 py-3 bg-black/60 text-white backdrop-blur-sm">
        <img src="./img/logo.png" alt="icon" className="w-10 h-10" />
        <p className="text-sm font-medium">
          Form submitted successfully! We&#39;ll get back to you soon.
        </p>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default Contact;
