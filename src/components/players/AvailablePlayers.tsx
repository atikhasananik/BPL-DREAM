import type { Dispatch, SetStateAction } from "react";
import type { IplayerType } from "../../type";
import PlayerCard from "./PlayerCard";

export interface AvailablePlayersProps {
  playersData: IplayerType[];
  selected: IplayerType[];
  setSelected: Dispatch<SetStateAction<IplayerType[]>>;
}

const AvailablePlayers = ({ playersData,selected,setSelected }: AvailablePlayersProps) => {
  return (
    <>
      <div>
        <div className="grid grid-cols-4 gap-6">
          {playersData.map((player: IplayerType) => {
            return <PlayerCard selected={selected} setSelected={setSelected} key={player.id} player={player} />;
          })}
        </div>
      </div>
    </>
  );
};

export default AvailablePlayers;
