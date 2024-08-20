import { Card } from '../elements'

const AboutMe = () => {
  return (
    <div>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-1">
        About Me
      </h5>
      <Card className="h-fit">
        <Card.Body>
          I&#39;m an extensive web developer from El Paso, TX. My focus is on
          front-end programming with a good apprehension of back-end
          development. I have experience working with JavaScript, TypeScript,
          React, Node.js, Express, and MongoDB. I enjoy working in a team where
          we enhance each other’s programming knowledge and skills through
          projects. I strive for structure, quality, and love incorporating time
          for app optimization. I&#39;m always looking to learn new technologies
          and improve my skills.
        </Card.Body>
      </Card>
    </div>
  )
}

export default AboutMe
