"use client"

import { useEffect, useState } from "react"
import { motion, useAnimate } from "framer-motion"

import { MoonIcon, SunIcon, MixIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"

import { cn } from "@/lib/utils"
import { useTheme } from "@/hooks/theme"

export function ThemeToggle({ className, ...props }: React.HTMLAttributes<HTMLButtonElement>) {
    const { index, theme, isDefaultTheme, cycleTheme } = useTheme()
    const [scope, animate] = useAnimate()
    // const [mounted, setMounted] = useState(false)

    // // useEffect only runs on the client, so now we can safely show the UI
    // useEffect(() => {
    //     setMounted(true)
    // }, [])

    // if (!mounted) {
    //     return null
    // }

    console.log(index)

    const Icon = [
        SunIcon,
        MoonIcon,
        MixIcon,
    ][index]

    return (
        <div className={cn("fixed top-5 right-5", className)}>
            {/* <p className="fixed inset-4">{theme} | {index} {isDefaultTheme ? "| default" : ""}</p> */}
            < Button
                id="theme-toggle"
                variant="ghost"
                className="w-9 p-0"
                {...props}
                onClick={() => {
                    cycleTheme()
                    animate(scope.current, {
                        opacity: [0, 0.25, 0.65, 1, 1, 0],
                        scale: [0, 10, 50, 100, 150, 0],
                        transition: {
                            duration: 2
                        }
                    })
                }}
            >
                <Icon className="w-5 h-5" />
                <span className="sr-only">Toggle theme</span>
            </Button >
            <motion.div
                ref={scope}
                className={cn(
                    'w-10 h-10 absolute ',
                    'z-[-1] rounded-full bg-background',
                )}
            />
        </div >
    )
}