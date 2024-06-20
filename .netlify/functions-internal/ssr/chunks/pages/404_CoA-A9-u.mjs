/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderSlot, f as createAstro, g as renderComponent, h as renderHead, i as renderTransition } from '../astro_DXvJ5a2x.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { create } from 'zustand';
import React, { useState, useRef, useEffect } from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import cn from 'clsx';
/* empty css                          */

const usePlayerStore = create((set) => ({
  isPlaying: false,
  isMuted: false,
  isShuffled: false,
  isRepeated: false,
  currentMusic: {
    playlist: void 0,
    song: void 0,
    songs: []
  },
  volume: 1,
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setIsMuted: (isMuted) => set({ isMuted }),
  setIsShuffled: (isShuffled) => set({ isShuffled }),
  setIsRepeated: (isRepeated) => set({ isRepeated }),
  setCurrentMusic: (currentMusic) => set({ currentMusic }),
  setVolume: (volume) => set({ volume })
}));

const VolumeOff = ({ className }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    height: "16",
    width: "16",
    role: "img",
    "aria-label": "Volume off",
    "aria-hidden": "true",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    className,
    children: [
      /* @__PURE__ */ jsx("path", { d: "M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06z" }),
      /* @__PURE__ */ jsx("path", { d: "M10.116 1.5A.75.75 0 0 0 8.991.85l-6.925 4a3.642 3.642 0 0 0-1.33 4.967 3.639 3.639 0 0 0 1.33 1.332l6.925 4a.75.75 0 0 0 1.125-.649v-1.906a4.73 4.73 0 0 1-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 0 1-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z" })
    ]
  }
);
const VolumeLow = ({ className }) => /* @__PURE__ */ jsx(
  "svg",
  {
    height: "16",
    width: "16",
    role: "img",
    "aria-label": "Volume low",
    "aria-hidden": "true",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    className,
    children: /* @__PURE__ */ jsx("path", { d: "M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z" })
  }
);
const VolumeMedium = ({ className }) => /* @__PURE__ */ jsx(
  "svg",
  {
    height: "16",
    width: "16",
    role: "img",
    "aria-label": "Volume medium",
    "aria-hidden": "true",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    className,
    children: /* @__PURE__ */ jsx("path", { d: "M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 6.087a4.502 4.502 0 0 0 0-8.474v1.65a2.999 2.999 0 0 1 0 5.175v1.649z" })
  }
);
const VolumeHigh = ({ className }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    height: "16",
    width: "16",
    role: "img",
    "aria-label": "Volume high",
    "aria-hidden": "true",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    className,
    children: [
      /* @__PURE__ */ jsx("path", { d: "M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z" }),
      /* @__PURE__ */ jsx("path", { d: "M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z" })
    ]
  }
);
const Volume = () => {
  const volume = usePlayerStore((state) => state.volume);
  const isMuted = usePlayerStore((state) => state.isMuted);
  if (isMuted || volume === 0) {
    return /* @__PURE__ */ jsx(VolumeOff, { className: "text-gray-400 group-hover:text-white" });
  }
  if (volume <= 0.33) {
    return /* @__PURE__ */ jsx(VolumeLow, { className: "text-gray-400 group-hover:text-white" });
  }
  if (volume <= 0.66) {
    return /* @__PURE__ */ jsx(VolumeMedium, { className: "text-gray-400 group-hover:text-white" });
  }
  return /* @__PURE__ */ jsx(VolumeHigh, { className: "text-gray-400 group-hover:text-white" });
};
const VolumeSlider = React.forwardRef(({ className, ...props }, ref) => {
  const [value, setValue] = useState((props.value || props.defaultValue) ?? [100]);
  const setIsMuted = usePlayerStore((state) => state.setIsMuted);
  const volume = usePlayerStore((state) => state.volume);
  const handleValueChange = (value2) => {
    setValue(value2);
    props.onValueChange && props.onValueChange(value2);
  };
  const handleMute = () => {
    if (value[0] === 0) {
      setIsMuted(false);
      handleValueChange([volume * 100]);
    } else {
      setIsMuted(true);
      setValue([0]);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex group transition-all duration-300", children: [
    /* @__PURE__ */ jsx("button", { className: "w-9 h-9 items-center justify-center", onClick: handleMute, children: /* @__PURE__ */ jsx(Volume, {}) }),
    /* @__PURE__ */ jsxs(
      SliderPrimitive.Root,
      {
        ref,
        className: cn(
          "relative flex touch-none select-none items-center",
          className
        ),
        ...props,
        value,
        onValueChange: handleValueChange,
        children: [
          /* @__PURE__ */ jsx(SliderPrimitive.Track, { className: "relative h-1 w-full grow overflow-hidden rounded-full bg-zinc-600", children: /* @__PURE__ */ jsx(SliderPrimitive.Range, { className: "absolute h-full bg-white group-hover:bg-green-400" }) }),
          /* @__PURE__ */ jsx(SliderPrimitive.Thumb, { className: "hidden group-hover:block h-3 w-3 bg-white rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
        ]
      }
    )
  ] });
});
VolumeSlider.displayName = SliderPrimitive.Root.displayName;

const SongSlider = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxs(
    SliderPrimitive.Root,
    {
      ref,
      className: cn(
        "relative flex touch-none select-none items-center group",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx(SliderPrimitive.Track, { className: "relative h-1 w-full grow overflow-hidden rounded-full bg-zinc-600", children: /* @__PURE__ */ jsx(SliderPrimitive.Range, { className: "absolute h-full bg-white group-hover:bg-green-400" }) }),
        !props.disabled && /* @__PURE__ */ jsx(SliderPrimitive.Thumb, { className: "hidden group-hover:block h-3 w-3 bg-white rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
      ]
    }
  );
});
SongSlider.displayName = SliderPrimitive.Root.displayName;

const Play = ({ className }) => /* @__PURE__ */ jsx(
  "svg",
  {
    height: "16",
    width: "16",
    role: "img",
    "aria-hidden": "true",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    className,
    children: /* @__PURE__ */ jsx("path", { d: "M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z" })
  }
);
const Next = ({ className }) => /* @__PURE__ */ jsx(
  "svg",
  {
    height: "16",
    width: "16",
    role: "img",
    "aria-hidden": "true",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    className,
    children: /* @__PURE__ */ jsx("path", { d: "M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z" })
  }
);
const Previous = ({ className }) => /* @__PURE__ */ jsx(
  "svg",
  {
    height: "16",
    width: "16",
    role: "img",
    "aria-hidden": "true",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    className,
    children: /* @__PURE__ */ jsx("path", { d: "M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z" })
  }
);
const Pause = ({ className }) => /* @__PURE__ */ jsx(
  "svg",
  {
    height: "16",
    width: "16",
    role: "img",
    "aria-hidden": "true",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    className,
    children: /* @__PURE__ */ jsx("path", { d: "M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z" })
  }
);
const Repeat = ({ className }) => /* @__PURE__ */ jsx(
  "svg",
  {
    height: "16",
    width: "16",
    role: "img",
    "aria-hidden": "true",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    className,
    children: /* @__PURE__ */ jsx("path", { d: "M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z" })
  }
);
const Shuffle = ({ className }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    height: "16",
    width: "16",
    role: "img",
    "aria-hidden": "true",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    className,
    children: [
      /* @__PURE__ */ jsx("path", { d: "M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z" }),
      /* @__PURE__ */ jsx("path", { d: "m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z" })
    ]
  }
);
const CurrentSong = ({ image, title, artists }) => /* @__PURE__ */ jsxs("div", { className: "flex flex-row flex-1 items-center gap-4 relative overflow-hidden", children: [
  /* @__PURE__ */ jsx("picture", { className: "h-14 w-14 overflow-hidden rounded-md shadow-lg bg-zinc-800", children: /* @__PURE__ */ jsx("img", { src: image, alt: title }) }),
  /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsx("h3", { className: "font-semibold text-sm", children: title }),
    /* @__PURE__ */ jsx("h4", { className: "font-extralight text-sm text-gray-400 truncate", children: artists })
  ] })
] });
const VolumeControl = () => {
  const volume = usePlayerStore((state) => state.volume);
  const setVolume = usePlayerStore((state) => state.setVolume);
  const handleAudioVolume = (volume2) => {
    const volumeValue = volume2[0] / 100;
    setVolume(volumeValue);
  };
  return /* @__PURE__ */ jsx(VolumeSlider, { defaultValue: [volume * 100], min: 0, max: 100, className: "min-w-[96px]", onValueChange: handleAudioVolume });
};
const SongControl = ({ audioRef }) => {
  const isPlaying = usePlayerStore((state) => state.isPlaying);
  const setIsPlaying = usePlayerStore((state) => state.setIsPlaying);
  const currentMusic = usePlayerStore((state) => state.currentMusic);
  const setCurrentMusic = usePlayerStore((state) => state.setCurrentMusic);
  const disabledButtons = !currentMusic.song;
  const isShuffled = usePlayerStore((state) => state.isShuffled);
  const setIsShuffled = usePlayerStore((state) => state.setIsShuffled);
  const isRepeated = usePlayerStore((state) => state.isRepeated);
  const setIsRepeated = usePlayerStore((state) => state.setIsRepeated);
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
      const randomIndex = Math.floor(Math.random() * Date.now()) % length;
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
      const randomIndex = Math.floor(Math.random() * Date.now()) % length;
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
  const handleValueChange = (value) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0];
    }
  };
  useEffect(() => {
    audioRef.current?.addEventListener("timeupdate", handleTimeUpdate);
    audioRef.current?.addEventListener("ended", handleNextSong);
    return () => {
      audioRef.current?.removeEventListener("timeupdate", handleTimeUpdate);
      audioRef.current?.addEventListener("ended", handleNextSong);
    };
  }, []);
  const currentTimeMinutes = Math.floor(currentTime / 60);
  const currentTimeSeconds = Math.floor(currentTime - currentTimeMinutes * 60);
  const currentTimeFormated = `${currentTimeMinutes}:${currentTimeSeconds > 9 ? currentTimeSeconds : "0" + currentTimeSeconds}`;
  const totalTimeFormated = currentMusic.song ? currentMusic.song.duration : "--:--";
  const [totalMinutes, totalSeconds] = currentMusic.song?.duration.split(":") ?? ["0", "0"];
  const maxTime = currentMusic.song ? parseInt(totalMinutes) * 60 + parseInt(totalSeconds) : 0;
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col justify-center gap-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-center gap-4", children: [
      /* @__PURE__ */ jsx("button", { className: "flex items-center justify-center h-8 w-8", onClick: toggleShuffle, disabled: !currentMusic.song, children: /* @__PURE__ */ jsx(Shuffle, { className: disabledButtons ? "text-zinc-600" : isShuffled ? "text-green-500" : "text-gray-400" }) }),
      /* @__PURE__ */ jsx("button", { className: "flex items-center justify-center h-8 w-8", onClick: handlePreviousSong, disabled: !currentMusic.song, children: /* @__PURE__ */ jsx(Previous, { className: disabledButtons ? "text-zinc-600" : "text-white" }) }),
      /* @__PURE__ */ jsx("button", { className: "flex items-center justify-center h-8 w-8 bg-white rounded-full", onClick: handleClick, disabled: !currentMusic.song, children: isPlaying ? /* @__PURE__ */ jsx(Pause, { className: disabledButtons ? "text-zinc-600" : "text-black" }) : /* @__PURE__ */ jsx(Play, { className: disabledButtons ? "text-zinc-600" : "text-black" }) }),
      /* @__PURE__ */ jsx("button", { className: "flex items-center justify-center h-8 w-8", onClick: handleNextSong, disabled: !currentMusic.song, children: /* @__PURE__ */ jsx(Next, { className: disabledButtons ? "text-zinc-600" : "text-white" }) }),
      /* @__PURE__ */ jsx("button", { className: "flex items-center justify-center h-8 w-8", onClick: toggleRepeated, disabled: !currentMusic.song, children: /* @__PURE__ */ jsx(Repeat, { className: disabledButtons ? "text-zinc-600" : isRepeated ? "text-green-500" : "text-gray-400" }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-center items-center gap-2", children: [
      /* @__PURE__ */ jsx("span", { className: "min-w-[40px] font-extralight text-xs text-gray-400", children: currentTimeFormated }),
      /* @__PURE__ */ jsx(
        SongSlider,
        {
          disabled: !currentMusic.song,
          className: "flex flex-1 flex-shrink",
          value: [currentTime],
          max: maxTime,
          min: 0,
          onValueChange: handleValueChange
        }
      ),
      /* @__PURE__ */ jsx("span", { className: "min-w-[40px] font-extralight text-xs text-gray-400", children: totalTimeFormated })
    ] })
  ] });
};
const Player = () => {
  const { isPlaying, currentMusic, isMuted, volume } = usePlayerStore((state) => state);
  const audioRef = useRef(null);
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
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row flex-1 justify-evenly items-center px-2 z-50", children: [
      /* @__PURE__ */ jsx("div", { className: "flex flex-1 flex-shrink items-center justify-start", children: !!currentMusic.song && /* @__PURE__ */ jsx(CurrentSong, { title: currentMusic.song.title, artists, image: currentMusic.song.image }) }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-1 items-center justify-evenly", children: /* @__PURE__ */ jsx(SongControl, { audioRef }) }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-1 flex-row flex-shrink items-center justify-end", children: /* @__PURE__ */ jsx(VolumeControl, {}) })
    ] }),
    /* @__PURE__ */ jsx("audio", { ref: audioRef })
  ] });
};

