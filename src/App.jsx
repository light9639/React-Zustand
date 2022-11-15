import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import create from 'zustand'
import Component from './Component'
// import { persist } from 'zustand/middleware'
// import devtools from 'zustand/middleware'
import Img from './assets/zustand.png'

const useStore = create((set) => ({
  count: 0,
  Plus() {
    set((state) => ({count : state.count + 1}))
  },
  Minus() {
    set((state) => ({count : state.count - 1}))
  }
  // async ajax() {
  //   const response = await fetch('');
  //   console.log(await response.json());
  // }
}))

function App() {
  const { count, Plus, Minus } = useStore();

  return (
    <div className="App">
      <div>
        <a href="https://zustand-demo.pmnd.rs/" target="_blank" style={{ marginLeft: "-25px", marginRight: "-50px" }}>
          <img src="https://velog.velcdn.com/post-images/augusty/7dc27aa0-0563-11ea-8b40-6b6b6ae34645/bear.png" class="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1 style={{ marginTop: "15px", color: "white", fontWeight: "700" }}>React + Zustand</h1>

      <div style={{ margin: "75px auto 0 auto" }}>
        <button className="btn btn-primary" onClick={() => {
          Plus();
        }}>
          count plus {count}
        </button>
        <button className="btn btn-secondary hiddenBox" style={{ marginLeft: "15px" }} onClick={() => {
          Minus();
        }}>
          count minus {count}
        </button>
      </div>
      <div style={{ margin: "25px auto 0 auto" }}>
        <button className="btn btn-secondary BlockBox" onClick={() => {
          Minus();
        }}>
          count minus {count}
        </button>
        <p className='text-white mt-4' style={{ fontSize: "1.05rem"}} >
          Edit <code className='text-primary'>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs text-white" style={{ fontSize: "1rem", marginTop: "65px" }}>
        Click on the Zustand and React logos to learn more
      </p>
        {/* <Component count={count} Plus={Plus} Minus={Minus}></Component> */}
    </div>
  )
}

export default App
