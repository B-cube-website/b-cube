interface ProjectSectionHeaderProps {
  title: string;
}

export default function ProjectSectionHeader({
  title,
}: ProjectSectionHeaderProps) {
  return (
    <section className="flex flex-col justify-left items-center w-full gap-2">
      <div className="flex w-full">
        <h2 className="text-[20px] sm:text-5xl font-semibold bg-gradient-to-r from-[#7380B0] to-[#518CFF] bg-clip-text text-transparent">
          {title}
        </h2>
      </div>
    </section>
  );
}
