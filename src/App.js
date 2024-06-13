import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Contact from './components/Contact/Contact';
import Form from './components/ContactForm/Form';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Contact/>
      <Form/>
    </div>
  )
}

export default App