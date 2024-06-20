import React, { useState } from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import cn from "clsx"
import { usePlayerStore } from "@store/playerStore";

type ButtonProps = { className?: string };
const VolumeOff = ({ className }: ButtonProps) => (
  <svg
    height="16"
    width="16"
    role="img"
    aria-label="Volume off"
    aria-hidden="true"
    viewBox="0 0 16 16"
    fill="currentColor"
    className={className}
  >
    <path d="M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06z"></path>
    <path d="M10.116 1.5A.75.75 0 0 0 8.991.85l-6.925 4a3.642 3.642 0 0 0-1.33 4.967 3.639 3.639 0 0 0 1.33 1.332l6.925 4a.75.75 0 0 0 1.125-.649v-1.906a4.73 4.73 0 0 1-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 0 1-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z"></path>
  </svg>

);

const VolumeLow = ({ className }: ButtonProps) => (
  <svg
    height="16"
    width="16"
    role="img"
    aria-label="Volume low"
    aria-hidden="true"
    viewBox="0 0 16 16"
    fill="currentColor"
    className={className}
  >
    <path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"></path>
  </svg>
);

const VolumeMedium = ({ className }: ButtonProps) => (
  <svg
    height="16"
    width="16"
    role="img"
    aria-label="Volume medium"
    aria-hidden="true"
    viewBox="0 0 16 16"
    fill="currentColor"
    className={className}
  >
    <path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 6.087a4.502 4.502 0 0 0 0-8.474v1.65a2.999 2.999 0 0 1 0 5.175v1.649z"></path>
  </svg>
);

const VolumeHigh = ({ className }: ButtonProps) => (
  <svg
    height="16"
    width="16"
    role="img"
    aria-label="Volume high"
    aria-hidden="true"
    viewBox="0 0 16 16"
    fill="currentColor"
    className={className}
  >
    <path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"></path>
    <path d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z"></path>
  </svg>
);

const Volume = () => {
  const volume = usePlayerStore(state => state.volume)
  const isMuted = usePlayerStore(state => state.isMuted)
  if (isMuted || volume === 0) {
    return (<VolumeOff className="text-gray-400 group-hover:text-white" />);
  }
  if (volume <= 0.33) {
    return (<VolumeLow className="text-gray-400 group-hover:text-white" />);
  }
  if (volume <= 0.66) {
    return (<VolumeMedium className="text-gray-400 group-hover:text-white" />);
  }
  return (<VolumeHigh className="text-gray-400 group-hover:text-white" />);
}

export const VolumeSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => {
  const [value, setValue] = useState<number[]>((props.value || props.defaultValue) ?? [100]);
  const setIsMuted = usePlayerStore(state => state.setIsMuted);
  const volume = usePlayerStore(state => state.volume);

  const handleValueChange = (value: number[]) => {
    setValue(value);
    props.onValueChange && props.onValueChange(value);
  };

  const handleMute = () => {
    if (value[0] === 0) {
      setIsMuted(false);
      handleValueChange([volume * 100]);
    } else {
      setIsMuted(true);
      setValue([0]);
    }
  }

  return (
    <div className="flex group transition-all duration-300">
      <button className="w-9 h-9 items-center justify-center" onClick={handleMute}>
        <Volume />
      </button>
      <SliderPrimitive.Root
        ref={ref}
        className={cn(
          "relative flex touch-none select-none items-center",
          className
        )}
        {...props}
        value={value}
        onValueChange={handleValueChange}
      >
        <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-zinc-600">
          <SliderPrimitive.Range className="absolute h-full bg-white group-hover:bg-green-400" />
        </SliderPrimitive.Track>

        <SliderPrimitive.Thumb className="hidden group-hover:block h-3 w-3 bg-white rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
      </SliderPrimitive.Root >
    </div>
  )
})

VolumeSlider.displayName = SliderPrimitive.Root.displayName