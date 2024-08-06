import { resourcesLinks, platformLinks, communityLinks } from "../constants";
import { FaTwitter, FaInstagram, FaLinkedin, FaDiscord } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="border-t border-gray-300 mt-8 py-4">
    <div className="container mx-auto flex flex-col items-center">
      <div className="flex space-x-4 mb-4">
        <a href="https://x.com/hackhound2k24" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter className="text-2xl text-blue-500" />
        </a>
        <a href="https://www.instagram.com/hack.hound/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram className="text-2xl text-pink-500" />
        </a>
        <a href="mailto:inbox.hackhound@gmail.com" aria-label="Email">
          <HiMail className="text-2xl text-gray-500" />
        </a>
        <a href="https://www.linkedin.com/company/hackhound/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin className="text-2xl text-blue-700" />
        </a>
        <a href="https://discord.com/invite/SXRw48RbsR" target="_blank" rel="noopener noreferrer" aria-label="Discord">
          <FaDiscord className="text-2xl text-indigo-500" />
        </a>
      </div>
      <p className="text-gray-600">&copy; {new Date().getFullYear()} HackHound. All rights reserved.</p>
    </div>
  </footer>
  );
};

export default Footer;
