interface SliderProps {
  min: number;
  max: number;
  defaultValue: number;
  step: number;
  value: number;
  setValue: (value: number) => void;
}

export default SliderProps;
