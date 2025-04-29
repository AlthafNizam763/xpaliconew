import { FaTwitter, FaWhatsapp, FaMailchimp, FaLinkedin, FaPinterestP } from "react-icons/fa";

const socialLinks = [
  { href: "https://wa.me/9633146330", icon: <FaWhatsapp /> }, 
  { href: "https://x.com/Alth_fx?t=Q-xW8GBOz9H4LJ8-iP_Vaw&s=0", icon: <FaTwitter /> }, 
  { href: "mailto:althafnizam763@gmail.com", icon: <FaMailchimp /> },
  { href: "https://pin.it/2x8eSIEnR", icon: <FaPinterestP /> }, 
  { href: "https://www.linkedin.com/in/althaf-nizam-b27489260", icon: <FaLinkedin /> }, 
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
        <p>&copy; {new Date().getFullYear()} Xpalico. All rights reserved.</p>
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
           
        </a>
      </div>
    </footer>
  );
};

export default Footer;
