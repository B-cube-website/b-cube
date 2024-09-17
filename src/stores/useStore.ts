import { create } from "zustand";

interface StoreState {
  isMobile: boolean;
  isSidebarOpen: boolean; // 사이드바 열림/닫힘 상태
  checkMobile: () => void;
  toggleSidebar: () => void; // 사이드바 열림/닫힘을 토글하는 함수 aa
}

// Zustand 스토어 생성
const useStore = create<StoreState>((set) => ({
  // 초기 상태
  isMobile: false,
  isSidebarOpen: false,

  // 모바일 여부 확인
  checkMobile: () => {
    const isMobileScreen = window.innerWidth <= 767;
    set({ isMobile: isMobileScreen });
  },

  // 사이드바 열림/닫힘을 토글하는 함수
  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
}));

export default useStore;
