import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'

export default function Row({ title, fetchURL ,rowID}) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);
  //functio to slide right 
  const slideRight=() =>{
    var slider = document.getElementById('slider' +rowID);
    slider.scrollRight = slider.scrollRight - 500;
  }
    //functio to slide Left
    const slideLeft=() =>{
      var slider = document.getElementById('slider'+rowID);
      slider.scrollLeft = slider.scrollLeft - 500;}
  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft onClick={slideLeft} className="bg-white rounded-full opacity-40 hover:opacity-100  hidden group-hover:block" size={40}/>
        <div id={"slider"+rowID}
         className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative' ">
          {movies.map((item, id) => (
            <Movie key={id} item={item}/>
          ))}
        </div>
        <MdChevronRight onClick={slideRight} className="bg-white rounded-full opacity-40 hover:opacity-100" size={40}/>
      </div>
    </>
  );
}
