interface TeamNameColorPickerProps {
  label: string;
  name: string;
  setName: (newValue: string) => void;
  color: string;
  setColor: (newValue:string) => void;
  defaultColors: string[]
}

export default TeamNameColorPickerProps;
