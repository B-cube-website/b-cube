interface ProjectSectionHeaderProps {
  title: string;
}

export default function ProjectSectionHeader({ title }: ProjectSectionHeaderProps) {
  return (
    <section className="flex flex-col justify-left items-center w-full gap-2 mt-12 sm:mt-36">
      <h2
        className="w-full text-3xl sm:text-5xl font-semibold text-left"
        style={{
          background: "linear-gradient(90deg, #7281B3 0%, #518CFF 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {title}
      </h2>
    </section>
  );
}
