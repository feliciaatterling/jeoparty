import { useState, useRef } from "react";
import { Howl, Howler } from "howler";

function useMusic() {
  const [mute, setMute] = useState(true);
  const [firstInteraction, setFirstInteraction] = useState(true); // Track first interaction for sound play
  const soundRef = useRef<Howl | null>(null); // Persist the sound instance

  const toggleMute = () => {
    if (firstInteraction) {
      // Initialize sound after the first user interaction
      soundRef.current = new Howl({
        src: ["/audio/music.mp3"],
        loop: true,
      });

      soundRef.current.play(); // Play the sound on first interaction
      setFirstInteraction(false); // Mark that the first interaction has occurred
    }

    // Toggle mute/unmute
    setMute((prevMute) => {
      const newMute = !prevMute;
      Howler.mute(newMute); // Mute or unmute the sound globally
      return newMute;
    });
  };

  // Cleanup sound on unmount
  const stopMusic = () => {
    if (soundRef.current) {
      soundRef.current.stop();
      soundRef.current.unload();
    }
  };

  return { mute, toggleMute, stopMusic }; // Expose mute, toggleMute, and stopMusic if needed
}

export default useMusic;
