import React, { useState } from "react";
import Image from "next/image";

interface PostPreviewBoxWithPdfProps {
  image: string;
  year: string;
  title: string;
  participants: string;
  pdfUrl?: string;
}

const PostPreviewBoxWithPdf: React.FC<PostPreviewBoxWithPdfProps> = ({
  image,
  year,
  title,
  participants,
  pdfUrl,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    if (pdfUrl) {
      setIsOpen(true);
    }
  };

  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <div
        onClick={openModal}
        className="relative flex w-80 sm:w-96 flex-col rounded-xl border text-white shadow-md mx-2 my-2 bg-[#f6f6f7]/[0.04] border-[#518CFF] cursor-pointer"
      >
        <div className="p-4">
          <div className="relative h-48 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
            <Image
              src={image}
              alt={title}
              layout="fill"
              objectFit="cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none"; // 이미지가 로드되지 않으면 숨김
                (
                  e.target as HTMLImageElement
                ).parentElement!.style.backgroundColor = "lightgray"; // 숨기고 배경색 지정
              }}
            />
          </div>
          <p className="mt-4">{year}</p>
          <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased truncate my-1">
            {title}
          </h5>
          {participants ? (
            <p className="my-1 text-gray-400">{participants}</p>
          ) : (
            <p className="my-1 text-gray-400"> </p>
          )}
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex justify-center z-50">
          {/* 배경을 클릭하면 모달 닫힘 */}
          <div className="absolute inset-0 bg-black opacity-20" onClick={closeModal}></div>
          {/* 모달 내용 */}
          <div className="relative w-full max-w-7xl p-8 bg-white rounded-lg my-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-black">{title}</h3>
              <button
                onClick={closeModal}
                className="text-black text-lg font-bold"
              >
                &times;
              </button>
            </div>
            <div className="flex-grow h-[calc(100%-3rem)]">
            {pdfUrl ? (
              <iframe
                src={`/pdf-viewer.html?pdfUrl=${pdfUrl}`}
                className="flex w-full h-full"
                title="PDF Preview"
              ></iframe>
            ) : (
              <p>PDF 파일이 없습니다.</p>
            )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostPreviewBoxWithPdf;
