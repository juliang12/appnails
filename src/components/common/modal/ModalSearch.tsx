import React from "react";
import style from "./ModalSearch.module.css";

interface Props {
  children: React.ReactNode | React.ReactNode[];
  onClose: () => void;
}

const ModalSearch: React.FC<Props> = ({ children, onClose }) => {
  return (
    <div className={style.overlay}>
      <div className={style.modalContent}>
        <div className={style.navbarModal}>
          <button onClick={onClose} className={style.closeButton}>
            X
          </button>
        </div>
        <div className={style.contentContainer}> {children}</div>
      </div>
    </div>
  );
};

export default ModalSearch;
