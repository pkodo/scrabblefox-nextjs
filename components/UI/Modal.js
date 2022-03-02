import classes from './Modal.module.css';

//Closing the Modal when clicking into the backdrop
const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClose}/>
};

const ModalOverlay = props => {
    return (
    <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
    )
};

const Modal = props => {
    return <>
    <Backdrop onClose={props.onClose}/>
    <ModalOverlay>{props.children}</ModalOverlay>
    </>
};

export default Modal;