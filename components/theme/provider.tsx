import { ThemeProvider as Provider } from "next-themes"
import { THEMES } from "./constants"


export function ThemeProvider({ children }: { children: React.ReactNode }) {
    return (
        <Provider themes={THEMES} enableSystem={false} >
            {children}
        </Provider >
    )
}