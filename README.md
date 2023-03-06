# search-hotel

## Technologies
** ReactJS, TypeScript, GraphQL, React-router, Styled-components **


## Ecosystem
* Using font [Eudoxus Sans](https://stijndv.com/goodies/eudoxus-sans/) connected globally from index.html
* For create new alias, just need to edit **tsconfig.json -> paths** and vite-tsconfig-paths plugin will do the rest
* Package dependency install via **npm ci**


## Installation

Clone the repo and run for get deterministic, repeatable build

````npm ci````

Or run command

````npx degit TheVerilly/react-starter-kit project-name````

Now you are ready to go:

````npm run dev````

Boom! These scripts run your app in development mode.

## Building

To build the project, run:
````npm run build````

## Introduction
A small project to show off my technical skills in interface development.
I have created a simple Single Page Application (SPA) that allows the user to search and view basic information about hotels in a specific city using the public GraphQL API.
The application consists of three pages:


| Page           | URL                         | Details                                                                                                                                                           |
|----------------|:----------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Homepage       | /                           | Simply contains a search box for a users location query.                                                                                                          |
| Search results | /search?query=<search term> | A list of results that match the search performed, and link through to the details page. <br/>The list should show: <br/>*Title <br/>*Destination <br/>*Photo     |
| Sale details   | /sale/<ID>                  | A page more rich information about the hotel/sale in question. The page should include: <br/>*Title <br/>*Destination <br/>*Photo <br/>*Hotel details <br/>*Price |


## Functional
*  The user has the ability to search by city name.
*  The search results display the total number of results.
*  Search results only include the first 10 sales in the list.
*  Each search result has a link to the sales details page.
*  Browser navigation works (for example, navigation from search results to sales details and
pressing the back button will take you back to the search results)



