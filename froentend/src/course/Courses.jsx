
import NavBar from '../components/NavBar'

import Footer from '../components/Footer'
import Course from '../components/Course'
export default function courses() {
  return (
    <>
    <div className='mt-0'>
    <NavBar/>
    <div className='min-h-screen '>
   <Course/>
   </div>
   <Footer/>
   </div>
   
    </>
  )
}
