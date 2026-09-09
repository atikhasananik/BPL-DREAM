import { use, useState, type Dispatch, type SetStateAction } from "react";
import type { IplayerType } from "../../type";

import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";

export interface IPlayersProps {
  data: Promise<IplayerType[]>;
  coin:number;
  setCoin: Dispatch<SetStateAction<number>>;
}

const IPlayers = ({ data ,coin,setCoin }: IPlayersProps) => {
  const playersData = use(data);
  const [isClicked,setIsclicked] = useState<"Available"|"Selected">("Available")
  const [selected,setSelected] = useState<IplayerType[]>([])

  const handelIsclickedBtn = (value:"Available"|"Selected"):void => {
    setIsclicked(value)
    
    
  }


  return (
    <>
      <div className="container mx-auto   ">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl ">{isClicked==="Available"?"Available":"Selected"} Player</h2>

          <div>
            <button onClick={()=>handelIsclickedBtn("Available")} className={`btn px-9 text-lg py-6 border-r-0 rounded-r-none ${isClicked==="Available"?"bg-yellow-300":''}`}>
              Available
            </button>
            <button onClick={()=>handelIsclickedBtn("Selected")} className={`btn px-9 text-lg py-6 border-l-0 rounded-l-none ${isClicked==="Selected"?"bg-yellow-300":''}`}>
              Selected
            </button>
          </div>
        </div>
        
        <div>
          {isClicked==="Available"?<AvailablePlayers coin={coin} setCoin={setCoin}  selected={selected} setSelected={setSelected}  playersData={playersData} />:<SelectedPlayers Selected={selected} setSelected={setSelected}  />}
        </div>
      </div>
    </>
  );
};

export default IPlayers;
