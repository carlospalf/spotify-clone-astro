import { usePlayerStore } from "@store/playerStore";
import React, { useRef, useEffect, useState, type RefObject } from "react";
import { VolumeSlider } from "./VolumeSlider";
import { SongSlider } from "./SongSlider";

type ButtonProps = { className?: string };
type CurrentSongProps = {
  title: string,
  artists: string,
  image?: string,
}
type SongControlProps = { audioRef: RefObject<HTMLAudioElement> };

export const Play = ({ className }: ButtonProps) => (
  <svg
    height="16"
    width="16"
    role="img"
    aria-hidden="true"
    viewBox="0 0 16 16"
    fill="currentColor"
    className={className}
  >
    <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
  </svg>
);

export const Next = ({ className }: ButtonProps) => (
  <svg
    height="16"
    width="16"
    role="img"
    aria-hidden="true"
    viewBox="0 0 16 16"
    fill="currentColor"
    className={className}
  >
    <path d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"></path>
  </svg>
);

export const Previous = ({ className }: ButtonProps) => (
  <svg
    height="16"
    width="16"
    role="img"
    aria-hidden="true"
    viewBox="0 0 16 16"
    fill="currentColor"
    className={className}
  >
    <path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"></path>
  </svg>
);

export const Pause = ({ className }: ButtonProps) => (
  <svg
    height="16"
    width="16"
    role="img"
    aria-hidden="true"
    viewBox="0 0 16 16"
    fill="currentColor"
    className={className}
  >
    <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
  </svg>
);

export const Repeat = ({ className }: ButtonProps) => (
  <svg
    height="16"
    width="16"
    role="img"
    aria-hidden="true"
    viewBox="0 0 16 16"
    fill="currentColor"
    className={className}
  >
    <path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"></path>
  </svg>
);

export const Shuffle = ({ className }: ButtonProps) => (
  <svg
    height="16"
    width="16"
    role="img"
    aria-hidden="true"
    viewBox="0 0 16 16"
    fill="currentColor"
    className={className}
  >
    <path d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z"></path>
    <path d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z"></path>
  </svg>
);

const CurrentSong = ({ image, title, artists }: CurrentSongProps) => (
  <div className="flex flex-row flex-1 items-center gap-4 relative overflow-hidden">
    <picture className="h-14 w-14 overflow-hidden rounded-md shadow-lg bg-zinc-800">
      <img src={image} alt={title} />
    </picture>
    <div className="flex flex-col">
      <h3 className="font-semibold text-sm">{title}</h3>
      <h4 className="font-extralight text-sm text-gray-400 truncate">{artists}</h4>
    </div>
  </div>
);

const VolumeControl = () => {
  const volume = usePlayerStore(state => state.volume);
  const setVolume = usePlayerStore(state => state.setVolume);

  const handleAudioVolume = (volume: number[]) => {
    const volumeValue = volume[0] / 100;
    setVolume(volumeValue);
  };

  return (<VolumeSlider defaultValue={[volume * 100]} min={0} max={100} className="min-w-[96px]" onValueChange={handleAudioVolume} />);
}

