export const Navbar = () => {
    return(
        <div className="md:fixed lg:flex sm:hidden bg-white w-full h-[70px]">
            <div className="flex items-center justify-between w-full h-full px-4">
                <a href="">Logo</a>
                <ul className="flex gap-4">
                    <li className="hover:text-green-600">Inicio</li>
                    <li className="hover:text-green-600">Estudante</li>
                    <li className="hover:text-green-600">Transparência</li>
                </ul>
                <button className="flex items-center justify-center px-5 py-2 bg-green-400 rounded-lg border-none">Contato</button>
            </div>
        </div>
    )
}