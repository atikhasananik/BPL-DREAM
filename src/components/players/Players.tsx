import { use } from "react";
import type { IplayerType } from "../../type";
import PlayerCard from "./PlayerCard";

export interface IPlayersProps {
  data: Promise<IplayerType[]>;
}

const IPlayers = ({ data }: IPlayersProps) => {
  const playersData = use(data);

  return (
    <>
      <div className="container mx-auto   ">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl ">Available Player</h2>

          <div>
            <button className="btn px-9 text-lg py-6 border-r-0 rounded-r-none bg-amber-300">
              Available
            </button>
            <button className="btn px-9 text-lg py-6 border-l-0 rounded-l-none">
              Selected
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {playersData.map((player: IplayerType) => {
            return <PlayerCard key={player.id} player={player} />;
          })}
        </div>
      </div>
    </>
  );
};

export default IPlayers;
