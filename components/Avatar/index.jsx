import clsx from 'clsx'
import React from 'react'

import styles from './Avatar.module.scss'

export const Avatar = ({ src, width, height, className, isVoice }) => {
    return (
        <div
            style={{ width, height, backgroundImage: `url(${src})` }}
            className={clsx(
                styles.avatar,
                isVoice ? styles.avatarBorder : '',
                className,
                'd-ib',
            )}></div>
    )
}
