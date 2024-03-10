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
    <div className="flex min-h-screen flex-col items-center justify-between p-12 bg-[#141414] ">
      <div className="flex flex-row flex-wrap justify-around gap-10">
        {data
          .filter((item) => item.name.toLowerCase().includes(pesquisa))
          .map((item) => (
          
            <div key={item.id} className="flex flex-col w-1/6 ">
              <h2 className="py-3 bg-[#54b9c5] text-white font-bold text-xl rounded-t-xl text-center">{item.name}</h2>
              <img src={item.image.medium} className="rounded-b-xl" />
              <div className="text-white text-justify text-base pt-2" dangerouslySetInnerHTML={createMarkup(item.summary)}></div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
