
import React from 'react';
import { data } from './mockData';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

function Project() {
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <div className='relative flex items-center m-24'>
        <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
        <div
          id='slider'
          className='w-full h-full overflow-x-hidden scroll whitespace-nowrap scroll-smooth scrollbar-hide'
        >
          {data.map((item, idx) => (
            <div key={idx}
              className='w-[220px] inline-block p-2 m-10 cursor-pointer hover:scale-105 ease-in-out duration-300 bg-slate-300'
            > {item} </div>
          ))}
        </div>
        <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
      </div>
    </>
  );
}

export default Project;
