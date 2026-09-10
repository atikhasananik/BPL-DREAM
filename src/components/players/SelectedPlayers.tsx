import type { Dispatch, SetStateAction } from "react";
import type { IplayerType } from "../../type";

export interface SelectedPlayersProps {
  Selected: IplayerType[];
  setSelected: Dispatch<SetStateAction<IplayerType[]>>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  showErrMass: (mass: string) => {};
  showSussMass: (mass: string) => {};
}
const SelectedPlayers = ({
  Selected,
  setSelected,
  coin,
  setCoin,
  showErrMass,
  showSussMass,
}: SelectedPlayersProps) => {
  const handelDeleteBtn = (player: IplayerType): void => {
    const exit = Selected.find((fp) => {
      return fp.id === player.id;
    });
    if (exit) {
      const newSelectedPlayers = Selected.filter((p) => {
        return p.id !== exit.id;
      });

      setSelected(newSelectedPlayers);
      setCoin(coin + player.price);
      showSussMass("Delete Successful");
    } else showErrMass("Coudn't find id from Selected player...");
  };

  return (
    <>
      <div className=" container mx-auto grid gap-5 mt-10">
        {Selected.map((player) => {
          return (
            <>
              <div className="w-full shadow-md hover:shadow-[#04030344] border  border-[#ffffff66] flex gap-5 justify-between items-center rounded-2xl p-4">
                <div className="w-15 h-15 rounded-2xl overflow-hidden ">
                  <img className="object-cover " src={player.image} alt="" />
                </div>
                <div className="flex justify-between gap-5">
                  <p className="text-xl font-semibold text-gray-800">
                    Name: {player.name}
                  </p>
                  <p className="text-xl font-semibold text-gray-800">
                    Price: {player.price}{" "}
                  </p>
                  <p className="text-xl font-semibold text-gray-800">
                    Region: {player.region}
                  </p>
                </div>
                <button
                  onClick={() => handelDeleteBtn(player)}
                  className="btn bg-red-600 text-white "
                >
                  Delete player
                </button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default SelectedPlayers;
