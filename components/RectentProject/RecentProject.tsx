// "use client";

// import { FaLocationArrow } from "react-icons/fa6";
// import { projects } from "../data";
// import { PinContainer } from "../ui/pin";
// import Image from "next/image";

// const RecentProjects = () => {
//   return (
//     <div className="section pb-6">
//       <p className="section-header">Recent Projects</p>
//       <div className="flex flex-wrap items-center justify-start gap-10">
//         {projects.map((item, index) => (
//           <div
//             className={`lg:min-h-[22rem] h-[16rem] flex items-center justify-center sm:w-96 w-[80vw] ${
//               index < projects.length - 1 ? "mb-10" : ""
//             }`}
//             key={item.id}
//           >
//             <PinContainer title="Projects" href="https://github.com/jannat226">
//               <div className="relative flex items-center justify-center sm:w-80 w-[70vw] overflow-hidden h-[18vh] lg:h-[22vh] mb-2 bg-gray-100 dark:bg-[#13162D] lg:rounded-3xl">
//                 {/* Background Image */}
//                 <Image 
//                   src="/bg.png" 
//                   alt="background" 
//                   fill
//                   className="object-cover"
//                 />
                
//                 {/* Main Project Image */}
//                 <div className="relative w-full h-full p-2 z-10 flex items-center justify-center">
//                   <Image
//                     src={item.img}
//                     alt={item.title}
//                     fill
//                     className="object-contain rounded-lg"
//                     style={{
//                       padding: '8px'
//                     }}
//                   />
//                 </div>
//               </div>

//               <h1 className="section-header mt-2">{item.title}</h1>
//               <p className="main-color" style={{ color: "#BEC1DD", margin: "0.5vh 0" }}>
//                 {item.des}
//               </p>

//               <div className="flex items-center justify-between mt-2 mb-1">
//                 <div className="flex items-center">
//                   {item.iconLists?.map((icon, index) => (
//                     <div
//                       key={index}
//                       className="border border-white/[.2] rounded-full bg-black lg:w-8 lg:h-8 w-6 h-6 flex justify-center items-center"
//                       style={{ transform: `translateX(-${4 * index + 2}px)` }}
//                     >
//                       <div className="relative w-4 h-4 lg:w-5 lg:h-5">
//                         <Image 
//                           src={icon} 
//                           alt="tech icon" 
//                           fill
//                           className="object-contain"
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="flex justify-center items-center">
//                   <a
//                     href={item.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex text-purple"
//                   >
//                     Check Source Code
//                   </a>
//                   <FaLocationArrow className="ms-3" color="#CBACF9" />
//                 </div>
//               </div>
//             </PinContainer>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RecentProjects;