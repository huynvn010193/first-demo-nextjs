import React, { useEffect, useRef, useState } from "react";
// import "./modal.scss";

type ModalProps = {
  isVisible: boolean;
  isRenderHeader?: boolean;
  isRenderCloseIcon?: boolean;
  btnOkText?: string;
  btnOkCancelText?: string;
  onOK?: () => void;
  onCancle?: () => void;
  renderFooter?: () => JSX.Element;
};

// Javascript DOM
let CLASS_DEFAULT = "tcl-modal__wrapper";
const ModalSolution: React.FC<ModalProps> = ({
  children,
  isVisible: isVisibleOutside,
  isRenderHeader,
  isRenderCloseIcon,
  btnOkText,
  btnOkCancelText,
  onOK,
  onCancle,
  renderFooter,
}) => {
  const [className, setClassName] = useState(CLASS_DEFAULT);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handler(evt) {
      if (evt.which === 27) {
        onCancle();
      }
    }
    document.addEventListener("keyup", handler);

    return () => {
      // Component will unmount
      document.removeEventListener("keyup", handler);
    };
  }, []);

  useEffect(() => {
    setIsVisible(isVisibleOutside);
  }, [isVisibleOutside]);

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

  // const onCancle = (): void => {
  //   if (onCancle) {
  //     onCancle();
  //   } else {
  //     setIsVisible(false);
  //   }
  // };

  const renderDefaultBTN = () => (
    <>
      <button className="tcl-modal__cancel" onClick={onCancle}>
        {btnOkCancelText}
      </button>
      <button className="tcl-modal__ok" onClick={onOK}>
        {btnOkText}
      </button>
    </>
  );

  const _renderFooter = () => {
    return renderFooter ? renderFooter() : renderDefaultBTN();
  };

  if (!isVisible) return null;

  return (
    <div className={className}>
      <div className="tcl-mask" onClick={onCancle}></div>
      <div className="tcl-dialog">
        <div className="tcl-modal__content">
          {isRenderHeader && (
            <div className="tcl-modal__header">
              Title demo
              {isRenderCloseIcon && (
                <button className="tcl-modal__close" onClick={onCancle}>
                  X
                </button>
              )}
            </div>
          )}
          <div className="tcl-modal__body">{children}</div>
          <div className="tcl-modal__footer">{_renderFooter()}</div>
        </div>
      </div>
    </div>
  );
};

ModalSolution.defaultProps = {
  isVisible: false,
  btnOkText: "OK",
  btnOkCancelText: "Cancel",
  isRenderHeader: true,
  isRenderCloseIcon: true,
};

export default ModalSolution;
