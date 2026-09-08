import logo from"../../assets/logo.png"

const Nav = () => {
    return (
        <nav className='flex justify-between items-center container mx-auto mt-6'>
            <div className=''>
                <img className="w-full" src={logo} alt="" />
            </div>
            <div className="flex gap-10 items-center ">
                <ul className=" flex gap-10 ">
                    <li className="cursor-pointer hover:text-black text-shadow font-normal] transition-all"><a href="#">Home</a></li>
                    <li className="cursor-pointer hover:text-black text-shadow font-normal] transition-all"><a href="#">Fixture</a></li>
                    <li className="cursor-pointer hover:text-black text-shadow font-normal] transition-all"><a href="#">Teams</a></li>
                    <li className="cursor-pointer hover:text-black text-shadow font-normal] transition-all"><a href="#">Schedules</a></li>
                </ul>
                <button className="btn">Coin $</button>
            </div>
        </nav>
    );
};

export default Nav;