import { useTheme, type UseThemeProps } from "./useTheme"
import { THEMES } from "@/components/theme/constants"


export interface UseCycleThemeProps extends UseThemeProps {
    index: number
    cycleTheme: () => void
}

export function useCycleTheme(): UseCycleThemeProps {
    const themeProps = useTheme()
    const { theme, setTheme } = themeProps

    const index = THEMES.indexOf(theme)

    function cycleTheme() {
        const nextTheme = THEMES[(index + 1) % THEMES.length]
        setTheme(nextTheme)
    }

    return { index, cycleTheme, ...themeProps }
}