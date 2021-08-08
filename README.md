# Mobilize Event Finder

## About

This project uses React and Typescript to hit the public Mobilize API and display a list of events and a corresponding map as a single page application. I used [Mapbox](https://www.mapbox.com/) to display the location data, and I used Sass Modules to block-scope the component styles. Since this application is still relatively small in scale, I organized everything in the `components` directory, although as it grows and pieces are reused, I would likely break that down further among [atomic design](https://bradfrost.com/blog/post/atomic-web-design/) principles and separate out pages, templates, molecules, atoms, etc.

All of the information is currently displayed on one page so that the user can view the list of events and see which ones might be in their area while they are looking for events to attend. This doesn't account for virtual events, although these are signified in the event cards themselves.

I decided to model the event cards off of the current Mobilize list view because it's a crisp way to present the information to the user. With more time, I would also model the map tooltips off of this style.

I added a little bit of mobile styling to hide the map on initial page load and allow the user to toggle the map open if they want to help save screen real estate, since the map needs to be relatively large to be of any use. The scroll behavior is a little bit weird still, and given more time, I would like to come up with a different solution.

## Setup

1. Clone this repository
2. Create a free [mapbox api key](https://www.mapbox.com/) and save it in your `.env` file:

` REACT_APP_MAPBOX_TOKEN=<your token>`

(or use the one sent in the email from `hannah.werman@gmail.com`) 3.

3. run `yarn` to install dependencies
4. run `yarn start` to run the server locally

## todo:

mobile styling
email about upcoming events
