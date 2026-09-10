import type { Dispatch, SetStateAction } from "react";
import type { IplayerType } from "../../type";
import PlayerCard from "./PlayerCard";

export interface AvailablePlayersProps {
  playersData: IplayerType[];
  selected: IplayerType[];
  setSelected: Dispatch<SetStateAction<IplayerType[]>>;
    coin:number;
    setCoin: Dispatch<SetStateAction<number>>;
    showErrMass:(mass:string) => {
      
    }

    showSussMass: (mass:string) => {
      
    }
      
}

const AvailablePlayers = ({ playersData,selected,setSelected ,coin,setCoin ,showErrMass,showSussMass}: AvailablePlayersProps) => {
  return (
    <>
      <div>
        <div className="grid grid-cols-4 gap-6">
          {playersData.map((player: IplayerType) => {
            return <PlayerCard selected={selected} coin={coin} setCoin={setCoin} showErrMass={showErrMass} showSussMass={showSussMass} setSelected={setSelected} key={player.id} player={player} />;
          })}
        </div>
      </div>
    </>
  );
};

export default AvailablePlayers;
