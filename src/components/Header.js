'use client'

import  { useState } from "react";
import Nav from './Nav'
import Perfil from './Perfil'
import Home from "@/app/page";

export default function Header() {
  
  const [search, setSearch] = useState("")

  const [visible, setVisible] = useState(false)
  const changeVisibility = () => {
    setVisible(!visible)
    let campoPesquisa = document.getElementById("campoPesquisa")
    let buttonPesquisa = document.getElementById("buttonPesquisa")
    let posPesquisa = document.getElementById("posPesquisa")
    if (!visible) {
      campoPesquisa.focus()
      campoPesquisa.className = " w-72 h-9 pl-10 placeholder-neutral-400 border-white border bg-[#141414] text-left font-light text-sm text-white hover:transition-all duration-300 ease-in-out "
      buttonPesquisa.disabled = true
      posPesquisa.className = " mr-7 "
    }else{
      if (campoPesquisa.value != "") {
        setVisible(!visible)
      } else{
        campoPesquisa.className = " w-0 "
        buttonPesquisa.disabled = false
        posPesquisa.className = " mr-12 "
      }
    }
  }
  
  return (
    <div className="bg-[#141414]" >
      
      <div className='flex justify-between items-center px-16 h-16 sticky top-0 bg-[#141414]'>

        <div className="flex justify-start gap-x-5">

          <a href="/">
            <img src="../imgs/logotipo-da-netflix.svg" className='h-7 min-w-12'/>
          </a>
          <div className='m-1'></div>
            <Nav titulo="Início" url="/"/>
            <Nav titulo="Séries" url="/series"/>
            <Nav titulo="Filmes" url="/filmes"/>
            <Nav titulo="Bombando" url="/bombando"/>
            <Nav titulo="Minha lista" url="/minha-lista"/>
            <Nav titulo="Navegar por idiomas" url="/navegar-por-idiomas"/>

        </div>

        <div className="flex justify-end">

          <div id="posPesquisa" className=" mr-12 ">
            <button id="buttonPesquisa" onClick={changeVisibility} className="flex items-center fixed mt-1 ml-1">
              <svg class="h-7 w-7 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="10" cy="10" r="7" />  <line x1="21" y1="21" x2="15" y2="15" /></svg>
            </button>
            <input id="campoPesquisa" onBlur={changeVisibility} placeholder="Títulos, gente e gêneros" type="text" className=" w-0 " onChange={(e) => setSearch(e.target.value)}/>
          </div>
          
          <div className="flex items-center gap-x-5">
            <Nav titulo="Infantil" url="/infantil"/>
            <svg class="h-7 w-7 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
            </svg>
            <Perfil></Perfil>
          </div>
          
        </div>
        
      </div>
      <Home pesquisa={search.toLowerCase()} className=" hidden" />
    </div>
  )
}