

# Movie Watchlist App

## Overview

The Movie Watchlist App is a web application that allows users to manage their movie watchlist. Users can add, edit, and filter movies based on various criteria such as watched status, genres, and release year. The app features a responsive design that ensures usability across all devices.

## Features

- **Add Movie:** Users can add movies to their watchlist with details such as title, description, release year, and genre.
- **Edit Movie:** Users can edit existing movies in their watchlist.
- **Filter Movies:** Users can filter movies based on watched status, genres, and release year.

## Tech Stack

- **Frontend:** React.js, Redux, React Router
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Styling:** CSS (with FontAwesome icons)

## Project Structure

```
movie-watchlist-app/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── actions/
│   │   ├── components/
│   │   │   ├── Sidebar.js
│   │   │   ├── AddEditMovie.js
│   │   ├── reducers/
│   │   ├── styles/
│   │   │   ├── Sidebar.css
│   │   │   ├── AddEditMovie.css
│   │   ├── App.js
│   │   ├── index.js
│   ├── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   ├── server.js
│   ├── package.json
│
├── .gitignore
├── README.md
```

## Live Demo

The Movie Watchlist App is deployed on Vercel. You can access the live demo at the following link:

[Live Demo](https://movie-watch-list-app.vercel.app/)

## Deployment

The application is deployed on Vercel, which ensures a seamless deployment process and reliable hosting for both the frontend and backend.

## Usage

- **Home Page:** View the list of movies in your watchlist.
- **Add Movie:** Navigate to `/add` to add a new movie.
- **Edit Movie:** Click on a movie from the watchlist to edit its details.
- **Filters:** Use the filters in the sidebar to filter movies based on watched status, genres, and release year.




