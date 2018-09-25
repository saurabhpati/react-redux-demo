import React from "react";
import { setTechnology } from "./actions";
import { store } from "./store";

const dispatchBtnAction = (event) => {
   const tech = event.target.dataset.tech;
   store.dispatch(setTechnology(tech));
}

const ButtonGroup = ({technologies}) => {

    return (
        <div>
            {
                technologies.map((technology, i) => (
                    <button 
                        data-tech={technology}
                        key={`btn-${i}`}
                        className="hello-btn"
                        onClick={dispatchBtnAction}>
                        {technology} 
                    </button>
                ))
            }
        </div>
    );
}

export default ButtonGroup;