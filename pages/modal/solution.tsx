import React, { useState } from "react";
import ModalSolution from "../../components/ModalSolution";

export default function Soulution() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="container">
      {openModal && (
        <ModalSolution
          isVisible={openModal}
          // isRenderHeader={true}
          // isRenderCloseIcon={true}
          btnOkText="Submit"
          onOK={() => {
            console.log("Submit form");
          }}
          onCancle={() => {
            setOpenModal(false);
          }}
        >
          <h2>Demo Modal</h2>
          <form>
            <input type="text" />
          </form>
        </ModalSolution>
      )}
      <button
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Open Modal
      </button>
    </div>
  );
}
