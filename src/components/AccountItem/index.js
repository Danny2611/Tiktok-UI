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
                src="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/7c617df7701da074ef5fded34a85bc04.jpeg?lk3s=a5d48078&nonce=91804&refresh_token=1ed62b53f1cb19963090180096f9e0cb&x-expires=1730548800&x-signature=RCzzFtXr7c3Pz3WR8%2BJH114EFbY%3D&shp=a5d48078&shcp=81f88b70"
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
