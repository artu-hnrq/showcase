"use client"

import { useEffect, useState } from "react"

import { MoonIcon, SunIcon, MixIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"

import { cn } from "@/lib/utils"
import { useSetNextTheme } from "@/hooks/useSetNextTheme"


type RadixReactIcon = typeof DEFAULT_ICON

const DEFAULT_ICON = SunIcon

export const THEME_ICONS: Record<string, RadixReactIcon> = {
    light: SunIcon,
    dark: MoonIcon,
    bright: MixIcon,
}

export function ThemeToggle({ className, ...props }: React.HTMLAttributes<HTMLButtonElement>) {
    const { theme, setNextTheme } = useSetNextTheme()
    const [mounted, setMounted] = useState(false)

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const Icon = THEME_ICONS[theme!] ?? DEFAULT_ICON

    return (
        <Button
            variant="ghost"
            className={cn("w-9 px-0", className)}
            {...props}
            onClick={() => setNextTheme()}
        >
            <Icon className="w-5 h-5" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}