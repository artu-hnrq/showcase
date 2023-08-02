'use client'

import { useEffect, useState } from "react"
import { useTheme } from "@/hooks/theme"

import { Icon, IconProps } from "@/components/icon"

import { cn } from "@/lib/utils"


export function ThemedIcon({ className, ...props }: IconProps) {

    const { theme, isDefaultTheme } = useTheme()
    const [fill, setFill] = useState<string | undefined>()

    useEffect(() => {
        setFill(isDefaultTheme ? undefined : "currentColor")
    }, [theme])

    return (
        <div className={cn("transition-all delay-300 duration-1000")}>
            <Icon
                {...props}
                fill={fill}
                className={cn(
                    "w-7 md:w-8",
                    "text-muted-foreground",
                    "transition-colors delay-300",
                    className,
                )}
            />
        </div>
    )
}