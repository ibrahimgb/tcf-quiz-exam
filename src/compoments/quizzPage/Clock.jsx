import React from "react";
import { useTimer } from "use-timer";

const Clock = ({ lunch }) => {
    let minutes = 0;
    let seconds = 0;

    const { time, start, pause, reset, status } = useTimer({ autostart: true });

    return (
        <>
            <p>
                {Math.floor(time / 60)}:{time % 60}
            </p>
        </>
    );
};
export default Clock;
