interface InputProps {
  label: string;
  multiline?: boolean;
  value: string;
  setValue: (newValue: string) => void;
}

export default InputProps;
