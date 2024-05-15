export const Navbar = () => {
    return(
        <div className="fixed bg-white w-full h-[70px]">
            <div className="flex items-center justify-between w-full h-full px-4">
                <a href="">Logo</a>
                <ul className="flex gap-4">
                    <li>Inicio</li>
                    <li>Estudante</li>
                    <li>Transparência</li>
                </ul>
                <button className="flex items-center justify-center px-5 py-2 bg-green-400 rounded-lg border-none">Contato</button>
            </div>
        </div>
    )
}