const $$Home = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg height="24" width="24" role="img" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"> <path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732l7.5-4.33z"></path> </svg>`;
}, "/Users/carlospalf/Documents/dev/spotify-clone-astro/src/assets/icons/Home.astro", void 0);

const $$Library = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg height="24" width="24" role="img" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"> <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path> </svg>`;
}, "/Users/carlospalf/Documents/dev/spotify-clone-astro/src/assets/icons/Library.astro", void 0);

const $$Search = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg height="24" width="24" role="img" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"> <path d="M10.533 1.27893C5.35215 1.27893 1.12598 5.41887 1.12598 10.5579C1.12598 15.697 5.35215 19.8369 10.533 19.8369C12.767 19.8369 14.8235 19.0671 16.4402 17.7794L20.7929 22.132C21.1834 22.5226 21.8166 22.5226 22.2071 22.132C22.5976 21.7415 22.5976 21.1083 22.2071 20.7178L17.8634 16.3741C19.1616 14.7849 19.94 12.7634 19.94 10.5579C19.94 5.41887 15.7138 1.27893 10.533 1.27893ZM3.12598 10.5579C3.12598 6.55226 6.42768 3.27893 10.533 3.27893C14.6383 3.27893 17.94 6.55226 17.94 10.5579C17.94 14.5636 14.6383 17.8369 10.533 17.8369C6.42768 17.8369 3.12598 14.5636 3.12598 10.5579Z"></path> </svg>`;
}, "/Users/carlospalf/Documents/dev/spotify-clone-astro/src/assets/icons/Search.astro", void 0);

