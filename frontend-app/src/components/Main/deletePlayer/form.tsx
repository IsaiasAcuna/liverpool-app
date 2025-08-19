import { strict } from "assert";
import axios from "axios";
import { useState, useEffect } from "react";

type Player = {
    _id: string,
    firstName: string,
    lastName: string
};

interface FormProps {
    closeModal?: () => void;
}

const FormForDeletePlayers: React.FC<FormProps> = ({ closeModal }) => {

    const [inputValue, setInputValue] = useState<string>("")

    const [searchPlayer, setSearchPlayer] = useState<Player | null>(null);

    const capitalizarPrimeraLetra = (inputValue: string): string => {
        return inputValue.charAt(0).toUpperCase() + inputValue.slice(1).toLowerCase();
    };


    const handleSearch = async () => {
        try {
            const inputPlayer: string = capitalizarPrimeraLetra(inputValue)
            const res = await axios.get(`http://localhost:5000/player/${inputPlayer}`);
            setSearchPlayer(res.data);
            console.log(res.data);
            console.log(searchPlayer);
        } catch (err) {
            console.error('Jugador no encontrado:', err)
            alert("jugador no encontrado" + player);
        }
    }

    const [player, setPlayer] = useState<Player>({
        _id: "",
        firstName: "",
        lastName: "",
    });

    useEffect(() => {
        if (searchPlayer) {
            setPlayer(searchPlayer);
        }
    }, [searchPlayer]);

    // Maneja el submit del formulario
    const handleSubmit = async () => {

        try {
            const res = await axios.delete(`http://localhost:5000/player/${player._id}`);
            console.log("Jugador eliminado:", res.data);
            window.location.reload()
        } catch (err) {
            console.error("Error al eliminar:");
        }

        alert("Jugador eliminado");
        closeModal?.();
    };


    return (
        <form
            onSubmit={(e) => {
                e.preventDefault(); // Evita el reload
                handleSearch();     // Ejecuta tu búsqueda
            }}
            className="space-y-4"
        >
            <div className="flex gap-10">
                <input
                    type="text"
                    placeholder="Buscar jugador..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="border text-lg border-gray-300 rounded p-2 font-sans font-normal"
                />
                <button
                    type="submit" // ✅ Este es el botón que se acciona con Enter
                    className="btn btn-primary p-2 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-bold px-6"
                >
                    Buscar
                </button>
            </div>

            {player._id && (
                <h3 className="text-2xl uppercase font-light text-red-600">
                    ¿Desea eliminar a {player.firstName} {player.lastName}?
                </h3>
            )}

            {player._id && (
                <button
                    type="button" // ❌ No debe ser submit
                    disabled={!player._id}
                    onClick={handleSubmit}
                    className="btn btn-primary w-full py-2 rounded bg-red-600 hover:bg-red-700 text-white font-sans font-bold"
                >
                    Eliminar
                </button>
            )}
        </form>
    );
};

export default FormForDeletePlayers