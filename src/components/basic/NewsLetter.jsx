import { useState } from "react"
import logo from "/logo.png"

export default function NewsLetter() {
    const [email, setEmail] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission here
        console.log("Email submitted:", email)
        setEmail("")
    }

    return (
        <div className="bg-black sm:p-6 p-5 rounded-xl border border-gray-200">
            <div className="flex items-center gap-4 mb-4">
                <img
                    src={logo}
                    alt="Mu-60 logo"
                    className="w-16 h-16"
                />
                <div>
                    <h2 className="text-white text-2xl font-bold mb-1">Nanoparticle Detox Mail</h2>
                    <p className="text-gray-300">Get the latest advances in protecting your family, directly to your inbox</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                        className="w-full px-4 py-3 bg-[#272727] text-white rounded-lg border border-gray-700 focus:outline-none focus:border-[#813bb7] placeholder-gray-400"
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-[#813bb7] text-white px-8 py-2 rounded-full hover:bg-[#813bb7]/90 transition-colors"
                    >
                        Sign up
                    </button>
                </div>
            </form>
        </div>
    )
}

