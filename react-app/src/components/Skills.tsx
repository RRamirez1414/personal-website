import React from 'react'
import { Card } from '../elements'
import { Rating } from 'flowbite-react'

const Skills = () => {
  return (
    <div>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-1">
        Abilities
      </h5>
      <Card className="h-fit">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(SkillsRatings)
            .sort(([, ratingA], [, ratingB]) => ratingB - ratingA)
            .map(([skill, rating]) => (
              <div key={skill} className="flex items-center">
                <div className="max-w-44 w-full">{skill}</div>
                <Rating>
                  {[1, 2, 3, 4, 5].map((value) => (
                    <Rating.Star filled={value <= rating} key={value} />
                  ))}
                </Rating>
              </div>
            ))}
        </div>
      </Card>
    </div>
  )
}

export default Skills

const SkillsRatings = {
  JavaScript: 4,
  TypeScript: 4,
  React: 4,
  NodeJS: 3,
  Express: 3,
  MongoDB: 3,
  PostgreSQL: 2,
  HTML: 4,
  CSS: 4,
  TailwindCSS: 4,
  'Git/GitHub': 3,
  AWS: 3,
  'Command Line Interface': 4,
  'Test-Driven Development': 3,
  'Agile Development': 4,
  'Object-Oriented Programming': 3,
  'Functional Programming': 4,
  Python: 2,
  'Microsoft Office Products': 4,
  'Visual Studio Code': 4,
  'Confluence/Jira': 4,
  Vercel: 4,
}
