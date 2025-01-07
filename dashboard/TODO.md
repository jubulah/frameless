# TODOs

## Widgets to Add

  - **Settings:** Dark / Light Theme
  - **Quotes of the Day:** randomly generated generic "TEAMWORK MAKES THE DREAM WORK" or "SUCCESS IS A JOURNEY" type quotes
  - **TPS:** Graph of TPS reports: on time, late, outstanding
  - **Morale:** Downward graph of morale
  - **Keystrokes:** Stoneflask style, live graph of employee keystrokes per minute
  - **Employees Location:** At Desk, Away From Desk, Not In Office <-- We
  - **Login System:** user: lumbergh password: initiative123



To change the theme immediately when the toggle is clicked (without waiting for a page reload), you can update the theme dynamically using JavaScript. This can be done by modifying the `document.documentElement` class (or another relevant class on the body or HTML element) to switch between light and dark modes, and optionally saving the user's theme preference in `localStorage` so that it persists across sessions.

Here's a basic implementation:

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Theme Toggle</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div>
    <button id="theme-toggle">Toggle Theme</button>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

### CSS (styles.css)

```css
/* Default (Light Theme) */
body {
  background-color: white;
  color: black;
  transition: background-color 0.3s, color 0.3s;
}

.dark-theme {
  background-color: #333;
  color: white;
}
```

### JavaScript (script.js)

```javascript
// Check if a theme is saved in localStorage
const savedTheme = localStorage.getItem('theme');

// If saved theme exists, apply it immediately
if (savedTheme) {
  document.documentElement.classList.add(savedTheme);
}

// Get the toggle button
const themeToggle = document.getElementById('theme-toggle');

// Toggle theme when button is clicked
themeToggle.addEventListener('click', () => {
  // Toggle the dark-theme class on the <html> or <body> element
  if (document.documentElement.classList.contains('dark-theme')) {
    document.documentElement.classList.remove('dark-theme');
    localStorage.setItem('theme', ''); // Save the light theme preference
  } else {
    document.documentElement.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark-theme'); // Save the dark theme preference
  }
});
```

### How It Works:
1. **Theme Toggle Button**: The button with `id="theme-toggle"` listens for clicks and toggles between the light and dark themes.
2. **Immediate Theme Change**: When the button is clicked, the `dark-theme` class is either added or removed from the `document.documentElement`, which is the `<html>` element. This immediately applies the respective theme without needing to reload the page.
3. **Persisting Theme Preference**: The current theme is stored in `localStorage` under the key `'theme'`. When the page is reloaded, JavaScript checks the stored theme and applies it right away.

This ensures that your theme toggle will work immediately, and the theme preference will persist even after the page is reloaded. If you want to apply the theme based on the user's system preferences initially, you could use `window.matchMedia('(prefers-color-scheme: dark)')` to set the initial theme accordingly, but the above solution focuses purely on the user-driven toggle mechanism.