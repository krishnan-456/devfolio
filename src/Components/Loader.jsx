import React from "react";
import { Player } from '@lottiefiles/react-lottie-player';
import reactLogo from "../static/react-logo.json";

export default function Loader() {

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            <div>
                <Player
                    src={reactLogo}
                    className="player w-48"
                    loop
                    autoplay
                    speed={2}
                />
            </div>
            <div className="relative bottom-12 text-[12px] animate-pulse">Fetching Data....</div>
        </div>
    );
}