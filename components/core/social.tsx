'use client'

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import React from "react"

import Icons from '@/components/icons'
import { cn } from "@/lib/utils"


export function SocialmediaLinks() {
    const { theme, setTheme } = useTheme()

    return (
        <div className="flex flex-row w-full items-center space-x-4 pb-8 pt-4 md:pb-10 select-none">
            {Object.values(Icons).map((Icon, i) => {
                return (
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{
                            y: [-10, 10, 0],
                            scale: [1, 1.2, 1],
                            opacity: [0, 1, 1]
                        }}
                        transition={{ delay: 1 + i * 0.2 }}
                        key={i}
                    >
                        <motion.div
                            whileHover={{
                                y: -5,
                                scale: 1.2
                            }}
                        >
                            <Icon
                                className={cn(
                                    "w-7 md:w-8",
                                    "text-muted-foreground"
                                )}
                                fill={theme === 'light' ? undefined : 'currentColor'}
                            />
                        </motion.div>
                    </motion.button>
                )
            })}
        </div >
    )
}