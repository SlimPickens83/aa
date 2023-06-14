import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"

// Components
import Header from "./components/Header.jsx"

function App() {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )
}

export default App
