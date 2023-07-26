import { useTheme } from "next-themes"
import { THEMES } from "@/components/theme/constants"


export function useSetNextTheme() {
    const { theme, setTheme } = useTheme()
    const nextTheme = THEMES[(THEMES.indexOf(theme!) + 1) % THEMES.length]

    function setNextTheme() { setTheme(nextTheme) }

    return { theme, setNextTheme }
}