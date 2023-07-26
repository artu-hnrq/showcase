import { cn } from "@/lib/utils"

function PageHeader({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <section
            className={cn(
                "flex max-w-[980px] flex-col items-start gap-2 px-4 pt-8 md:pt-12 transition-colors",
                className
            )}
            {...props}
        >
            {children}
        </section>
    )
}

function PageHeaderHeading({
    className,
    ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h1
            className={cn(
                "text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1] transition-colors",
                className
            )}
            {...props}
        />
    )
}

function PageHeaderDescription({
    className,
    ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p
            className={cn(
                "max-w-[750px] text-lg text-muted-foreground sm:text-xl transition-colors",
                className
            )}
            {...props}
        />
    )
}

export { PageHeader, PageHeaderHeading, PageHeaderDescription }