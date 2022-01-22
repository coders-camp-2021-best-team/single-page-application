import './Icon.scss';
import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { ReactComponent as Like } from './icons/like.svg';
import { ReactComponent as Avatar } from './icons/avatar.svg';
import { ReactComponent as Birthday } from './icons/birthday.svg';
import { ReactComponent as CircleX } from './icons/circleX.svg';
import { ReactComponent as Comment } from './icons/comment.svg';
import { ReactComponent as Dislike } from './icons/dislike.svg';
import { ReactComponent as FortuneCookie } from './icons/fortuneCookie.svg';
import { ReactComponent as GoogleController } from './icons/googleController.svg';
import { ReactComponent as Home } from './icons/home.svg';
import { ReactComponent as Logo } from './icons/logo.svg';
import { ReactComponent as Power } from './icons/power.svg';
import { ReactComponent as Send } from './icons/send.svg';
import { ReactComponent as User } from './icons/user.svg';



const icons = {
    'like': Like,
    'avatar': Avatar,
    'birthday': Birthday,
    'circleX': CircleX,
    'comment': Comment,
    'dislike': Dislike,
    'fortuneCookie': FortuneCookie,
    'googleController': GoogleController,
    'home': Home,
    'logo': Logo,
    'power': Power,
    'send': Send,
    'user': User 
    }

export const Icon = ({ iconName, size, className, onClick}) => {
    const handleClick = useCallback(() => onClick(), [onClick]);
    const TheIcon = icons[iconName]

    return (
        <TheIcon
            className={`icon icon${size} icon${className}`}
            onClick={handleClick}
        />

    )
};



/* eslint-disable react/no-typos */
Icon.PropTypes = {
    iconName: PropTypes.oneOf(Object.keys(icons)),
    size: PropTypes.oneOf(['small','medium', 'large']),
    onClick: PropTypes.func
}

Icon.defaultProps = {
    size: 'medium',
    onClick: () => null
}