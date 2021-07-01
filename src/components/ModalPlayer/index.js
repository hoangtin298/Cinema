import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import { makeStyles } from "@material-ui/core";

import CloseImg from "../../assets/close.png";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  playerContainer: {
    position: "relative",

    boxShadow: theme.shadows[5],

    width: "55%",
    height: "55%",
    [theme.breakpoints.down("sm")]: {
      height: "40%",
    },
    [theme.breakpoints.down("xs")]: {
      height: "30%",
    },
  },
  closeBtn: {
    position: "absolute",
    top: "-20px",
    right: "-30px",

    background: "none",
    border: "none",

    opacity: "1",
    zIndex: "10",

    cursor: "pointer",
    "&:hover": {
      opacity: 0.7,
    },
  },
  closeImg: {
    width: "100%",
  },
}));

function ModalPlayer(props) {
  const classes = useStyles();
  return (
    <Modal
      className={classes.modal}
      open={props.open}
      onClose={props.handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.open}>
        <div className={classes.playerContainer}>
          <iframe
            title="YouTube video player"
            width="100%"
            height="100%"
            frameBorder="0"
            src={`${props.trailer}?autoplay=1&mute=1`}
          ></iframe>
          <button onClick={props.handleClose} className={classes.closeBtn}>
            <img
              src={CloseImg}
              alt="close-player"
              className={classes.closeImg}
            />
          </button>
        </div>
      </Fade>
    </Modal>
  );
}

export default ModalPlayer;
