import classes from "./Description.module.css"

const Description = (props) => {
    return (
    <>
    <div className={classes["description"]}>
      <h3>How to use this word finder app?</h3>
    </div>
    <p className={classes["description-paragraph"]}>This free online scrabble word finder helps you to win every game against your friends and family. 
        It uses an internal dictionary to find words that are allowed to use. Just insert some letters in the input field above and start 
        your search. You will receive a list of possible words and their cumulated total number of points. By clicking the definition button 
        next to each word you can gain greater insights about their meaning.
        This site is an unofficial scrabble cheat and is used for entertainment purposes only.
    </p>
  </>
)}

export default Description;