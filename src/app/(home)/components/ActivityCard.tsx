// import { useState } from "react";
// import Slider from "react-slick";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


// interface Activity {
//   id: number;
//   title: string;
//   imagePath: string;
//   pdfPath: string;
//   description: string;
// }

// interface CenterModeProps {
//   isLoading: boolean;
//   loadingText?: string;
//   activity: Activity[];
// }

// function CenterMode({
//   isLoading,
//   loadingText = "로딩 중...",
//   activity,
// }: CenterModeProps) {

//   const settings = {
//     className: "center",
//     centerMode: true,
//     infinite: true,
//     centerPadding: "60px",
//     slidesToShow: 3,
//     speed: 500,
//   };

//   if (isLoading) {
//     return <p>{loadingText}</p>; // 로딩 중 표시
//   }

//   if (activity.length === 0) {
//     return <p>활동 데이터가 없습니다.</p>;
//   }
//   console.log(activity);

//   return (
//     <div>
//       <Slider {...settings}>
//         {activity.map((item, index) => (
//           <div
//             key={item.id}
//             className="relative w-[250px] h-[150px] md:w-[335px] md:h-[209px] flex-shrink-0"
//           >
//             <img
//               src={item.imagePath}
//               alt={item.title}
//               className="w-full h-full object-cover rounded-[20px]"
//             />
//             <p className="absolute inset-0 bg-gradient-to-b from-transparent to-[#14439f] flex justify-center items-end pb-8 text-[14px] md:text-[18px] font-semibold text-white text-center rounded-[20px]">
//               {item.description} <br />
//               {item.title}
//             </p>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }

// export default CenterMode;
