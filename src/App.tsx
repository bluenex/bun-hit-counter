import "./index.css";
import { useEffect, useState } from "react";

type HitResponse = {
  hits: number;
};

export function App() {
  const [hits, setHits] = useState<number | null>(null);

  useEffect(() => {
    fetch("/hit")
      .then((res) => res.json() as Promise<HitResponse>)
      .then((data) => setHits(data.hits))
      .catch(() => setHits(-1));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br to-blue-400 via-purple-500 from-pink-300 flex items-center justify-center p-4">
      <div className="text-center text-white">
        <h1 className="text-6xl md:text-8xl font-bold mb-6">Bun Hit Counter</h1>
        <p className="text-xl md:text-4xl mb-8 opacity-90">
          Counted in Cloudflare KV
        </p>
        <div className="text-8xl md:text-9xl font-extrabold mb-4">
          {hits === null ? (
            <span className="animate-pulse">...</span>
          ) : hits === -1 ? (
            <span className="text-red-600">Error</span>
          ) : (
            <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              {hits}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
