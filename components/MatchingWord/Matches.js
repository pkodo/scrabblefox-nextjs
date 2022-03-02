import MatchItem from "./MatchItem";

function Matches(props) {
  //key={index} is important so that you dont run into issues
    return (
      <>
        {props.items.map((match, index) => (
          <MatchItem key={index} word={match.word} points={match.points} />
        ))}
      </>
    );
}

export default Matches;
