import { useState } from 'react';
import './App.css'
import FormPage from './site/FormPage.tsx';
import Gallery from "./site/Gallery.tsx";
import WelcomePage from "./site/WelcomePage.tsx";
import {Navigate, Route, Routes } from "react-router-dom";
import { DBdata, rickAndMortyDB } from './assets/dataBase.ts';

function App() {
const [data, setData] = useState<DBdata[]>(rickAndMortyDB.results);

  return (
    <>
        <Routes>
            <Route path={"/"} element={<WelcomePage />}/>
            <Route path={"/characters"} element={<Gallery />}/>
            <Route path={"/characters/add"} element={<FormPage data={data} setNewCharacter={setData}/>}/>
            <Route path={"/*"} element={<Navigate to={"/"}/>}/>
        </Routes>
    </>
  )
}

export default App
