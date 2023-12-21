export default function Navbar() {
    return (
        <div className="fixed top-0 z-10 flex justify-center font-light text-sm items-center drop-shadow-xl p-4 bg-black w-full text-gray-300">
            <a href="#about" className="px-2 hover:text-white transition duration-300 ease-in-out">About</a>
            <a target="_blank" href="/resume.pdf" className="px-2 hover:text-white transition duration-300 ease-in-out">Resume</a>
            {/* <a href="#projects" className="px-2 hover:text-white transition duration-300 ease-in-out">Projects</a> */}
            <a href="#contact" className="px-2 hover:text-white transition duration-300 ease-in-out">Contact</a>
        </div >
    )
}
