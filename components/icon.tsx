import Icons from './icons'

export interface IconProps extends React.HTMLAttributes<SVGElement> {
    name: keyof typeof Icons
}

export function Icon({ name, ...props }: IconProps) {
    const Icon = Icons[name]
    return <Icon {...props} />
}