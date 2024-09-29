interface ArticleProps {
  subject: string;
  title: string;
}

export default function Article({ subject, title }: ArticleProps): JSX.Element {
  return (
    <div className="flex flex-col items-center leading-[20px] md:leading-[40px] justify-center text-center">
      <p className="font-semibold text-[14px] md:text-[20px] bg-gradient-to-r from-[#7380B0] to-[#518CFF] bg-clip-text text-transparent">
        {subject}
      </p>
      <p className="font-bold text-[20px] md:text-[40px] text-[#F6F6F7] mt-[8px]">
        {title}
      </p>
    </div>
  );
}
