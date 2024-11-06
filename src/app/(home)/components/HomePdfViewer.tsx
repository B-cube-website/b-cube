import React, { useState } from "react";

interface HomePdfViewerProps {
  pdfUrl?: string;
  title?: string;
  onClose: () => void;
}

const HomePdfViewer: React.FC<HomePdfViewerProps> = ({
  pdfUrl,
  title,
  onClose,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 mx-6">
          {/* 배경 레이어 스타일 수정 */}
          <div 
            className="fixed inset-0 bg-black opacity-50" 
            onClick={closeModal}
            style={{ width: "100vw", height: "100vh" }} // 화면 전체를 덮도록 설정
          ></div>

          {/* 모달 내용 */}
          <div className="relative w-full max-w-7xl p-8 bg-white rounded-lg z-10">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">{title}</h3>
              <button onClick={closeModal} className="text-black text-lg font-bold">
                &times;
              </button>
            </div>
            {pdfUrl ? (
              <div className="bg-gray-300">
                <iframe
                  src={`https://docs.google.com/viewer?url=${pdfUrl}&embedded=true`}
                  className="w-full h-[700px]"
                  title="PDF Preview"
                  frameBorder="0"
                ></iframe>
              </div>
            ) : (
              <p>PDF 파일이 없습니다.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePdfViewer;
