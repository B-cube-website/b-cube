import React from "react";
// import { Link } from "react-router-dom";
import RoundedRectangleButton from "@/components/button/RoundedRectangleButton";
import RoundedRectangleButtonProps from "@/type/RoundedRectangleButtonProps";

const ContentsNavigation = ({
  contents = [],
}: {
  contents?: RoundedRectangleButtonProps[];
}) => {
  return (
    <nav className="flex justify-between items-center p-4 bg-blue-500 text-white">
      <div className="text-2xl font-semibold">B-CUBE</div>
      <ul className="flex space-x-4">
        {contents.map((content, index) => (
          <RoundedRectangleButton
            key={index}
            id={content.id}
            title={content.title}
            link={content.link}
          />
        ))}
      </ul>
    </nav>
  );
};

export default ContentsNavigation;
