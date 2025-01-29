import polution from "/polution.jpg"

export default function ContaminationSection() {
    return (
        <div className="min-h-screen bg-[#efeafa] py-16 px-4 md:px-8 lg:px-16">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 gap-8 items-center">
                    {/* Left Column - Image */}
                    <div className="rounded-2xl overflow-hidden shadow-xl">
                        <img
                            src={polution}
                            alt="Industrial pollution forming a skull shape"
                            className="w-full h-full object-cover sepia"
                        />
                    </div>

                    {/* Right Column - Content */}
                    <div className="lg:space-y-6 space-y-4">
                        <div className="text-sm text-gray-600">Scientific References Continually Updated - September 2024</div>

                        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                            <span className="text-[#813bb7]">Our World</span> Is Contaminated With{" "}
                            <span className="text-[#813bb7]">Nanoparticles</span>, And So Is Your{" "}
                            <span className="text-[#813bb7]">Body</span>
                        </h2>

                        <div className="text-lg text-gray-700">(Hint It's Not Just Pollution)</div>

                        <p className="text-gray-800 leading-relaxed">
                            Are you struggling to stay focused, no matter how much sleep you get? Do you have trouble remembering
                            simple things? Do your joints and muscles ache, especially in the morning? Do you struggle to lose weight,
                            despite trying a series of fad diets and exercise routines? And how many coughs and colds has your family
                            endured, even while protecting yourself with masks and sanitizer? Turns out, it's not your fault.
                        </p>

                        <button className="bg-[#813bb7] text-white px-8 py-3 rounded-full hover:bg-[#813bb7]/90 transition-colors">
                            Read more
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

