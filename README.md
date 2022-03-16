<h1 align="center" id="top">ROCK PAPER SCISSORS LIZARD SPOCK</h1>

__You can find the live link here: [RPS LIZARD SPOCK](https://cla-cif.github.io/RPS-Lizard-Spock/)__

An extended version of the classic rock-paper-scissors game: [The Big Bang Theory](https://bigbangtheory.fandom.com/wiki/Rock,_Paper,_Scissors,_Lizard,_Spock) edition. Extention includes Lizard and Spock choices. The user plays against the computer, which randomly selects his choices. Whoever reaches 10 first wins the game. 

As this project was developed during the Russian aggression against Ukraine, the colours of the [Ukrainian flag](https://en.wikipedia.org/wiki/Flag_of_Ukraine) have been chosen as a sign of support. On the homepage there's a [Click me](https://cla-cif.github.io/RPS-Lizard-Spock/support.html) link that leads to a support page with some details and useful links to support Ukraine and not the developer of the website. 

The game has a simple interface, it's intuitive and easy to use. 
The support page conveys a short but effective message.

![Landing page](https://github.com/cla-cif/RPS-Lizard-Spock/blob/main/assets/screenshots/home.png)
![Support page](https://github.com/cla-cif/RPS-Lizard-Spock/blob/main/assets/screenshots/support.png)

## Content
- [About the game](#About-the-game)
- [User Experience](#User-Experience-(UX))
- [Features](#Features)
- [Technologies used](#Technologies-used)
- [Testing](#Testing)
- [Deployment](#Deployment)
- [Credits](#Credits)
- [Extra](#Extra)

## About the game
-   ### The rules:
    - Pick one of the five hand signals and the computer will randomly make his choice from the same five hand signals. 
    - 1 point is assigned to the winner. The one who gets to 10 first, wins the match. 
    - If the two players make the same object, it's a tie. Play again to determine the winner.
    - Remember who wins:
        - Scissors cuts paper.
        - Paper covers rock.
        - Rock crushes lizard.
        - Lizard poisons Spock.
        - Spock smashes scissors.
        - Scissors decapitates lizard.
        - Lizard eats paper.
        - Paper disproves Spock.
        - Spock vaporizes rock.
        - Rock crushes scissors.
    - The rules explained by Sheldon from "The Big Bang Theory" in a [video](https://www.youtube.com/watch?v=Kov2G0GouBw) and by [WikiHow](https://www.wikihow.com/Play-Rock-Paper-Scissors-Lizard-Spock). 

- ### Trivia about the game:

    - [Sam Kass](http://www.samkass.com/theories/RPSSL.html) and Karen Bryla invented the game Rock, Paper, Scissors, Lizard, Spock as an extension of the world’s most famous hand game.  
    - The first known mention of the game dates back to the time of the Chinese Han dynasty (206 BCE – 220 CE). [Wikipedia](https://en.wikipedia.org/wiki/Rock_paper_scissors#cite_note-9).
    - Robots from the [University of Tokyo](http://ishikawa-vision.org/fusion/Janken/index-e.html) may have a 100% winning rate, but your computer doesn't. [Watch the video](https://www.youtube.com/watch?v=ZVNnoOcohaU&t=33s).
    - Bacterias like to [play](https://ucsdnews.ucsd.edu/pressrelease/e.coli-play-rock-paper-scissors) too. 
    - Play two rounds and you have (p/(p+q))2 [chanches](https://math.stackexchange.com/questions/376187/probability-game) to win! Let's [play!](https://cla-cif.github.io/RPS-Lizard-Spock/)


## User Experience (UX)

-   ### User stories

    -   #### First-time Visitor Goals

        1. As a First-time visitor, I want to play a simple and intuitive game. 
        2. As a First-time visitor, I want to learn more about the project and its developer. 
        3. As a First-time first-time visitor with an impairment, I want to be able to read all the text by myself or with a screen reader and find colours that are not misleading.
        
    -   #### Returning Visitor Goals

        1. As a returning visitor, I want to find the same game but with less bugs. 
        2. As a returning visitor with a disability, I want to find the same or even better accessibility than before.
        
-   ### Wireframes

The site is designed with an intuitive layout, it is accessible, easy to browse, with the absolutely necessary information and less invasive images.
[Balsamiq](https://balsamiq.com/) was used to put "ideas on paper". 

Home page: [Desktop](https://github.com/cla-cif/RPS-Lizard-Spock/blob/main/assets/screenshots/Main%20desktop.png) / [Mobile](https://github.com/cla-cif/RPS-Lizard-Spock/blob/main/assets/screenshots/Main%20mobile.png) 

Support page: [Desktop](https://github.com/cla-cif/RPS-Lizard-Spock/blob/main/assets/screenshots/Support%20desktop.png) / [Mobile](https://github.com/cla-cif/RPS-Lizard-Spock/blob/main/assets/screenshots/Support%20mobile.png) 

-  ### Design

    - __Colours__
        -   The three main colours used are a shade of white, yellow and blue. Yellow and blue were chosen as a tribute to the Ukrainian, which was ravaged by war at the time this project was created. White was chosen to achieve an optimal contrast ratio between the background and the text. 
    - __Typography__
        -   The font "Smooch Sans" from Google Fonts was chosen for its modern, captivating and playful style. 
    - __Images__
        -   The svg files for user and computer choice are clear, simple and display optimally on all screens.
        
## Features 

-   Responsive on all device sizes.
-   Accessible for users with hearing and visual impairments.
-   Interactive elements.

![Home page screenshot from Am I Responsive webpage](https://github.com/cla-cif/RPS-Lizard-Spock/blob/main/assets/screenshots/responsive-home.png)
![Support page screenshot from Am I Responsive webpage](https://github.com/cla-cif/RPS-Lizard-Spock/blob/main/assets/screenshots/responsive-support.png)
How it looks like on iPhone 12: [Home page](https://github.com/cla-cif/RPS-Lizard-Spock/blob/main/assets/screenshots/Homepage%20layout%20on%20iPhone%2012.jpg) / [Support page](https://github.com/cla-cif/RPS-Lizard-Spock/blob/main/assets/screenshots/Support%20page%20layout%20on%20iPhone%2012.png)

- Note:
    - Given the recreative/social purpose of the project, links to the developer's social media were not deemed necessary. 
    - Given the size of the project, a .xml sitemap was not deemed necessary. 

### Existing Features - Home page

- __Header__

  - The Header contains the name of the game (Rock Paper Scissors Lizard Spock), the challenge (Who gets to 10 first?) and the links to the 'Support' page, called by the message "Psst! Click me". The header bar is fixed to the top, the page is not scrollable and intended to fit the viewheight. The header's text is white on a blue background.
 
![Header](https://github.com/cla-cif/RPS-Lizard-Spock/blob/main/assets/screenshots/header.png)

- __Main section__

  - The main section contains the score area, the game area split in two (user's and computer's) and the reset button. 

![Main](https://github.com/cla-cif/RPS-Lizard-Spock/blob/main/assets/screenshots/main.png)

- __Scores area__

  - The 'Scores area' is split in three equally sized section. In this area is tracked the user's score on the left and the computer's on the right. In the middle a message with the result of the game ("You won! or "Computer won!") and of the match as soon as 10 points are reached by one of the two opponents ("You won the match!", "Computer won the match!");

![Scores area](https://github.com/cla-cif/RPS-Lizard-Spock/blob/main/assets/screenshots/score-area.png)

- __Game area__

  - The 'Game area' is split in two: the user's choices are presented on the left and highlighted in blue on hover. Computer's choices are on the right but initially are not visible. 
  - The game starts with the user clicking on one of the five icons. The click will generate a random number associated with the computer's choice. The computer choiche will ve visible for 1.5 seconds. The winner of the game is calculated based on the game's rules, the winner is announced by a temporary message appearing between the two scoreboards. One point is assigned to the winner and visible on the respective scoreboard. 
  
![Game area](https://github.com/cla-cif/RPS-Lizard-Spock/blob/main/assets/screenshots/game-area.png)

- __Reset area__ 

  - The 'Reset area' section presents a minimalistic 'Reset' button, consistent in style with the rest of the page's objects. 
  - The game can be restarted by the user at any point clicking the reset button but it's automatically reset once one of the two opponents reaches 10 points. 

![Reset area](https://github.com/cla-cif/RPS-Lizard-Spock/blob/main/assets/screenshots/reset-area.png)

- __The Footer__ 

  - The 'Footer' shows the name of the developer and the year the project was created. The text is black on a yellow background. 
  - The footer sticks to the bottom.
  
![Footer](https://github.com/cla-cif/RPS-Lizard-Spock/blob/main/assets/screenshots/footer.png)

- __Other features__ 
    - The website has an [apple-touch-icon](https://github.com/cla-cif/RPS-Lizard-Spock/blob/main/assets/icons/apple-touch-icon.png) to make the page stand out from other bookmarks, with a representation of an atom: a tribute to The Big Bang Theory TV series. 
    - The website has an [Atomic representation Favicon](https://github.com/cla-cif/RPS-Lizard-Spock/blob/main/assets/icons/game-favicon.ico) to make the home page easy to find among the many open tabs.
    - The website has two hands embracing a [hearth with Ukranian colors favicon](https://github.com/cla-cif/RPS-Lizard-Spock/blob/main/assets/icons/support-favicon.ico) to make the support page easy to find among the many opens tabs and to spread a support message in favor of the Ukraninan people. 
    - The website has a "Google site verification" to verify the website's ownership as shown [here](https://search.google.com/search-console/ownership?resource_id=https%3A%2F%2Fcla-cif.github.io%2FRPS-Lizard-Spock%2F).
    - The site has keywords and a description of appropriate length to give the user a brief impression of the site on the browser results page.

### Existing Features - Support page

- __Header__

  - The Header is minimalistic, matches the color of the home page and the size of the footer. It has one home icon and the label 'Home' on the top left area. The label has been added for a better accessibility. 
 
![Header](https://github.com/cla-cif/RPS-Lizard-Spock/blob/main/assets/screenshots/header-support.png)

- __Main section__

  - The main section contains the developer's message to the user and a link to [support Ukraine](https://supportukrainenow.org/). The message is brief, simple but effective. The link, styled as a button, matches the Ukranian flag on default and on hover.  

![Main](https://github.com/cla-cif/RPS-Lizard-Spock/blob/main/assets/screenshots/main-support.png)

- __The Footer__ 

  - The 'Footer' shows the name of the developer and the year the project was created. The text is black on a yellow background. 
  - The footer sticks to the bottom.
  
![Footer](https://github.com/cla-cif/RPS-Lizard-Spock/blob/main/assets/screenshots/footer.png)

### Features to implement

- Add privacy policy and copyright information. 
- Get the website a domain name. 
- Add choices and levels to increase complexity. If users will like the project and ask for further development, here are some [ideas](https://www.naturphilosophie.co.uk/winning-rock-paper-scissors-lizard-spock/). 
![Expansion](https://raw.githubusercontent.com/cla-cif/RPS-Lizard-Spock/main/assets/screenshots/Rock_Paper_Scissors_Lizard_Spock_Spider-Man_Batman_Wizard_Glock.webp)

## Technologies used

### Languages used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries & Programs Used

- [Google Fonts:](https://fonts.google.com/)
    - Google Fonts were used to import the 'Smooch Sans' font into the HTML pages (home and suppor). 
- [Font Awesome:](https://fontawesome.com/)
    - Font Awesome was used for the home icon of the 'support page' header.
- [Gitpod](https://www.gitpod.io/)
    - Gitpod Dashboard was used to write the code and its terminal to 'commit' to Git and 'push' to GitHub.
- [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.
- [Iconfinder](https://www.iconfinder.com/)
    - Favicons (.ico) and apple touch icons (.png) are from Iconfinder.
- [Balsamiq:](https://balsamiq.com/)
    - Balsamiq was used to create the [wireframe](https://github.com/cla-cif/english-with-claudia/blob/main/screenshot/index-wireframe.png) before the deployment process began.
 
## Testing 

### General Testing 

The website's features were thoroughly tested using some well-known free web testers. Both pages (home page and support page) were tested.

- __Web Responsive__
    - The responsive feature has been tested using Chrome DevTools and an online Web Design checker from [Media Genesis](https://responsivedesignchecker.com/). 
Here is the result of the [Home page](https://responsivedesignchecker.com/checker.php?url=https%3A%2F%2Fcla-cif.github.io%2FRPS-Lizard-Spock%2F&width=1400&height=700) and here is the result of the [Support page](https://cla-cif.github.io/RPS-Lizard-Spock/support.html).
The website's layout has been tested on a range of different screen sizes, from small 320x480 screens (e.g. Apple iPhone 3) to widescreen 24" and their landscape view providing a good user experience. 
    - The website has passed the [Google mobile-friendly test](https://search.google.com/test/mobile-friendly/result?id=OPXjC51ESN7aQgtAmaf9Uw).

- __Accessibility__

  - __Colours:__ All colours checked with [WebAim](https://webaim.org/resources/contrastchecker/) have an optimal contrast ratio(6.32:1 (blue/white), 4.91:1(blue/yellow), 14.97:1 (yellow/black))
  - __Reduced motion:__ All animations are disabled when "Show animation in Windows" is disabled from settings in Win10. 
  - __Colour blindness:__ Colour-blind webpage filters have been taken into account with [Toptal](https://www.toptal.com/designers/colorfilter/) e.g. Here is how the website looks like for users affected by [Tritanopia](https://www.toptal.com/designers/colorfilter?orig_uri=https://cla-cif.github.io/RPS-Lizard-Spock/&process_type=tritan)
  - __Screen Reader:__ Texts, links and images' 'alt text' were read with the Google Chrome extension Screen Reader (version 53.0.2784.13). 
  - __Presbiopia:__ All fonts are 'sans serif' and have a sufficient size so that the text can be easily read without glasses.
  - __General Accessibility:__ has been tested with satisfactory results on:
      1. Google Light House (mobile and desktop version). 
      2. [Power Mapper - Home page](https://try.powermapper.com/demo/Report/06cd2a9f-7881-4034-ab93-d188bfbe9a91) and [Power Mapper - support page](https://try.powermapper.com/demo/Report/ce53642e-2b2f-45d7-98ee-b6e796513e5d) showing minor issues. 
      3. [Wave - Home and Support pages](https://wave.webaim.org/report#/https://cla-cif.github.io/RPS-Lizard-Spock/index.html).

- __Browser Compatibility__
    - The website's pages were tested with [Power Mapper](https://try.powermapper.com/demo/Report/06cd2a9f-7881-4034-ab93-d188bfbe9a91) presenting issues with IE11 regarding CSS3 properties. Such choices were deemed necessary for a better user experience and devices compatibility. 

- __SEO__
  - The website's Home page was tested on [Seobility](https://freetools.seobility.net/en/seocheck/check?url=https%3A%2F%2Fcla-cif.github.io%2FRPS-Lizard-Spock%2F&crawltype=1) and similar results were obtained on the Support page..
  - Tests ran with Google Light House (mobile and desktop version) on both pages obtained a SEO score of 100%.

- __Performances__
  - The website was tested on [Power Mapper](https://try.powermapper.com/demo/Report/06cd2a9f-7881-4034-ab93-d188bfbe9a91).
  - The general performance was evaluated by [GTMetrix](https://gtmetrix.com/reports/cla-cif.github.io/KTcDefkf/).

### Bugs and problems

- __Fixed bugs__
- ##  
    - __Description__ : The message showing the result of the game and the image corresponding to the computer choiche are set to disappear after 1.5s. 
    - __Bug__: If the user selects another choiche before timeout, two (or more) computer choices will be visible at the same time. 
    - __Fix__: The events are handled with JQuery. on click of the user on another choiche, previous computer's choiche disappears.
    
- ##   
    - __Description__: On mouse :hover user's choiches are coloured in blue. Default setting is black. 
    - __Bug__: :hover property is not available on touch screen. Once clicked, the user choiches do not go back to their default style.
    - __Fix__: The events are handled with JQuery. on click of the user on another choiche, previous user's choiche is back to default. In case of no events, the user's choiches are back to default after 1.5s.

   
- __Unfixed bugs__
    - Webiste performance analysis show a considerable loss of usability on IE 11 because some of CSS3 properties are not supported. In particular grid layout and viewport units, used extensively in the project, are not supported as showned by [CanIUse](https://caniuse.com/viewport-units).  
Note: The issue has not yet been fixed as Microsoft will soon be phasing out IE 11 as stated [here](https://blogs.windows.com/windowsexperience/2021/05/19/the-future-of-internet-explorer-on-windows-10-is-in-microsoft-edge/#:~:text=With%20Microsoft%20Edge%20capable%20of,certain%20versions%20of%20Windows%2010.). 
   - On iOS, a quick series of "taps" isn't handled well and may result in loss of information (e.g. winning message and computer selection) and animations (e.g. user selection). The bug is shown [here](https://github.com/cla-cif/RPS-Lizard-Spock/blob/main/assets/screenshots/Homepage%20bugs%20on%20iPhone%2012.mov).
   - In addition, the problems mentioned above can sometimes occur even on slower "taps".

### Testing User Stories from User Experience (UX) Section

 #### __First Time Visitor Goals__

- As a First-time visitor, I want to play a simple and intuitive game. 
    - The layout is simple, the icons are intuitive, all essential information are displayed. 
          
- As a First-time visitor, I want to learn more about the project and its developer. 
    - The 'Click me' button lands to a page where it's explained why and how the user can support the developer. 

-  As a First-time first-time visitor with an impairment, I want to be able to read all the text by myself or with a screen reader and find colours that are not misleading, and find animations disabled if so set. 
     - Colours contrast with the background and are colour blindness friendly as information is still clear regardless of visual impairment.
     - Font sizes are sufficiently large by default and therefore easy to read.
     - All text, labels and images are readable with the Chrome Screen Reader extension.
     - Animations are disabled when the user sets the "prefer reduced motion" option.

 #### __Returning Visitor Goals__

- As a returning visitor, I want to find the same game but with less bugs. 
     - The first version of this website was deployed on March 2022, the developer strives to work on the webiste and improve its usability.  
    
- As a returning visitor with a disability, I want to find the same or even better accessibility than before.
     - Accessibility will be kept up to date in accordance with the latest guidelines and users' feedback.
              
### Validator Testing 

- HTML
  - No errors were returned when running the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcla-cif.github.io%2FRPS-Lizard-Spock%2F).
- CSS
  - No errors were found when running the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fcla-cif.github.io%2FRPS-Lizard-Spock%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en).
- JavaScript
  - The code passed through [JSHint](https://jshint.com/) with no significant issues. 

## Deployment

- The site has been deployed on GitHub pages. The steps to deploy and publish the repository are as follows: 
- A video showing how a similar repository was deployed is available [here](https://github.com/cla-cif/RPS-Lizard-Spock/blob/main/assets/screenshots/create-publish-repository.mp4). 
    - Create a new repository:
        - Click on "New" button (top-right of the page). 
        - Select the "Owner" (one's account for instance). 
        - Chose a Repository name. Note: The name must be unique among all the user's repositories and words must be separated by hypen. 
        - The repository will be "public" by default. Note: a "private" repository can't be hosted on [GitHub pages](https://pages.github.com/).
        - Click on "Create Repository". 
        - The page will refresh and the Repository is successfully created. 
     - Host repository on GitHub Pages:
        - Click on "Settings" (top-right of the page).
        - Click on "Pages" (menu on the left). 
        - Select branch > main from the "Source" section. (or any other if present). 
        - Click on "Save", the page will refresh and the site, now hosted on GitHub Pages is ready to be published. 
        - After a few minutes, the ribbon will turn green and the site is reachable at an address similar to your-username/.github.io/your-repository-name/. 
        - Develop the project, commit, push and the changes will be visible on the page within a few minutes. 


__You can find the live link here: [RPS Lizard Spock](https://cla-cif.github.io/RPS-Lizard-Spock/)__


## Credits 

### Code

-  All content written by developer Claudia Cifaldi - [cla-cif](https://github.com/cla-cif) on GitHub. 

### Content 

- The icons were taken from the developer JLChamberlain on [GitHub](https://github.com/cla-cif/RPSLS).
- A fully functioning project was studied from  [FreeCodeCamp's tutorials](https://www.youtube.com/watch?v=jaVNP3nIAv0).
- The icon in the Support page's header was taken from [Font Awesome](https://fontawesome.com/).
- Fonts from [Google Fonts](https://fonts.google.com/).
- The game was originally created by Sam Kass and Karen Bryla. 

### Media

- No media. 

## Extra 

### Links to people I like. 

- [GitHub supporting Ukraine](https://github.blog/2022-03-02-our-response-to-the-war-in-ukraine/).
- [GitHub repository by iimetra](https://github.com/stop-war-in-ukraine/stop-russia-it). 
- [GitHub repository by AndrewStetsenko](https://github.com/AndrewStetsenko/Support-Ukraine).

[Link to top](#top)
