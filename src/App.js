import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
export default function App(){
  return(

    <Router>
      <Routes>
        <Route element ={<MainLayout/>}>
        <Route path='/Home' element = {<Home/>}/>

        </Route>
      </Routes>
    </Router>
  )
}