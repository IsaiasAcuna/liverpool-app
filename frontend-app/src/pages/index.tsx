import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Main from "@/components/Main/Main";
import { PlayerProvider } from "@/context/PlayerContext";

export default function Home() {
  return (
    <>
            
      <PlayerProvider>
        <Header />
        <Main />
      </PlayerProvider>

      
              
    
    </>    
  );
}
