import React, { useState, useEffect } from "react";
import Modal from "./Modal";

export default function PlayerEditFromModal() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <button
                onClick={openModal}
                className="btn cursor-pointer btn-primary uppercase text-xl bg-white px-4 py-2 rounded"
                type="button"
            >
                Editar jugador
            </button>

            <Modal isOpen={isModalOpen} onClose={closeModal} />
        </>
    )
}