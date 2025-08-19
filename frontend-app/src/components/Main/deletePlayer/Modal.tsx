import React from "react";
import FormForDeletePlayers from "./form";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  // Cierra modal al hacer click fuera del contenido
  const onBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      onClick={onBackdropClick}
      className="fixed inset-0 akakrica  flex justify-center items-center z-50"
    >
      <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg relative">
        <button
          onClick={onClose}
          className="text-5xl absolute top-3 right-3 text-gray-600 hover:text-gray-900 font-bold"
          aria-label="Cerrar modal"
        >
          ×
        </button>

        <h2 className="text-2xl uppercase font-light mb-4">Eliminar Jugador</h2>
        
        <FormForDeletePlayers closeModal={onClose} />
      </div>
    </div>
  );
}