const colors = {
  red: { accent: "#da2735", dark: "#7f1d1d" },
  orange: { accent: "#cc5400", dark: "#7c2d12" },
  yellow: { accent: "#ffae00", dark: "#78350f" },
  green: { accent: "#21c872", dark: "#14532d" },
  teal: { accent: "#2ee9d7", dark: "#134e4a" },
  blue: { accent: "#1e3a8a", dark: "#1e3a8a" },
  indigo: { accent: "#394bd5", dark: "#312e81" },
  purple: { accent: "#df24ff", dark: "#581c87" },
  pink: { accent: "#f33b73", dark: "#831843" },
  emerald: { accent: "#0c6e54", dark: "#064e3b" },
  rose: { accent: "#ed2377", dark: "#871b48" },
  gray: { accent: "#555555", dark: "#27272a" }
};

const playlists = [
  {
    id: "1",
    albumId: 1,
    title: "Chill Lo-Fi Music",
    color: colors.yellow,
    cover: "https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353",
    artists: ["NoSpirit", "Casiio"]
  },
  {
    id: "2",
    albumId: 2,
    title: "Lo-Fi Chill Session",
    color: colors.green,
    cover: "https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187",
    artists: ["Kupla", "Blue Fox"]
  },
  {
    id: "3",
    albumId: 3,
    title: "Study Session",
    color: colors.rose,
    cover: "https://f4.bcbits.com/img/a1435058381_65.jpg",
    artists: ["Tenno", "xander", "Team Astro"]
  },
  {
    id: "4",
    albumId: 4,
    title: "Blue Note Study Time",
    color: colors.blue,
    cover: "https://f4.bcbits.com/img/a1962013209_16.jpg",
    artists: ["Raimu", "Yasumu"]
  },
  {
    id: "5",
    albumId: 5,
    title: "Chau Saura Session",
    color: colors.purple,
    cover: "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["Chau Saura", "amies", "kyu"]
  },
  {
    id: "6",
    albumId: 6,
    title: "Like a Necessity",
    color: colors.orange,
    cover: "https://f4.bcbits.com/img/a0363730459_16.jpg",
    artists: ["WFS", "Nadav Cohen"]
  }
];
const morePlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_more"
}));
const sidebarPlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_side"
}));
const allPlaylists = [
  ...playlists,
  ...morePlaylists,
  ...sidebarPlaylists
];
const songs = [
  {
    "id": 1,
    "albumId": 1,
    "title": "Moonlit Walk",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "2:57"
  },
  {
    "id": 2,
    "albumId": 1,
    "title": "Coffee Daze",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:40"
  },
  {
    "id": 3,
    "albumId": 1,
    "title": "Skyline Serenade",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:29"
  },
  {
    "id": 4,
    "albumId": 1,
    "title": "Urban Echoes",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "2:11"
  },
  {
    "id": 5,
    "albumId": 1,
    "title": "Night's End",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "2:26"
  },
  {
    "id": 1,
    "albumId": 2,
    "title": "Silent Rain",
    "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "2:38"
  },
  {
    "id": 2,
    "albumId": 2,
    "title": "Lost Pages",
    "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "2:40"
  },
  {
    "id": 3,
    "albumId": 2,
    "title": "Midnight Tales",
    "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "2:53"
  },
  {
    "id": 4,
    "albumId": 2,
    "title": "City Lights",
    "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "3:11"
  },
  {
    "id": 5,
    "albumId": 2,
    "title": "Night Drive",
    "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "2:58"
  },
  {
    "id": 1,
    "albumId": 3,
    "title": "Lunar",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:06"
  },
  {
    "id": 2,
    "albumId": 3,
    "title": "Go go go!",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "1:30"
  },
  {
    "id": 3,
    "albumId": 3,
    "title": "Keep focus!",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "1:59"
  },
  {
    "id": 4,
    "albumId": 3,
    "title": "JavaScript is the way",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:56"
  },
  {
    "id": 5,
    "albumId": 3,
    "title": "No more TypeScript for me",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:30"
  },
  {
    "id": 1,
    "albumId": 4,
    "title": "Lunar",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:59"
  },
  {
    "id": 2,
    "albumId": 4,
    "title": "Go go go!",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:12"
  },
  {
    "id": 3,
    "albumId": 4,
    "title": "Keep focus!",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:02"
  },
  {
    "id": 4,
    "albumId": 4,
    "title": "JavaScript is the way",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:29"
  },
  {
    "id": 5,
    "albumId": 4,
    "title": "No more TypeScript for me",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:29"
  },
  {
    "id": 1,
    "albumId": 5,
    "title": "Moonlit Walk",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:49"
  },
  {
    "id": 2,
    "albumId": 5,
    "title": "Coffee Daze",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "1:52"
  },
  {
    "id": 3,
    "albumId": 5,
    "title": "Skyline Serenade",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "2:15"
  },
  {
    "id": 4,
    "albumId": 5,
    "title": "Urban Echoes",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "4:06"
  },
  {
    "id": 5,
    "albumId": 5,
    "title": "Night's End",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "2:54"
  },
  {
    "id": 1,
    "albumId": 6,
    "title": "Moonlit Walk",
    "image": "https://f4.bcbits.com/img/a0363730459_16.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "1:57"
  },
  {
    "id": 2,
    "albumId": 6,
    "title": "Coffee Daze",
    "image": "https://f4.bcbits.com/img/a0363730459_16.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "1:49"
  },
  {
    "id": 3,
    "albumId": 6,
    "title": "Skyline Serenade",
    "image": "https://f4.bcbits.com/img/a0363730459_16.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "2:35"
  },
  {
    "id": 4,
    "albumId": 6,
    "title": "Urban Echoes",
    "image": "https://f4.bcbits.com/img/a0363730459_16.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "2:49"
  },
  {
    "id": 5,
    "albumId": 6,
    "title": "Night's End",
    "image": "https://f4.bcbits.com/img/a0363730459_16.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "2:29"
  }
];

