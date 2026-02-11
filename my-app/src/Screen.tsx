import React from "react";
import { screenState } from "./App";

interface ScreenProps {
    activeScreen?: boolean
    screenId?: screenState
}

export const Screen = React.memo(({
    activeScreen,
    screenId
}: ScreenProps) => {

    console.log("screen ", screenId, "renders");

    return (
        <div className={ activeScreen ? "screen screen-active" : "screen"}>
            { screenId }
        </div>
    )
})