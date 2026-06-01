# Questions-4-Dummies-

A fun quiz game with true and false facts for you to guess. Collect points and see dummie status. If you see a fact you like you can always save it for later.

# Functions provided in the game:

    - Guess witch random fact is correct by clicking the chosen card
    - View the correct answer that turns green
    - See the current score
    - Be presented by the final score and a matching funny gif
    - Save your favorite true fact by clicking the star frame
    - View your collection of favorite facts below the game

# This project is built with:

    - JavaScript
    - React
    - Vite
    - Bootstrap
    - Css

# File tree

src
├── App.css
├── App.jsx
├── api
│   ├── giphyApi.js
│   ├── notFacts.js
│   └── randomFactsApi.js
├── assets
│   ├── LetterA 2.png
│   ├── LetterA.png
│   ├── LetterB 2.png
│   ├── LetterB.png
│   ├── LetterC 2.png
│   ├── LetterC.png
│   ├── filled_star.png
│   └── star_frame.png
├── components
│   ├── FavoriteButton
│   │   ├── FavoriteButton.css
│   │   └── FavoriteButton.jsx
│   ├── FavoriteFacts
│   │   ├── FavoriteFacts.css
│   │   └── FavoriteFacts.jsx
│   ├── Giphys
│   │   ├── Giphs.css
│   │   └── Giphs.jsx
│   ├── NextQuestion
│   │   ├── NextQuestion.css
│   │   └── NextQuestion.jsx
│   ├── QuestionCard.jsx
│   │   ├── QuestionCard.css
│   │   └── QuestionCard.jsx
│   ├── ResetGameButton
│   │   ├── ResetGameButton.css
│   │   └── ResetGameButton.jsx
│   ├── SkeletonCard
│   │   ├── SkeletonCard.css
│   │   └── SkeletonCard.jsx
│   ├── Status
│   │   ├── Status.css
│   │   └── Status.jsx
│   └── Status 3
├── context
│   └── GameLogic.jsx
├── fallBackData
│   └── fallBackData.json
├── index.css
└── main.jsx

# To run this program you will have to:

    - Clone the repository --> bash: git clone https://github.com/Radianceblue/Questions-4-Dummies-.git
    - Install dependencies --> bash: npm install
    - Run the program --> bash: npm run dev --> click on the provided link to open the webpage

npm create vite@latest Dummies_Quiz -- --template react
