import classes from "./Header.module.css";

const Header = (props) => {
    return (
    <>
        <header className={classes.header}>
            <button>English</button>
            <button>German</button>
        </header>
    </>
    )};

export default Header;