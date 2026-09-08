import { FaFlag, FaUserAlt } from "react-icons/fa";
import type { IplayerType } from "../../type";


export interface IPlayerCardProps {
  player: IplayerType;
}

const PlayerCard = ({ player }: IPlayerCardProps) => {
  return (
    <>
      <div className=" my-5 overflow-hidden rounded-2xl shadow-xl hover:shadow-[#13131339] transition-all p-5 border border-[#9090902f] ">
        <div className="h-55 w-full mb-5 rounded-2xl overflow-hidden">
          <img
            className="  h-full w-full object-cover object-top"
            src={player.image}
            
          />
        </div>

        <div className="text-lg">
          <div className="text-2xl  font-semibold mb-3 border-b pb-4 border-[#7e7e7e6a]">
            <div className="flex items-center gap-1 mb-4">
              <FaUserAlt />
              <h2>{player.name}</h2>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-gray-400 flex items-center gap-2 font-normal text-xl">
                <p className="">
                 <FaFlag />

                </p>
                <p>{player.region}</p>
              </div>
              <button className="btn">All-rounder</button>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <p className="text-xl font-semibold">Rating</p>
              <p className="text-2xl font-semibold">{player.rating} </p>
            </div>

            <div className="flex items-center justify-between mb-3">
              <p className=" font-semibold ">Left Hand Bat:</p>
              <p className="text-gray-400">
                {player["left hand bat"] ? "true" : "false"}{" "}
              </p>
            </div>

            <div className="font-semibold flex items-center justify-between ">
              <p>Price: ${player.price}</p>
              <button className="btn">Choose Player</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerCard;
