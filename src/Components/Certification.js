const Certification = () =>{

    const cert_name = [
        'kaggle',
        'orange',
        'gdsc',
        'osc',
        'mooc'
    ]

    return(
        <div class="m-24">
            <div class="grid grid-cols-4 gap-4">
                { cert_name.map((cert, index) => {
                    return(
                        <div key={index} class="h-44 bg-slate-400 transition delay-75 duration-300 ease-in-out hover:scale-125 hover:shadow-md">
                            <img class="w-auto h-44" src={require(`../images/${cert}.png`)}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Certification;