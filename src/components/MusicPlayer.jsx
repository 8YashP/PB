import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { weddingAudio } from '../utils/audioSynth';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    weddingAudio.init();
    const unsubscribe = weddingAudio.subscribe((state) => {
      setIsPlaying(state.isPlaying);
    });
    return unsubscribe;
  }, []);

  const toggleMusic = () => {
    weddingAudio.toggle();
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        zIndex: 90,
      }}
    >
      <button
        onClick={toggleMusic}
        className={`music-toggle-btn ${isPlaying ? 'is-playing' : 'is-muted'}`}
        title={isPlaying ? 'Music Playing — Click to Mute' : 'Music Muted — Click to Unmute'}
        aria-label={isPlaying ? 'Mute Wedding Song' : 'Unmute Wedding Song'}
      >
        {isPlaying ? (
          <Volume2 size={24} color="#0a182d" />
        ) : (
          <VolumeX size={24} color="#b91c1c" />
        )}
      </button>
    </div>
  );
}
