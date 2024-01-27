import React, { useState, useEffect } from "react"; 


const Skill = () => {
 
    return(
        
 
        <div className="mx-20 ml-40 p-10 m-24">
            <div class="grid grid-cols-3 gap-4">
                 <div class="col-span-2 p-20 h-40 bg-white bg-opacity-10 rounded-xl shadow-t-l">
                     Web development
                     <ul class="list-inside list-disc">
                         <li>React</li>
                         <li>Vue</li>
                         <li>Su</li>
                     </ul>
                 </div>
                 <div class="h-40 bg-white bg-opacity-10 shadow-t-r rounded-xl ">Mobile development</div>
                 <div class="h-40 bg-white bg-opacity-10 shadow-b-l rounded-xl">Programming Language</div>
                 <div class="col-span-2 bg-white bg-opacity-10 shadow-b-r rounded-xl">Database</div>
                 {/* <div class="h-40 bg-white bg-opacity-20 border-t-2 border-r-2 border-navy_blue rounded-xl">Mobile development</div>
                 <div class="h-40 bg-white bg-opacity-20 border-l-2 border-b-2 border-navy_blue rounded-xl">Programming Language</div>
                 <div class="col-span-2 bg-white bg-opacity-10 border-b-2 border-r-2 border-navy_blue rounded-xl">Database</div> */}
             </div>
        </div>
        // <div className="mx-20 ml-40 p-10 m-24">
        //     <div class="grid grid-cols-3 gap-4">
        //          <div class="col-span-2 p-20 h-40 bg-white bg-opacity-10 rounded-xl shadow-t-l">
        //              Web development
        //              <ul class="list-inside list-disc">
        //                  <li>React</li>
        //                  <li>Vue</li>
        //                  <li>Su</li>
        //              </ul>
        //          </div>
        //          <div class="h-40 bg-white bg-opacity-20 shadow-t-r rounded-xl">Mobile development</div>
        //          <div class="h-40 bg-white bg-opacity-20 shadow-b-l rounded-xl">Programming Language</div>
        //          <div class="col-span-2 bg-white bg-opacity-10 shadow-b-r rounded-xl">Database</div>
        //          {/* <div class="h-40 bg-white bg-opacity-20 border-t-2 border-r-2 border-navy_blue rounded-xl">Mobile development</div>
        //          <div class="h-40 bg-white bg-opacity-20 border-l-2 border-b-2 border-navy_blue rounded-xl">Programming Language</div>
        //          <div class="col-span-2 bg-white bg-opacity-10 border-b-2 border-r-2 border-navy_blue rounded-xl">Database</div> */}
        //      </div>
        // </div>
      
)
}

export default Skill;