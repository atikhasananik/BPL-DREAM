import logo from"../../assets/logo.png"

const Nav = () => {
    return (
        <nav className='flex justify-between items-center container mx-auto mt-6'>
            <div className=''>
                <img className="w-full" src={logo} alt="" />
            </div>
            <div className="flex gap-10 items-center ">
                <ul className=" flex gap-10 ">
                    <li className="cursor-pointer hover:text-black text-shadow font-normal] transition-all">Home</li>
                    <li className="cursor-pointer hover:text-black text-shadow font-normal] transition-all">Fixture</li>
                    <li className="cursor-pointer hover:text-black text-shadow font-normal] transition-all">Teams</li>
                    <li className="cursor-pointer hover:text-black text-shadow font-normal] transition-all">Schedules</li>
                </ul>
                <button className="btn">Coin $</button>
            </div>
        </nav>
    );
};

export default Nav;