import { ReactNode } from 'react'

interface Section {
      children: ReactNode;
}

const Section = ({ children }: Section) => {
  return (
    <section className='my-20'>
        {children}
    </section>
  )
}

export default Section
