import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchFromApi,
  selectUrls,
  selectAuthors,
  selectIds,
} from "../../app/counterSlice";
import styles from "./Counter.module.css";

export function Counter() {
  const dispatch = useDispatch();
  const urls = useSelector(selectUrls);
  const authors = useSelector(selectAuthors);
  const ids = useSelector(selectIds);

  console.log(urls, authors, ids);

  const list = urls.map((url, index) => (
    <li key={ids[index]}>{authors[index]}</li>
  ));

  return (
    <div>
      <button
        className={styles.asyncButton}
        onClick={() => dispatch(fetchFromApi("https://picsum.photos/v2/list"))}
      >
        get data
      </button>

      <ul>{list}</ul>
    </div>
  );
}
