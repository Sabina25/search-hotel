# search-hotel
web dev projects with **typescript, grafgl, styled-components, react-router

## Ecosystem

* Using font [Eudoxus Sans](https://stijndv.com/goodies/eudoxus-sans/) connected globally from index.html
* For create new alias, just need to edit **tsconfig.json -> paths** and vite-tsconfig-paths plugin will do the rest
* Package dependency install via **npm ci**


The project used a ready-made empty project with installed dependencies.


On the first page there is an input field. After entering, the search occurs at the click of a button.
If there is nothing in the input field, the button is disabled.

The next page shows the search results. If there is nothing on the result, the user sees a corresponding notification.

by clicking on any area of information about the hotel, the user can go to the page of detailed information about the object.

query errors handled.

Navigation also works via url.

When loading data, preloaders are displayed.