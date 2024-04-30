// components/Marquee.js

import React, { useState } from "react";

const Marquee = () => {
  const [isHovered, setIsHovered] = useState(true); // Set to true to pause animation by default

  const handleMouseEnter = () => {
    setIsHovered(false); // Start playing animation on hover
  };

  const handleMouseLeave = () => {
    setIsHovered(true); // Pause animation when hover is removed
  };

  return (
    <>
      <style jsx>{`
        .marquee {
          width: full%;
          overflow: hidden;
          white-space: nowrap;
        }

        .marquee span {
          display: inline-block;
          animation: ${isHovered ? "none" : "marquee 30s linear infinite"};
        }

        @keyframes marquee {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(-100%, 0);
          }
        }
      `}</style>
      <div
        className="marquee"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span>
          This is a simple marquee example. It will scroll horizontally. This is
          a simple marquee example. It will scroll horizontally. This is a
          simple marquee example. It will scroll horizontally.
        </span>
      </div>
    </>
  );
};

export default Marquee;

// // components/Marquee.js

// import React, { useState } from "react";

// const Marquee = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   return (
//     <>
//       <style jsx>{`
//         .marquee {
//           width: full%;
//           overflow: hidden;
//           white-space: nowrap;
//         }

//         .marquee span {
//           display: inline-block;
//           animation: ${isHovered ? "none" : "marquee 30s linear infinite"};
//         }

//         @keyframes marquee {
//           0% {
//             transform: translate(0, 0);
//           }
//           100% {
//             transform: translate(-100%, 0);
//           }
//         }
//       `}</style>
//       <div
//         className="marquee"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         <span>
//           This is a simple marquee example. It will scroll horizontally. This is
//           a simple marquee example. It will scroll horizontally. This is a
//           simple marquee example. It will scroll horizontally.
//         </span>
//       </div>
//     </>
//   );
// };

// export default Marquee;
