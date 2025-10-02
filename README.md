# USIU First-Year Companion (v1)

A lightweight, static microsite designed to welcome new USIU students during Orientation Week.

## Project Summary

**What:** A simple web application that provides personalized greetings, campus cost estimation, and basic theme switching functionality for new USIU students.

**Why:** USIU's Student Affairs office needs a quick orientation helper to assist first-year students with campus cost planning and provide a welcoming digital experience during their first week.

**Who:** Built for new USIU students during Orientation Week, developed as a vanilla JavaScript MVP that will later be expanded into a full application.

## Features

- **Personalized Greeting**: Welcomes students by name using JavaScript prompts
- **Cost Estimator**: Calculates weekly transport and snack expenses with savings tips
- **Theme Toggle**: Simple day/night mode switching
- **Mobile-First Design**: Optimized for mobile devices
- **Docker Support**: Containerized for easy deployment

## How to Run Locally (No Docker)

Open `public/index.html` in your web browser.

## How to Build/Run with Docker

docker build -t usiu-first-year:v1 .
docker run -p 8080:80 usiu-first-year:v1

Open http://localhost:8080

## Project Structure

usiu-first-year-companion/
├─ design/
│ ├─ wireframe-home.png
│ ├─ wireframe-estimator.png
│ └─ notes.md
├─ public/
│ ├─ index.html
│ ├─ styles.css
│ └─ script.js
├─ Dockerfile
├─ .dockerignore
└─ README.md


## Technology Stack

- **HTML5**: Semantic structure with accessibility features
- **CSS3**: Mobile-first responsive design with CSS variables
- **Vanilla JavaScript**: ES6+ features for interactivity (prompts, DOM manipulation, console logging)
- **Docker**: Nginx-based containerization for deployment

## Usage Instructions

1. **Initial Load**: Enter your first name when prompted
2. **Run Estimator**: Click "Run Estimator" button and answer the cost-related prompts:
   - Days per week on campus
   - Transport cost per trip (KSh)
   - Snacks per day
   - Average snack price (KSh)
3. **View Results**: Check the weekly cost summary with savings suggestions
4. **Toggle Theme**: Switch between light and dark modes
5. **Debug**: Open browser console (F12) to view logged calculation details

## Known Limitations & Next Steps

### Current Limitations
- Uses basic `prompt()` dialogs instead of proper forms
- No input validation or error handling
- Static data with no persistence
- Limited to basic arithmetic calculations
- Theme toggle only affects background and text color

### Planned Improvements (Future Versions)
- Replace `prompt()` with proper HTML forms and input validation
- Add data persistence using localStorage or backend integration
- Integrate with USIU student database for personalization
- Add more campus services and cost categories (meals, books, accommodation)
- Implement responsive form layouts for better mobile experience
- Add user authentication and profile management
- Include real-time campus service information
- Expand cost calculator with semester/yearly projections

## Development Context

This project was built using only Lesson 1 JavaScript concepts including:
- Variables and basic data types
- Arithmetic operators
- `prompt()` and `alert()` functions
- DOM manipulation with `getElementById()` and `innerText`
- Event listeners
- Console logging for debugging

No external frameworks or libraries were used to meet assignment constraints.

## Academic Integrity

This project includes USIU-specific context such as:
- Kenyan Shilling (KSh) currency for realistic local costs
- Thika Road commute considerations
- Local snack pricing
- USIU Student Affairs branding



# USIU-First-Year-Companion
# USIU-First-Year-Companion
# USIU-First-Year-Companion
