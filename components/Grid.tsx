import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'

const Grid = () => {
  return (
    <section id='about'>
        <BentoGrid>
          <BentoGridItem
            title='About'
            description='I am a software engineer based in Pakistan. I specialize in building dynamic web applications with Next.js.'
          />
          <BentoGridItem
            title='Projects'
            description='I have worked on a variety of projects ranging from e-commerce websites to social media platforms.'
          />
          <BentoGridItem
            title='Contact'
            description='Feel free to reach out to me if you have any questions or would like to collaborate.'
          />
          </BentoGrid>
    </section>
  )
}

export default Grid