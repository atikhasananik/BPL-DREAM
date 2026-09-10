import { Suspense, useState } from "react";
import Hero from "./components/heroSection/Hero";
import Nav from "./components/navbar/Nav";
import Players from "./components/players/Players";
import type { IplayerType } from "./type";
import PlayerSkeleton from "./components/skeleton/PlayerSkeleton";
import { ToastContainer } from "react-toastify";

async function playersData(): Promise<IplayerType[]> {
  const res = await fetch("/playerData.json");
  const data = await res.json();
  return data;
}

const App = () => {
  const [data] = useState(() => playersData());
  const [coin,setCoin] = useState<number>(100000000);

 

  


  return (
    <>
    <ToastContainer />
    <div className="w-full scrollbar-none">

      <Nav coin={coin}/>
      <Hero setCoin={setCoin} coin={coin} />
      <Suspense fallback={<PlayerSkeleton />}>
        <Players coin={coin} setCoin={setCoin} data={data} />
      </Suspense>
    </div>
    </>
  );
};

export default App;
