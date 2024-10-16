"use client";
import { IoVolumeHighOutline, IoVolumeMuteOutline } from "react-icons/io5";
import SoundButtonProps from "./SoundButton.types";
import { useState } from "react";

export default function SoundButton({ mute, onClick }: SoundButtonProps) {
  const [hover, setHover] = useState(false);
  return mute ? (
    <IoVolumeMuteOutline
      color={hover ? "#43b3f4" : "white"}
      size={36}
      onClick={onClick}
      style={{ cursor: "pointer" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    />
  ) : (
    <IoVolumeHighOutline
      color={hover ? "#43b3f4" : "white"}
      size={36}
      onClick={onClick}
      style={{ cursor: "pointer" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    />
  );
}
