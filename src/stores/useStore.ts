import create from "zustand";

interface StoreState {
  isMobile: boolean;
  isSidebarOpen: boolean; // 사이드바 열림/닫힘 상태
  checkMobile: () => void;
  toggleSidebar: () => void; // 사이드바 열림/닫힘을 토글하는 함수
}

// Zustand 스토어 생성
const useStore = create<StoreState>((set) => ({
  isMobile: false, // 초기 모바일 상태는 false
  isSidebarOpen: false, // 초기 사이드바 상태는 닫힘

  checkMobile: () => {
    const isMobileScreen = window.innerWidth <= 767;
    set({ isMobile: isMobileScreen });
  },

  // 사이드바 열림/닫힘을 토글하는 함수
  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
}));

export default useStore;
