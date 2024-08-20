import React from 'react'
import { Card } from 'flowbite-react'

const CardComponent = ({
  children,
  href,
  className,
}: {
  children: React.ReactNode
  href?: string
  className?: string
}) => {
  return (
    <Card href={href} className={className}>
      {children}
    </Card>
  )
}

const Title = ({ children }: { children: string }) => {
  return (
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {children}
    </h5>
  )
}

const Body = ({ children }: { children: string }) => {
  return (
    <p className="font-normal text-gray-700 dark:text-gray-400">{children}</p>
  )
}

export default CardComponent

CardComponent.Title = Title
CardComponent.Body = Body
