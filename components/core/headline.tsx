'use client'

import { motion } from "framer-motion"
import { cn } from '@/lib/utils'

import { PageHeader, PageHeaderHeading, PageHeaderDescription } from '@/components/typografy/heading'
import { SocialmediaLinks } from '@/components/core/social'


export function Headline({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <PageHeader className={cn("pb-8", className)} {...props}>
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 1 }}
            >
                <PageHeaderHeading>
                    <em className="text-5xl md:text-6xl">A</em>rthur <span className="text-5xl md:text-6xl">H</span>enrique
                </PageHeaderHeading>
            </motion.div>

            <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                <PageHeaderDescription className="transition ease-linear duration-500">
                    Enthusiastic learner • Computer scientist • Python developer • Software business analyst • Unix-like system user
                </PageHeaderDescription>
            </motion.div>

            <SocialmediaLinks icons={['GitHub', "LinkedIn", "Codepen", "StackOverflow", "Twitter", "Gmail"]} />

        </PageHeader>
    )
}
