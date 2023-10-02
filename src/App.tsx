import {useEffect, useState } from 'react';
import './App.css'
import FormPage from './site/FormPage.tsx';
import Gallery from "./site/Gallery.tsx";
import WelcomePage from "./site/WelcomePage.tsx";
import {Navigate, Route, Routes } from "react-router-dom";
import { DBdata } from './assets/dataBase.ts';
import axios from 'axios';

function App() {
const [page, setPage] = useState<number>(1);
const [data, setData] = useState<DBdata[]>([]);

useEffect(() => {
    loadData();
}, [page]);

function loadData() {
    axios.get("https://rickandmortyapi.com/api/character?page=" + page)
        .then((response) => {
            setData(response.data.results);
        })
        .catch((reason) => {
            console.log(reason.status);
            console.log("Daten konnten nicht abgerufen werden!");
        })
};

function getPage(pageNumber: number){
    setPage(pageNumber);
}

  return (
    <>
        <Routes>
            <Route path={"/"} element={<WelcomePage />}/>
            <Route path={"/characters"} element={<Gallery characters={data} page={page} setPage={getPage}/>}/>
            <Route path={"/characters/add"} element={<FormPage data={data} setNewCharacter={setData}/>}/>
            <Route path={"/*"} element={<Navigate to={"/"}/>}/>
        </Routes>
    </>
  )
}

export default App
