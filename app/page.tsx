import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>
      <section className='home-section'>
        <CompanionCard 
          id="1"
          name="Sample Name"
          topic="Sample Topic"
          subject="Sample Subject"
          duration={60}
          color="#ffda6e"
          bookmarked={false}
        />
        <CompanionCard 
          id="2"
          name="Another Companion"
          topic="Another Topic"
          subject="Another Subject"
          duration={45}
          color="#e5d0ff"
          bookmarked={true}
          />
        <CompanionCard
          id="3"
          name="Third Companion"
          topic="Third Topic"
          subject="Third Subject"
          duration={30}
          color="#bde7ff"
          bookmarked={false}
        />
      </section>
      <section className='home-section'>
        <CompanionsList
                title="Recently completed sessions"
                companions={recentSessions}
                classNames="w-2/3 max-lg:w-full" 
        />
        <CTA />
      </section>
    </main>
  )
}

export default Page