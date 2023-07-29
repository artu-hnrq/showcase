import { useTheme as useNextTheme } from "next-themes"
import { UseThemeProps as UseNextThemeProps } from "next-themes/dist/types"

import { DEFAULT_THEME, THEMES, type THEME_OPTION } from "@/components/theme/constants"


export interface UseThemeProps extends UseNextThemeProps {
    theme: THEME_OPTION
    themes: THEME_OPTION[]
    isDefaultTheme: boolean
}

export function useTheme(): UseThemeProps {
    const { theme, themes, ...themeProps } = useNextTheme()

    return {
        theme: (theme ? theme : DEFAULT_THEME) as THEME_OPTION,
        themes: (themes ? themes : THEMES) as THEME_OPTION[],
        isDefaultTheme: theme === DEFAULT_THEME,
        ...themeProps,
    }

}