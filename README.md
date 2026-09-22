# 🎂 Age Calculator & Personality Hub

A modern, responsive age calculator built with vanilla HTML, CSS, and JavaScript. Enter a date of birth to explore your exact age, upcoming birthday, zodiac sign, birthday matches, and MBTI-based recommendations.

> **Note:** The repository name contains a typo (`Age-canculator`). The application itself is an age calculator.

## ✨ Features

- Calculate age in **years, months, and days**
- Display elapsed **hours, minutes, and seconds** in real time
- Show the date's **day of the week**
- Calculate the number of days until the next birthday
- Display the corresponding **zodiac sign**
- Find famous people with the same birthday or birth month
- Get anime, movie, and celebrity recommendations by **MBTI type**
- English and Uzbek language support
- Dark and light themes
- Upload a profile picture locally
- Share results using the Web Share API or clipboard fallback
- Export an age report as an HTML file
- Save preferences locally with `localStorage`
- Responsive design for mobile, tablet, and desktop
- Accessibility-friendly labels and live regions

## 🛠️ Technologies

- HTML5
- CSS3
- JavaScript (ES6+)
- Web APIs: `localStorage`, `FileReader`, `navigator.share`, and `Blob`
- No frameworks or build tools required

## 🚀 Getting Started

### Run locally

1. Clone the repository:

   ```bash
   git clone https://github.com/Shaxriyor1227/Age-canculator.git
   ```

2. Open the project directory:

   ```bash
   cd Age-canculator
   ```

3. Open `index.html` in your browser.

For the best development experience, serve the folder with a local web server, such as the **Live Server** extension in VS Code.

## 📁 Project Structure

```text
Age-canculator/
├── index.html   # Application markup and page structure
├── styles.css   # Responsive layout, themes, and animations
├── script.js    # Age calculations and interactive features
└── README.md    # Project documentation
```

## 🧭 How to Use

1. Select your date of birth.
2. View your calculated age and additional birthday information.
3. Optionally upload a profile picture.
4. Select an MBTI type to see recommendations.
5. Switch between English and Uzbek or toggle the color theme.
6. Use **Share** or **Export Report** to save or share your results.

## 🔒 Privacy

The application runs in the browser. Date of birth, theme, language, MBTI selection, and profile picture preferences are stored locally in your browser using `localStorage`. No server or database is used by this project.

Avoid using a personal date of birth on a shared device if you do not want it saved in that browser.

## 📱 Browser Support

The project works in modern browsers that support JavaScript, CSS Grid, `localStorage`, and standard Web APIs. Sharing depends on browser and device support; browsers without the Web Share API use a clipboard fallback.

## 🔮 Possible Improvements

- Add automated tests for leap years and birthday edge cases
- Add a real PDF generator instead of exporting an HTML report
- Expand the famous-birthday database
- Add more languages
- Add a deployed live demo
- Improve date handling for users in different time zones

## 👤 Author

**Shaxriyor Ro'zmamatov**

- GitHub: [@Shaxriyor1227](https://github.com/Shaxriyor1227)

## 📄 License

No license has been added yet. Add a license file if you want others to legally reuse, modify, and distribute this project.
