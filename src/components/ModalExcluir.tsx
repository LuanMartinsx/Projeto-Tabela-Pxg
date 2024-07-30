import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void
  
}


// modal responsavel por abrir a opção de confirmação de exclusão
const ModalExcluir: React.FC<ModalProps> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[600] flex flex-col">
        <button onClick={() => onClose()} className="text-white text-xl place-self-end">X</button>
        <div className=" flex flex-col bg-purple-500 p-2 rounded text-black">
        <h2 className="text-2xl bg-purple-600 text-white p-5">Você tem certeza que deseja excluir este item?</h2>
        <div className="flex flex-row gap-9 justify-around mt-3">
            <button className="text-2xl bg-blue-600 p-5 rounded w-32" onClick={onConfirm}>Sim</button>
            <button className="text-2xl bg-red-600 p-5  rounded w-32" onClick={onClose}>Não</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ModalExcluir;