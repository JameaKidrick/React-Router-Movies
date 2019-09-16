import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';

// STEP 2: CREATE ROUTES
  // ONE ROUTE SHOULD BE DYNAMIC FOR ID

// GO TO MOVIELIST.JS FOR STEP 3

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <MovieList />

      <Route exact path='/' component='MovieList' />
      <Route exact path='/movies/:id' component='Movie' />
    </div>
  );
};

export default App;
