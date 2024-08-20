import { Sidebar, Navbar, Avatar, Tooltip, Dropdown } from 'flowbite-react'
import { MdEmail } from 'react-icons/md'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { useWindowSize } from 'react-use'

const NavBar = () => {
  const { width } = useWindowSize()

  return width >= 768 ? (
    <Sidebar className="h-[100vh] sticky top-0">
      <Sidebar.ItemGroup>
        <Avatar
          className="mx-auto mt-4"
          img="https://avatars.githubusercontent.com/u/39835725?v=4"
        >
          <div className="space-y-1 font-medium dark:text-white">
            <div>Ramon Ramirez</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Full Stack Web Developer
            </div>
          </div>
        </Avatar>
        <NavBarItem href="#aboutme">About Me</NavBarItem>
        <NavBarItem href="#experiences">Experiences</NavBarItem>
        <NavBarItem href="#abilities">Abilities</NavBarItem>
        <NavBarItem href="#projects">Projects</NavBarItem>
      </Sidebar.ItemGroup>
      <Sidebar.ItemGroup>
        <div className="flex justify-center mt-4 text-gray-500">
          {Object.entries(contactInfo).map(([key, value]) => (
            <Tooltip key={key} content={value.label}>
              <a
                href={value.link}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-gray-900 dark:hover:text-white"
              >
                {value.icon}
              </a>
            </Tooltip>
          ))}
        </div>
      </Sidebar.ItemGroup>
    </Sidebar>
  ) : (
    <Navbar fluid rounded>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              img="https://avatars.githubusercontent.com/u/39835725?v=4"
              alt="Ramon Ramirez"
              className="w-10 h-10"
            />
          }
        >
          <Dropdown.Header className="font-semibold">
            Ramon Ramirez
            <span className="text-gray-400 font-normal ml-0.5">
              - Full Stack Web Developer
            </span>
          </Dropdown.Header>
          <Dropdown.Item>
            <a
              className="flex items-center"
              href={contactInfo.email.link}
              target="_blank"
              rel="noreferrer noopener"
            >
              {contactInfo.email.icon} Email
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a
              className="flex items-center"
              href={contactInfo.linkedIn.link}
              target="_blank"
              rel="noreferrer noopener"
            >
              {contactInfo.linkedIn.icon} LinkedIn
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a
              className="flex items-center"
              href={contactInfo.github.link}
              target="_blank"
              rel="noreferrer noopener"
            >
              {contactInfo.github.icon} GitHub
            </a>
          </Dropdown.Item>
        </Dropdown>
      </div>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#aboutme">About Me</Navbar.Link>
        <Navbar.Link href="#experiences">Experiences</Navbar.Link>
        <Navbar.Link href="#abilities">Abilities</Navbar.Link>
        <Navbar.Link href="#projects">Projects</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

const NavBarItem = ({ children, href }: { children: string; href: string }) => {
  return (
    <Sidebar.Item className="hover:cursor-pointer" href={href}>
      {children}
    </Sidebar.Item>
  )
}

export default NavBar

const contactInfo = {
  email: {
    icon: <MdEmail className="h-5 w-5 mx-3" />,
    link: 'mailto:ramirez.ramon1414@gmail.com',
    label: 'Email',
  },
  linkedIn: {
    icon: <FaLinkedin className="h-5 w-5 mx-3" />,
    link: 'https://linkedin.com/in/ramonr14',
    label: 'LinkedIn',
  },
  github: {
    icon: <FaGithub className="h-5 w-5 mx-3" />,
    link: 'https://github.com/RRamirez1414',
    label: 'GitHub',
  },
}
