import { create } from 'zustand'

interface StoreState {
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
}


const useMainStore = create<StoreState>((set) => ({
  sidebarOpen: false,
  setSidebarOpen: (value: boolean) => set({ sidebarOpen: value }),
}));

export default useMainStore;