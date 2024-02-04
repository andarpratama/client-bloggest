
const Banner = () => {
    return(
        <div className="min-h-96 bg-teal-50 dark:bg-teal-800" >
            <div className="container mx-auto flex items-center justify-between">
            <div className=" min-h-96 flex flex-col justify-center">
                <h3 className="text-orange-700 dark:text-orange-500 text-2xl italic" >#WelcomeAll</h3>
                <h2 className="text-teal-900 text-6xl font-semibold mb-4 dark:text-gray-100"><span>I'm</span> <span className="font-extrabold underline cursor-pointer" >Andar</span></h2>
                <p className="text-teal-900 dark:text-gray-200" >As a Fullstack Enginner more than <span className="font-bold">5 Years Experience</span></p>
            </div>
            <div>
                <img className="w-80 mb-4" src={'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2'} alt={'Banner'} />
                <h3 className="text-teal-900 dark:text-gray-100 text-xl font-semibold cursor-pointer text-center duration-300 hover:underline " >Javascript for Web Designer</h3>
            </div>
            </div>
        </div>
    )
}

export default Banner