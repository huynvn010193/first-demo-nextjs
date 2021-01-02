import React, { useEffect, useRef, useState } from "react";
// import "./modal.scss";

type ModalProps = {
  isVisible: boolean;
};

// Javascript DOM
let CLASS_DEFAULT = "tcl-modal__wrapper";
const ModalSolution: React.FC<ModalProps> = ({ children, isVisible }) => {
  const [className, setClassName] = useState(CLASS_DEFAULT);

  useEffect(() => {
    if (isVisible === true) {
      setClassName((oldClass) => oldClass + " show");
      // setClassName(className + " show"); không nên. => dùng cách này phải truyển className và useEffect.
      document.querySelector("body").classList.add("tcl-modal__open");
    } else {
      setClassName(CLASS_DEFAULT);
      document.querySelector("body").classList.remove("tcl-modal__open");
    }
  }, [isVisible]);

  return (
    <div className={className}>
      <div className="tcl-mask"></div>
      <div className="tcl-dialog">
        <div className="tcl-modal__content">
          <div className="tcl-modal__header">
            Title demo
            <button className="tcl-modal__close">X</button>
          </div>
          <div className="tcl-modal__body">{children}</div>
          <div className="tcl-modal__footer"></div>
        </div>
      </div>
    </div>
  );
};

export default ModalSolution;
