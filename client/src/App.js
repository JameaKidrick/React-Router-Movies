import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'

// STEP 2: CREATE ROUTES
  // ONE ROUTE SHOULD BE DYNAMIC FOR ID

// GO TO MOVIELIST.JS FOR STEP 3

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    return setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      {/* <MovieList /> */}

      <div>
        <Route exact path='/' component={MovieList} />
        <Route path='/movies/:id' component={Movie} />
      </div>
    </div>
  );
};

export default App;
