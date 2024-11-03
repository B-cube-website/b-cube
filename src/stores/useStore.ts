import { create } from "zustand";

interface StoreState {
  isMobile: boolean;
  isSidebarOpen: boolean;
  selectedActivity: string;
  setMobileState: (isMobile: boolean) => void;
  checkMobile: () => void;
  toggleSidebar: () => void;
  setSelectedActivity: (activity: string) => void;
}

const useStore = create<StoreState>((set) => ({
  isMobile: false,
  isSidebarOpen: false,
  selectedActivity: "OBinterview",

  setMobileState: (isMobile: boolean) => set({ isMobile }),

  checkMobile: () => {
    if (typeof window !== "undefined") {
      const isMobileScreen = window.innerWidth <= 767;
      set({ isMobile: isMobileScreen });
    }
  },

  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),

  setSelectedActivity: (activity: string) =>
    set({ selectedActivity: activity }),
}));

export default useStore;
