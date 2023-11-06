import { StateStorage } from 'zustand/middleware'
import { MMKV } from 'react-native-mmkv'

// mmkv라는 로컬 저장소 라이브러리와 zustand의 상태관리의 장점을 합친 저장소 컨트롤러-->

const storage = new MMKV()

const zustandStorage: StateStorage = {
  setItem: (name, value) => {
    return storage.set(name, value)
  },
  getItem: (name) => {
    const value = storage.getString(name)
    return value ?? null
  },
  removeItem: (name) => {
    return storage.delete(name)
  },
}

export default zustandStorage;