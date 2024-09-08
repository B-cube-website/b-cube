interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <section className="flex flex-col justify-center items-center w-full gap-2">
      <p
        className="w-full text-xl font-semibold text-center"
        style={{
          background: "linear-gradient(90deg, #7281B3 0%, #518CFF 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {title}
      </p>
      <p className="w-full text-[40px] font-bold text-center text-[#f6f6f7]">
        {subtitle}
      </p>
    </section>
  );
}
