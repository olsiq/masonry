import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  fetchFromApi,
  selectUrls,
  selectAuthors,
  selectIds,
  setHorizontalLayout,
  setTileLayout,
  selectLayout,
  selectStatus,
} from './app/counterSlice';

import { Layout } from './components/ui';
import { Card } from './components/card';
import { Button } from './components/buttons/Button';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const urls = useSelector(selectUrls);
  const authors = useSelector(selectAuthors);
  const ids = useSelector(selectIds);
  const layout = useSelector(selectLayout);

  const sizes = ['small', 'medium', 'large'];
  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  const cards = urls.map((url, index) => (
    <Card
      key={ids[index]}
      author={authors[index]}
      size={sizes[random(0, 3)]}
      title={`img ${ids[index]}`}
      image={url}
      alt='miaou'
    />
  ));

  return (
    <div className='App'>
      <header className='App-header'>
        <div className='btnsWrapper'>
          <Button
            action={() =>
              dispatch(
                fetchFromApi(
                  'https://zoo-animal-api.herokuapp.com/animals/rand/10'
                )
              )
            }
            text={'Get Data'}
          />
          <Button
            action={() => dispatch(setTileLayout())}
            text={'set tile masonry'}
          />
          <Button
            action={() => dispatch(setHorizontalLayout())}
            text={'set horizontal masonry'}
          />
        </div>
        {status === 'loading' && console.log(status)}
        <Layout layout={layout}>
          {cards}
          {cards}
          {cards}
          {cards}
        </Layout>
      </header>
    </div>
  );
}

export default App;
