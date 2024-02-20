import { create } from 'zustand';
import createUserSlice from './createUserSlice'

const useStore = create((set, get) => ({
    ...createUserSlice(set, get),
}));

export default useStore;