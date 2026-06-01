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
```bash
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
```

## How to Run This Project

1. Clone the repository

   ```bash
   git clone https://github.com/Radianceblue/Questions-4-Dummies-.git
    ```
2. Navigate to the project folder
    ```bash
    cd Questions-4-Dummies-
    ```
3. Install dependencies
    ```bash
    npm install
    ```
4. Create a .env file in the root of the project
    ```bash
    touch .env
    ```
5. Add your Giphy API key to the .env file
    ```bash
    VITE_GIPHY_API_KEY=your_api_key_here
    ```
6. Run the program
    ```bash
    npm run dev
    ```
7. Open the local link provided in the terminal


npm create vite@latest Dummies_Quiz -- --template react

## API Reference

#### Get all items

The project uses 3 APIs which is located inside of src map:

```text
src/api
├── giphyApi.js
├── notFacts.js
└── randomFactsApi.js
```
#### randomFactsApi
randomFactsApi uses the API *random useless facts* with the endpoint:
```text
GET /api/v2/facts/random
```
This fetches a random true fact in JSON format which is later used for the question cards and for search query in the notFacts request.

#### notFacts
notFacts uses the API *False Facts API*. The API takes a search query in the request which generates 6 false belivable "facts" using Claude. This enables us to have somewhat of a theme in the question. To achive this we wait for the response from *randomFactsApi* and slices out the two first words in the response which will be used in the notFacts search request:

```text
GET /api?query={your_topic}

const extractWords = (text) => {
  const facts = text.split(' ').slice(0, 2).join(' ');
  return facts;
};

const query = extractWords(randomFact);
```

#### giphyApi
The giphyApi uses *giphys* offical API to fetch giphs. Depending on how many points the player have got after 10 round, a gif is presented for the users score.

```http
  GET /v1/gifs/search?api_key=&q=${query}&limit=1`
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `query`      | `string` | **Required**. api_key |

    async function FetchGiphsForResult() {
      if(game.correct <= 5) {
        const gifs = await getGiphs("pudgy penguins stone knife sharpening");
        setGifs(gifs); // här sparas gifs som hämtats via api:et. 
        setResultSlogan("You are not the sharpest knife in the toolbox are you");         
      } 
      else if(game.correct >= 6 && game.correct <=8){
        const gifs = await getGiphs("goose");
        setGifs(gifs);
        setResultSlogan("Not to bad, you silly goose!");
      }
      else if (game.correct >= 9){
        const gifs = await getGiphs("dancing cookie");
        setGifs(gifs);
        setResultSlogan("Hey! We have a smart cookie, or maybe you just got lucky?!");
      }
    }
                        

## Contributors

| GitHub | Name |
| :--- | :--- |
| [@Tilly-py](https://github.com/Tilly-py) | Alexander |
| [@PyA99](https://github.com/PyA99) | PyA99 |
| [@Radianceblue](https://github.com/Radianceblue) | Marina Radic |
