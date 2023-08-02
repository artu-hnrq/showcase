'use client'

import { motion } from "framer-motion"
import React from "react"

import { type IconName } from '@/components/icons'
import { ThemedIcon } from "@/components/theme/icon"


export function SocialmediaLinks({ icons }: { icons: Array<IconName> }) {
    return (
        <div className="flex flex-row w-full items-center space-x-4 pb-8 pt-4 md:pb-10 select-none">
            {icons.map((name, i) => {
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
                        <motion.div whileHover={{ y: -5, scale: 1.2 }}>
                            <ThemedIcon name={name} />
                        </motion.div>
                    </motion.button>
                )
            })}
        </div >
    )
}