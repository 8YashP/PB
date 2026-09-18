/**
 * Dynamic Wedding Audio Manager
 * 
 * Automatically detects and plays any audio file added to:
 * - src/assets/music/ (detected by Vite automatically)
 * - public/music/ (song.mp3, wedding.mp3, etc.)
 * - Or directly uploaded by the user via the in-browser file picker!
 */

// Dynamically scan any audio dropped into src/assets/music/
let assetSongUrl = null;
try {
  const musicFiles = import.meta.glob('/src/assets/music/*.{mp3,wav,m4a,ogg,aac,flac}', {
    eager: true,
    query: '?url',
    import: 'default',
  });

  const fileKeys = Object.keys(musicFiles);
  if (fileKeys.length > 0) {
    assetSongUrl = musicFiles[fileKeys[0]];
  }
} catch (e) {
  console.log('Error scanning assets music:', e);
}

class WeddingAudioManager {
  constructor() {
    this.audioElement = null;
    this.isPlaying = false;
    this.currentTrackName = 'Jashn-E-Bahaaraa';
    this.listeners = new Set();
    this.hasCustomSong = true;
    this.defaultVolume = 0.5; // Strictly 50%
  }

  subscribe(listener) {
    this.listeners.add(listener);
    // Guarantee subscriber receives immediate current playback state
    listener({
      isPlaying: this.isPlaying,
      trackName: this.currentTrackName,
      hasCustomSong: this.hasCustomSong,
    });
    return () => this.listeners.delete(listener);
  }

  notify() {
    this.listeners.forEach((fn) => fn({
      isPlaying: this.isPlaying,
      trackName: this.currentTrackName,
      hasCustomSong: this.hasCustomSong,
    }));
  }

  init() {
    if (this.audioElement) {
      this.audioElement.volume = this.defaultVolume;
      return;
    }

    this.audioElement = new Audio();
    this.audioElement.loop = true;
    this.audioElement.volume = this.defaultVolume; // 50% volume
    this.audioElement.src = '/music/Jashn-E-Bahaaraa.mp3';

    this.audioElement.addEventListener('play', () => {
      this.audioElement.volume = this.defaultVolume;
      this.isPlaying = true;
      this.notify();
    });

    this.audioElement.addEventListener('pause', () => {
      this.isPlaying = false;
      this.notify();
    });

    this.audioElement.addEventListener('ended', () => {
      this.isPlaying = false;
      this.notify();
    });

    this.audioElement.addEventListener('loadedmetadata', () => {
      this.audioElement.volume = this.defaultVolume;
    });

    this.audioElement.addEventListener('canplay', () => {
      this.audioElement.volume = this.defaultVolume;
    });

    this.audioElement.addEventListener('volumechange', () => {
      if (this.audioElement && this.audioElement.volume > this.defaultVolume) {
        this.audioElement.volume = this.defaultVolume;
      }
    });

    // Check if user uploaded a song in this session
    const cachedSongUrl = sessionStorage.getItem('pb_wedding_song_url');
    const cachedSongName = sessionStorage.getItem('pb_wedding_song_name');

    if (cachedSongUrl) {
      this.audioElement.src = cachedSongUrl;
      this.audioElement.volume = this.defaultVolume;
      this.currentTrackName = cachedSongName || 'Custom Wedding Song';
      this.hasCustomSong = true;
      return;
    }

    // If an asset was dropped in src/assets/music/
    if (assetSongUrl) {
      this.audioElement.src = assetSongUrl;
      this.audioElement.volume = this.defaultVolume;
      this.currentTrackName = 'Wedding Melody';
      this.hasCustomSong = true;
      return;
    }

    // Fallback probe
    this.probePublicMusic();
  }

  async probePublicMusic() {
    const candidatePaths = [
      { path: '/music/Jashn-E-Bahaaraa.mp3', name: 'Jashn-E-Bahaaraa' },
      { path: '/music/jashn-e-bahaaraa.mp3', name: 'Jashn-E-Bahaaraa' },
      { path: '/music/song.mp3', name: 'Wedding Song' },
      { path: '/music/wedding.mp3', name: 'Wedding Song' },
      { path: '/music/music.mp3', name: 'Wedding Song' },
      { path: '/music/audio.mp3', name: 'Wedding Song' },
      { path: '/wedding-music.mp3', name: 'Wedding Song' },
    ];

    for (const candidate of candidatePaths) {
      try {
        const res = await fetch(candidate.path, { method: 'HEAD' });
        if (res.ok) {
          if (this.audioElement) {
            this.audioElement.src = candidate.path;
            this.audioElement.volume = this.defaultVolume;
            this.currentTrackName = candidate.name;
            this.hasCustomSong = true;
            this.notify();
            return;
          }
        }
      } catch (e) {
        // continue
      }
    }
  }

  setCustomAudioFile(file) {
    if (!file) return;
    this.init();

    const objectUrl = URL.createObjectURL(file);
    this.audioElement.src = objectUrl;
    this.audioElement.volume = this.defaultVolume;
    this.currentTrackName = file.name;
    this.hasCustomSong = true;

    try {
      sessionStorage.setItem('pb_wedding_song_url', objectUrl);
      sessionStorage.setItem('pb_wedding_song_name', file.name);
    } catch (e) {
      console.log('Session storage error:', e);
    }

    this.play();
  }

  async play() {
    this.init();
    if (!this.audioElement.src) {
      this.audioElement.src = '/music/Jashn-E-Bahaaraa.mp3';
    }

    if (this.audioElement) {
      this.audioElement.volume = this.defaultVolume; // Strictly 50%
      try {
        await this.audioElement.play();
        this.audioElement.volume = this.defaultVolume;
        this.isPlaying = true;
        this.notify();
        return true;
      } catch (err) {
        console.log('Audio playback prevented or deferred:', err);
        this.isPlaying = false;
        this.notify();
        return false;
      }
    }
    return false;
  }

  pause() {
    if (this.audioElement) {
      this.audioElement.pause();
    }
    this.isPlaying = false;
    this.notify();
  }

  toggle() {
    this.init();
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      this.play();
      return true;
    }
  }
}

export const weddingAudio = new WeddingAudioManager();
