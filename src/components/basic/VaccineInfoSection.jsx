import pic from "/vccinfo.jpg"

export default function VaccineInfoSection() {
    return (
        <div className="py-6">
            <div className="">
                <div className="bg-white rounded-xl md:rounded-3xl overflow-hidden shadow-xl">
                    {/* Image Header */}
                    <div className="relative h-80 md:h-96">
                        <img
                            src={pic}
                            alt="COVID-19 vaccine vials with medical glove"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-blue-900/50 flex items-end">
                            <h2 className="text-white text-3xl md:text-4xl font-bold sm:p-8 p-3">Are There Nanoparticles In My Vaccine?</h2>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="md:p-8 sm:p-5 p-3 md:space-y-6 space-y-3">
                        <p className="text-gray-700 leading-relaxed">
                            The newest, recently distributed vaccines rely on lipid (fatty) nanoparticles to deliver mRNA messages.
                            While some nanoparticles are very helpful drug-delivery agents (in the case of chemotherapy, and other
                            scenarios), many recently vaccinated individuals have been plagued with horrible neurological and cardiac
                            symptoms, consistent with nanoparticle poisoning.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Aside from the lipid nanoparticles necessary for delivery, some researchers have claimed to find a variety
                            of nanoparticles in the recent vaccines. Some of these include polyethylene glycol, aluminum and graphene
                            oxide. Graphene is a very robust and durable lattice of carbon nanoparticles, only 1/10 of one nanometer
                            thick! These tiny, thin sheets, or "flakes" of graphene are sharper than razor blades, and can cause
                            inflammation and toxic effects inside the body.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

