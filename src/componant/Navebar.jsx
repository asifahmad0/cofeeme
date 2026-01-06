import React from "react";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";

const Navebar = ({sidebar, setSidebar}) => {
  return (
    <>
      <nav className="absolute top-0 left-0 pt-10 text-white w-full z-20">
      <div className="container ml-14">
        <motion.div
        initial={{opacity:0, y:-100}} animate={{opacity:1, y:0}} 
        transition={{type:"spring", stiffness:100,damping:10, delay:1.2}}
        className="flex justify-between items-center">
            {/* logo section */}
            <h1 className="text-2xl font-semibold">Ahmad <span className="text-[#f19509]">Coffee</span></h1>
            {/* Nave Manue section */}
            <div onClick={()=> setSidebar(!sidebar)}>
                <GiHamburgerMenu className="text-3xl cursor-pointer" />
            </div>
        </motion.div>
        
    </div>
      </nav>
    </>
  );
};

export default Navebar;