const $$Astro$3 = createAstro();
const $$SideMenuItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SideMenuItem;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li> <a${addAttribute(`flex gap-4 text-zinc-400 hover:text-zinc-100 items-center py-3 px-5 font-medium transition duration-300`, "class")}${addAttribute(href, "href")}> ${renderSlot($$result, $$slots["default"])} </a> </li>`;
}, "/Users/carlospalf/Documents/dev/spotify-clone-astro/src/components/SideMenuItem.astro", void 0);

const $$Astro$2 = createAstro();
const $$SideMenuCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SideMenuCard;
  const {
    playlist: { id, title, artists, cover }
  } = Astro2.props;
  const artistString = artists.join(", ");
  return renderTemplate`${maybeRenderHead()}<li> <a class="flex playlist-item relative p-2 overflow-hidden items-center gap-5 rounded-md hover:bg-zinc-400"${addAttribute(`/playlist/${id}`, "href")}> <picture class="h-12 w-12"> <img${addAttribute(`${cover}`, "src")}${addAttribute(`Cover of ${title} by ${artistString}`, "alt")} class="object-cover w-full h-full rounded-md"> </picture> <div class="flex flex-auto flex-col truncate"> <h4 class="font-semibold">${title}</h4> <span class="font-extralight text-sm text-gray-400">${artistString}</span> </div> </a> </li>`;
}, "/Users/carlospalf/Documents/dev/spotify-clone-astro/src/components/SideMenuCard.astro", void 0);

const $$AsideMenu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="flex flex-col flex-1 gap-2"> <div class="bg-zinc-900 rounded-lg p-2"> <ul> ${renderComponent($$result, "SideMenuItem", $$SideMenuItem, { "href": "/" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "HomeIcon", $$Home, {})}Home` })} ${renderComponent($$result, "SideMenuItem", $$SideMenuItem, { "href": "/search" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "SearchIcon", $$Search, {})}Search` })} </ul> </div> <div class="bg-zinc-900 rounded-lg p-2 flex-1"> <ul> ${renderComponent($$result, "SideMenuItem", $$SideMenuItem, { "href": "/library" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "LibraryIcon", $$Library, {})}Your Library` })} ${playlists.map((playlist) => {
    return renderTemplate`${renderComponent($$result, "SideMenuCard", $$SideMenuCard, { "playlist": playlist })}`;
  })} </ul> </div> </nav>`;
}, "/Users/carlospalf/Documents/dev/spotify-clone-astro/src/components/AsideMenu.astro", void 0);

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/carlospalf/Documents/dev/spotify-clone-astro/node_modules/.pnpm/astro@4.10.2_typescript@5.4.5/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "fallback": "none", "data-astro-cid-sckkx6r4": true })}${renderHead()}</head> <body data-astro-cid-sckkx6r4> <div id="app" class="relative h-screen p-2 gap-2" data-astro-cid-sckkx6r4> <aside class="[grid-area:aside] flex flex-col overflow-y-auto" data-astro-cid-sckkx6r4> ${renderComponent($$result, "AsideMenu", $$AsideMenu, { "data-astro-cid-sckkx6r4": true })} </aside> <main class="[grid-area:main] overflow-y-auto bg-zinc-900 rounded-lg" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </main> <footer class="[grid-area:player] flex flex-row min-h-[72px]" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Player", Player, { "client:load": true, "data-astro-transition-persist": "media-player", "client:component-hydration": "load", "client:component-path": "@components/Player", "client:component-export": "Player", "data-astro-cid-sckkx6r4": true, "data-astro-transition-scope": renderTransition($$result, "p74ezckc", "", "media-player") })} </footer> </div>   </body> </html>`;
}, "/Users/carlospalf/Documents/dev/spotify-clone-astro/src/layouts/Layout.astro", "self");

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u{1F7E2}\u{1F3A7} Spotify Clone - Not found \u{1F680}\u{1F9D1}\u200D\u{1F680}" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col w-full h-full justify-center items-center"> <h1 class="text-white font-extrabold text-3xl text-center mb-4">
Page Not Found
</h1> <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTJidGNhOWR6aGVua2docWsyY3d1cnR3MXhlMDJpOXVzaDV1cDlmYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UoeaPqYrimha6rdTFV/giphy.gif"> </div> ` })}`;
}, "/Users/carlospalf/Documents/dev/spotify-clone-astro/src/pages/404.astro", void 0);

const $$file = "/Users/carlospalf/Documents/dev/spotify-clone-astro/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, Pause as P, _404 as _, Play as a, allPlaylists as b, playlists as p, songs as s, usePlayerStore as u };
