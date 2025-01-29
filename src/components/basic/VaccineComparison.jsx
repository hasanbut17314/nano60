import ball from "/ball.png"

export default function VaccineComparison() {
    return (
        <div className="py-10">
            <div className="">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">
                    Fight Fire With Fire - C60 Fullerenes vs Graphene Oxide
                </h2>

                <div className="flex flex-col md:flex-row items-start gap-8">
                    <div className="flex-1 sm:space-y-6 space-y-4">
                        <p className="text-gray-800 leading-relaxed">
                            Graphene and C60 are both nanoparticles made of carbon, but their shape and function are very different.
                            Graphene is a thin, razor-sharp sheet. C60 is a ball-shaped fullerene, capable of encasing other materials
                            inside it. These types of compounds, with molecules from one material encased in the crystal structure of
                            another, are called clathrates.
                        </p>
                        <p className="text-gray-800 leading-relaxed">
                            Since C60 fullerenes are electronegative, they possess the ability to steal electrons from other
                            nanomaterials, yet still maintain their status as the most powerful, superior antioxidant. Because of
                            their "caging" (clathrate) structure, they dismantle and "trap" nano-residue as soon as contact is made.
                            This residue is then passed from the body with the C60.
                        </p>
                    </div>

                    <div className="md:w-1/3 flex justify-center">
                        <img
                            src={ball}
                            alt="C60 fullerene structure"
                            className="w-full max-w-56"
                        />
                    </div>
                </div>

                <div className="mt-8 text-sm text-gray-600">
                    <h3 className="font-semibold mb-2">References</h3>
                    <ol className="list-decimal list-inside space-y-1">
                        <li>
                            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8929726/" className="hover:underline">
                                PMC8929726
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.drrobertyoung.com/post/transmission-electron-mi-graphene-oxide-in-cov-19-vaccines"
                                className="hover:underline"
                            >
                                Transmission Electron Microscopy Reveals Graphene Oxide in CoV-19 Vaccines
                            </a>
                        </li>
                        <li>
                            <a
                                href="http://ducharmeweber.com/dr-andreas-noacks-warning-to-the-world-about-covid-jabs/"
                                className="hover:underline"
                            >
                                Dr. Andreas Noack's Warning to the World About Covid Jabs
                            </a>
                        </li>
                        <li>
                            <a href="https://pubmed.ncbi.nlm.nih.gov/25104246/" className="hover:underline">
                                PubMed 25104246
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.researchgate.net/publication/359430935_Clathrate_structure_of_polymerized_fullerite_C60"
                                className="hover:underline"
                            >
                                Clathrate structure of polymerized fullerite C60
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.researchgate.net/publication/46413924_Clearance_Kinetics_of_Fullerene_C60_Exposure"
                                className="hover:underline"
                            >
                                Clearance Kinetics of Fullerene C60 Exposure
                            </a>
                        </li>
                        <li>
                            <a href="https://www.sciencedirect.com/science/article/pii/S1748013222030114" className="hover:underline">
                                ScienceDirect Article S1748013222030114
                            </a>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

