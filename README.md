<h1 align="center" id="top">ROCK PAPER SCISSORS LIZARD SPOCK</h1>

__You can find the live link here: [RPS LIZARD SPOCK](https://cla-cif.github.io/RPS-Lizard-Spock/)__

A light extention of the classic rock-paper-scissors game: [The Big Bang Theory](https://the-big-bang-theory.com/rock-paper-scissors-lizard-spock/) edition - extention includes Lizard and Spock choices. The user plays against the computer, which randomly selects his choices. Whoever reaches 10 first wins the game. 

As this project was developed during the Russian aggression against Ukraine, the colours of the [Ukrainian flag](https://en.wikipedia.org/wiki/Flag_of_Ukraine) have been chosen as a sign of support. On the homepage there's a [Click me](https://cla-cif.github.io/ RPS -Lizard-Spock/support.html) link that leads to a support page with some details and useful links to support Ukraine and not the developer of the website. 

The game has a simple interface, it's intuitive and easy to use. 
The support page conveys a short but effective message.

![Landing page](https://github.com/cla-cif/RPS-Lizard-Spock/blob/main/assets/screenshots/home.png)
![Support page](https://github.com/cla-cif/RPS-Lizard-Spock/blob/main/assets/screenshots/support.png)

## Content
- [User Experience](#User-Experience-(UX))
- [Features](#Features)
- [Technologies used](#Technologies-used)
- [Testing](#Testing)
- [Deployment](#Deployment)
- [Credits](#Credits)

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

Layouts: [Desktop](https://github.com/cla-cif/english-with-claudia/blob/main/screenshot/index-wireframe.png) / [Mobile](https://github.com/cla-cif/english-with-claudia/blob/main/screenshot/index-wireframe-mobile.png) / [Extra small screen](https://github.com/cla-cif/english-with-claudia/blob/main/screenshot/index-wireframe-small.png).

-  ### Design

    - __Colours__
        -   The three main colours used are a shade of white, yellow and blue. Yellow and blue were chosen as a tribute to the Ukrainian, which was ravaged by war at the time this project was created. White was chosen to achieve an optimal contrast ratio between the background and the text. 
    - __Typography__
        -   The font "Smooch Sans" from Google Fonts was chosen for its modern, captivating and playful style. 
    - __Images__
        -   The svg files for user and computer choice are clear, simple and display optimally on all screens.
        
## Features 

-   Responsive on all device sizes
-   Accessible for users with hearing and visual impairments
-   Interactive elements

![Home page screenshot from Am I Responsive webpage](https://github.com/cla-cif/RPS-Lizard-Spock/blob/main/assets/screenshots/responsive-home.png)
![Support page screenshot from Am I Responsive webpage](https://github.com/cla-cif/RPS-Lizard-Spock/blob/main/assets/screenshots/responsive-support.png)

### Existing Features

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
  -The footer sticks to the bottom
  - The footer serves to invite the user to learn more about the teaching method and the teacher's biography.
  
![Footer](https://github.com/cla-cif/RPS-Lizard-Spock/blob/main/assets/screenshots/footer.png)

- __Other features__ 
    - The website has an [apple-touch-icon](https://github.com/cla-cif/RPS-Lizard-Spock/blob/main/assets/icons/apple-touch-icon.png) to make the page stand out from other bookmarks, with a representation of an atom: a tribute to The Big Bang Theory TV series. 
    - The website has an [Atomic representation Favicon](https://github.com/cla-cif/RPS-Lizard-Spock/blob/main/assets/icons/game-favicon.ico) to make the home page easy to find among the many open tabs.
    - The website has two hands embracing a [hearth with Ukranian colors favicon](https://github.com/cla-cif/RPS-Lizard-Spock/blob/main/assets/icons/support-favicon.ico) to make the support page easy to find among the many opens tabs and to spread a support message in favor of the Ukraninan people. 
    - The website has a "Google site verification" to verify the website's ownership as shown [here](https://search.google.com/search-console/ownership?resource_id=https%3A%2F%2Fcla-cif.github.io%2FRPS-Lizard-Spock%2F).
    - The site has keywords and a description of appropriate length to give the user a brief impression of the site on the browser results page.

### Features to implement

- Add options to increase complexity. 
- Add levels. 
- Add privacy policy and copyright information. 
- Get the website a domain name. 

## Technologies used

### Languages used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [JAVASCRIPT](https://en.wikipedia.org/wiki/JavaScript)

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

The website's features were thoroughly tested using some well-known free web testers. Particular attention was paid to SEO and accessibility as the website offers educational resources.

- __Web Responsive__
    - The responsive feature has been tested using Chrome DevTools and an online Web [Design checker](https://responsivedesignchecker.com/checker.php?url=https%3A%2F%2Fcla-cif.github.io%2Fenglish-with-claudia%2F&width=1400&height=700). 
The website's layout has been tested on a range of different screen sizes, from small 320x480 screens (e.g. Apple iPhone 3) to widescreen 24" and their landscape view providing a good user experience. 
The website has passed the [Google mobile-friendly test](https://search.google.com/test/mobile-friendly/result?id=a6mUE2LpdV19X1xP-L4ljA).
    - Note: Images and the submit form have been removed from the small screen layout for better readability and a warning message is displayed instead.

- __Accessibility__

  - __Colours:__ All colours checked with [WebAim](https://webaim.org/resources/contrastchecker/) have an optimal contrast ratio. 
  - __Reduced motion:__ All animations are disabled when "Show animation in Windows" is disabled from settings in Win10. 
  - __Colour blindness:__ Colour-blind webpage filters have been taken into account with [Toptal](https://www.toptal.com/designers/colorfilter/).
  - __Screen Reader:__ Texts, links and images' 'alt text' were read with the Google Chrome extension Screen Reader (version 53.0.2784.13). 
  - __Presbiopia:__ All fonts are 'sans serif' and have a sufficient size so that the text can be easily read without glasses.
  - __Readability:__ As the main target audience is English language learners, the text was rated 'easy to understand', as tested with [WebFX](https://www.webfx.com/tools/read-able/check.php?uri=https%3A%2F%2Fcla-cif.github.io%2Fenglish-with-claudia%2F&tab=Test+By+Url&imahuman=16749697).
  - __General Accessibility:__ has been tested with satisfactory results on:
      1. Google Light House (mobile and desktop version). 
      2. [Power Mapper](https://try.powermapper.com/demo/ViewScan/051f53b2-ea5c-42ba-a494-d581b173b4d0) shows no critical issues. 
      3. [Wave](https://wave.webaim.org/report#/https://cla-cif.github.io/english-with-claudia/).

- __Browser Compatibility__
    - The website was tested with [Power Mapper](https://try.powermapper.com/demo/Report/051f53b2-ea5c-42ba-a494-d581b173b4d0) and no critical problems were found. 
    - Some layout issues occurred in IE ≤11. Other minor issues encountered in different browsers are not obstructive.
    - __To maximise responsiveness and browser compatibility, font sizes are set in viewport values but fallback to rem values as [advisable](https://www.sitepoint.com/new-css3-relative-font-size/).__

- __SEO__
  - The website was tested on [Seobility](https://freetools.seobility.net/en/seocheck/check?url=https%3A%2F%2Fcla-cif.github.io%2Fenglish-with-claudia%2F&crawltype=1#headings) and [Seo Site Checkup](https://seositecheckup.com/analysis).
  - Tests ran on Google Light House (mobile and desktop version) obtained a SEO score of 100%.

- __Performances__
  - The website was tested on [Power Mapper](https://try.powermapper.com/demo/Report/051f53b2-ea5c-42ba-a494-d581b173b4d0).
  - The general performance was evaluated by [GTMetrix](https://gtmetrix.com/reports/cla-cif.github.io/9nvWRL91/).

### Bugs and problems

- __Known problems__
    - Images in .jpeg format present an optimal compromise between quality and size. [JPEGMiniPRo](https://www.jpegmini.com/creators) was used to reduce the image size while ensuring minimal quality loss. However, low scores on Largest Contentful Paint (LCP) side were still achieved.
      
- __Fixed bugs__
    - WebP format images are partially or not supported on some browser's older versions as shown by [Can I use](https://caniuse.com/webp). In order to preserve information and maximase compatibility, .jpeg format was chosen instead despite WebP performs better as shown by [Google Developers](https://developers.google.com/speed/webp/faq#:~:text=WebP%20typically%20achieves%20an%20average,help%20make%20the%20web%20faster.). 

- __Unfixed bugs__
    - There is a loss of information in the header section when the page is displayed on IE 11 running on Win 10 because the header will not be displayed correctly:
CSS property 'display: flex' is not fully supported by IE11. Details are shown [here](https://caniuse.com/?search=display%20flex).
    - Note: The issue has not yet been fixed as Microsoft will soon be phasing out IE 11 as stated [here](https://blogs.windows.com/windowsexperience/2021/05/19/the-future-of-internet-explorer-on-windows-10-is-in-microsoft-edge/#:~:text=With%20Microsoft%20Edge%20capable%20of,certain%20versions%20of%20Windows%2010.). 
    - The :hover property remains activated on touch-screen devices. The issue is well-known and documented [here](https://medium.com/@mezoistvan/finally-a-css-only-solution-to-hover-on-touchscreens-c498af39c31c) and it's believed that the best solution is to use JS to detect whether the screen has touch capabilities and style the properties accordingly. 

### Testing User Stories from User Experience (UX) Section

 #### __First Time Visitor Goals__

- As a First-time visitor, I want to understand if the services are suitable for me. 
    - The three courses offered are immediately visible in the welcome image with a high-contrast text overlay. 
    - The user has two options: Click on the "About me" link in the navigation bar or scroll to learn more in the "About me" section immediately following.
          
- As a First-time visitor and a learner, I want the text to be easy to decipher, short and written in a rather casual language. 
    - The texts were carefully edited using text analysis tools and text editors to make them as easy to read as possible. Inexperienced language users may find long sentences and academic vocabulary challenging to understand and frustrating. 
    - Texts have been intentionally kept short to avoid information overload. More information can be obtained via social media and by contacting the teacher.

- As a First-time first-time visitor with an impairment, I want to be able to navigate the website easily to find information, read all the text by myself or with a screen reader, find colours that are not misleading, and find animations disabled if so set.
     - Colours contrast with the background and are colour blindness friendly as information is still clear regardless of visual impairment.
     - Font sizes are sufficiently large by default and therefore easy to read.
     - All text, labels and images are readable with the Chrome Screen Reader extension.
     - Animations are disabled when the user sets the "prefer reduced motion" option.
        
- As a First-time visitor, I may want to learn more about the service on social media.
     - Right after a short bio in the "About me" section, a "find out more" link lands the user to the footer section where a LinkedIn, Facebook and TikTok icons are displayed and open on a new tab. 
     - The user can also scroll to the bottom of the page till the footer.
        
- As a First-time visitor, I want to engage with the organisation easily, quickly and effectively.
     - There is a direct link in the navigation bar to the "Contact me" section and the relevant form.
     - Right after the teacher's short bio, the user can follow the "find out more" link which lands to the footer. The "Contact me" section will be within the same viewport height.
     - The contact me form is logically placed after all the important information has been provided. It is simple, easy to find and fill out. The size is more than sufficient to allow easy completion.

 #### __Returning Visitor Goals__

- As a Returning Visitor, I want to find information, prices, conditions and timetables always up to date. 
     - The information in the third text area from the top in the "Services" section is constantly updated, as is the "About me" section and anything else that might change.
    
- As a Returning Visitor, I want to find the best way to get in contact with the organisation with any questions I may have.
     - The "Contact me" link is available in the navigation bar and takes the user to the forms section in the "Contact me" section.
          
- As a Returning impaired visitor, I want to find the same as before or even or better accessibility. 
     - Accessibility remains a top priority for developers.
              
### Validator Testing 

- HTML
  - No errors were returned when running the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcla-cif.github.io%2Fenglish-with-claudia%2F).
- CSS
  - No errors were found when running the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fcla-cif.github.io%2Fenglish-with-claudia%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en).

## Deployment

- The site has been deployed on GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab. 
  - On the GitHub Pages tab, select the main branch.
  - Once the main branch is selected, the page will automatically refresh with a detailed ribbon display to indicate successful deployment.

__You can find the live link here: [English with Claudia](https://cla-cif.github.io/english-with-claudia/)__


## Credits 

### Code

-  All content written by developer Claudia Cifaldi - [cla-cif](https://github.com/cla-cif) on GitHub. 

### Content 

- The text was partly taken from [My English Teacher Tom](https://www.myenglishteachertom.com/).
- CSS backbone was taken from  [Kevin Powell's tutorials](https://www.youtube.com/watch?v=bn-DQCifeQQ).
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/).
- Fonts from [Google Fonts](https://fonts.google.com/).

### Media

- All the photos from [Pexels](https://www.pexels.com/).

[Link to top](#top)
