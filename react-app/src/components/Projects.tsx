import { Card } from '../elements'
import { Badge } from 'flowbite-react'
import { MdArrowOutward } from 'react-icons/md'

const Projects = () => {
  return (
    <div>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-1">
        Projects
      </h5>
      <p className="text-gray-500 dark:text-gray-400 mb-4">
        Here are some of the learning based projects I have worked on throughout
        my career. These projects have helped me learn new technologies and
        improve my skills.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(projects).map(
          ([project, { description, technologies, githubLink, liveLink }]) => (
            <Card key={project} className="h-full">
              <div className="h-full flex flex-col">
                <Card.Title>{project}</Card.Title>
                <div>
                  <p className="text-gray-500">{description}</p>
                  <div className="mt-2">
                    <h6 className="font-semibold">Technologies Used:</h6>
                    <div className="flex flex-wrap">
                      {technologies.map((technology) => (
                        <Badge
                          key={technology}
                          className="rounded-xl mt-1 mr-1"
                        >
                          {technology}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 flex items-center space-x-2">
                    {githubLink ? (
                      <Badge
                        href={githubLink}
                        color="gray"
                        rel="noreferrer noopener"
                        icon={MdArrowOutward}
                      >
                        GitHub
                      </Badge>
                    ) : null}
                    {liveLink ? (
                      <Badge
                        href={liveLink}
                        color="gray"
                        rel="noreferrer noopener"
                        icon={MdArrowOutward}
                      >
                        Demo
                      </Badge>
                    ) : null}
                  </div>
                </div>
              </div>
            </Card>
          ),
        )}
      </div>
    </div>
  )
}

export default Projects

const projects = {
  'Pocket Collector': {
    description:
      'Pocket Collector is a web application that allows users to search for and save their favorite TCG cards. Users can search for Pokemon Cards and save them to their collection. Users can also view their collection and delete cards from their collection.',
    technologies: [
      'React',
      'TypeScript',
      'TailwindCSS',
      'Vercel',
      'React-Query',
      'Pokemon TCG API',
      'Framer Motion',
    ],
    githubLink: 'https://github.com/RRamirez1414/crud-react-ts-app/tree/main',
    liveLink: 'https://pocket-collector.vercel.app/',
  },
  'Keeper App': {
    description:
      'Keeper App is a note-taking application that allows users to create, edit, and delete notes.',
    technologies: ['React', 'Github Pages'],
    githubLink: 'https://github.com/RRamirez1414/keeper-app',
    liveLink: 'https://rramirez1414.github.io/keeper-app/',
  },
  'React Meet': {
    description:
      'A simple React app that displays a list of React meetups. This project was created to learn the basics of Server Side Rendering using NextJS',
    technologies: ['React', 'NextJS', 'Vercel'],
    githubLink: 'https://github.com/RRamirez1414/my-first-nextjs-app',
    liveLink: 'https://my-first-nextjs-dptkn8i7t-rramirez1414.vercel.app/',
  },
}
