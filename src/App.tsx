import {Container, CssBaseline, ThemeProvider, createTheme} from "@mui/material";
import Stopwatch from "./Stopwatch.tsx";

const darkTheme = createTheme({
    palette: {
        mode: "dark"
    }
});

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <Container
                maxWidth={"sm"}
                sx={{
                    height: '100vh',
                    alignItems: 'center',
                    display: 'flex'
                }}
            >
                <Stopwatch/>
            </Container>
        </ThemeProvider>
    )
}

export default App
