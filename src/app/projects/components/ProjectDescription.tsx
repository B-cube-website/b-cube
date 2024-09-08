import ProjectSectionHeader from "@/components/projectSectionHeader";
import React from "react";

interface ProjectDescriptionProps {
  title: string;
  desc: string;
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({
  title,
  desc,
}) => {
  return (
    <section className="flex flex-col w-full gap-16 relative pb-[120px]">
      <ProjectSectionHeader title={title} />
      <p className="text-xl text-left text-[#f6f6f7]">{desc}</p>
    </section>
  );
};

export default ProjectDescription;
