import React from "react";
import btnPrev from "../../../images/btnPrev.png";
import btnNext from "../../../images/btnNext.png";
import "./Controls.css";

const Controls = (props) => {
    const statePages = props.pages.map((page, id) => {
        return <li key={id} className={`step ${page === props.page && "active"}`}></li>
    })
    
    return (
        <div className="controls">
                <button className="controls-btn btn-prev" onClick={props.prevPage} disabled={props.page === 1 && true}>
                    <img src={btnPrev}/>
                </button>
                <div>
                    <ul className="steps">
                        {statePages}
                    </ul>
                </div>
                <button className="controls-btn btn-next" 
                        onClick={props.nextPage} 
                        disabled={props.page === 4 || (props.submitPages.indexOf(props.page) === -1) && true}>
                    <img src={btnNext}/>
                </button>
        </div>
    )
}

export default Controls;