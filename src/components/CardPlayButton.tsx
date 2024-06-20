import React from "react";
import { Play, Pause } from "./Player";
import { usePlayerStore } from "@store/playerStore";

type CardPlayButtonProps = { id: string, size?: "large" | "medium" | "small" };

export const CardPlayButton = ({ id, size = "medium" }: CardPlayButtonProps) => {
  const { isPlaying, setIsPlaying, currentMusic, setCurrentMusic } = usePlayerStore(state => state);
  const isPlayingPlaylist = isPlaying && currentMusic.playlist?.id === id;


  const handleClick = () => {
    if (isPlayingPlaylist || currentMusic.playlist?.id === id) {
      setIsPlaying(!isPlayingPlaylist);
      return;
    }
    fetch(`/api/get-info-playlist.json?id=${id}`).then((response) => response.json()).then(data => {
      const { playlist, songs } = data;
      setCurrentMusic({
        playlist: playlist,
        songs: songs,
        song: isPlayingPlaylist ? currentMusic.song : songs[0],
      });
      setIsPlaying(true);
    });

  };

  const sizeClassName = `${size === 'small' ? 'h-9 w-9' : size === 'medium' ? 'h-12 w-12' : 'h-14 w-14'}`
  const iconClassName = `${size === 'small' ? 'text-black h-2 w-2' : size === 'medium' ? 'text-black h-4 w-4' : 'text-black h-6 w-6'}`

  return (
    <button
      className={`card-play-button flex items-center justify-center ${sizeClassName} rounded-full hover:scale-110 bg-green-600 hover:bg-green-400 hover:shadow-green-200 hover:shadow-circular transition-all duration-500`}
      onClick={handleClick}
    >
      {isPlayingPlaylist ? <Pause className={iconClassName} /> : <Play className={iconClassName} />}
    </button>
  );
};

export default CardPlayButton;
