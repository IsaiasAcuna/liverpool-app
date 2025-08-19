import React from 'react'

interface TitleProps {
  titleSection: string;
}

const Title: React.FC<TitleProps> = ({ titleSection }) => {
  return (

    
    <h2 className='inline-block rounded-lg mb-5 p-2 bg-black text-white uppercase text-4xl '>{titleSection}</h2>
  )
}

export default Title
