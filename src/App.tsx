import { Suspense, useState } from "react";
import Hero from "./components/heroSection/Hero";
import Nav from "./components/navbar/Nav";
import Players from "./components/players/Players";
import type { IplayerType } from "./type";
import PlayerSkeleton from "./components/scy/PlayerSkeleton";

async function playersData(): Promise<IplayerType[]> {
  const res = await fetch("/playerData.json");
  const data = await res.json();
  return data;
}

const App = () => {
  const [data] = useState(() => playersData());
  return (
    <>
      <Nav />
      <Hero />
      <Suspense fallback={<PlayerSkeleton />}>
        <Players data={data} />
      </Suspense>
    </>
  );
};

export default App;
