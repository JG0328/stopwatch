import {Button, Divider, Grid, Typography} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import styles from './Stopwatch.module.scss';
import {useEffect, useState} from "react";

const Stopwatch = () => {
    const [time, setTime] = useState(() => {
        const localTime = localStorage.getItem('time');
        if (localTime !== null) {
            return Number(localTime);
        }
        return 0;
    })
    const [isRunning, setIsRunning] = useState(false);

    const toggleIsRunning = () => setIsRunning(!isRunning);

    const handleRestart = () => setTime(0);

    const handleViewCode = () => window.open("https://github.com/JG0328/stopwatch", "_blank");

    useEffect(() => {
        let intervalId: number | undefined = undefined;
        if (isRunning) {
            intervalId = setInterval(() => setTime(time + 100), 1000);
            localStorage.setItem('time', time.toString());
        }
        return () => clearInterval(intervalId);
    }, [isRunning, time]);

    const hours = Math.floor(time / 360000);
    const minutes = Math.floor((time % 360000) / 6000);
    const seconds = Math.floor((time % 6000) / 100);

    return (
        <Grid container spacing={3} direction={"column"}>
            {/* Top section */}
            <Grid item container spacing={2} direction={"column"}>
                <Grid item sx={{display: 'flex', justifyContent: 'center'}}>
                    <Typography variant={"h4"}>
                        Stopwatch
                    </Typography>
                </Grid>
                <Grid item>
                    <Divider/>
                </Grid>
            </Grid>
            {/* Middle section */}
            <Grid item sx={{display: 'flex', justifyContent: 'center'}}>
                <span className={styles.timer}>
                    {hours.toString().padStart(2, "0")}:
                    {minutes.toString().padStart(2, "0")}:
                    {seconds.toString().padStart(2, "0")}
                </span>
            </Grid>
            <Grid item container spacing={3} justifyContent={"center"}>
                <Grid item>
                    <Button
                        color={"inherit"}
                        variant={"contained"}
                        size={"large"}
                        onClick={handleRestart}
                    >
                        Restart
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        color={isRunning ? "warning" : "primary"}
                        variant={"contained"}
                        size={"large"}
                        onClick={toggleIsRunning}
                    >
                        {isRunning ? "Stop" : "Start"}
                    </Button>
                </Grid>
            </Grid>
            {/* Bottom section */}
            <Grid item container spacing={2} direction={"column"}>
                <Grid item>
                    <Divider/>
                </Grid>
                <Grid item sx={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Button
                        variant={"outlined"}
                        startIcon={<GitHubIcon/>}
                        onClick={handleViewCode}
                    >
                        View Code
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Stopwatch;
