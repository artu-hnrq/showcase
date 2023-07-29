import { Codepen } from './codepen'
import { GitHub } from './github'
import { Gmail } from './gmail'
import { LinkedIn } from './linkedin'
import { StackOverflow } from './stack-overflow'
import { Twitter } from './twitter'

const Icons = {
    Codepen,
    GitHub,
    Gmail,
    LinkedIn,
    StackOverflow,
    Twitter,
}

export default Icons

export type IconName = keyof typeof Icons