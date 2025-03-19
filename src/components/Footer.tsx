import { MapPin, Phone, Mail, Facebook, Youtube, Linkedin,} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-purple-500 text-white py-10">
      <div className="container max-w-screen-2xl mx-auto px-4 lg:px-28 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/">Home</a></li>
            <li><a href="/login">Join</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <MapPin size={20} /> Dang, Ghorahi , Nepal
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <Phone size={20} /> +977 1234567890
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <Mail size={20} /> techalliance3@gmail.com
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a href="#" className="text-white"><Facebook size={20} /></a>
            <a href="#" className="text-white"><Youtube size={20} /></a>
            <a href="#" className="text-white"><Linkedin size={20} /></a>
           
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">WhatsApp Community</h2>
          <p className="mb-4">
            Join our WhatsApp community, a hub of support, interaction, and endless opportunities to connect and grow.
          </p>
          <a href="#" className="inline-block bg-white text-purple-500 px-4 py-2 ">
            Join Now
          </a>
        </div>
      </div>

      <div className="mt-8 text-center justify-center border-t border-gray-300 pt-4">
  <p>© Tech Alliance Dang, Nepal, All Rights Reserved.</p>
  <p>
    Created by 
    <Link
      href="https://bishal-kc-ax8q.vercel.app/" 
      className="animate-pulse font-bold pt-4 inline-block"
    >
      Bishal Kc ❤️
    </Link>
  </p>
</div>

    </footer>
  );
};

export default Footer;
