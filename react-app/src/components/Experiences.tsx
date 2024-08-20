import { Card } from '../elements'
import { Timeline, Badge } from 'flowbite-react'
import { RiGraduationCapFill } from 'react-icons/ri'
import { IoBriefcase } from 'react-icons/io5'
import { FaLocationDot } from 'react-icons/fa6'
import { MdArrowOutward } from 'react-icons/md'

const Experiences = () => {
  return (
    <div>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-1">
        Experiences
      </h5>
      <Card className="h-fit">
        <Timeline>
          <TimelineItem
            icon="brief-case"
            time="March 2021 - Present"
            title="Software Developer"
            body=" As a front-end developer at Electronic Caregiver, I create and implement user interface components using React. I collaborate with the design team, product manager, and back-end team to bridge the gap between graphical design and technical implementation, ensuring high performance and responsiveness of our Remote Patient Monitoring system. Additionally, I actively participate in code reviews and contribute to improving our front-end development processes."
            location="Las Cruces, NM, Remote"
            resourceLink="https://electroniccaregiver.com/"
          />
          <TimelineItem
            icon="graduation"
            time="February 2021"
            title="The Complete 2021 Web Developer Bootcamp Certificate"
            body="Udemy, an online learning platform, offers a course that covers the latest technologies and tools in web development. The course includes HTML, CSS, JavaScript, Node.js, Express, MongoDB, and React. The course also covers the basics of web development, such as responsive design, web security, and deployment."
            resourceLink={{
              label: 'The Complete 2021 Web Developer Bootcamp',
              link: 'https://www.udemy.com/share/1013gG3@HIzF2B44Uax8ov2vWMlHWGsuPPS8qeh6dED-kODs5EIjgODjYwOgqgrqV3szwsZ1/',
            }}
          />
          <TimelineItem
            icon="brief-case"
            time="May 2020 – January 2021"
            title="Educational Resources Coordinator"
            body="Dedicated to sharing the best practices of K-12 computer science fundamentals through outreach opportunities. Coordinated and led several interactive virtual summer camps, for 75 K-12 students. Created and reviewed curriculum focused on programming concepts and languages including Python, C/C++, Java, HTML/CSS, Block Coding, and Cybersecurity concepts."
            location="Las Cruces, NM, Remote"
            resourceLink="https://computerscience.nmsu.edu/"
          />
          <TimelineItem
            icon="graduation"
            time="May 2020"
            title="Bachelor of Science in Computer Science"
            body="New Mexico State University, Las Cruces, NM"
          />
          <TimelineItem
            icon="brief-case"
            time="August 2019 – May 2020"
            title="Computer Technician"
            body="FSA focuses on supporting financial and civil construction departments that service NMSU’s students and faculty. Provided technical support and updated our hardware inventory database with MySQL scripts. Configured/repaired computer hardware and software while addressing daily network support through our help desk system."
            location="Las Cruces, NM"
            resourceLink={{
              label: 'Financial Systems Administration',
              link: 'https://fbs.nmsu.edu/bpm/bpm-6.html#:~:text=Financial%20Systems%20Administration%20(FSA)%20is,new%20Administration%20and%20Finance%20initiatives.',
            }}
          />
          <TimelineItem
            icon="brief-case"
            time="May – July 2018"
            title="Research Assistant"
            body="Research Experience for Undergraduates (REU), is a program that exposes undergraduates from various universities nationwide to graduate research. Mentored by Robert Podschwadt (PhD student) in helping to train a machine learning model to identify malicious software within an Android device. Programmed using Java and BASH scripts to output Android application log files to feed the machine learning model."
            location="Denton, TX"
            resourceLink={{
              label: 'REU Program',
              link: 'https://engineering.unt.edu/research/index.html',
            }}
          />
          <TimelineItem
            icon="brief-case"
            time="June 2017"
            title="Research Assistant"
            body="NM Alliance for Minority Participation, Summer Community College Opportunity for Research Experience (SCCORE), a program dedicated to exposing undergraduates to graduate research. Visited weather stations along the Rio Grande to extract raw weather data. Programmed a database to continuously import weather data from the stations for querying, sorting, and calculation."
            location="Las Cruces, NM"
            resourceLink={{
              label: 'NM AMP',
              link: 'https://nmamp.nmsu.edu/',
            }}
          />
          <TimelineItem
            icon="graduation"
            time="May 2017"
            title="Associate of Applied Science in Computer Tech - IT Specialist"
            body="Doña Ana Community College, Las Cruces, NM"
          />
        </Timeline>
      </Card>
    </div>
  )
}

export default Experiences

const TimelineItem = ({
  time,
  title,
  body,
  icon,
  location,
  resourceLink,
}: {
  time: string
  title: string
  body: React.ReactNode
  icon?: keyof typeof TimeLinePointToIcon
  location?: string
  resourceLink?: string | { label: string; link: string }
}) => {
  return (
    <Timeline.Item>
      <Timeline.Point icon={icon ? TimeLinePointToIcon[icon] : undefined} />
      <Timeline.Content>
        <Timeline.Time>{time}</Timeline.Time>
        <Timeline.Title>{title}</Timeline.Title>
        <Timeline.Body>{body}</Timeline.Body>
        <div className="flex flex-col space-y-1 sm:flex-row sm:space-x-4 sm:space-y-0 ">
          {location ? (
            <Badge color="gray" icon={FaLocationDot} className="w-fit">
              {location}
            </Badge>
          ) : null}
          {resourceLink ? (
            <Badge
              className="w-fit"
              href={
                typeof resourceLink === 'string'
                  ? resourceLink
                  : resourceLink.link
              }
              color="gray"
              rel="noreferrer noopener"
              icon={MdArrowOutward}
            >
              {typeof resourceLink === 'string'
                ? resourceLink
                : resourceLink.label}
            </Badge>
          ) : null}
        </div>
      </Timeline.Content>
    </Timeline.Item>
  )
}

const TimeLinePointToIcon = {
  graduation: RiGraduationCapFill,
  'brief-case': IoBriefcase,
}
