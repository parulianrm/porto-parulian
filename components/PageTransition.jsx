"use client";

import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation";

const PageTransition = ({children}) => {
const pathname = usePathname();
return (
<AnimatePresence>
    <div key={pathname}>
    {/* <motion.div 
    initial={{ opacity: 1 }}
    animate={{
        opacity: 0,
        transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
    }}
    className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
    /> */}
     <motion.div 
      initial={{ x: -100, opacity: 0 }}
      animate={{
        x: [0, 50, 0],
        opacity: [0, 1, 1],
        transition: { 
          delay: 1, 
          duration: 0.4, 
          ease: "easeInOut",
          times: [0, 0.5, 0.5]
        }
      }}
    />
    {children}
    </div>
  </AnimatePresence>
);
};

export default PageTransition