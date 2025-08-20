import axios from "axios";
import api from '@/lib/api';
import { useState } from "react";
import InputField from "./inputs";

interface Player {
  firstName: string;
  lastName: string;
  age: number | string;
  nationality: string;
  position: string;
  number: number | string;
  image: string;
}

type ErrorBackend = {
  msg: string;
};

interface FormProps {
  closeModal?: () => void;
}

const FormForPlayers: React.FC<FormProps> = ({ closeModal }) => {
  const [player, setPlayer] = useState<Player>({
    firstName: "",
    lastName: "",
    age: "",
    nationality: "",
    position: "",
    number: "",
    image: "https://raw.githubusercontent.com/IsaiasAcuna/imagenes-liverpool-app/main/images/player-no-face.webp"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // Capitalizar primera letra si el campo lo requiere
    const capitalizeFirst = (str: string) =>
      str.charAt(0).toUpperCase() + str.slice(1);

    const formattedValue =
      name === "age" || name === "number"
        ? Number(value)
        : ["firstName", "lastName", "nationality"].includes(name)
          ? capitalizeFirst(value)
          : value;

    setPlayer((prev) => ({
      ...prev,
      [name]: formattedValue,
    }));
  };


  const [errores, setErrores] = useState<ErrorBackend[]>([]);

  const handleSubmit = async () => {
    try {
      const res = await api.post("/player", player);
      alert("Jugador Creado con exito");
      closeModal?.();
      window.location.reload()
    } catch (error) {
      console.error("Error al enviar:", error);
      if (axios.isAxiosError(error) && error.response?.data?.errors) {
        setErrores(error.response.data.errors);
      } else {
        setErrores([{ msg: 'Error inesperado del servidor' }]);
      }
    }

  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-4">
      <InputField label="Nombre" name="firstName" value={player.firstName} onChange={handleChange} />
      <InputField label="Apellido" name="lastName" value={player.lastName} onChange={handleChange} />
      <InputField label="Edad" name="age" value={player.age} onChange={handleChange} />
      <InputField label="Nacionalidad" name="nationality" value={player.nationality} onChange={handleChange} />

      <label htmlFor="position" className="block mb-1 font-sans font-bold">
        Posición
      </label>

      <select
        name="position"
        value={player.position}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded px-3 py-2 font-sans font-light">

        <option value="">Seleccionar posición</option>
        <option value="Arquero">Arquero</option>
        <option value="Defensor">Defensor</option>
        <option value="Mediocampista">Mediocampista</option>
        <option value="Delantero">Delantero</option>
      </select>

      <InputField label="Dorsal del jugador" name="number" value={player.number} onChange={handleChange} />

      {errores.slice(0, 1).map((err, i) => <p key={i} className="text-red-500">{err.msg}</p>)}

      <button
        type="button"
        onClick={handleSubmit}
        className="btn btn-primary w-full py-2 rounded bg-red-600 hover:bg-red-700 text-white font-sans font-bold"
      >
        Guardar
      </button>
    </form>
  );
};

export default FormForPlayers