# USIU First-Year Companion - Design Notes

## Wireframe Overview
Mobile-first wireframes designed for USIU students during Orientation Week, focusing on realistic campus cost planning with local context.

## wireframe-home.png - Initial State
- **Purpose**: Welcome screen after name prompt with USIU branding
- **Key Elements**: Personalized greeting, USIU-specific button text, campus-focused messaging
- **JavaScript Interaction**: Page load triggers prompt("Karibu to USIU! What's your first name?"), followed by alert and DOM manipulation to set greeting text
- **USIU Context**: Updated button text from generic "Run Estimator" to "Calculate My Weekly Costs" for campus-specific focus

## wireframe-estimator.png - Results Display  
- **Purpose**: Shows detailed cost breakdown after user completes all prompts
- **Key Elements**: Thika Road transport costs, local snack pricing (samosas, mandazi), personalized output
- **JavaScript Interaction**: Four prompts collect campus days, transport costs, snack habits, then arithmetic calculations update summary section using innerText
- **USIU Context**: 
  - Transport: "Thika Rd-USIU" route specification
  - Local pricing: Realistic KSh amounts for campus snacks
  - Personalized line: "Generated for: [Name]'s USIU Student Account"
  - Concrete tip: Carpooling and lunch-bringing suggestions

## wireframe-theme.png - Night Mode
- **Purpose**: Demonstrates theme toggle functionality for different campus hours
- **Key Elements**: Dark background (#1a1a2e), light text (#eee), maintained readability
- **JavaScript Interaction**: toggleTheme() function modifies document.body.style properties as per Lesson 1 constraints
- **USIU Context**: "USIU Night Mode for late study sessions" console logging

## Design Decisions
1. **Mobile-First**: All wireframes optimized for mobile devices (primary student usage)
2. **Local Context**: Embedded Kenyan transport costs, local food references, realistic pricing
3. **Academic Integrity**: Personalized output prevents copy-paste, includes concrete USIU scenarios
4. **Accessibility**: High contrast maintained in both light and dark themes
5. **User Flow**: Single-page application with clear action buttons and immediate feedback

## Technical Implementation Notes
- All interactions use only Lesson 1 JavaScript concepts (prompts, alerts, basic DOM manipulation)
- Console logging throughout for debugging and grading verification
- No external frameworks, pure vanilla JavaScript as required
- Docker containerization ready with static file serving
