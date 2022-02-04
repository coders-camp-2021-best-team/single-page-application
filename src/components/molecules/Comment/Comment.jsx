import PropTypes from 'prop-types';
import { Text } from '../../atoms/Text/Text';
import { dateFormat } from '../../../utils/format';
import '../../atoms/Text/Text.scss';
import './Comment.scss';
import { useUserDetails } from '../../../hooks';

export const Comment = ({ authorID, date, children }) => {
    const { data: authorDetails } = useUserDetails(authorID);
    const { displayName: username } = authorDetails.data();

    return (
        <div className='comment'>
            <div className='comment__info'>
                <Text
                    type='primary'
                    size='small'
                    customClass='comment__info__date'
                >
                    {dateFormat(date)}
                </Text>
                <Text
                    type='accent'
                    size='medium'
                    customClass='comment__info__username'
                >
                    {username}
                </Text>
            </div>
            <div className='comment__text'>
                <Text
                    type='primary'
                    size='medium'
                    customClass='comment__text__p'
                >
                    {children}
                </Text>
            </div>
        </div>
    );
};

Comment.propTypes = {
    children: PropTypes.string.isRequired,
    authorID: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired
};
