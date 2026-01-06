import React from "react";
import BgImage from "../assets/bg-slate.png";
import cofeeMdImage from "../assets/black.png";
import Navebar from "./Navebar";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
  

const Hero = () => {

  const [sidebar, setSidebar] = React.useState(false);
  return (
    <>
      <main style={bgImage}>
        <section className=" min-h-[100dvh] pl-10 w-full">
          <div className="container">
            {/* Navbar Section*/}
            <Navebar sidebar={sidebar} setSidebar={setSidebar} />
            {/* Hero Section*/}
            <div className="grid grid-cols-1 md:grid-cols-2 
            lg:grid-cols-3 place-items-center min-h-[650px]">
              {/* Text content section */}
              <div className="text-orange-100 md:ml-14 mt-[100px]
              md:mt-0 p-4 space-y-28">
                <motion.h1 
                initial={{opacity:0, y:-100}} animate={{opacity:1, y:0}}
                transition={{type:"spring", stiffness:100,damping:10, delay:1}}
                className="text-7xl font-bold leading-tight md:ml-14">
                  Black Thumbler
                </motion.h1>
                <motion.div
                initial={{opacity:0, y:100}} animate={{opacity:1, y:0}}
                transition={{type:"spring", stiffness:100,damping:10, delay:1.2}}
                className="relative">
                  <div className="relative z-10 space-y-4">
                    <h1 className="text-2xl">Black Lifestyle Lovers</h1>
                    <h1 className=" text-sm opacity-55 ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Asperiores est alias facere. Eligendi ad quibusdam aliquid
                      tenetur. Autem quasi beatae quam, quibusdam laborum iure
                      modi cumque unde corrupti vel? Cum?
                    </h1>
                  </div>
                  <div className="absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25"></div>
                </motion.div>
              </div>
              {/* Hero Image section */}
              <div className="relative md:mt-[10dvh]">
                <motion.img 
                initial={{opacity:0, scale:0}} animate={{opacity:1, scale:1}}
                transition={{type:"spring", stiffness:100,damping:10, delay:0.5}}
                src={cofeeMdImage} className="relative z-40 h-[400px] 
                md:h-[650px] img-shadow md:ml-[11dvh]" />
                {/*orange ring circle */}
                <motion.div 
                initial={{opacity:0, y:100}} animate={{opacity:1, y:0}}
                transition={{type:"spring", stiffness:100,damping:10, delay:0.8}}
                className=" h-[180px] w-[180px] absolute top-[20px] md:top-[10dvh] -right-16 border-amber-600
                 border-[20px]  rounded-full z-10">
                </motion.div>
                <div className=" absolute -top-0 left-[450px] z-[1]">
                <motion.h1
                initial={{opacity:0, x:-100}} animate={{opacity:1, x:0}} 
                transition={{type:"spring", stiffness:100,damping:10, delay:1}}
                className="text-[100px] scale-150 font-bold text-[#1a1f25]/40 leading-none">
                  Blvck Tumble</motion.h1>
                </div>
              </div>
              {/* Third div section section */}
              <div className="text-orange-100 mr-14 mt-[100px]
              md:mt-0 p-4 space-y-28 z-10">
                <h1 className="opacity-0 text-7xl font-bold leading-tight ml-14">
                  Black Thumbler
                </h1>
                <motion.div
                initial={{opacity:0, x:100}} animate={{opacity:1, x:0}}
                transition={{type:"spring", stiffness:100,damping:10, delay:1.5}}
                className="relative">
                  <div className="relative z-10 space-y-4">
                    <h1 className=" text-2xl">Black Thumler</h1>
                    <h1 className=" text-sm opacity-55">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Asperiores est alias facere. Eligendi ad quibusdam
                      tenetur. Autem quasi beatae quam, quibusdam
                      
                    </h1>
                  </div>
                  <div className="absolute -top-6 -right-8 w-[250px] h-[190px] bg-[#1a1f25]/50"></div>
                </motion.div>
              </div>
              <div></div>
            </div>
          </div>

          {/* navebar menu */}
          {sidebar && (
            <motion.div
            initial={{ x:100 }}
            animate={{ x: 0 }}
              className="nav absolute top-0 right-0 w-[140px] h-[100dvh] bg-gradient-to-b from-[#f19509]/80 
            to-[#e86f00]/80 backdrop-blur-sm z-10"
            >
              <div className="w-full h-full flex justify-center items-center">
                <div className=" flex flex-col justify-center items-center gap-6 text-white">
                  {/* --Line--- */}
                  <div className="w-[1px] h-[70px] bg-white"></div>
                  {/* social icone */}
                  <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                    <FaFacebook className="text-2xl" />
                  </div>
                  <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                    <FaTwitter />
                  </div>
                  <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                    <FaInstagram />
                  </div>

                  <div className="w-[1px] h-[70px] bg-white"></div>
                </div>
              </div>
            </motion.div>
          )}
        </section>
      </main>
    </>
  );
};

export default Hero;
