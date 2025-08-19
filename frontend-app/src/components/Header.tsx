import PlayerFormModal from "./Main/createPlayer/buttonCreatePlayer"
import PlayerDeleteFromModal from "./Main/deletePlayer/buttonDeletePlayer"
import PlayerEditFromModal from "./Main/editPlayer/buttonEditPlayer"


const Header = () => {
  return (
    <header className=' bg-red-600 h-[10vh] flex justify-around items-center'>
        <h1 className="text-5xl uppercase text-white">Liverpool Team Players 2025/26</h1>

    <div className="flex gap-10">

        <PlayerFormModal />
        <PlayerEditFromModal />
        <PlayerDeleteFromModal />
    </div>
    </header>
  )
}

export default Header
