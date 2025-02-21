"use client";

import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.08, // Adjust for more smoothness
      });

      return () => {
        scroll.destroy(); // Cleanup on unmount
      };
    }
  }, []);

  return <div ref={scrollRef} data-scroll-container>{children}</div>;
};

export default SmoothScroll;



// "use client";

// import { useEffect, useRef } from "react";
// import dynamic from "next/dynamic";

// // Dynamically import LocomotiveScroll only on the client
// const LocomotiveScroll = dynamic(() => import("locomotive-scroll"), { ssr: false });

// import "locomotive-scroll/dist/locomotive-scroll.css";

// const SmoothScroll = ({ children }) => {
//   const scrollRef = useRef(null);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       import("locomotive-scroll").then((module) => {
//         const LocomotiveScroll = module.default;
//         new LocomotiveScroll({
//           el: scrollRef.current,
//           smooth: true,
//         });
//       });
//     }
//   }, []);

//   return <div ref={scrollRef}>{children}</div>;
// };

// export default SmoothScroll;
