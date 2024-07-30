import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: any
  
}


// modal para abrir os componentes
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[600] flex flex-col">
        <button onClick={() => onClose()} className="text-white text-xl place-self-end">X</button>
        <div className="bg-purple-950 p-2 rounded text-black">{children}</div>
      </div>
    </div>
  );
};

export default Modal;