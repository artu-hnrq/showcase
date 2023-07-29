import { Icon, IconProps } from "@/components/icon"
import { useTheme } from "@/hooks/theme"


export function ThemedIcon(props: IconProps) {
    const { isDefaultTheme } = useTheme()
    const fill =
        isDefaultTheme
            ? undefined
            : 'currentColor'

    return <Icon {...props} fill={fill} />
}