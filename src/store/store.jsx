// menuStore.js
import { create } from 'zustand'


const useItemStore = create((set) => ({
  itemVisible: false,
  modalVisible: false,
  toggleItemVisible: () => set((state) => ({ itemVisible: !state.itemVisible })),
  toggleModalVisible: () => set((state) => ({ modalVisible: !state.modalVisible  })),
}))

export default useItemStore