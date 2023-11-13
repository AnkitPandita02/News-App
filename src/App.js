import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App =()=> {

  const apiKey = process.env.REACT_APP_NEWS_API
  const [mode, setMode] = useState("light")
  const [btntxt, setBtntxt] = useState("Enable Dark Mode")
  const toggleMode =() =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#000";
      setBtntxt('Disable Dark Mode')

    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "#fff";
      setBtntxt('Enable Dark Mode')
    }
    }

  const [progress, setProgress] = useState(1)

    return (
      <div>
        <Router>
          <NavBar mode ={mode} toggleMode ={toggleMode}  btntxt = {btntxt}/>
          <LoadingBar
          height = {3}
        color='#fff'
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
          <Routes>
            <Route path="/" element={<News setProgress = {setProgress} apiKey = {apiKey} key={"general"} pageSize = {12} country = 'in' category = 'general'/>} />
            <Route path="/business" element={<News setProgress = {setProgress} apiKey = {apiKey} key={"business"} pageSize = {12} country = 'in' category ="business"/>} />
            <Route path="/entertainment" element={<News setProgress = {setProgress} apiKey = {apiKey} key={"entertainment"} pageSize = {12} country = 'in' category ="entertainment"/>} />
            <Route path="/health" element={<News setProgress = {setProgress} apiKey = {apiKey} key={"health"} pageSize = {12} country = 'in' category ="health"/>} />
            <Route path="/science" element={<News setProgress = {setProgress} apiKey = {apiKey} key={"science"} pageSize = {12} country = 'in' category ="science"/>} />
            <Route path="/sports" element={<News setProgress = {setProgress} apiKey = {apiKey} key={"sports"} pageSize = {12} country = 'in' category ="sports"/>} />
            <Route path="/technology" element={<News setProgress = {setProgress} apiKey = {apiKey} key={"technology"} pageSize = {12} country = 'in' category ="technology"/>} />
          </Routes>
        </Router>
      </div>
    );
}


export default  App