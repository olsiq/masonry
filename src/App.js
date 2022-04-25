import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  fetchFromApi,
  selectUrls,
  selectAuthors,
  selectIds,
} from "./app/counterSlice";
import styles from "./components/card/card.module.css";
// import styles from "./components/counter/counter.module.css";
// import { Counter } from "./components/counter/Counter";
import { Layout } from "./components/ui";
import { Card } from "./components/card";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const urls = useSelector(selectUrls);
  const authors = useSelector(selectAuthors);
  const ids = useSelector(selectIds);

  const sizes = ["small", "medium", "large"];
  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  const cards = urls.map((url, index) => (
    <Card
      key={ids[index]}
      author={authors[index]}
      size={sizes[random(0, 3)]}
      title={`art ${ids[index]}`}
      image={url}
      alt="miaou"
    />
  ));

  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter /> */}
        <button
          className={styles.asyncButton}
          onClick={() =>
            dispatch(fetchFromApi("https://picsum.photos/v2/list"))
          }
        >
          get data
        </button>
        <Layout>{cards}</Layout>
      </header>
    </div>
  );
}

export default App;
