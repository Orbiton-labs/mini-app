import * as SliderUI from "@radix-ui/react-slider";

export const Slider = () => (
  <form >
    <SliderUI.Root
      className="relative flex h-10 w-full touch-none select-none items-center"
      defaultValue={[50]}
      max={100}
      step={1}
    >
      <SliderUI.Track className="relative h-2 grow rounded-full bg-blackA7">
        <SliderUI.Range className="absolute h-full rounded-full bg-yellow1" />
      </SliderUI.Track>
      <SliderUI.Thumb
        className="block size-4 rounded-[10px] bg-yellow1 shadow-[0_2px_10px] shadow-blackA4 hover:bg-violet3 focus:shadow-[0_0_0_5px] focus:shadow-blackA5 focus:outline-none"
        aria-label="Volume"
      />
    </SliderUI.Root>
  </form>
);
