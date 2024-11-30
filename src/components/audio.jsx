import React from "react";
import sound from "../sounds/beep.mp3"

export default function Audio({audio}){
    return(
        <audio id="beep" ref={audio}>
            <source src={sound} type="audio/mpeg" />
        </audio>
    )
}