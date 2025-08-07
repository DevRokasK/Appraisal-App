import React from 'react';

import Box from '@mui/material/Box';

const ThanksWords = [
    "Pagalbą",
    "Pastangas",
    "Pripažinimą",
    "Dėmesį",
    "Palaikymą",
    "Skatinimą",
    "Rūpestį"
];

const ThanksColors = [
    "#40F99B",
    "#EF946C",
    "#7C79BF",
    "#A2F7D9",
    "#E85D75",
    "#FF7F11",
    "#F15E56",
    "#FFD166",
    "#B5EAEA",
    "#D4A5A5",
    "#F7F48B",
    "#C9F299",
    "#FFBCBC",
    "#FFDAC1",
    "#BEE3DB",
    "#FFFACD",
    "#E6E6FA"
];

export const ThanksTag = () => {
    const [thanksWord, setThanksWord] = React.useState<string>("");
    const [thanksColor, setThanksColor] = React.useState<string>("");

    React.useEffect(() => {
        const getRandomItem = <T,>(array: T[]): T =>
            array[Math.floor(Math.random() * array.length)];

        setThanksWord(getRandomItem(ThanksWords));
        setThanksColor(getRandomItem(ThanksColors));

        const interval = setInterval(() => {
            setThanksWord(getRandomItem(ThanksWords));
            setThanksColor(getRandomItem(ThanksColors));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Box
            style={{
                backgroundColor: thanksColor,
                color: "black",
                borderRadius: "100px",
                textAlign: "center",
                transition: "background-color 0.5s ease",
                width: "220px",
                minWidth: "220px",
                maxWidth: "220px",
                flexShrink: 0,
                padding: "1rem",
                boxSizing: "border-box",
            }}
        >
            <h1 style={{ fontSize: "2rem", margin: 0 }}>
                {thanksWord}
            </h1>
        </Box>
    );
}