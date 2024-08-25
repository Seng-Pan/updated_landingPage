import { useState } from 'react'
import './App.css'
import LandingPage from './pages/LandingPage'
// import BreadcrumbNav from './components/BreadcrumbNav';


// function App() {
//   const paths = [
//     {name:'Home', href:'#'},
//     {name:'Blogs', href:'#'},
//     {name:'10 Essay Ways to Start Recycling at Home', href:'#'}
//   ];

//   return (
//     <>
//       <main className='container mx-auto p-4'>
//         <BreadcrumbNav paths={paths}/>
//         <h1 className='text-2xl font-bold mt-4' >10 Easy Ways to Start Recycling at Home</h1>
//         {/* Main Content */}
//       </main>
//     </>
//   )
// }

// export default App


function App() {
 
  return (
    <>
      <LandingPage/>
    </>
  )
}

export default App


