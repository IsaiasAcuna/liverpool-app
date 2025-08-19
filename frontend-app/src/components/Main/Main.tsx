import React, { useContext } from 'react'
import CardPlayer from './CardPlayer'
import { usePlayers } from '@/context/PlayerContext';
import Title from './TitleSection';
import HorizontalScroll from './HorizontalScrollSection';
import Section from './Section';


const Main = () => {
  const { players } = usePlayers()

  const playersGoalkeepers = players.filter(player => player.position === 'Arquero');

  const playerDefenders = players.filter(player => player.position === 'Defensor');

  const playersMidfielders = players.filter(player => player.position === 'Centrocampista');

  const playersForwards = players.filter(player => player.position === 'Delantero');

  return (
    <main className='mx-auto max-w-[85%]'>
        <Section>
            <Title titleSection={'Arqueros'}/>

            <HorizontalScroll>
                {playersGoalkeepers.sort((a, b) => a.number - b.number).map(player => (
                    <CardPlayer
                        key={player.number} 
                        firstName={player.firstName}
                        lastName={player.lastName}
                        age={player.age}
                        nationality={player.nationality}
                        number={player.number}
                        position={player.position}
                        image={player.image}
                    />
                ))}
            </HorizontalScroll>
        </Section>


        <Section>
            
            <Title titleSection='Defensores' />

            <HorizontalScroll>

            {playerDefenders.sort((a, b) => a.number - b.number).map(player => (
                    <CardPlayer
                        key={player.number} 
                        firstName={player.firstName}
                        lastName={player.lastName}
                        age={player.age}
                        nationality={player.nationality}
                        number={player.number}
                        position={player.position}
                        image={player.image}
                    />
                ))}
            </HorizontalScroll>
        
            
        </Section >

        <Section>
            <Title titleSection='Mediocampistas' />

            <HorizontalScroll>
                {playersMidfielders.sort((a, b) => a.number - b.number).map(player => (
                        <CardPlayer
                            key={player.number} 
                            firstName={player.firstName}
                            lastName={player.lastName}
                            age={player.age}
                            nationality={player.nationality}
                            number={player.number}
                            position={player.position}
                            image={player.image}
                        />
                    ))}
            </HorizontalScroll>
        </Section>

        <Section>
            
            <Title titleSection='Delanteros' />

            <HorizontalScroll>
            {playersForwards.sort((a, b) => a.number - b.number).map(player => (
                    <CardPlayer
                        key={player.number} 
                        firstName={player.firstName}
                        lastName={player.lastName}
                        age={player.age}
                        nationality={player.nationality}
                        number={player.number}
                        position={player.position}
                        image={player.image}
                    />
                ))}

            </HorizontalScroll>
        
            
        </Section>

    </main>
  );
};

export default Main;

