
import type { Playlist, Song } from '@lib/data';
import { create } from 'zustand';

export type PlayerStore = {
  isPlaying: boolean,
  isMuted: boolean,
  isShuffled: boolean,
  isRepeated: boolean,
  currentMusic: Music,
  volume: number,
  setIsPlaying: (isPlaying: boolean) => void,
  setIsMuted: (isMuted: boolean) => void,
  setIsShuffled: (isShuffled: boolean) => void,
  setIsRepeated: (isRepeated: boolean) => void,
  setCurrentMusic: (currentMusic: Music) => void,
  setVolume: (volume: number) => void,
}

type Music = {
  playlist?: Playlist,
  song?: Song,
  songs: Song[],
};

export const usePlayerStore = create<PlayerStore>((set) => ({
  isPlaying: false,
  isMuted: false,
  isShuffled: false,
  isRepeated: false,
  currentMusic: {
    playlist: undefined,
    song: undefined,
    songs: [] as Song[],
  },
  volume: 1,
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setIsMuted: (isMuted) => set({ isMuted }),
  setIsShuffled: (isShuffled) => set({ isShuffled }),
  setIsRepeated: (isRepeated) => set({ isRepeated }),
  setCurrentMusic: (currentMusic) => set({ currentMusic }),
  setVolume: (volume) => set({ volume }),
}));