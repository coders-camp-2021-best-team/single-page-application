import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import { Text, ImageComponent } from '../..';
import { useUserDetails } from '../../../hooks';
import { routes } from '../../../routes/Routes';

import './UserInfo.scss';

export const UserInfo = ({ userID, onClick, onPost }) => {
    const { data: userData } = useUserDetails(userID);
    const navigate = useNavigate();

    let redirectToProfile = () => navigate(`${routes.Profile}/${userID}`);
    if (onClick) {
        redirectToProfile = onClick;
    }

    if (userData) {
        const { profile_picture_url, displayName } = userData.data();

        return (
            <div className={onPost ? '' : 'userinfo'}>
                <ImageComponent
                    className='atom__image'
                    src={profile_picture_url}
                    size='medium'
                    onClick={redirectToProfile}
                />
                <Text
                    type='primary'
                    size='large'
                    customClass='userinfo__text username'
                >
                    {displayName}
                </Text>
            </div>
        );
    }

    return null;
};

UserInfo.propTypes = {
    userID: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    onPost: PropTypes.bool
};

UserInfo.defaultProps = {
    onClick: null,
    onPost: false
};
