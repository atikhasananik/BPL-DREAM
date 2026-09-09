import type { Dispatch, SetStateAction } from "react";
import type { IplayerType } from "../../type";
import PlayerCard from "./PlayerCard";

export interface SelectedPlayersProps {
  Selected: IplayerType[];
  setSelected: Dispatch<SetStateAction<IplayerType[]>>;
}

const SelectedPlayers = ({ Selected, setSelected }: SelectedPlayersProps) => {
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {Selected.map((player) => {
          return (
            <PlayerCard
            key={player.id}
              player={player}
              selected={Selected}
              setSelected={setSelected}
            />
          );
        })}
      </div>
    </>
  );
};

export default SelectedPlayers;
