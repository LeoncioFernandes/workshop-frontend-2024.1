import Link from 'next/link'

export default function Nav({titulo, url}) {

  function roverText(titulo){
    if(titulo.localeCompare("Início") && titulo.localeCompare("Infantil")){
      return "hover:text-zinc-400 transition-all duration-300 ease-in-out"
    }
    return ""
  }

  function fontBold(titulo){
    if(titulo.localeCompare("Início") && titulo.localeCompare("Infantil")){
      return "font-normal "
    }
    return "font-semibold "
  }

  return (
      <div>
        <Link href={url} className={"text-sm text-white " + fontBold(titulo) + roverText(titulo)}>{titulo}</Link>
      </div> 
  )
}