import { create } from "zustand";

interface StoreState {
  isMobile: boolean;
  isSidebarOpen: boolean; // 사이드바 열림/닫힘 상태
  setMobileState: (isMobile: boolean) => void; // 서버에서 전달받은 모바일 여부 설정 함수
  checkMobile: () => void; // 클라이언트에서 모바일 여부 확인하는 함수
  toggleSidebar: () => void; // 사이드바 열림/닫힘을 토글하는 함수
}

// Zustand 스토어 생성
const useStore = create<StoreState>((set) => ({
  // 초기 상태
  isMobile: false,
  isSidebarOpen: false,

  // 서버에서 전달된 모바일 여부를 상태에 설정하는 함수
  setMobileState: (isMobile: boolean) => set({ isMobile }),

  // 클라이언트에서 모바일 여부 확인하는 함수
  checkMobile: () => {
    if (typeof window !== "undefined") {
      // 클라이언트에서만 실행되도록 확인
      const isMobileScreen = window.innerWidth <= 767;
      set({ isMobile: isMobileScreen });
    }
  },

  // 사이드바 열림/닫힘을 토글하는 함수
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
}));

export default useStore;
