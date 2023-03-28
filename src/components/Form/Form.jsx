import React from 'react'

import ContactInfo from '../ContactInfo/ContactInfo';
import Input from '../Input/Input';

import sendLetter from '../../images/letter_send.png';

import './Form.css';

const Form = () => {
    //Contact Info повторюється 2 рази, тому виносимо його в окремий компонент
    return (
        <div className='form-container'>
            <div className="form-container_left-part">
                <div className="left-part__header">
                    <span>Contact Information</span>
                    <span>Say something to start a live chat!</span>
                </div>
                <ContactInfo />
                <div className="left-part__contact">
                    <a href='/'>
                        <div>
                            <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 1.42545C14.4484 1.65977 13.8481 1.82841 13.2298 1.89409C13.8717 1.51853 14.3525 0.925213 14.5818 0.225451C13.9794 0.578331 13.3195 0.825776 12.6313 0.956811C12.3437 0.654018 11.9958 0.4128 11.6094 0.248186C11.2229 0.0835725 10.8062 -0.000908491 10.3852 7.36757e-06C8.68165 7.36757e-06 7.31162 1.35977 7.31162 3.02841C7.31162 3.26273 7.34046 3.49705 7.38733 3.72249C4.83656 3.59113 2.56159 2.39113 1.04915 0.553853C0.77357 1.01737 0.629156 1.54514 0.630934 2.08225C0.630934 3.13314 1.17354 4.05977 2.00096 4.60474C1.51335 4.58583 1.03715 4.45385 0.611104 4.21953V4.25681C0.611104 5.72841 1.66747 6.94793 3.07535 7.22841C2.81101 7.29602 2.53907 7.33061 2.26595 7.33136C2.06586 7.33136 1.87658 7.31184 1.68549 7.28521C2.07487 8.48521 3.20875 9.35681 4.55895 9.38521C3.50258 10.2 2.17943 10.6793 0.742699 10.6793C0.484918 10.6793 0.246966 10.6704 0 10.642C1.36282 11.503 2.97981 12 4.72119 12C10.3744 12 13.4677 7.38817 13.4677 3.38521C13.4677 3.25385 13.4677 3.12249 13.4587 2.99113C14.0572 2.55977 14.5818 2.02545 15 1.42545Z" fill="white" />
                            </svg>
                        </div>
                    </a>
                    <a href='/'>
                        <div>
                            <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_1_736)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.40795 0.045C9.20773 0.00818181 9.46273 0 11.5 0C13.5373 0 13.7923 0.00886363 14.5914 0.045C15.3905 0.0811364 15.9359 0.208636 16.4132 0.393409C16.913 0.582273 17.3664 0.8775 17.7414 1.25932C18.1232 1.63364 18.4177 2.08636 18.6059 2.58682C18.7914 3.06409 18.9182 3.60955 18.955 4.40727C18.9918 5.20841 19 5.46341 19 7.5C19 9.53727 18.9911 9.79227 18.955 10.592C18.9189 11.3898 18.7914 11.9352 18.6059 12.4125C18.4177 12.913 18.1227 13.3665 17.7414 13.7414C17.3664 14.1232 16.913 14.4177 16.4132 14.6059C15.9359 14.7914 15.3905 14.9182 14.5927 14.955C13.7923 14.9918 13.5373 15 11.5 15C9.46273 15 9.20773 14.9911 8.40795 14.955C7.61023 14.9189 7.06477 14.7914 6.5875 14.6059C6.08699 14.4177 5.63351 14.1227 5.25864 13.7414C4.87708 13.3668 4.58181 12.9136 4.39341 12.4132C4.20864 11.9359 4.08182 11.3905 4.045 10.5927C4.00818 9.79159 4 9.53659 4 7.5C4 5.46273 4.00886 5.20773 4.045 4.40864C4.08114 3.60955 4.20864 3.06409 4.39341 2.58682C4.58208 2.08642 4.87758 1.63317 5.25932 1.25864C5.63366 0.87716 6.08669 0.581893 6.58682 0.393409C7.06409 0.208636 7.60955 0.0818182 8.40727 0.045H8.40795ZM14.5307 1.395C13.7398 1.35886 13.5025 1.35136 11.5 1.35136C9.4975 1.35136 9.26023 1.35886 8.46932 1.395C7.73773 1.42841 7.34091 1.55045 7.07636 1.65341C6.72659 1.78977 6.47636 1.95136 6.21386 2.21386C5.96503 2.45594 5.77353 2.75065 5.65341 3.07636C5.55045 3.34091 5.42841 3.73773 5.395 4.46932C5.35886 5.26023 5.35136 5.4975 5.35136 7.5C5.35136 9.5025 5.35886 9.73977 5.395 10.5307C5.42841 11.2623 5.55045 11.6591 5.65341 11.9236C5.77341 12.2489 5.965 12.5441 6.21386 12.7861C6.45591 13.035 6.75114 13.2266 7.07636 13.3466C7.34091 13.4495 7.73773 13.5716 8.46932 13.605C9.26023 13.6411 9.49682 13.6486 11.5 13.6486C13.5032 13.6486 13.7398 13.6411 14.5307 13.605C15.2623 13.5716 15.6591 13.4495 15.9236 13.3466C16.2734 13.2102 16.5236 13.0486 16.7861 12.7861C17.035 12.5441 17.2266 12.2489 17.3466 11.9236C17.4495 11.6591 17.5716 11.2623 17.605 10.5307C17.6411 9.73977 17.6486 9.5025 17.6486 7.5C17.6486 5.4975 17.6411 5.26023 17.605 4.46932C17.5716 3.73773 17.4495 3.34091 17.3466 3.07636C17.2102 2.72659 17.0486 2.47636 16.7861 2.21386C16.544 1.96505 16.2493 1.77355 15.9236 1.65341C15.6591 1.55045 15.2623 1.42841 14.5307 1.395ZM10.542 9.81205C11.077 10.0347 11.6728 10.0648 12.2275 9.89708C12.7821 9.72936 13.2614 9.37426 13.5834 8.89244C13.9053 8.41062 14.05 7.83196 13.9928 7.2553C13.9355 6.67864 13.6798 6.13975 13.2693 5.73068C13.0077 5.46919 12.6913 5.26896 12.343 5.14442C11.9946 5.01987 11.623 4.97411 11.2549 5.01042C10.8867 5.04673 10.5312 5.16421 10.214 5.35441C9.89667 5.5446 9.62551 5.80278 9.41998 6.11035C9.21445 6.41793 9.07967 6.76724 9.02535 7.13316C8.97103 7.49907 8.99851 7.87247 9.10582 8.22649C9.21313 8.5805 9.3976 8.90633 9.64595 9.18049C9.89429 9.45466 10.2003 9.67035 10.542 9.81205ZM8.77409 4.77409C9.13206 4.41612 9.55704 4.13216 10.0247 3.93843C10.4925 3.7447 10.9938 3.64498 11.5 3.64498C12.0062 3.64498 12.5075 3.7447 12.9753 3.93843C13.443 4.13216 13.8679 4.41612 14.2259 4.77409C14.5839 5.13206 14.8678 5.55704 15.0616 6.02475C15.2553 6.49246 15.355 6.99375 15.355 7.5C15.355 8.00625 15.2553 8.50754 15.0616 8.97525C14.8678 9.44296 14.5839 9.86794 14.2259 10.2259C13.503 10.9489 12.5224 11.355 11.5 11.355C10.4776 11.355 9.49705 10.9489 8.77409 10.2259C8.05113 9.50295 7.64498 8.52241 7.64498 7.5C7.64498 6.47759 8.05113 5.49705 8.77409 4.77409ZM16.21 4.21909C16.2987 4.13541 16.3697 4.03478 16.4188 3.92316C16.468 3.81155 16.4942 3.69121 16.496 3.56927C16.4977 3.44734 16.475 3.32628 16.4292 3.21328C16.3833 3.10028 16.3153 2.99762 16.2291 2.91139C16.1428 2.82516 16.0402 2.75711 15.9272 2.71126C15.8142 2.66542 15.6931 2.64271 15.5712 2.64449C15.4492 2.64627 15.3289 2.67249 15.2173 2.72161C15.1057 2.77073 15.005 2.84175 14.9214 2.93045C14.7586 3.10297 14.6695 3.33213 14.673 3.56927C14.6764 3.80641 14.7722 4.03287 14.9399 4.20057C15.1076 4.36828 15.334 4.46402 15.5712 4.46748C15.8083 4.47093 16.0375 4.38183 16.21 4.21909Z" fill="white" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_1_736" x="0" y="0" width="23" height="23" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="4" />
                                        <feGaussianBlur stdDeviation="2" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_736" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_736" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                    </a>
                    <a href='/'>
                        <div>
                            <svg width="23" height="18" viewBox="0 0 23 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_1_739)">
                                    <path d="M16.6985 0.829529C15.7258 0.439129 14.6995 0.160494 13.6451 0.000569545C13.6355 -0.000837589 13.6257 0.000377705 13.617 0.00404837C13.6082 0.00771903 13.601 0.0136648 13.5963 0.021068C13.4641 0.226053 13.3179 0.494173 13.2157 0.704078C12.0791 0.553216 10.923 0.553216 9.78635 0.704078C9.67236 0.470248 9.54341 0.242217 9.4001 0.021068C9.39529 0.0137459 9.38806 0.00786861 9.37936 0.00420974C9.37066 0.000550877 9.36089 -0.000718153 9.35135 0.000569545C8.29668 0.159638 7.27012 0.438418 6.29795 0.829529C6.28963 0.832306 6.28267 0.837522 6.27826 0.844288C4.3339 3.38528 3.80047 5.86396 4.06203 8.31148C4.06297 8.32296 4.07141 8.33444 4.08172 8.34182C5.21395 9.07535 6.48037 9.63541 7.82699 9.9981C7.8365 10.0007 7.84672 10.0006 7.85616 9.99783C7.8656 9.99502 7.87377 9.98966 7.87949 9.98252C8.16824 9.63815 8.42511 9.27491 8.64636 8.89282C8.65097 8.88495 8.65255 8.87599 8.65086 8.86727C8.64917 8.85855 8.6443 8.85054 8.63698 8.84444C8.63214 8.84044 8.62639 8.83737 8.62011 8.83542C8.2162 8.69966 7.82502 8.53654 7.45012 8.34756C7.43965 8.34237 7.43186 8.33386 7.42837 8.32378C7.42488 8.31371 7.42596 8.30285 7.43137 8.29344C7.43456 8.28734 7.43939 8.282 7.44543 8.27787C7.52418 8.22621 7.60293 8.17209 7.67793 8.11798C7.68456 8.11332 7.69251 8.11032 7.70093 8.10931C7.70935 8.1083 7.71793 8.10931 7.72574 8.11224C10.181 9.09289 12.8388 9.09289 15.2641 8.11224C15.2722 8.10917 15.2811 8.10808 15.2899 8.1091C15.2986 8.11011 15.3069 8.11318 15.3138 8.11798C15.3888 8.17209 15.4675 8.22621 15.5463 8.27787C15.5527 8.28194 15.5578 8.28734 15.5612 8.29358C15.5646 8.29981 15.5662 8.30669 15.5658 8.31359C15.5655 8.3205 15.5631 8.32722 15.5591 8.33314C15.555 8.33907 15.5493 8.34402 15.5425 8.34756C15.1685 8.53827 14.7768 8.70119 14.3716 8.83461C14.3651 8.83665 14.3593 8.83992 14.3544 8.84417C14.3496 8.84842 14.3458 8.85355 14.3435 8.8592C14.3413 8.86468 14.3405 8.87049 14.3409 8.87627C14.3414 8.88205 14.3432 8.88768 14.3463 8.89282C14.5713 9.27409 14.8291 9.63815 15.1122 9.98252C15.1179 9.98966 15.1261 9.99502 15.1356 9.99783C15.145 10.0006 15.1552 10.0007 15.1647 9.9981C16.5136 9.63653 17.7821 9.07641 18.9156 8.34182C18.9213 8.33838 18.926 8.33387 18.9294 8.32862C18.9328 8.32337 18.9349 8.31751 18.9353 8.31148C19.2484 5.48187 18.4113 3.02369 16.7172 0.845108C16.7155 0.84151 16.713 0.838264 16.7097 0.835581C16.7065 0.832897 16.7027 0.830836 16.6985 0.829529ZM9.01292 6.82083C8.27324 6.82083 7.66481 6.2272 7.66481 5.49909C7.66481 4.77016 8.26199 4.17652 9.01292 4.17652C9.76947 4.17652 10.3723 4.77508 10.361 5.49909C10.361 6.2272 9.76385 6.82083 9.01292 6.82083ZM13.9966 6.82083C13.2579 6.82083 12.6485 6.2272 12.6485 5.49909C12.6485 4.77016 13.2457 4.17652 13.9966 4.17652C14.7532 4.17652 15.3569 4.77508 15.3447 5.49909C15.3447 6.2272 14.7532 6.82083 13.9966 6.82083Z" fill="white" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_1_739" x="0" y="0" width="23" height="18" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="4" />
                                        <feGaussianBlur stdDeviation="2" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_739" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_739" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                    </a>
                </div>
                <svg className='circle small' width="138" height="138" viewBox="0 0 138 138" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="69" cy="69" r="69" fill="#484848" fillOpacity="0.5" />
                </svg>
                <svg className='circle' width="184" height="183" viewBox="0 0 184 183" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_1_714)">
                        <circle cx="138.5" cy="134.5" r="134.5" fill="#1A1A1A" />
                    </g>
                    <defs>
                        <filter id="filter0_d_1_714" x="0" y="0" width="277" height="277" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_714" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_714" result="shape" />
                        </filter>
                    </defs>
                </svg>
            </div >
            <div className="form-container_right-part">
                <div className='right-part__input'>
                    <div className='row'>
                        <div className="input_item">
                            <Input label='First Name' placeholder='|' />
                        </div>
                        <div className="input_item">
                            <Input label='Last Name' placeholder='Doe' classText='darkText' />
                        </div>
                    </div>
                    <div className='row'>
                        <div className="input_item">
                            <Input label='Email' />
                        </div>
                        <div className="input_item">
                            <Input label='Phone Number' classText='darkText' />
                        </div>
                    </div>
                </div>
                <div className='right-part__select'>
                    <div className="select_header">Select Subject?</div>
                    <div className="select-items">
                        <div className='select-items__item'>
                            <input type='radio' name='subject' id='first' value='first' />
                            <div>
                                <svg className='inactive' width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 7.32408C0 5.56824 0.684819 3.88433 1.90381 2.64277C3.12279 1.40121 4.77609 0.703705 6.5 0.703705C8.22391 0.703705 9.87721 1.40121 11.0962 2.64277C12.3152 3.88433 13 5.56824 13 7.32408C13 9.07991 12.3152 10.7638 11.0962 12.0054C9.87721 13.2469 8.22391 13.9444 6.5 13.9444C4.77609 13.9444 3.12279 13.2469 1.90381 12.0054C0.684819 10.7638 0 9.07991 0 7.32408Z" fill="#E0E0E0" />
                                </svg>
                                <svg className='active' width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 7.32408C0 5.56824 0.684819 3.88433 1.90381 2.64277C3.12279 1.40121 4.77609 0.703705 6.5 0.703705C8.22391 0.703705 9.87721 1.40121 11.0962 2.64277C12.3152 3.88433 13 5.56824 13 7.32408C13 9.07991 12.3152 10.7638 11.0962 12.0054C9.87721 13.2469 8.22391 13.9444 6.5 13.9444C4.77609 13.9444 3.12279 13.2469 1.90381 12.0054C0.684819 10.7638 0 9.07991 0 7.32408H0ZM6.12907 10.1576L9.87133 5.39269L9.19533 4.84188L6.00427 8.90325L3.744 6.98511L3.18933 7.66304L6.12907 10.1585V10.1576Z" fill="black" />
                                </svg>
                            </div>
                            <label htmlFor='first'>General Inquiry</label>
                        </div>
                        <div className='select-items__item'>
                            <input type='radio' name='subject' id='second' value='second' />
                            <div>
                                <svg className='inactive' width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 7.32408C0 5.56824 0.684819 3.88433 1.90381 2.64277C3.12279 1.40121 4.77609 0.703705 6.5 0.703705C8.22391 0.703705 9.87721 1.40121 11.0962 2.64277C12.3152 3.88433 13 5.56824 13 7.32408C13 9.07991 12.3152 10.7638 11.0962 12.0054C9.87721 13.2469 8.22391 13.9444 6.5 13.9444C4.77609 13.9444 3.12279 13.2469 1.90381 12.0054C0.684819 10.7638 0 9.07991 0 7.32408Z" fill="#E0E0E0" />
                                </svg>
                                <svg className='active' width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 7.32408C0 5.56824 0.684819 3.88433 1.90381 2.64277C3.12279 1.40121 4.77609 0.703705 6.5 0.703705C8.22391 0.703705 9.87721 1.40121 11.0962 2.64277C12.3152 3.88433 13 5.56824 13 7.32408C13 9.07991 12.3152 10.7638 11.0962 12.0054C9.87721 13.2469 8.22391 13.9444 6.5 13.9444C4.77609 13.9444 3.12279 13.2469 1.90381 12.0054C0.684819 10.7638 0 9.07991 0 7.32408H0ZM6.12907 10.1576L9.87133 5.39269L9.19533 4.84188L6.00427 8.90325L3.744 6.98511L3.18933 7.66304L6.12907 10.1585V10.1576Z" fill="black" />
                                </svg>
                            </div>
                            <label htmlFor='second'>General Inquiry</label>
                        </div>
                        <div className='select-items__item'>
                            <input type='radio' name='subject' id='third' value='third' />
                            <div>
                                <svg className='inactive' width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 7.32408C0 5.56824 0.684819 3.88433 1.90381 2.64277C3.12279 1.40121 4.77609 0.703705 6.5 0.703705C8.22391 0.703705 9.87721 1.40121 11.0962 2.64277C12.3152 3.88433 13 5.56824 13 7.32408C13 9.07991 12.3152 10.7638 11.0962 12.0054C9.87721 13.2469 8.22391 13.9444 6.5 13.9444C4.77609 13.9444 3.12279 13.2469 1.90381 12.0054C0.684819 10.7638 0 9.07991 0 7.32408Z" fill="#E0E0E0" />
                                </svg>
                                <svg className='active' width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 7.32408C0 5.56824 0.684819 3.88433 1.90381 2.64277C3.12279 1.40121 4.77609 0.703705 6.5 0.703705C8.22391 0.703705 9.87721 1.40121 11.0962 2.64277C12.3152 3.88433 13 5.56824 13 7.32408C13 9.07991 12.3152 10.7638 11.0962 12.0054C9.87721 13.2469 8.22391 13.9444 6.5 13.9444C4.77609 13.9444 3.12279 13.2469 1.90381 12.0054C0.684819 10.7638 0 9.07991 0 7.32408H0ZM6.12907 10.1576L9.87133 5.39269L9.19533 4.84188L6.00427 8.90325L3.744 6.98511L3.18933 7.66304L6.12907 10.1585V10.1576Z" fill="black" />
                                </svg>
                            </div>
                            <label htmlFor='third'>General Inquiry</label>
                        </div>
                        <div className='select-items__item'>
                            <input type='radio' name='subject' id='fourth' value='fourth' />
                            <div>
                                <svg className='inactive' width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 7.32408C0 5.56824 0.684819 3.88433 1.90381 2.64277C3.12279 1.40121 4.77609 0.703705 6.5 0.703705C8.22391 0.703705 9.87721 1.40121 11.0962 2.64277C12.3152 3.88433 13 5.56824 13 7.32408C13 9.07991 12.3152 10.7638 11.0962 12.0054C9.87721 13.2469 8.22391 13.9444 6.5 13.9444C4.77609 13.9444 3.12279 13.2469 1.90381 12.0054C0.684819 10.7638 0 9.07991 0 7.32408Z" fill="#E0E0E0" />
                                </svg>
                                <svg className='active' width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 7.32408C0 5.56824 0.684819 3.88433 1.90381 2.64277C3.12279 1.40121 4.77609 0.703705 6.5 0.703705C8.22391 0.703705 9.87721 1.40121 11.0962 2.64277C12.3152 3.88433 13 5.56824 13 7.32408C13 9.07991 12.3152 10.7638 11.0962 12.0054C9.87721 13.2469 8.22391 13.9444 6.5 13.9444C4.77609 13.9444 3.12279 13.2469 1.90381 12.0054C0.684819 10.7638 0 9.07991 0 7.32408H0ZM6.12907 10.1576L9.87133 5.39269L9.19533 4.84188L6.00427 8.90325L3.744 6.98511L3.18933 7.66304L6.12907 10.1585V10.1576Z" fill="black" />
                                </svg>
                            </div>
                            <label htmlFor='fourth'>General Inquiry</label>
                        </div>
                    </div>
                </div>
                <div className="right-part__message">
                    <Input label='Message' placeholder='Write your message..' />
                </div>
                <button className='send-message'>Send Message</button>
                <img src={sendLetter} alt='' className='letter' />
            </div>
        </div >
    )
}

export default Form