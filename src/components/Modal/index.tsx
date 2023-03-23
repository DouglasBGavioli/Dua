import { useEffect } from "react";
import ModalLib from 'react-modal';

import "./style.min.css";

type ModalProps = ModalLib.Props;

ModalLib.setAppElement("#root");

export function Modal(props: ModalProps) {
  useEffect(() => {
    if (props.isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  }, [props.isOpen]);

  return (
    <ModalLib {...props}>
      <div className={`button ${props.onRequestClose ? "" : "hidden"}`}>
        <button className="closeButton" onClick={props.onRequestClose}>
          <img src="/cross.svg" alt="fechar" />
        </button>
      </div>
      {props.children}
    </ModalLib>
  );
}