import classes from "./MatchItem.module.css";
import Modal from "../UI/Modal";
import axios from "axios";

import { useState } from "react";

const MatchItem = (props) => {
  const [popUpIsShown, setPopUpIsShown] = useState(false);
  const [loadedDefinition, setLoadedDefinition] = useState([]);

  const GetDefinition = async () => {
    try {
      let url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + props.word;
      const response = await axios.get(url);
      setLoadedDefinition(
        response.data[0].meanings[0].definitions[0].definition
      );
    } catch (err) {
      setLoadedDefinition("Sorry, no definition found!");
    }
    setPopUpIsShown(true);
  };

  const hidePopUpHandler = () => {
    setPopUpIsShown(false);
  }

  return (
    <div className={classes["match-item"]}>
      <div className={classes["match-item__description"]}>
        <h2>{props.word}</h2>
        {props.points !== "-" && <button className={classes["match-item__price"]} onClick={GetDefinition}>
          Definition
        </button>}
        <div className={classes["match-item__price"]}>{props.points}</div>
        {popUpIsShown && <Modal onClose={hidePopUpHandler}>
          <h3>{loadedDefinition}</h3>
        </Modal>}
      </div>
    </div>
  );
};

export default MatchItem;