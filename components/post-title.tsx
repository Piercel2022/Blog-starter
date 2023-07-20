import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="mb-12 text-5xl leading-tight tracking-tighter text-center md:text-7xl lg:text-8xl font-11 md:leading-none md:text-left">
      {children}
    </h1>
  )
}

export default PostTitle
