const Introvideo = () => {
    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Explore Our Project</h2>
            </div>
            <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center lg:justify-between">
                <div className="lg:col-span-5 lg:col-start-1">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/nvSSHPBxWIQ?si=FkBNQtBWWilvshGg"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen>
                    </iframe>
                </div>
                <div className="mt-10 lg:mt-0 lg:col-span-6 lg:col-end-13">
                    <div className="lg:col-span-5 lg:col-start-1">
                        <div className="mb-8">
                            <p className="text-gray-600 dark:text-gray-400 text-justify">
                                Join us in this video as we introduce our talented team and delve into the inspiration behind our project. We will unveil our project's three key features, and we'll even create a sample CV together, showing you how to do it effortlessly. Whether you're curious about our project's origins or want practical insights, this video is your gateway to our innovation and expertise. Click play to meet the team, discover our inspiration, and explore our project's capabilities
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introvideo;