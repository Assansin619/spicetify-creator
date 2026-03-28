// Mood definitions with UI themes and characteristics
const MOODS = {
  morning: {
    name: "🌅 Morning",
    colors: { primary: "#FFB84D", secondary: "#FFE4B5" },
    energy: 0.4,
    valence: 0.6,
    tempo: 100,
    description: "Gentle and uplifting",
    playlists: [
      { name: "Good as Hell", artist: "Lizzo" },
      { name: "Morning Vibes", artist: "Spotify" },
      { name: "Peaceful Piano", artist: "Spotify" }
    ]
  },
  coding: {
    name: "💻 Coding",
    colors: { primary: "#7C3AED", secondary: "#3B82F6" },
    energy: 0.6,
    valence: 0.5,
    tempo: 120,
    description: "Focus and flow",
    playlists: [
      { name: "Deep Focus", artist: "Spotify" },
      { name: "Synthwave", artist: "Spotify" },
      { name: "Lo-Fi Beats", artist: "Chilled Cow" }
    ]
  },
  gaming: {
    name: "🎮 Gaming",
    colors: { primary: "#EF4444", secondary: "#DC2626" },
    energy: 0.9,
    valence: 0.7,
    tempo: 140,
    description: "Intense and energetic",
    playlists: [
      { name: "Gaming Beats", artist: "Spotify" },
      { name: "Adrenaline Rush", artist: "Spotify" },
      { name: "Heavy Action", artist: "Trap Vault" }
    ]
  },
  studying: {
    name: "📚 Studying",
    colors: { primary: "#06B6D4", secondary: "#0891B2" },
    energy: 0.3,
    valence: 0.4,
    tempo: 90,
    description: "Calm and focused",
    playlists: [
      { name: "Peaceful Piano", artist: "Spotify" },
      { name: "Study Music", artist: "Spotify" },
      { name: "Classical Essentials", artist: "Spotify" }
    ]
  },
  chill: {
    name: "😎 Chill",
    colors: { primary: "#EC4899", secondary: "#DB2777" },
    energy: 0.2,
    valence: 0.6,
    tempo: 80,
    description: "Relaxed vibes",
    playlists: [
      { name: "Chill Vibes", artist: "Spotify" },
      { name: "Sunset Breeze", artist: "Spotify" },
      { name: "Indie Chillwave", artist: "The Vibe Guide" }
    ]
  },
  party: {
    name: "🎉 Party",
    colors: { primary: "#06B6D4", secondary: "#EC4899" },
    energy: 0.95,
    valence: 0.9,
    tempo: 130,
    description: "High energy fun",
    playlists: [
      { name: "Party Hits", artist: "Spotify" },
      { name: "Dance Party", artist: "Spotify" },
      { name: "RapCaviar", artist: "Spotify" }
    ]
  }
};

// Detect current mood based on time of day
function detectTimeOfDayMood(): string {
  const hour = new Date().getHours();
  
  if (hour >= 5 && hour < 12) return "morning";
  if (hour >= 12 && hour < 17) return "coding"; // afternoon
  if (hour >= 17 && hour < 21) return "chill";  // evening
  return "party"; // night
}

// Apply theme colors to the UI
function applyMoodTheme(mood: string) {
  const moodData = MOODS[mood as keyof typeof MOODS];
  if (!moodData) return;
  
  const style = document.getElementById("mood-sync-style") || document.createElement("style");
  style.id = "mood-sync-style";
  
  style.innerHTML = `
    :root {
      --mood-primary: ${moodData.colors.primary};
      --mood-secondary: ${moodData.colors.secondary};
    }
    
    .mood-sync-container {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 9999;
      background: ${moodData.colors.primary};
      border-radius: 12px;
      padding: 12px 16px;
      color: white;
      font-weight: 600;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      max-width: 300px;
    }
    
    .mood-sync-label {
      font-size: 12px;
      opacity: 0.9;
      margin-bottom: 6px;
    }
    
    .mood-sync-name {
      font-size: 14px;
      margin-bottom: 8px;
    }
    
    .mood-sync-description {
      font-size: 11px;
      opacity: 0.85;
      margin-bottom: 10px;
    }
    
    .mood-sync-buttons {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 6px;
      margin-bottom: 10px;
    }
    
    .mood-sync-btn {
      padding: 6px 8px;
      border: none;
      border-radius: 6px;
      background: rgba(255, 255, 255, 0.2);
      color: white;
      cursor: pointer;
      font-size: 11px;
      font-weight: 500;
      transition: background 0.2s;
    }
    
    .mood-sync-btn:hover {
      background: rgba(255, 255, 255, 0.3);
    }
    
    .mood-sync-btn.active {
      background: rgba(255, 255, 255, 0.5);
    }
    
    .mood-sync-playlists {
      background: rgba(0, 0, 0, 0.15);
      border-radius: 8px;
      padding: 8px;
      margin-bottom: 10px;
    }
    
    .mood-sync-playlist-title {
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      opacity: 0.85;
      margin-bottom: 6px;
    }
    
    .mood-sync-playlist {
      background: rgba(255, 255, 255, 0.15);
      border-radius: 6px;
      padding: 6px 8px;
      margin-bottom: 4px;
      cursor: pointer;
      transition: background 0.2s;
      font-size: 11px;
    }
    
    .mood-sync-playlist:last-child {
      margin-bottom: 0;
    }
    
    .mood-sync-playlist:hover {
      background: rgba(255, 255, 255, 0.25);
    }
    
    .mood-sync-playlist-name {
      font-weight: 600;
      display: block;
    }
    
    .mood-sync-playlist-artist {
      font-size: 9px;
      opacity: 0.8;
    }
    
    .mood-sync-close {
      position: absolute;
      top: 4px;
      right: 6px;
      background: none;
      border: none;
      color: white;
      cursor: pointer;
      font-size: 18px;
      opacity: 0.7;
    }
    
    .mood-sync-close:hover {
      opacity: 1;
    }
  `;
  
  if (!document.getElementById("mood-sync-style")) {
    document.head.appendChild(style);
  }
}

