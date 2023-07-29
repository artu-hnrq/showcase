export const LIGHT = 'light'
export const DARK = 'dark'
export const BRIGHT = 'bright'

export const THEMES = [LIGHT, DARK, BRIGHT] as const

export type THEME_OPTION = typeof THEMES[number]

export const DEFAULT_THEME = LIGHT