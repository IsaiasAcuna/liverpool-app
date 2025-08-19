import axios from "axios";
import { useState, useEffect } from "react";
import InputField from "./inputs";

type Player = {
	_id: string,
	firstName: string,
	lastName: string,
	age: number,
	nationality: string,
	position: string,
	number: number,
};

type ErrorBackend = {
	msg: string;
};

interface FormProps {
	closeModal?: () => void;
}

const FormForEditPlayers: React.FC<FormProps> = ({ closeModal }) => {
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

		} catch (err) {
			console.error('Jugador no encontrado:', err);
		}
	}

	const [player, setPlayer] = useState<Player>({
		_id: "",
		firstName: "",
		lastName: "",
		age: 0,
		nationality: "",
		position: "",
		number: 0,
	});

	useEffect(() => {
		if (searchPlayer) {
			setPlayer(searchPlayer);
		}
	}, [searchPlayer]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;

		setPlayer((prev) => ({
			...prev,
			[name]: name === "age" || name === "number" ? Number(value) : value
		}));

	};

	const [errores, setErrores] = useState<ErrorBackend[]>([]);

	// Maneja el submit del formulario
	const handleSubmit = async () => {

		try {
			const res = await axios.put(`http://localhost:5000/player/${player._id}`, player);
			console.log("Jugador enviado:");
			alert("Jugador Editado con éxito");
			closeModal?.()
			window.location.reload();

		}
		catch (error) {
			console.error("Error al enviar:", error); // ✔️ nombre correcto
			if (axios.isAxiosError(error) && error.response?.data?.errors) {
				setErrores(error.response.data.errors);
				console.log("Respuesta del error:", error.response?.data);
			} else {
				setErrores([{ msg: 'Error inesperado del servidor' }]);
			}
		}

		
	};

	console.log(errores);
	

	return (
		<form onSubmit={(e) => {
			e.preventDefault(); // Evita el reload
			handleSearch();     // Ejecuta tu búsqueda
		}}
			className="space-y-4">

			<div className="flex gap-8 mt-4">
				<input
					type="text"
					placeholder="Buscar jugador..."
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					className="border text-lg border-gray-300 rounded p-2 font-sans font-normal"
				/>

				<button type="submit"
					onClick={handleSearch}
					className="btn btn-primary p-2 rounded cursor-pointer bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-bold px-6">Buscar
				</button>
			</div>

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
				className="btn btn-primary w-full py-2 rounded cursor-pointer bg-red-600 hover:bg-red-700 text-white font-sans font-bold"
			>
				Guardar
			</button>
		</form>
	);
};

export default FormForEditPlayers