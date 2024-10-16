# Jeoparty! 
Jeoparty! is an online version of the classic game Jeopardy, but with a twist: all questions are generated with AI.
This project was made for the course DH2643 at KTH, by Emily Nilsson, Patrik Larsson, Olle Sköld and Felicia Atterling.

## How To Play
Welcome to Jeoparty!, the game where knowledge meets competition and fun! Whether you’re playing with one player or a team of six, this game is designed for everyone—no matter your age. Just gather around one screen, and let the party begin!

Ready to kick things off? First, you’ll set up your custom Jeoparty game! Choose your question categories, and add a little flair by specifying the context. Do you want the questions to have a movie twist? Or maybe an animal-themed challenge? Whatever it is, OpenAI will work its magic to create a brand new game, totally unique to your situation!

But wait, it’s not a game without teams! Gather your players, form your dream teams, and pick your team colors to represent your crew in style. With everything set up, it’s time to dive in!

Just like the classic Jeopardy, the game board is yours to conquer. Teams take turns selecting a question from the categories. Feeling brave? Pick a higher point value and see what challenge awaits! After all the points are tallied up, one team will rise victorious! But no matter who wins, the ultimate goal is to have a blast! Jeoparty! is all about having fun, learning a thing or two, and enjoying time with friends or family. So, laugh, guess wildly, and cheer each other on as you play through the game.

Now, what are you waiting for? It’s time to play Jeoparty!

### Deployment
https://jeoparty-puce.vercel.app/

### Design
Link to our Figma: https://www.figma.com/design/Naz6CvGBCQqWv9vnRFxCNy/JeoParty?node-id=8-3&t=mj2fDfg0KbC6P95U-1 

### Archtitecture
![Tech_graphic](https://github.com/user-attachments/assets/79eb07ab-6fdf-4036-8a99-c753d37d0992)

### Testing
Vitest is used for component testing. All the testfiles are located in ../frontend/__tests__. To run all tests, "cd fronted", then "npx vitest run" in the terminal. To run a specific test, use "npx vitest run filename".

IMPORTANT NOTE: To run vitest, make sure tsconfig.json, located in ../frontend is set to "jsx": "react-jsx" and not "jsx": "preserve". This value is changed by next.js every time "npm run dev" is executed and needs to be changed back manually before running tests.

### The developers  
[Felicia Atterling](https://github.com/feliciaatterling)

[Patrik Larsson](https://github.com/larssonpatrik)

[Emily Nilsson](https://github.com/emlinem)

[Olle Sköld](https://github.com/OlleSkold)
