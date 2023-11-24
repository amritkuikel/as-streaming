"use client";
import { useEffect } from "react";
export default function Home({params}) {
  const torrentHash = "6E88B3F25BA49D483D740A652BF013C341BC5373";
  useEffect(() => {
    const webtor = document.createElement("script");
    webtor.src =
      "https://cdn.jsdelivr.net/npm/@webtor/player-sdk-js/dist/index.min.js";
    document.body.appendChild(webtor);
  }, []);
  return (
    <video
      src={`magnet:?xt=urn:btih:${params.hash}`}
      controls
      width="100%"
    ></video>
  );
}
