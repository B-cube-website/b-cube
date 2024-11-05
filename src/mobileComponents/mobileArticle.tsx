interface MobileArticleProps {
  subject: string;
  title: string;
}

export default function MobileArticle({ subject, title }: MobileArticleProps): JSX.Element {
  return (
    <div className="flex flex-col items-center leading-[20px] mb-8 justify-center text-center">
      <p className="font-semibold text-[14px] bg-gradient-to-r from-[#7380B0] to-[#518CFF] bg-clip-text text-transparent">
        {subject}
      </p>
      <p className="font-bold text-[20px] text-[#F6F6F7] mt-[8px]">
        {title}
      </p>
    </div>
  );
}
