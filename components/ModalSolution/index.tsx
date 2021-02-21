import React, { useEffect, useRef, useState } from "react";
// import "./modal.scss";

type ModalProps = {
  isVisible: boolean;
  onOK?: () => void;
  onCancle?: () => void;
  renderFooter?: () => JSX.Element;
};

// Javascript DOM
let CLASS_DEFAULT = "tcl-modal__wrapper";
const ModalSolution: React.FC<ModalProps> = ({
  children,
  isVisible,
  onOK,
  onCancle,
  renderFooter,
}) => {
  const [className, setClassName] = useState(CLASS_DEFAULT);

  useEffect(() => {
    if (isVisible === true) {
      setClassName((oldClass) => oldClass + " show");
      // setClassName(className + " show"); không nên. => dùng cách này phải truyển className vào useEffect.
      document.querySelector("body").classList.add("tcl-modal__open");
    } else {
      setClassName(CLASS_DEFAULT);
      document.querySelector("body").classList.remove("tcl-modal__open");
    }
  }, [isVisible]);

  useEffect(() => {
    function handler(evt) {
      console.log("evt",evt);
      
      if(evt.which === 27) {
        onCancle();
      }
    }
    document.addEventListener("keyup", handler);

    return () => {
      // Component will unmount
      document.removeEventListener("keyup",handler);
    }
  },[])

  const renderDefaultBTN = () => (
    <>
      <button className="tcl-modal__cancel" onClick={onCancle}>
        Cancel
      </button>
      <button className="tcl-modal__ok" onClick={onOK}>
        OK
      </button>
    </>
  );

  const _renderFooter = () => {
    return renderFooter ? renderFooter() : renderDefaultBTN();
  };

  if(!isVisible) return null;

  return (
    <div className={className}>
      <div className="tcl-mask" onClick={onCancle}></div>
      <div className="tcl-dialog">
        <div className="tcl-modal__content">
          <div className="tcl-modal__header">
            Title demo
            <button className="tcl-modal__close" onClick={onCancle}>X</button>
          </div>
          <div className="tcl-modal__body">{children}</div>
          <div className="tcl-modal__footer">{_renderFooter()}</div>
        </div>
      </div>
    </div>
  );
};

export default ModalSolution;
