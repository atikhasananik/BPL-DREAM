import type { Dispatch, SetStateAction } from "react";
import type { IplayerType } from "../../type";
import PlayerCard from "./PlayerCard";

export interface AvailablePlayersProps {
  playersData: IplayerType[];
  selected: IplayerType[];
  setSelected: Dispatch<SetStateAction<IplayerType[]>>;
    coin:number;
  setCoin: Dispatch<SetStateAction<number>>;
}

const AvailablePlayers = ({ playersData,selected,setSelected ,coin,setCoin}: AvailablePlayersProps) => {
  return (
    <>
      <div>
        <div className="grid grid-cols-4 gap-6">
          {playersData.map((player: IplayerType) => {
            return <PlayerCard selected={selected} coin={coin} setCoin={setCoin} setSelected={setSelected} key={player.id} player={player} />;
          })}
        </div>
      </div>
    </>
  );
};

export default AvailablePlayers;
