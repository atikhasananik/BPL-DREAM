import { Suspense, useState } from "react";
import Hero from "./components/heroSection/Hero";
import Nav from "./components/navbar/Nav";
import Players from "./components/players/Players";
import type { IplayerType } from "./type";
import PlayerSkeleton from "./components/skeleton/PlayerSkeleton";

async function playersData(): Promise<IplayerType[]> {
  const res = await fetch("/playerData.json");
  const data = await res.json();
  return data;
}

const App = () => {
  const [data] = useState(() => playersData());
  return (
    <>
    <div className="w-full scrollbar-none">

      <Nav />
      <Hero />
      <Suspense fallback={<PlayerSkeleton />}>
        <Players data={data} />
      </Suspense>
    </div>
    </>
  );
};

export default App;
