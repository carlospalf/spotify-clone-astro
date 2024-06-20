import type { Playlist, Song } from '@lib/data'
import { Play, Pause } from './Player';
import { usePlayerStore } from '@store/playerStore';

type PlaylistPlaySongButtonProps = {
  song: Song,
  playlist: Playlist,
  className?: string;
};

export const PlaylistPlaySongButton = ({ song, playlist, className }: PlaylistPlaySongButtonProps) => {
  const currentMusic = usePlayerStore(state => state.currentMusic);
  const isPlaying = usePlayerStore(state => state.isPlaying);
  const setIsPlaying = usePlayerStore(state => state.setIsPlaying);
  const setCurrentMusic = usePlayerStore(state => state.setCurrentMusic)

  const isPlayingSong = isPlaying && currentMusic.song?.id === song.id && currentMusic.song.albumId === song.albumId;

  const handleClick = () => {
    if (isPlayingSong) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      setCurrentMusic({
        song,
        songs: [song],
        playlist
      })
    }
  }

  return (
    <button className={className} onClick={handleClick}>
      {isPlayingSong ? <Pause /> : <Play />}
    </button>
  )
}

export default PlaylistPlaySongButton;
