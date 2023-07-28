// import { Link } from "react-router-dom";

// const Bio = () =>{
//     return(
//         <div>
//             <h1>This is the home page</h1>
//             <Link to="/Project">Click to view our about page</Link>
//             <Link to="/Skill">Click to view our contact page</Link>
//         </div>
//     )
// }

// export default Bio;

import 'animate.css';

const Bio = () => {
    return(
        <div class="">
            <figure class="md:flex bg-slate-200 rounded-md m-20 p-10 rounde-xl justify-center shadow-xl">
                <img class="z-50 w-24 h-24 md:h-auto" src="/image/image.png" alt="photo bio"/>
                <div>
                    <blockquote>
                        <p class="z-0 animate__animated animate__backInLeft">
                        “Tailwind CSS is the only framework that I've seen scale
                        on large teams. It’s easy to customize, adapts to any design,
                        and the build size is tiny.”
                        </p>
                    </blockquote>
                    <figcaption class="font-medium">
                        <div class="animate__animated animate__fadeInUp">Diamondra RANDRIAMADISON</div>
                        <div class="animate__animated animate__fadeInUp">Développeuse alternante</div>
                    </figcaption>
                </div>
            </figure>
        </div>
    )
}

export default Bio;