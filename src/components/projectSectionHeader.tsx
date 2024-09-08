interface ProjectSectionHeaderProps {
  title: string;
}

export default function ProjectSectionHeader({ title }: ProjectSectionHeaderProps) {
  return (
    <section className="flex flex-col justify-left items-center w-full gap-2 mt-36">
      <h2
        className="w-full text-5xl font-semibold"
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
