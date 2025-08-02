# 🎵 Music Player

A modern, lightweight music player built using **HTML, CSS, and Vanilla JavaScript**.  
This player features track thumbnails, play/pause controls, next/previous navigation, volume control, and a dynamic progress bar — all in a **single HTML file**.

---

## ✨ Features

- **Play / Pause Control**  
  Toggle between play and pause with a single button.  

- **Next / Previous Navigation**  
  Easily switch between tracks with smooth thumbnail transitions.  

- **Volume Control with Persistence**  
  The chosen volume level is saved in `localStorage` and restored on reload.  

- **Track Progress & Seeking**  
  Displays the current time and total duration; allows scrubbing with the progress bar.  

- **Dynamic Track Info & Thumbnail**  
  Updates track title and thumbnail when switching songs.  

- **Smooth Animations**  
  Thumbnail fade transition for a polished look.

---

## 🗂 File Structure

```
project/
│
├── index.html      # Single HTML file (contains HTML, CSS, JS)
├── audio/          # Folder containing MP3 files
│   ├── 0.mp3
│   ├── 1.mp3
│   ├── 2.mp3
│   └── 3.mp3
└── photo/          # Folder containing track thumbnails
    ├── 0.png
    ├── 1.png
    ├── 2.png
    └── 3.png
```

---

## 🚀 Getting Started

### 1. Clone the repository or download the files
```bash
git clone https://github.com/yourusername/music-player.git
```

### 2. Add your audio and thumbnail files
- Place `.mp3` files in the `audio/` folder.
- Place corresponding `.png` (or `.jpg`) thumbnails in the `photo/` folder.

### 3. Update the track list
Inside `index.html`, locate this section in the `<script>` tag:
```javascript
let music = [
    { "src": "./audio/0.mp3", "info": "Marwan Pablo - BONO", "thumbnail": "./photo/0.png" },
    { "src": "./audio/1.mp3", "info": "Marwan Pablo - LELLEY YAH", "thumbnail": "./photo/1.png" },
    { "src": "./audio/2.mp3", "info": "Wegz - El WA3D", "thumbnail": "./photo/2.png" },
    { "src": "./audio/3.mp3", "info": "Abyusif - SWLGN", "thumbnail": "./photo/3.png" }
];
```
Change the file paths and titles to match your songs.

### 4. Open in browser
Simply open `index.html` in your preferred browser — no server required.

---

## 🎨 Customization

### Change the Theme
- Modify the gradient background in the CSS section:
```css
body {
    background: linear-gradient(135deg, #1e1e2f, #2a2a4a);
}
```

### Adjust Fade Animation
- Change the fade duration for thumbnail transitions:
```css
#thumbnail {
    transition: opacity 0.3s ease;
}
```

### Add More Tracks
- Extend the `music` array in `index.html` with additional track objects.

---

## 🧩 How It Works

- **LocalStorage**
  - Saves the last played track index (`current`) and volume level (`volume`).
  - Restores them when the page reloads.

- **Progress Tracking**
  - `ontimeupdate` updates the progress bar and time display.
  - Clicking/dragging the range input seeks to the chosen position.

- **Thumbnail Transitions**
  - CSS class `fade` is toggled to smoothly animate image changes.

---

## 🛠 Technologies Used

- **HTML5** for structure
- **CSS3** for styling & animations
- **JavaScript (ES6)** for interactivity
- **Font Awesome 6** for control icons

---

## 📸 Screenshots

*(Add screenshots of your player UI here — e.g., `screenshot1.png`, `screenshot2.png`)*

```
![Music Player Screenshot](./screenshot1.png)
```

---

## 📄 License

This project is free to use, modify, and distribute for personal and educational purposes.

---

## 🙌 Credits

Created by **[Your Name]** — inspired by modern minimal music players.
