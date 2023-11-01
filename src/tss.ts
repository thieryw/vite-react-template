import { createTss } from "tss-react";

function useContext() {
    const myTheme = {
        primaryColor: "#32CD32", // This is LimeGreen in hex
    };

    
    // You can return anything here, you decide what's the context.
    return { myTheme };
}

export const { tss } = createTss({ useContext });

export const useStyles = tss.create({});

