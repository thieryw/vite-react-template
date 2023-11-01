import { useState } from "react"
import reactLogo from "../assets/react.svg"
import viteLogo from "/vite.svg"
import { tss } from "../tss"
import { keyframes } from "tss-react";
import { useTranslation, declareComponentKeys } from "../i18n";


export function Home() {
    const [count, setCount] = useState(0)

    const { t } = useTranslation({ Home });

    const { classes, cx } = useStyles()

    return (
        <div className={classes.root}>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className={classes.logo} alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className={cx(classes.logo, classes.logoReact)} alt="React logo" />
                </a>
            </div>
            <h1>{t("title")}</h1>
            <div className={classes.card}>
                <button onClick={() => setCount((count) => count + 1)}>
                    {t("count")} {count}
                </button>
                <p>
                    {t("edit")} <code>{t("code")}</code> {t("save")}
                </p>
            </div>
            <p className={classes.reactTheDocs}>
                {t("learnMore")}
            </p>
        </div>
    )
}

const useStyles = tss
    .create(() => ({
        "root": {
            "maxWidth": 1280,
            "margin": "0 auto",
            "padding": "2rem",
            "textAlign": "center",
        },
        "logo": {
            "height": "6em",
            "padding": "1.5em",
            "willChange": "filter",
            "transition": "filter 300ms",
            ":hover": {
                "filter": "drop-shadow(0 0 2em #646cffaa)"
            }
        },
        "logoReact": {
            ":hover": {
                "filter": "drop-shadow(0 0 2em #61dafbaa)"
            },
            "animation": `${keyframes`
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
            `} infinite 20s linear`

        },
        "card": {
            "padding": "2em"
        },
        "reactTheDocs": {
            "color": "#888"
        }
    }))

export const { i18n } = declareComponentKeys<
    "title" |
    "count" |
    "edit" |
    "save" |
    "code" |
    "learnMore"

>()({ Home });