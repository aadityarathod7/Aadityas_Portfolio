import {CONTACT } from "../constants";
import { motion} from "framer-motion";

const Contect = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h2 
          whileInView={{opacity: 1, y: 0}}
          initial={{opacity: 0, y: -100}}
          transition={{duration: 0.5}}
        className="my-10 text-center text-4xl font-bold"> Get in Touch</motion.h2>
        <div className="text-center tracking-tighter">
            <motion.p 
              whileInView={{opacity: 1, x: 0}}
              initial={{opacity: 0, x: -100}}
              transition={{duration: 1}}
            className="my-4 font-playfair">{CONTACT.address}</motion.p>
            <motion.p 
              whileInView={{opacity: 1, x: 0}}
              initial={{opacity: 0, x: 100}}
              transition={{duration: 1}}
            className="my-4 font-mono spacemono">{CONTACT.phoneNo}</motion.p>
            <a href="#" className="border-b font-lato">
                {CONTACT.email}
            </a>
            <div className="h-4"></div> {/* Add some space */}
        </div>
        <p className="text-center text-sm text-neutral-600 font-open">
            &copy; {CONTACT.copyright}
        </p>
    </div>
  );
};

export default Contect;