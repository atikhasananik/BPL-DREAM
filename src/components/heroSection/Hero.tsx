import type { Dispatch, SetStateAction } from "react";
import hero from "../../assets/banner-main.png"
import bgShadow from "../../assets/bg-shadow.png"

interface IHeroProp {
    coin:number;
    setCoin: Dispatch<SetStateAction<number>>
}

const Hero = ({setCoin, coin}:IHeroProp) => {
    return (
    <div className={`my-15 p-8 bg-[#131313] flex gap-8 flex-col relative rounded-4xl items-center  container mx-auto overflow-hidden`}>
        <div className={`h-full w-full absolute top-0 left-0  -z-10`}>
            <img className="h-full w-full" src={bgShadow} alt="" />
        </div>
            <img className="w-[15vw]" src={hero} alt="  " />
            <h1 className="text-5xl text-white font-semibold ">Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className="text-2xl text-white">Beyond Boundaries Beyond Limits</p>
            <div className="inline-block mb-10  p-2 border rounded-2xl border-yellow-300">
            <button onClick={()=> setCoin(coin + 10000000)} className="btn border-0 outline-0 shadow-none rounded-lg  bg-yellow-300">Claim Free Credit</button>
            </div>
        </div>
    );
};

export default Hero;