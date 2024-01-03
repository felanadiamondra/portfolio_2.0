// const Project = () =>{
//     const projects = [
//         {
//             name : "SmartTour"
//         }, 
//         {
//             name : "Food"
//         }, 
//         {
//             name : "Food"
//         }, 
//         {
//             name : "Food"
//         }, 
//         {
//             name : "Food"
//         }, 
//     ]
//     return(
//         <div className="mx-20 ml-40">

//             <div className="animate__animated animate__fadeIn animate__delay-5s text-center mt-20"><h2>My Project 📁</h2></div>
//             <div className="flex p-10">

//                 {projects.map((project, idx) =>(
//                     // <div className={`animate__animated animate__fadeInDown animate__delay-${idx+1}s animate__faster p-20 m-5 min-w-56 h-56 backdrop-filter backdrop-blur-sm bg-opacity-10 bg-slate-200 rounded-3xl hover:scale-105 transition-transform`}>{project.name}</div>
//                     <div className="
//                             w-[300px]
//                             h-[200px]
//                             rounded-3xl
//                             bg-slate-500
//                             relative
//                             before:absolute
//                             before:w-full
//                             before:h-full
//                             before:-z-10
//                             before:bg-gradient-to-r
//                             before:from-[#b81e1e]
//                             before:to-[#fffacc]
//                             before:left-0
//                             before:top-0
//                             before:blur-[7px]
//                             before:rounded-3xl
//                             m-5
//                             hover:before:blur-[10px]
//                             z-20
//                             "
//                             key={idx}>
//                             <div className=' bg-white w-full h-full rounded-3xl '>
//                                 {project.name}
//                             </div>
//                     </div> 
//                     ))}

//             </div> 
//         </div>
//     )
// }

// export default Project;

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
