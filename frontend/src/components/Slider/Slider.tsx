"use client";
import { ScSlider, ScSliderContainer } from "./Slider.styled";
import SliderProps from "./Slider.types";

const Slider: React.FC<SliderProps> = ({
  min,
  max,
  defaultValue,
  step,
  value,
  setValue,
}) => {
  return (
    <ScSliderContainer>
      <p>{min}</p> {/* Min value display */}
      
      <ScSlider
        defaultValue={defaultValue} 
        step={step} 
        max={max} 
        min={min} 
        valueLabelDisplay="auto" 
        value={value} 
        onChange={(event, newValue) => setValue(newValue as number)} 
      />
      
      <p>{max}</p> {/* Max value display */}
    </ScSliderContainer>
  );
};

export default Slider;
