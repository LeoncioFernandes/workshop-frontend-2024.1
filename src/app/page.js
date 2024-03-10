'use client'

import { useState, useEffect } from "react";

export default function Home({pesquisa}) {

  const [data, setData] = useState([])
  
  useEffect(() => {
    fetch(
      'https://api.tvmaze.com/shows'
    )
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => console.log('error', error))
  }, [])

  const createMarkup = (html) => {
    return { __html: html };
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 bg-[#141414] ">
      <div className="flex flex-row flex-wrap justify-around gap-10">
        {data
          .filter((item) => item.name.toLowerCase().includes(pesquisa))
          .map((item) => (
          
            <div key={item.id} className="flex flex-col w-1/6 ">
              <h2 className="py-3 bg-[#141414] shadow-2xl shadow-[#7a7a7a] text-white font-bold text-xl rounded-t-xl text-center">{item.name}</h2>
              <img src={item.image.medium} className="rounded-b-xl shadow-[0_0px_40px_-15px_rgba(0,0,0,0.3)] shadow-[#7a7a7a]" />
              <div className="text-white text-justify text-base pt-2" dangerouslySetInnerHTML={createMarkup(item.summary)}></div>
            </div>
          ))
        }
      </div>
    </main>
  );
}
