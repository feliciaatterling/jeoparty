import ScSpacer from "./Spacer.styled";
import SpacerProps from "./Spacer.types";

export default function Spacer({ orientation, size }: SpacerProps) {
  return <ScSpacer orientation={orientation} size={size}></ScSpacer>;
}
