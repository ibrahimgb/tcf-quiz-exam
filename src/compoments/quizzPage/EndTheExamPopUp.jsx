import React from "react";
import { useEffect, useRef } from "react";

function EndTheExamPopUp(props) {
    const ref = useRef(null);
    const { onClickOutside } = props;

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                onClickOutside && onClickOutside();
            }
        };
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, [onClickOutside]);

    if (!props.show) return null;

    return (
        <div ref={ref} className="end-the-exam-pop-up">
            <h4>ARRÊTER LE TEST</h4>
            <h5>
                Vous avez répondu à 1 question sur 15. <br />
                Si vous arrêtez le test, vous ne pourrez plus modifier vos
                réponses.
            </h5>
            <div className="buttons">
                <div className="stop">Arrêter et voir mes résultats</div>
                <div
                    onClick={() => {
                        props.setEndTheTestContinueShowing(false);
                        console.log("clicked!!!!!!!!!!");
                    }}
                    className="stop"
                >
                    Continuer le test
                </div>
            </div>
        </div>
    );
}

export default EndTheExamPopUp;
