const Skill = () => {
    return(
        <div class="m-24">
            <div class="grid grid-cols-3 gap-4">
                <div class="col-span-2 h-40 bg-white bg-opacity-10 border-t-2 border-l-2 rounded-xl">
                    Web development
                    <ul class="list-inside list-disc">
                        <li>React</li>
                        <li>Vue</li>
                        <li>Su</li>
                    </ul>
                </div>
                <div class="h-40 bg-white bg-opacity-20 border-t-2 border-r-2 rounded-xl">Mobile development</div>
                <div class="h-40 bg-white bg-opacity-20 border-l-2 border-b-2 rounded-xl">Programming Language</div>
                <div class="col-span-2 bg-white bg-opacity-10 border-b-2 border-r-2 rounded-xl">Database</div>
            </div>
        </div>
)
}

export default Skill;