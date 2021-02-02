# Whack-A-Mole Challenge
Whack-A-Mole game, built in React JS

## The Challenge - Implement a "whack-a-mole" game
*A typical Whac-A-Mole machine consists of a waist-level cabinet with a play area and display screen, and a large, soft, black mallet. Five holes in the play area top are filled with small plastic moles, which pop up at random. Points are scored by whacking each mole as it appears. The faster the reaction the higher the score.*
[https://en.wikipedia.org/wiki/Whac-A-Mole](https://en.wikipedia.org/wiki/Whac-A-Mole)

The screen should display a series of 7 holes. At set intervals a mole appears on a random hole and stays there for a short amount of time. When the player clicks on a mole it disappears and the player gets one point. 

A timer counts down from one minute and the final score is the number of points they have when the timer reaches zero. **The functionality is more important than the design** and you can choose any technologies you like but the game needs to run at least on Google Chrome. 

Implement a simple server that saves the highest 10 scores (and respective player names). At the end of each game a leaderboard is shown with the highest scores.

You can use common helper libraries or frameworks such as jQuery but the core functionality must be developed by you.

**🍪 Extra Points**

If you have time, you can also try to implement some of these (in no particular order)

- Have the mole appear for increasingly shorter amounts of time and at random intervals of time.
- Occasionally introduce more than one mole at a time.
- Implement a simple mechanism to make it harder for attackers to submit fake high scores.
- Add simple graphics and animations.

**Tip: Keep it simple** – Think of the simplest way you can implement this game within the very contrained timeframe. Don't be afraid of taking hacky shortcuts, just use the second challenge to discuss what you would do differently on a real-world scenario.

## Actions ⚡

### Client
In the client directory, you can run:

#### `npm start`
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

#### `npm run build`
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

### Server

#### `npm run serve`
Runs the server.
The server will reload if you make edits.
