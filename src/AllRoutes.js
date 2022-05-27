import React from 'react'
import {Routes, Route} from 'react-router-dom' 
import Home from './pages/Home/home'
import Details from './pages/Details/details'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path = '/Details' element = {<Details/>}/>
    </Routes>
  )
}

export default AllRoutes