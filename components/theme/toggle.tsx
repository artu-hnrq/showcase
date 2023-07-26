"use client"

import { useEffect, useState } from "react"
import { motion, useAnimate } from "framer-motion"

import { MoonIcon, SunIcon, MixIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"

import { cn } from "@/lib/utils"
import { useCycleTheme } from "@/hooks/useCycleTheme"


type RadixReactIcon = typeof DEFAULT_ICON

const DEFAULT_ICON = SunIcon

export const THEME_ICONS: RadixReactIcon[] = [
    SunIcon,
    MoonIcon,
    MixIcon,
]

export function ThemeToggle({ className, ...props }: React.HTMLAttributes<HTMLButtonElement>) {
    const { index, theme, cycleTheme } = useCycleTheme()
    const [scope, animate] = useAnimate()
    const [mounted, setMounted] = useState(false)

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const Icon = THEME_ICONS[index]

    return (
        <>
            <Button
                id="theme-toggle"
                variant="ghost"
                className={cn("w-9 px-0", className)}
                {...props}
                onClick={() => {
                    animate(scope.current, {
                        opacity: [0, 0.25, 0.5, 0.75, 1],
                        scale: [0, 10, 50, 100, 150],
                        transition: {
                            duration: 2
                        }
                    })
                    cycleTheme()
                }}
            >
                <Icon className="w-5 h-5" />
                <span className="sr-only">Toggle theme</span>
            </Button>
            <motion.div
                className={cn(
                    'w-10 h-10 fixed top-8 right-8',
                    'z-[-1] rounded-full bg-background',
                )}
                ref={scope}
            />
        </>
    )
}