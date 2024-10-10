interface InputProps {
  label: string;
  multiline?: boolean;
  value: string;
  setValue: (newValue: string) => void;
  error?: boolean;
}

export default InputProps;
