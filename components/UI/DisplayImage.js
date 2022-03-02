import classes from "./DisplayImage.module.css";

const DisplayImage = (props) => {
  return (
    <div className={classes["fox-image"]}>
      <img src="/fav.png" alt="Logo" />
    </div>
  );
}

export default DisplayImage;