
const navbar = () => {
    return (
        <div className="navbar bg-[#171717]">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#202020] rounded-box w-52">

                    {/* <li tabIndex={0}> */}
                    {/* <a className="justify-between">
                        Parent
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                    </a> */}
                    {/* <ul className="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul> */}
                    {/* </li> */}
                    <li><a href="#about" className="text-white text-xl">About</a></li>
                    <li><a href="#projecten" className="text-white text-xl">Projecten</a></li>
                    <li><a href="#gegevens" className="text-white text-xl">Gegevens</a></li>
                </ul>
                </div>
                <div className="normal-case text-xl text-cyan-300 p-4">Valentino Andric</div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><a href="#about" className="text-white text-2xl">Over mij</a></li>
                {/* <li tabIndex={0}>
                    <a>
                    Parent
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                    </a>
                    <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                    </ul>
                </li> */}
                <li><a href="#projecten" className="text-white text-2xl">Projecten</a></li>
                <li><a href="#gegevens" className="text-white text-2xl">Gegevens</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                {/* <a className="btn">Get started</a> */}
            </div>
            </div>
    )
};

export default navbar;