const SongControl = ({ audioRef }: SongControlProps) => {
  const isPlaying = usePlayerStore(state => state.isPlaying);
  const setIsPlaying = usePlayerStore(state => state.setIsPlaying);
  const currentMusic = usePlayerStore(state => state.currentMusic);
  const setCurrentMusic = usePlayerStore(state => state.setCurrentMusic);
  const disabledButtons = !currentMusic.song;
  const isShuffled = usePlayerStore(state => state.isShuffled);
  const setIsShuffled = usePlayerStore(state => state.setIsShuffled);
  const isRepeated = usePlayerStore(state => state.isRepeated);
  const setIsRepeated = usePlayerStore(state => state.setIsRepeated);

  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };

  const [currentTime, setCurrentTime] = useState(0);
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current?.currentTime ?? 0);
  };
  const handleNextSong = () => {
    const currentIndex = currentMusic.songs.findIndex((song) => song.id === currentMusic.song?.id);
    const length = currentMusic.songs.length;

    let songIndex = 0;
    if (isShuffled) {
      const randomIndex = (Math.floor(Math.random() * Date.now())) % length;
      songIndex = randomIndex === currentIndex ? (randomIndex + 1) % length : randomIndex;
    } else {
      songIndex = currentIndex + 1;
    }

    const newSong = currentMusic.songs.at(songIndex) ?? currentMusic.songs.at(0);

    if (newSong && (currentIndex !== length - 1 || isRepeated)) {
      setCurrentMusic({ ...currentMusic, song: newSong });
    } else {
      setIsPlaying(false);
      setCurrentMusic({ ...currentMusic, song: currentMusic.songs[0] });
    }
  };

  const handlePreviousSong = () => {
    const currentIndex = currentMusic.songs.findIndex((song) => song.id === currentMusic.song?.id);
    const length = currentMusic.songs.length;

    let songIndex = 0;
    if (isShuffled) {
      const randomIndex = (Math.floor(Math.random() * Date.now())) % length;
      songIndex = randomIndex === currentIndex ? (randomIndex + 1) % length : randomIndex;
    } else {
      songIndex = currentIndex - 1;
    }

    const newSong = currentMusic.songs.at(songIndex) ?? currentMusic.songs.at(0);

    if (newSong && (currentIndex !== 0 || isRepeated)) {
      setCurrentMusic({ ...currentMusic, song: newSong });
    } else {
      setIsPlaying(false);
      setCurrentMusic({ ...currentMusic, song: currentMusic.songs[0] });
    }
  };

  const toggleShuffle = () => {
    setIsShuffled(!isShuffled);
  };

  const toggleRepeated = () => {
    setIsRepeated(!isRepeated);
  };

  const handleValueChange = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0];
    }
  }

  useEffect(() => {
    audioRef.current?.addEventListener("timeupdate", handleTimeUpdate);
    audioRef.current?.addEventListener("ended", handleNextSong);

    return () => {
      audioRef.current?.removeEventListener("timeupdate", handleTimeUpdate)
      audioRef.current?.addEventListener("ended", handleNextSong);
    };
  }, [])

  const currentTimeMinutes = Math.floor(currentTime / 60);
  const currentTimeSeconds = Math.floor(currentTime - (currentTimeMinutes * 60));
  const currentTimeFormated = `${currentTimeMinutes}:${currentTimeSeconds > 9 ? currentTimeSeconds : '0' + currentTimeSeconds}`;
  const totalTimeFormated = currentMusic.song ? currentMusic.song.duration : "--:--"
  const [totalMinutes, totalSeconds] = currentMusic.song?.duration.split(":") ?? ["0", "0"];
  const maxTime = currentMusic.song ? (parseInt(totalMinutes) * 60) + parseInt(totalSeconds) : 0;

  return (
    <div className="flex flex-1 flex-col justify-center gap-2">
      <div className="flex flex-row justify-center gap-4">
        <button className="flex items-center justify-center h-8 w-8" onClick={toggleShuffle} disabled={!currentMusic.song}>
          <Shuffle className={disabledButtons ? "text-zinc-600" : isShuffled ? "text-green-500" : "text-gray-400"} />
        </button>
        <button className="flex items-center justify-center h-8 w-8" onClick={handlePreviousSong} disabled={!currentMusic.song}>
          <Previous className={disabledButtons ? "text-zinc-600" : "text-white"} />
        </button>
        <button className="flex items-center justify-center h-8 w-8 bg-white rounded-full" onClick={handleClick} disabled={!currentMusic.song}>
          {isPlaying ? (
            <Pause className={disabledButtons ? "text-zinc-600" : "text-black"} />
          ) : (
            <Play className={disabledButtons ? "text-zinc-600" : "text-black"} />
          )}
        </button>
        <button className="flex items-center justify-center h-8 w-8" onClick={handleNextSong} disabled={!currentMusic.song}>
          <Next className={disabledButtons ? "text-zinc-600" : "text-white"} />
        </button>
        <button className="flex items-center justify-center h-8 w-8" onClick={toggleRepeated} disabled={!currentMusic.song}>
          <Repeat className={disabledButtons ? "text-zinc-600" : isRepeated ? "text-green-500" : "text-gray-400"} />
        </button>
      </div>
      <div className="flex flex-row justify-center items-center gap-2">
        <span className="min-w-[40px] font-extralight text-xs text-gray-400">{currentTimeFormated}</span>
        <SongSlider
          disabled={!currentMusic.song}
          className="flex flex-1 flex-shrink"
          value={[currentTime]}
          max={maxTime}
          min={0}
          onValueChange={handleValueChange}
        />
        <span className="min-w-[40px] font-extralight text-xs text-gray-400">{totalTimeFormated}</span>
      </div>
    </div>
  );
}

export const Player = () => {
  const { isPlaying, currentMusic, isMuted, volume } = usePlayerStore(state => state);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current && currentMusic.playlist && currentMusic.song) {
      const newSongUri = `/music/${currentMusic.playlist.albumId}/0${currentMusic.song.id}.mp3`;
      if (newSongUri !== new URL(audioRef.current.src).pathname) {
        audioRef.current.src = newSongUri;
      }

      if (isPlaying) {
        audioRef.current?.play();
      }
    }
    if (audioRef.current && !currentMusic?.song) {
      audioRef.current.src = "";
      audioRef.current?.pause();
    }
  }, [currentMusic]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = 0;
      } else {
        audioRef.current.volume = volume;
      }
    }
  }, [isMuted, volume]);

  const artists = currentMusic.song?.artists.join(", ") ?? "";

  return (
    <>
      <div className="flex flex-row flex-1 justify-evenly items-center px-2 z-50">
        <div className="flex flex-1 flex-shrink items-center justify-start">
          {!!currentMusic.song &&
            <CurrentSong title={currentMusic.song.title} artists={artists} image={currentMusic.song.image} />
          }
        </div>
        <div className="flex flex-1 items-center justify-evenly">
          <SongControl audioRef={audioRef} />
        </div>
        <div className="flex flex-1 flex-row flex-shrink items-center justify-end">
          <VolumeControl />
        </div>
      </div >
      <audio ref={audioRef} />
    </>
  );
};

export default Player;
