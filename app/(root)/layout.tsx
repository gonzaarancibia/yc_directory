import { NextPage } from 'next'
import Navbar from '../../components/Navbar'

interface Props {
    children: Readonly<{ children: React.ReactNode}>
}

const Layout: NextPage<Props> = ({children}) => {
  return <main className='font-work-sans'>
    <Navbar/>
    {children}
  </main>
}

export default Layout