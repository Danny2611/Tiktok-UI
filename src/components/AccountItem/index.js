import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/ad4a9fdde722700d2d4240b2c43f6061.jpeg?lk3s=a5d48078&nonce=15262&refresh_token=342ab31d9b60a06f65ce548232150958&x-expires=1731168000&x-signature=bXnkpjof1Uz8t%2FT%2FCBYt%2Bd5%2Bys8%3D&shp=a5d48078&shcp=81f88b70"
                alt=""
            />
            <div className={cx('info')}>
                <p className={cx('username')}>
                    <span>Chun1412</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
                </p>
                <span className={cx('name')}>Chun</span>
            </div>
        </div>
    );
}

export default AccountItem;
