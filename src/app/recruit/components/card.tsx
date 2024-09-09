interface CardProps {
  title: string;
  content: string;
}

export default function Card({ title, content }: CardProps) {
  return (
    <div
      className="flex flex-col justify-start items-start w-full md:w-1/3 gap-6 p-9 rounded-[20px] bg-[#f6f6f7]/[0.04] border border-[#f6f6f7]/[0.1] max-w-[100%] md:max-w-[400px] h-[200px]"
      style={{
        border: "1px solid #518CFF",
        padding: "20px",
      }}
    >
      <p className="text-[22px] font-bold text-left text-[#f6f6f7]">{title}</p>
      <p className="text-lg font-medium text-left text-[#ddddde] leading-[30px]">
        {content}
      </p>
    </div>
  );
}
