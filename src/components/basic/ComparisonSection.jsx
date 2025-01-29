import React from 'react';
import pic1 from "/about2.jpg"
import pic2 from "/about3.jpg"

const ComparisonSection = () => {
    return (
        <div className="mt-12">
            {/* First Section */}
            <div className="flex lg:flex-row flex-col-reverse items-start gap-8 mb-12">
                <div className="flex-1 min-w-0"> {/* Added min-w-0 to prevent flex item from overflowing */}
                    <h2 className="text-2xl font-bold mb-4 break-words">Nanoparticles In The Water</h2>
                    <p className="text-gray-700 leading-relaxed break-words">
                        A recent study by OrbMedia analyzed 159 water samples, sourced from both tap water and bottled water in 14 countries, and found that over 80% of all samples contained plastic nanoparticles, with an average of 4.34 plastic particles per liter of water. Surprisingly, the highest density of plastic per volume of tap water was found in North America and the lowest densities were found, collectively, in seven European countries.1
                    </p>
                </div>
                <div className="flex-shrink-0 md:w-72 w-full lg:mx-0 mx-auto">
                    <img
                        src={pic1}
                        alt="Nanoparticles in water visualization"
                        className="rounded-lg w-full h-auto object-cover"
                    />
                </div>
            </div>

            {/* Second Section */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4 break-words">
                    Billions of people are breathing polluted air: new WHO data
                </h2>
                <p className="text-gray-700 leading-relaxed mb-8 break-words">
                    Nanoparticles are an important indicator of air pollution caused by a variety of natural and human sources. Due to their tiny size, they can remain suspended in the atmosphere for a long time and can travel great distances, causing various health problems after exposure. Indoor and outdoor nanoparticles can cause respiratory and cardiovascular disease. Domestic and occupational exposure is reported with thick septum, shortness of breath and a high level of protein interleukin and tumor necrosis factor (TNF-α) creating the possibility of tumors in the exposed population.2
                </p>
            </div>

            {/* Third Section */}
            <div className="flex lg:flex-row flex-col-reverse items-start gap-8 mb-12">
                <div className="lg:flex-1 min-w-0 w-full max-w-full overflow-hidden"> {/* Added width control and overflow handling */}
                    <p className="text-gray-700 leading-relaxed break-words whitespace-normal w-full">
                        Pulmonary injury and inflammation may result from inhaling nanosize particulate matter. These particles can cause oxidative stress in the cells, making our hearts struggle to pump blood throughout the body, and causing us to feel tired and lack motivation.3
                    </p>
                    {/* References Section */}
                    <div className="mt-8 w-full">
                        <h3 className="text-lg font-semibold mb-2">References</h3>
                        <ul className="text-sm text-gray-600 space-y-1 w-full">
                            <li className="break-all overflow-hidden">
                                <a href="https://orbmedia.org/stories/tns-report"
                                    className="text-blue-600 hover:underline inline-block w-full overflow-hidden text-ellipsis">
                                    1. https://orbmedia.org/stories/tns-report
                                </a>
                            </li>
                            <li className="break-all overflow-hidden">
                                <a href="https://www.who.int/news/item/04-04-2022-billions-of-people-still-breathe-unhealthy-air-new-who-data"
                                    className="text-blue-600 hover:underline inline-block w-full overflow-hidden text-ellipsis">
                                    2. https://www.who.int/news/item/04-04-2022-billions-of-people-still-breathe-unhealthy-air-new-who-data
                                </a>
                            </li>
                            <li className="break-all overflow-hidden">
                                <a href="https://ec.europa.eu/health/scientific_committees/opinions_layman/en/nanotechnology/l-3/6-health-..."
                                    className="text-blue-600 hover:underline inline-block w-full overflow-hidden text-ellipsis">
                                    3. https://ec.europa.eu/health/scientific_committees/opinions_layman/en/nanotechnology/l-3/6-health-...
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex-shrink-0 w-full lg:w-72">
                    <img
                        src={pic2}
                        alt="Air pollution visualization"
                        className="rounded-lg w-full lg:w-72 lg:h-72 h-60 object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default ComparisonSection;