import React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import cn from "clsx"

export const SongSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => {


  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex touch-none select-none items-center group",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-zinc-600">
        <SliderPrimitive.Range className="absolute h-full bg-white group-hover:bg-green-400" />
      </SliderPrimitive.Track>
      {!props.disabled &&
        < SliderPrimitive.Thumb className="hidden group-hover:block h-3 w-3 bg-white rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
      }
    </SliderPrimitive.Root >
  )
})

SongSlider.displayName = SliderPrimitive.Root.displayName