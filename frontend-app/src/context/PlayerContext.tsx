import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import axios from "axios";
import api from '@/lib/api';

type Player = {
      firstName: string,
      lastName: string,
      age: number,
      nationality: string,
      position: string,
      number: number,
      image: string,
};

type PlayerContextType = {
    players: Player[];
    setPlayers: React.Dispatch<React.SetStateAction<Player[]>>;
};

// Creamos el contexto con valor inicial undefined para forzar validación
const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

type PlayerProviderProps = {
  children: ReactNode;
};

export const PlayerProvider = ({ children }: { children: React.ReactNode }) => {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    const readPlayers = async () => {
      try {
        const res = await api.get("/player");
        setPlayers(res.data);
      } catch (error) {
        console.error("Error al obtener jugadores:", error);
      }
    };
    
    readPlayers();
  }, []);

  return (
    <PlayerContext.Provider value={{ players, setPlayers }}>
      {children}
    </PlayerContext.Provider>
  );
};

// Hook personalizado para consumir PlayerContext más seguro
export const usePlayers = (): PlayerContextType => {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error("usePlayers debe usarse dentro de un PlayerProvider.");
  }
  return context;
};


