import Image from "next/image";

interface ContactItemProps {
  title: string;
  value: string;
  color1: string;
  color2: string;
  style?: React.CSSProperties;
  svg: any;
}

export default function ContactItem({
  title,
  value,
  color1,
  color2,
  svg,
  style = {},
}: ContactItemProps) {
  return (
    <div
      className="flex flex-col justify-start items-center h-[253px] w-full md:w-60 gap-6 px-20 py-12 rounded-[20px] bg-[#f6f6f7]/[0.04] border border-[#f6f6f7]/[0.1] max-w-[100%] md:max-w-[60px]"
      style={{
        border: "1px solid #518CFF",
        ...style,
      }}
    >
      <div
        className="flex-grow-0 flex-shrink-0 w-[82px] h-[82px] relative"
        style={{
          background: `linear-gradient(135deg, ${color1} 0%, ${color2} 100%)`,
          borderRadius: "50%",
        }}
      >
        <Image src={svg} alt={`${title} logo`} />
      </div>
      <div className="flex flex-col justify-start items-center gap-2">
        <p
          className="text-[16px] font-bold text-center"
          style={{
            background: "linear-gradient(90deg, #7281B3 0%, #518CFF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {title}
        </p>
        <p className="text-[17px] font-semibold text-center text-[#f6f6f7]">
          {value}
        </p>
      </div>
    </div>
  );
}