// Create mood selector widget with playlist recommendations
function createMoodWidget(currentMood: string) {
  const existing = document.getElementById("mood-sync-container");
  if (existing) existing.remove();
  
  const container = document.createElement("div");
  container.id = "mood-sync-container";
  container.className = "mood-sync-container";
  
  const label = document.createElement("div");
  label.className = "mood-sync-label";
  label.textContent = "🎵 MOOD SYNC";
  
  const moodData = MOODS[currentMood as keyof typeof MOODS];
  const name = document.createElement("div");
  name.className = "mood-sync-name";
  name.textContent = moodData.name;
  
  const description = document.createElement("div");
  description.className = "mood-sync-description";
  description.textContent = moodData.description;
  
  const buttonsContainer = document.createElement("div");
  buttonsContainer.className = "mood-sync-buttons";
  
  Object.entries(MOODS).forEach(([key, mood]) => {
    const btn = document.createElement("button");
    btn.className = "mood-sync-btn";
    if (key === currentMood) btn.classList.add("active");
    btn.innerHTML = mood.name.split(" ")[0]; // Just emoji
    btn.title = mood.name;
    btn.onclick = () => {
      currentMood = key;
      applyMoodTheme(key);
      createMoodWidget(key);
      Spicetify.showNotification(`Mood changed to ${mood.name}!`);
    };
    buttonsContainer.appendChild(btn);
  });
  
  // Add playlist recommendations
  const playlistsSection = document.createElement("div");
  playlistsSection.className = "mood-sync-playlists";
  
  const playlistTitle = document.createElement("div");
  playlistTitle.className = "mood-sync-playlist-title";
  playlistTitle.textContent = "Recommended Playlists";
  playlistsSection.appendChild(playlistTitle);
  
  moodData.playlists.forEach(playlist => {
    const playlistDiv = document.createElement("div");
    playlistDiv.className = "mood-sync-playlist";
    playlistDiv.onclick = () => {
      Spicetify.showNotification(`Now playing: ${playlist.name}`);
      // Search for playlist in Spotify
      console.log(`Search for playlist: ${playlist.name}`);
    };
    
    const playlistName = document.createElement("div");
    playlistName.className = "mood-sync-playlist-name";
    playlistName.textContent = playlist.name;
    
    const playlistArtist = document.createElement("div");
    playlistArtist.className = "mood-sync-playlist-artist";
    playlistArtist.textContent = playlist.artist;
    
    playlistDiv.appendChild(playlistName);
    playlistDiv.appendChild(playlistArtist);
    playlistsSection.appendChild(playlistDiv);
  });
  
  const closeBtn = document.createElement("button");
  closeBtn.className = "mood-sync-close";
  closeBtn.innerHTML = "×";
  closeBtn.onclick = () => container.remove();
  
  container.appendChild(closeBtn);
  container.appendChild(label);
  container.appendChild(name);
  container.appendChild(description);
  container.appendChild(buttonsContainer);
  container.appendChild(playlistsSection);
  document.body.appendChild(container);
}

// Main initialization
async function main() {
  while (!Spicetify?.showNotification) {
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  // Get initial mood based on time of day
  const initialMood = detectTimeOfDayMood();
  
  // Apply theme
  applyMoodTheme(initialMood);
  
  // Create widget
  createMoodWidget(initialMood);
  
  // Show notification
  const moodName = MOODS[initialMood as keyof typeof MOODS].name;
  Spicetify.showNotification(`🎧 Mood Sync Active: ${moodName}`);
  
  // Log mood data for developer console
  console.log("🎵 Mood Sync Started", {
    detectedMood: initialMood,
    moodData: MOODS[initialMood as keyof typeof MOODS]
  });
}

export default main;
