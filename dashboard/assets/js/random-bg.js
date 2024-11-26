// If this will be hosted somewhere and images have a consistent naming format, this is more concise:

function randomizeBG() {
   const numberOfPhotos = 4

   function getRandomInt(max) {
      let int = 1 + Math.floor(Math.random() * max);
      if (int > max) { int -= 1 } // unlikely edge case of max being exceed by +1
     return int
   }

   const currentPhotoNumber = getRandomInt(numberOfPhotos);
   document.body.style.backgroundImage = `url(./assets/img/background-00${currentPhotoNumber}.jpg)`;
}

if (localStorage.getItem("settingsRandomBG") === "false") {
   document.body.style.backgroundImage = `url(./assets/img/background-001.jpg)`;
} else {
   randomizeBG()
}


/*
// For more flexibility in file naming and file path, every single photo could be listed. Example:

const images = [
        "./assets/img/background-001.jpg",
        "https://example.com/some/path/some-cool-image.jpg",
        "./assets/img/beautiful-forest.jpg",
        "file:///Users/johndoe/Settings/backgrounds/sunset_at_the_beach.jpg" // <-- Only works locally
    ];

    const randomIndex = Math.floor(Math.random() * images.length);
    document.body.style.backgroundImage = `url(${images[randomIndex]})`;
*/
