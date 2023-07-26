import { useTheme } from "next-themes"
import { THEMES } from "@/components/theme/constants"
import { useCycle } from "framer-motion"


export function useCycleTheme() {
    const { theme, setTheme } = useTheme()
    const [nextTheme, _cycleTheme] = useCycle(...THEMES)

    function cycleTheme() {
        _cycleTheme()
        setTheme(nextTheme)
    }

    const index = THEMES.indexOf(theme!) || 0

    return { index, theme, cycleTheme }
}