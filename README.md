# 📦️ Zustand를 이용하여 만든 숫자 증가, 감소 예제
:octocat: https://light9639.github.io/React-Zustand/

![light9639 github io_React-Zustand_](https://user-images.githubusercontent.com/95972251/201828524-f7c939c8-528c-4845-8efd-3de6a6f5c13d.png)

:sparkles: Zustand를 이용하여 만든 숫자 증가, 감소 예제입니다. :sparkles:

## :tada: React 생성 
- React 생성
```bash
yarn create react-app my-app
```

- vite를 이용하여 프로젝트를 생성하려면

```bash
yarn create vite
```
- 터미널에서 실행 후 프로젝트 이름 만든 후 React 선택, javascirpt 선택하면 생성 완료.

## 🚝 Zustand 설치
- Zustand 설치 명령어
```bash
yarn add zustand
```

## ✒️ App.jsx 작성
### :zap: App.jsx
- `useStore` 함수를 만든 뒤 숫자 증가, 감소 함수를 만든다.
```bash
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import create from 'zustand'
import Component from './Component'
import Img from './assets/zustand.png'

const useStore = create((set) => ({
  count: 0,
  Plus() {
    set((state) => ({count : state.count + 1}))
  },
  Minus() {
    set((state) => ({count : state.count - 1}))
  }
}))

function App() {
  const { count, Plus, Minus } = useStore();

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" style={{ marginLeft: "-25px", marginRight: "-50px" }}>
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
    </div>
  )
}

export default App
```
