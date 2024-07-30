import { useState } from "react";
import Modal from "./Modal";
import { Button } from "@nextui-org/react";
import FormHunt from "./FormHunt";
import FormTotal from "./FormTotal";
import LogoutButton from "./botaoLogout";

interface AsideRightProps {}


// componente aside do lado direito
export default function AsideRight(props: AsideRightProps) {
  const [showModal, setShowModal] = useState(false);// estado para setar a modal

  return (
    <aside className="bg-zinc-900 pt-12 p-6 flex flex-col justify-between h-full">
      <div className=" flex flex-col border border-purple-600 bg-purple-500 p-4 rounded-xl text-center text-xl">
        <Button onClick={() => setShowModal(true)} className="items-center flex flex-col text-center">Adicionar</Button>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <FormHunt isOpen={false} onClose={() => {}} onConfirm={() => {}} />
        </Modal>
      </div>

      <div>
      <LogoutButton/>
      </div>
      <div className="border border-purple-600 bg-purple-500 p-4 rounded-xl text-center text-xl">
       
        <FormTotal/>
        
      </div>
    </aside>
  );
}
