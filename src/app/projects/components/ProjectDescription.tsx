import ProjectSectionHeader from "@/components/projectSectionHeader";
import React from "react";

interface ProjectDescriptionProps {
  title: string;
  children: React.ReactNode;
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({
  title,
  children,
}) => {
  return (
    <section className="flex flex-col w-full gap-8 sm:gap-16 relative px-4 sm:px-8 lg:px-32">
      <ProjectSectionHeader title={title} />
      <div className="text-base sm:text-xl text-left text-[#f6f6f7]">
        {children}
      </div>
    </section>
  );
};

export default ProjectDescription;
