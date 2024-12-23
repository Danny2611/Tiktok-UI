import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import config from '~/config';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';

import Menu from '~/components/Popper/Menu';

import {
    CoinIcon,
    CreatorToolIcon,
    FeedbackIcon,
    LanguagesIcon,
    LogoutIcon,
    MessageIcon,
    MoonIcon,
    SettingIcon,
    UserIcon,
} from '~/components/Icons';
import Image from '~/components/Images';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <CreatorToolIcon />,
        title: 'Creator tools',
    },
    {
        icon: <LanguagesIcon />,
        title: 'English',
        children: {
            title: ' Languages',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vie',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FeedbackIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <MoonIcon />,
        title: 'Dark mode',
    },
];
function Header() {
    const currentUser = true;

    //Handle  logic
    const handleMenuChange = (item) => {
        console.log(item);
    };

    const userMenu = [
        {
            icon: <UserIcon />,
            title: 'View profile',
            to: '/@chun',
        },
        {
            icon: <CoinIcon />,
            title: 'Get Coins',
            to: '/coin',
        },
        {
            icon: <SettingIcon />,
            title: 'Settings',
            to: '/settings',
        },

        ...MENU_ITEMS,

        {
            icon: <LogoutIcon />,
            title: 'Logout',
            to: '/feedback',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo.default} alt="tiktok-image" />
                </div>
                <Search />

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Button className={cx('upload-btn')} leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                Upload{' '}
                            </Button>
                            <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                                <button className={cx('messe-btn')}>
                                    <MessageIcon />
                                    <div className={cx('notice-circle')}> 1</div>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary className={cx('btn-login')}>
                                Login
                            </Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="dhttps://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/ad4a9fdde722700d2d4240b2c43f6061.jpeg?lk3s=a5d48078&nonce=15262&refresh_token=342ab31d9b60a06f65ce548232150958&x-expires=1731168000&x-signature=bXnkpjof1Uz8t%2FT%2FCBYt%2Bd5%2Bys8%3D&shp=a5d48078&shcp=81f88b70"
                                alt="Chun"
                                fallback="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7270373380520280069~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=21175&refresh_token=ddbc93048c790026a751dccc31d7ca7e&x-expires=1731333600&x-signature=VNzwMFcYwlIz%2Fg1TSX%2FUb2XwPPU%3D&shp=a5d48078&shcp=81f88b70"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;

// setTimeout(() =>{
//     debugger
// },3000
// )
