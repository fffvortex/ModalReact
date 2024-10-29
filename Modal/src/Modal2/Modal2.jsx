import { useRef, useEffect } from "react";
import classes from "./Modal2.module.css";
import { createPortal } from "react-dom";

export default function Modal2({ children, isOpen }) {
  useEffect(() => {
    if (isOpen) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [isOpen]);

  const dialog = useRef();
  return createPortal(
    <dialog ref={dialog} className={classes.modal}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
