<img src=https://user-images.githubusercontent.com/21346239/91862876-7bf3f580-ec3c-11ea-94d6-5236f3867a9c.png width="168" height="168">- M. Chandonnet // GA - SEI // Project #1 -

# Tic-Tac-Toe Game

A basic tic-tac-toe game
1. If required, complete the registration process
2. Login to the game
3. To start a new game, click the "new game" link in the header
4. Have fun!

Scores are tracked on the scoreboard as a running tally for your current session of play

To view a historical list of all games, click the "show all games" link in the header

Password changes can be made using the "change password link" in the header


## Technologies Used

This project was buillt using: HTML5, CSS, SCSS, Bootstrap, Javascript, jQuery, Ajax


## Planning

Initial planning involved a Review of the the scoping and requirets documentation.  This information was used to build user stories and wireframes to create a visual representation of that application.

Devlopment started with creating a basic HTML shell laying out the basic views of the app.  Once the layout was complete, the focus moved to the user side of the application - User creation, user Login, and Password Changes.  Then it was on to basic game actions and reading the data that was generated from basic clicks in an effort to learn how the user interaction was going to influence the game actions.  The next step was to work on actual gameplay actions such as switching users, placing X's and O's on the gameboard, testing for wins, tracking a users record for the active session.  Finally, there were a few API calls, cleaning up some HTML and SaSS to make things look a little better, and lots and lots of testing to find and fix minor bugs, validate that all requirements were being met.


##### The following files were created and used in this project

+ ./index.html: HTML page - presents the UI to the user

+ ./assets/styles/.index.scss: CSS / SaSS - formats the HTML

+ ./assets/scripts/api.js: JavaScript file that makes calls to the API for collecting and updating data

+ ./assets/scripts/app.js: JavaScript file that creates onClick events for the HTML page

+ ./assets/scripts/config.js: JavaScript file that is used for defining URL strings for the API calls

+ ./assets/scripts/events.js: JavaScript file that contains Event handlers - called from app.js

+ ./assets/scripts/gameplay.js: JavaScript file that manages the functions specifically related to gameplay

+ ./assets/scripts/store.js: JavaScript file that stores variables that are needed globally

+ ./assets/scripts/ui.js: JavaScript file that handles promise functions for API calls


## Unsolved Problems
There are a few additional features that I'd like to add, but as far as the technical requirements, I think (hope) that i got them all...


## Additional Features in the works...

+ Continue an unfinished game
+ Delete an unfinished game
+ Recover lost password



#### Wireframes
![Tic-Tac-Toe-Wireframe](https://user-images.githubusercontent.com/21346239/91862735-57981900-ec3c-11ea-8415-71feda54be3b.png)


#### User Stories

+ I would like to be able to create a new user account
+ I should be able to sign-in
+ I should be able to change thier password
+ I should be able to sign out
+ I should be able to start a new game
+ I would like to be notified of a win or loss
+ I would like the spaces to be locked once they are selected
+ I would like the game board to be locked onece a game is over 
+ I would like to be able to see a scoreboard for the current session
+ I would like to be able to see all past games



## Additional Toos used
Developers should run these often!

- `grunt nag` or just `grunt`: runs code quality analysis tools on your code
    and complains
- `grunt make-standard`: reformats all your code in the JavaScript Standard Style
- `grunt <server|serve|s>`: generates bundles, watches, and livereloads
- `grunt build`: place bundled styles and scripts where `index.html` can find
    them
- `grunt deploy`: builds and deploys master branch
