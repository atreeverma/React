import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function MyApp() {
  const username="chai aur code"
    return (
      <h1>chai aur react {username}</h1>
    );
}
ReactDOM.createRoot(document.getElementById('root')).render(
    <MyApp />
)
const anotheruser="chai aur react"
const reactelement=React.createElement(
    'a',
    {href: 'https://google.com',target:'_blank'},
    'click to visit',
    anotheruser
)
ReactDOM.createRoot(document.getElementById('root')).
render(
    reactelement
)