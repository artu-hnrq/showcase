import { ThemeProvider as Provider } from "next-themes"
import { DEFAULT_THEME, THEMES } from "./constants"


export function ThemeProvider({ children }: { children: React.ReactNode }) {
    return (
        <Provider themes={Array.from(THEMES)} defaultTheme={DEFAULT_THEME} enableSystem={false}>
            {children}
        </Provider >
    )
}