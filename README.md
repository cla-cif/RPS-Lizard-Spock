#top
-----
Welcome to the 2000s Movie Database, the dataset contains 2100 films released between 2000 and 2009. Data points include title, genre, year, language and country of production, content rating, duration, aspect ratio, director, cast, budget, box office, number of reviews (by critics and users) and IMDB score. 

The Heroku-based command line interface (CLI) allows the user to browse the dataset and retrieve statistics, rankings and specific information.
The instructions are extremely simply written and require only a minimum of interaction to achieve the desired result.

[Here is the live version](https://movie-db-2000s.herokuapp.com/)

## Content
 - [How to use](#How-to-use)
 - [Features](#Features)
 - [Data Model](#Data-model)
 - [Testing](#Testing)
 - [Technologies](#Technologies-used)
 - [Deployment](#Deployment)
 - [Credits](#Credits)
 - [Extra](#Extra)

## How to use
- The user is welcomed by a large title and a short welcome message explaining how to use the app. 
- The app has two tasks: display processed data and perform queries. 
- The app is based on an iterative process that the user can interrupt at any time when prompted for input. 
- On the first iteration, the user is asked the question, "What do you want to do today, get data or search?"
- Depending on whether they answer "data" or "search", they'll be prompted for further choices that will lead to the desired output. 
- Each answer (input) from the user is verified. If the check fails, the user is prompted to provide a suitable input.
- After each output, the user is returned to the beginning and can choose to perform a new search or retrieve data.

### Data option
Users are offered ten options with pre-calculated statistics and rankings to choose from.
1.  The average budget, score and duration of this films'decade.
2.  Number of films in each language.
3.  Number of films produced each year.
4.  The most prolific directors of the decade and their scores.
5.  Top 10 countries that produced films with the highest IMDB score.
6.  The 10 best films of the decade.
7.  The 10 worst films of the decade.
8.  The most profitable films in terms of return of investment.
9.  Top 10 box-office flops: the most unprofitable films.
1.  The content ratings and their average IMDB Score.
After the choice is validated and the output displayed, the user is asked whether he wants to retrieve the data again or perform a search.

### Search option
- Users can search the dataset by title, genre, actor and director. 
- Matching is also possible with partial text but limited to 10 results due to Heroku's terminal constraints (80 characters by 24 rows), so a targeted entry will yield accurate results. 
- Searching by title is the only query that returns all available information (genre, year, language and country of production, content rating, duration, aspect ratio, director, cast, budget, box office, number of reviews and IMDB score). 
- The other options, which are likely to find multiple matches, display only the most relevant information (title, genre, director, cast and IMDB score) to improve readability given the aforementioned Heroku constraints.

## Features
All functions have a general purpose and can be applied to a similar dataset or, for this particular project, allow the current dataset to be extended with minimal further implementation.

### Existing Features
- The app is intuitive, the instructions are clear and simple, requiring minimal interaction from the user to achieve the result. 
- The text displayed on the black background of Heroku's CLI is legible and bright. The four colours (blue, yellow, red, white) are chosen consistently to differentiate instructions, functions, error messages and outputs. 
- Input isn't case-sensitive, but output is consistently presented with the first letter capitalised. 
- The code is iterative so that users can perform multiple searches without restarting the program. 
- The user can exit the program at any time by typing "exit". The CLI will be cleared after three seconds. The program can be restarted by clicking the red "Run Program" button on the Heroku app page. 

### Future Features
- Searches will be possible with two or more options at the same time (e.g.: search by genre AND actor, search by actor AND director). 
- A collection of films from the 90s and 10s will be added to the dataset.
- Additional statistics and lists will be provided. 
- Further features may include deployment with [Jupyter Lab](https://jupyter.org/) to create meaningful istograms, distributions and charts.
- Bug fixes.

## Data Model ?????
??????

## Testing
I manually tested this project throughout the development process by doing the following:
 - I ran the code through the PEP8 linter.
 - Given invalid input and checked the logical and visual consistency of the error messages.
 - Entered substrings, extended ASCII characters, lower and upper case letters. 
 - Checked how many lines to display for better readability. 
 - Tested colours and their consistnecy for better readability.

### Issues
  The program has so far proven to be free of arithmetic, syntax, resource, multi-threading and interfacing bugs. 
  The program operates correctly and doesn't terminate abnormally. 
  The following logical errors provided undesired output. While the output was consitent with the input, a much broader result was desired. 

#### Fixed
Matching is not possible with a partial string. e.g. the title must be complete, actor/director must searched by full name in order to display the desired result. 
:  Implementation of a nested loop to work efficiently with a multi-dimensional data structure like this dataset. If the substring provided by the user was matched by iterating through the spreadsheet and its columns (this dataset is a list that contains other lists), boolean variable returns true and the output displayed. 

Extended ASCII characters (character code 128-255) present in some names couldn't be matched providing printable ASCII characters (character code 128-255) . 
:  The dataframe is parsed twice (looking for printable and extended ASCII chars) before informing the user that no matches were found. To match extended ASCII, the normalize method is applied to the dataframe. 

#### Remaining
In case a value is present in the dataframe but not in the interested column, the output will display a list with the columns' headers (keys) and an an empty index array. This happens because the input is compared against the df.values.

### Validator
- PEP8: no errors were returned from the PEP8 validator. 

## Technologies used
The project is coded with Python and relies on [pandas 1.4.2:](https://pypi.org/project/pandas/) to analyse data.
### Languages used

-   [Python](https://docs.python.org/3/)

### Frameworks, Libraries & Programs Used

- [pandas 1.4.2:](https://pypi.org/project/pandas/) which was installed along with [seaborn 0.11.2](https://pypi.org/project/seaborn/)
- [colorama 0.4.4](https://pypi.org/project/colorama/)
- [pyfiglet 0.8.post1](https://pypi.org/project/pyfiglet/)
- [pycodestyle 2.8.0](https://pypi.org/project/pycodestyle/)
--
- The dataset is a [Google Sheet](https://www.google.com/sheets/about/) file

## Deployment
The project is coded and hosted on GitHub and deployed with Heroku. 

### Creating the Heroku app 
The steps needed to deploy this projects are as follows:

1. Create a `requirement.txt` file in GitHub, for Heroku to read, listing the dependancies the program needs in order to run.
2. `push` the recent changes to GitHub and go to your [Heroku account page](https://id.heroku.com/login) to create and deploy the app running the project. 
3. Chose "CREATE NEW APP", give it a unique name, and select a geographical region. 
4. From the _Settings_ tab, configure the environment variables (_config var_ section).
5. Copy/paste the `CREDS.json` file, if the project has credentials, in the `VALUE` field, type `CREDS` in the corresponding KEY box, click the "ADD" button.
6. Create another config var, set `PORT` as KEY and assign it the VALUE `8000`.
7. Add two buildpacks from the _Settings_ tab. The ordering is as follows:
   `heroku/python`
   `heroku/nodejs`
8. From the _Deployment_ tab, chose GitHub as deployment method, connect to GitHub and select the project's repository. 
9. Click to "Enable Automatic Deploys " or chose to "Deploy Branch" from the _Manual Deploy_ section. 
10. Wait for the logs to run while the dependencies are installed and the app is being built.
11. The mock terminal is then ready and accessible from a link similar to `https://your-projects-name.herokuapp.com/`

### Forking the Repository

By forking this GitHub Repository you make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository. The steps to fork the repository are as follows:

1. Locate this [GitHub Repository](https://github.com/cla-cif/movie-DB-2000s) of this project and log into your GitHub account. 
2. Click on the "Fork" button, on the top right of the page, just above the _Settings_. 
3. Decide where to fork the repository (your account for instance)
4. You now have a copy of the original repository in your GitHub account.

### Making a local clone

Cloning a repository pulls down a full copy of all the repository data that GitHub.com has at that point in time, including all versions of every file and folder for the project. The steps to clone a repository are as follows:

1. Locate this [GitHub Repository](https://github.com/cla-cif/movie-DB-2000s) of this project and log into your GitHub account. 
2. Click on the "Code" button, on the top right of the page, next to the green "Gitpod" button. 
3. Chose one of the available options: Clone with HTTPS, Open with Git Hub desktop, Download ZIP. 
4. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
5. Open Git Bash. [How to download and install](https://phoenixnap.com/kb/how-to-install-git-windows).
6. Chose the location where you want the repository to be created. 
7. Type:
    ```
    $ git clone https://github.com/cla-cif/movie-DB-2000s.git
    ```
8. Press Enter, the following lines will appear and your repository is now created.
    ```
   Cloning into 'movie-DB-2000s'...
    remote: Enumerating objects: 257, done.
    remote: Counting objects: 100% (257/257), done.
    remote: Compressing objects: 100% (182/182), done.
    remote: Total 257 (delta 157), reused 158 (delta 72), pack-reused 0Receiving obj
    Receiving objects:  81% (209/257)
    Receiving objects: 100% (257/257), 54.76 KiB | 549.00 KiB/s, done.
    Resolving deltas: 100% (157/157), done.
    ```
9. Click [here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) for a more detailed explaination. 
    
## Credits

-  All content written by developer Claudia Cifaldi - [cla-cif](https://github.com/cla-cif) on GitHub. 
-  The template used for this project belongs to CodeInstitute - [GitHub](https://github.com/Code-Institute-Submissions) and [website](https://codeinstitute.net/global/).
- The dataset is part of Kaggle's ["The Movies Dataset"](https://www.kaggle.com/datasets/rounakbanik/the-movies-dataset) under CC0: Public Domain Licence. 

-----
[Here is the live version](https://movie-db-2000s.herokuapp.com/)
[Link to top](#top)
