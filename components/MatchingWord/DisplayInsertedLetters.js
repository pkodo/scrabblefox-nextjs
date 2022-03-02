import classes from "./DisplayInsertedLetters.module.css";

const DisplayInsertedLetters = (props) => {
    return (
      <>
        <div className={classes["inserted-letters"]}>
          Finding Scrabble words for the following letters: {props.letters}
        </div>
        <div className={classes["description-item"]}>
          <div className={classes["match-item__description"]}>
            <h2>Words</h2>
            <div className={classes["match-item__price"]}>Points</div>
          </div>
        </div>
      </>
    );
};

export default DisplayInsertedLetters;
