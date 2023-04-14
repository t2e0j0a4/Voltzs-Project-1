import React from "react";
import Context from "./Context";

const State = (props) => {

    return (
        <Context.Provider>
            {props}
        </Context.Provider>
    )
}

export default State;