const Project = () =>{
    const projects = [
        {
            name : "SmartTour"
        }, 
        {
            name : "Food"
        }, 
        {
            name : "Food"
        }, 
        {
            name : "Food"
        }, 
        {
            name : "Food"
        }, 
        {
            name : "Food"
        }
    ]
    return(
        <div className="mx-20 ml-40">

            <div className="animate__animated animate__fadeIn animate__delay-5s text-center mt-20"><h2>My Project 📁</h2></div>
            <div className="flex overflow-x-hidden p-10">

                {projects.map((project, idx) =>(
                    <div className={`shadow-psh animate__animated animate__fadeInDown animate__delay-${idx+1}s animate__faster p-20 m-5 min-w-56 h-56 backdrop-filter backdrop-blur-sm bg-opacity-10 bg-slate-200 rounded-3xl hover:scale-105 transition-transform`}>{project.name}</div>
                ))}

            </div> 
        </div>
    )
}

export default Project;