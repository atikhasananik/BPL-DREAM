import type { Dispatch, SetStateAction } from "react";
import type { IplayerType } from "../../type";
import PlayerCard from "./PlayerCard";


export interface SelectedPlayersProps {
      Selected: IplayerType[];
      setSelected: Dispatch<SetStateAction<IplayerType[]>>;
}

const SelectedPlayers = ({ Selected,setSelected }: SelectedPlayersProps) => {
    
    return (
        <>
        <div>
            {Selected.map((player) => {
                return <div>hello</div>
            })}
        </div>
        </>
    )
}

export default SelectedPlayers;