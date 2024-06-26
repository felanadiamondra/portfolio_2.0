const Education = () =>{
    const educData = [
        {
            universityName : "ESTI",
            path : "IDEV",
            year : "2018 - 2021"
        } ,
        {
            universityName : "ESTI",
            path : "MSI",
            year : "2021 - 2024"
        },
        {
            universityName : "ESIEE-IT",
            path : "MSI",
            year : "2023 - 2024"
        }
    ]
    return(
    <div className="mx-20 ml-40 p-10">
        <div className="grid grid-cols-2 gap-4">
            <div className="animate__animated animate__fadeIn">
                <div className="w-10/12 relative">
                <h1 className="text-center font-bold text-blue-500">My education timeline and other trainings :)</h1>
                <div className="border-l-2 mt-10">
                    <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                    <div className="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                    <div className="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

                    <div className="flex-auto">
                        <h1 className="">2018 - 2024</h1>
                        <h1 className="">ESTI</h1>
                        <h6>Master in Information Systems Management</h6>
                        <h6>Bachelor's Degree in Integration and Development</h6>
                    </div>
                    {/* <a>Download materials</a> */}
                    </div>

                    <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-pink-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                    <div className="w-5 h-5 bg-pink-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                    <div className="w-10 h-1 bg-pink-300 absolute -left-10 z-0"></div>

                    <div className="flex-auto">
                        <h1 className="">2022 - 2023</h1>
                        <h1 className="">Core teams - GDSC ESTI</h1>
                        <h6>Google Developer Students Club </h6>
                        <h6> https://gdsc.community.dev/esti </h6>
                    </div>
                    {/* <a>Download materials</a> */}
                    </div>

                    <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-green-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                    <div className="w-5 h-5 bg-green-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                    <div className="w-10 h-1 bg-green-300 absolute -left-10 z-0"></div>

                    <div className="flex-auto">
                        <h1 className="">September 2022</h1>
                        <h1 className="">Orange Digital Center</h1>
                        <h3>Introduction to design</h3>
                    </div>
                    {/* <a>Download materials</a> */}
                    </div>
                </div>
                {/* <section className="mt-4 text-center">Build with ❤️ by <a href="https://github.com/saadh393" target="_blank">Saad Hasan </a></section> */}
                </div>
            </div>
            <div>
                <div className="mx-10">
                    <div className="grid py-32 grid-flow-col grid-rows-2 grid-cols-3 animate__animated animate__fadeIn">
                        <div className="transform scale-110 -rotate-6">
                            <img src={require("../images/image.jpg")} alt="" loading="lazy"/>
                        </div>
                        <div className="col-start-3 transform scale-75 rotate-6 translate-x-2 translate-y-15">
                            <img src={require("../images/image.jpg")} alt="" loading="lazy"/>
                        </div>
                        {/* <div className="transform scale-150 translate-y-11">
                            <img src={require("../images/image.jpg")} alt="" loading="lazy"/>
                        </div> */}
                        {/* <div className="transform translate-y-24">
                            <img src={require("../images/image.jpg")} alt="" loading="lazy"/>
                        </div> */}
                        {/* <div className="row-start-1 col-start-2 col-span-2 transform-x-20 translate-y-4">
                            <img src={require("../images/image.jpg")} alt="" loading="lazy"/>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Education;