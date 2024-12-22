import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { Link } from 'react-router-dom';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '../Images';

const cx = classNames.bind(styles);
function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`}>
            <div className={cx('wrapper')}>
                <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
                <div className={cx('info')}>
                    <p className={cx('username')}>
                        <span>{data.nickname}</span>
                        {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>}
                    </p>
                    <span className={cx('name')}>{data.full_name}</span>
                </div>
            </div>
        </Link>
    );
}
AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
