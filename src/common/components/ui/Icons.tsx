import React from 'react';

import './Icons.pcss';

export const Icons = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="hidden">
            <svg id="start" width="24" height="26">
                <g
                    stroke="#C23814"
                    strokeWidth="1.5"
                    fill="none"
                    fillRule="evenodd"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M12 10.273a2.727 2.727 0 100 5.454 2.727 2.727 0 000-5.454z" />
                    <path d="M12 4a9 9 0 109 9 9.01 9.01 0 00-9-9zM1 13h4M19 13h4M12 2v4M12 20v4" />
                </g>
            </svg>

            <svg id="pause" width="24" height="26">
                <g
                    stroke="#A4A4A4"
                    strokeWidth="1.5"
                    fill="none"
                    fillRule="evenodd"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M12 10.273a2.727 2.727 0 100 5.454 2.727 2.727 0 000-5.454z" />
                    <path d="M12 4a9 9 0 109 9 9.01 9.01 0 00-9-9zM1 13h4M19 13h4M12 2v4M12 20v4" />
                </g>
            </svg>

            <svg id="settings" width="22" height="22">
                <g fill="none" fillRule="evenodd">
                    <path fill="#131313" d="M-281-17H39v480h-320z" />
                    <path
                        d="M6.93 17.915c.135 0 .268.032.388.095.425.225.87.41 1.33.552a.833.833 0 01.551.559c.254.854.495 1.493.653 1.879h2.296c.158-.386.4-1.026.653-1.88a.833.833 0 01.552-.559c.459-.143.904-.327 1.33-.551a.833.833 0 01.785.004c.784.425 1.407.707 1.791.868l1.624-1.623a20.204 20.204 0 00-.868-1.792.833.833 0 01-.004-.785c.224-.426.408-.87.551-1.33a.833.833 0 01.559-.552A20.184 20.184 0 0021 12.147V9.851c-.386-.158-1.026-.4-1.88-.653a.833.833 0 01-.559-.551 7.887 7.887 0 00-.551-1.33.833.833 0 01.004-.786c.425-.784.707-1.406.868-1.79L17.26 3.116a20.13 20.13 0 00-1.792.868.833.833 0 01-.786.005 7.886 7.886 0 00-1.33-.552.833.833 0 01-.551-.559A20.135 20.135 0 0012.148 1H9.852c-.156.385-.397 1.02-.651 1.87a.833.833 0 01-.555.569c-.459.143-.904.327-1.33.551a.833.833 0 01-.785-.005 20.17 20.17 0 00-1.791-.867L3.117 4.74c.161.386.443 1.008.868 1.792.132.245.134.54.004.786-.223.425-.408.87-.55 1.33a.833.833 0 01-.56.551c-.854.254-1.493.495-1.879.653v2.296c.384.156 1.016.396 1.862.648a.835.835 0 01.583.578c.14.446.32.878.536 1.292a.833.833 0 01-.007.823 20.04 20.04 0 00-.856 1.77l1.623 1.625a20.13 20.13 0 001.792-.868.833.833 0 01.396-.101zM11 8.273a2.727 2.727 0 100 5.454 2.727 2.727 0 000-5.454z"
                        stroke="#A4A4A4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                    />
                </g>
            </svg>

            <svg id="logo" width="108" height="24">
                <g fill="none" fillRule="evenodd">
                    <path
                        fill="#FFF"
                        d="M28.729 17.503l4.587-10.66h2.17l4.588 10.66h-2.462l-.978-2.374h-4.526l-.979 2.374h-2.4zm4.22-4.43h2.844L34.37 9.64l-1.422 3.432zm8.354 4.43V6.918h4.174c1.672 0 3.037.502 4.098 1.505 1.06 1.003 1.59 2.265 1.59 3.788 0 1.512-.533 2.772-1.598 3.78s-2.429 1.512-4.09 1.512h-4.174zm2.354-2.102h1.82c.968 0 1.748-.295 2.34-.885.59-.59.886-1.358.886-2.305 0-.938-.298-1.704-.894-2.299-.597-.595-1.374-.892-2.332-.892h-1.82v6.381zm14.333 2.283c-1.662 0-3.015-.514-4.06-1.542-1.045-1.028-1.567-2.339-1.567-3.931 0-1.523.535-2.815 1.605-3.879 1.07-1.063 2.406-1.595 4.006-1.595.928 0 1.713.118 2.355.355a6.278 6.278 0 011.85 1.096l-1.483 1.77c-.448-.373-.882-.646-1.3-.817-.418-.171-.917-.257-1.498-.257-.856 0-1.583.325-2.179.975-.596.65-.894 1.434-.894 2.352 0 .967.303 1.769.91 2.404.606.635 1.383.952 2.331.952.877 0 1.616-.211 2.217-.635V13.42h-2.37v-2.01h4.648v4.596c-1.335 1.119-2.859 1.678-4.571 1.678zm11.299-.015c-1.458 0-2.594-.4-3.41-1.202-.815-.801-1.223-1.968-1.223-3.5V6.918h2.355v5.988c0 .847.201 1.495.604 1.943.402.449.97.673 1.705.673.733 0 1.302-.217 1.704-.65.403-.434.604-1.064.604-1.89V6.918h2.355v5.973c0 1.573-.415 2.762-1.246 3.568-.83.807-1.98 1.21-3.448 1.21zm5.332-.166l4.587-10.66h2.171l4.587 10.66h-2.461l-.979-2.374H78l-.978 2.374h-2.4zm4.22-4.43h2.844L80.263 9.64l-1.422 3.432zm8.354 4.43V6.918h4.893c1.356 0 2.395.358 3.12 1.074.61.605.917 1.421.917 2.45 0 1.622-.765 2.716-2.294 3.28l2.615 3.78h-2.753l-2.324-3.386h-1.82v3.387h-2.354zm2.355-5.444h2.385c.57 0 1.014-.138 1.33-.415.316-.278.474-.648.474-1.112 0-.494-.163-.87-.489-1.126-.326-.257-.78-.386-1.36-.386h-2.34v3.04zm8.277 5.444V6.918h4.175c1.671 0 3.037.502 4.097 1.505 1.06 1.003 1.59 2.265 1.59 3.788 0 1.512-.532 2.772-1.597 3.78-1.066 1.008-2.429 1.512-4.09 1.512h-4.175zm2.355-2.102h1.82c.968 0 1.748-.295 2.339-.885.591-.59.887-1.358.887-2.305 0-.938-.298-1.704-.895-2.299-.596-.595-1.373-.892-2.331-.892h-1.82v6.381z"
                    />
                    <path
                        fill="#68BC71"
                        d="M12.04 0C8.277 0 3.737.86 0 2.755 0 6.845-.052 17.037 12.04 24 24.133 17.037 24.081 6.845 24.081 2.755 20.344.86 15.804 0 12.041 0z"
                    />
                    <path
                        fill="#67B279"
                        d="M12.04 0v24C.48 17.343.02 7.735 0 3.329v-.574C3.737.86 8.277 0 12.04 0z"
                    />
                    <path
                        fill="#FFF"
                        d="M11.934 15.429l6.987-9.226c-.512-.402-.96-.119-1.208.101h-.01l-5.825 5.938-2.194-2.588c-1.048-1.185-2.471-.28-2.804-.042l5.054 5.817"
                    />
                </g>
            </svg>

            <symbol id="checkmark" width="20" height="16">
                <g transform="translate(-50 -18)" fill="none" fillRule="evenodd">
                    <path
                        d="M0 25c0-8.284 6.717-15 15-15h50c8.284 0 15 6.714 15 15 0 8.284-6.717 15-15 15H15C6.716 40 0 33.286 0 25z"
                        fill="currentColor"
                    />
                    <circle fill="#FFF" cx="59" cy="25" r="25" />
                    <path
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M51.66 25.968l5.568 5.87 10.433-12"
                    />
                </g>
            </symbol>

            <svg id="circle" width="20" height="20">
                <g fill="none" fillRule="evenodd">
                    <path
                        d="M-13 10C-13 1.716-6.283-5 2-5h50c8.284 0 15 6.714 15 15 0 8.284-6.717 15-15 15H2c-8.284 0-15-6.714-15-15z"
                        fill="currentColor"
                    />
                    <circle fill="#FFF" cx="25" cy="25" r="25" transform="translate(-15 -15)" />
                    <path
                        d="M10 .5a9.5 9.5 0 100 19 9.5 9.5 0 000-19zm0 3a6.5 6.5 0 110 13 6.5 6.5 0 010-13z"
                        fill="currentColor"
                    />
                </g>
            </svg>

            <svg id="experiment" width="90" height="94" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="a">
                        <stop stopColor="#2B2B2B" offset="0%" />
                        <stop stopColor="#131313" offset="100%" />
                    </linearGradient>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b">
                        <stop stopColor="#2B2B2B" offset="0%" />
                        <stop stopColor="#131313" offset="100%" />
                    </linearGradient>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
                        <stop stopColor="#D99927" offset="0%" />
                        <stop stopColor="#EB5468" offset="100%" />
                    </linearGradient>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d">
                        <stop stopColor="#DA7800" offset="0%" />
                        <stop stopColor="#E5384F" offset="100%" />
                    </linearGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                    <path
                        fill="url(#a)"
                        d="M0 47.741l160 79.898L0 198.378z"
                        transform="translate(-115 -88)"
                    />
                    <path
                        fill="url(#b)"
                        transform="matrix(-1 0 0 1 365 -88)"
                        d="M160 0l160 127.64-160 241.022z"
                    />
                    <path
                        d="M62.926 62.416c-8.464-.198-16.986 2.59-25.542 7.093-8.87-7.151-24.371-8.776-30.374-5.162L21.856 44.81c1.963-2.586 4.01-7.68 4.167-12.21.008-.178.011-.354.011-.528l.006-2.31.012-4.726.005-2.837.012-4.729.007-2.837.019-8.038h19.217l.058 25.476c.012 4.659 2.14 10.053 4.184 12.739l13.372 17.606z"
                        fill="#F9F7F8"
                    />
                    <path
                        d="M.816 75.595c19.555 2.68 29.435-4.611 36.568-11.447-8.87-7.152-24.371-3.415-30.373.198L4.597 67.52c-1.678 2.215-3.003 5.067-3.78 8.075z"
                        fill="#A5D3B2"
                    />
                    <path
                        d="M11.366 94H60.04c4.119 0 6.962-1.48 8.774-3.785 4.136-6.552 1.212-18.09-1.84-22.47l-4.049-5.329c-9.863-5.667-16.986-2.771-25.54 1.732-8.99 4.734-19.562 11.243-36.57 11.446C-1.414 84.162.73 94 11.367 94z"
                        fill="#67B279"
                    />
                    <path
                        d="M85.65 13.446V49.04c-2.58 1.721-6.764 1.721-9.337 0-2.581-1.721-6.759-1.721-9.338 0V13.446h18.676z"
                        fill="#F9F7F8"
                    />
                    <path
                        d="M66.975 15.339H86.037c2.167 0 3.942-1.909 3.942-4.241 0-2.338-1.775-4.246-3.942-4.246H66.589c-2.173 0-3.943 1.908-3.943 4.246 0 2.332 1.77 4.24 3.943 4.24h.386zM26.094 8.487h20.081a4.257 4.257 0 004.248-4.246C50.423 1.909 48.508 0 46.175 0H25.231c-2.334 0-4.248 1.909-4.248 4.24a4.257 4.257 0 004.248 4.247h.863z"
                        fill="#E4E4E4"
                    />
                    <path
                        d="M31.957 47.528a3.747 3.747 0 107.493 0 3.744 3.744 0 00-3.75-3.742 3.743 3.743 0 00-3.743 3.742zM44.679 80.114a5.748 5.748 0 0011.494 0 5.744 5.744 0 00-5.75-5.742 5.743 5.743 0 00-5.744 5.742zM18.033 86.827a3.497 3.497 0 003.497-3.496 3.496 3.496 0 00-3.497-3.49 3.496 3.496 0 00-3.497 3.49 3.497 3.497 0 003.497 3.496z"
                        fill="#A5D3B2"
                    />
                    <path
                        d="M45.37 32.071l-.058-23.584H39.38l.059 23.584c.01 4.66 2.14 10.053 4.183 12.739l11.119 14.642c2.558.353 5.25 1.281 8.184 2.965L49.554 44.81c-2.043-2.686-4.173-8.08-4.183-12.739z"
                        fill="#DDDAEC"
                    />
                    <path
                        d="M66.808 67.52l-3.883-5.103c-2.934-1.684-5.626-2.611-8.184-2.965l2.258 2.965C62.79 70.05 64.223 94 51.41 94h8.63c4.12 0 6.962-1.48 8.775-3.785a9.288 9.288 0 01-1.84-5.55v-16.92l-.167-.225z"
                        fill="#4D995F"
                    />
                    <path
                        d="M50.423 4.24c0-2.331-1.915-4.24-4.248-4.24H40.26a4.256 4.256 0 014.232 4.24 4.257 4.257 0 01-4.248 4.247h5.932a4.257 4.257 0 004.248-4.246z"
                        fill="#BCB7D6"
                    />
                    <path
                        d="M85.65 47.147V15.34h-4.794v33.095c1.727.022 3.47-.407 4.795-1.287z"
                        fill="#DDDAEC"
                    />
                    <path
                        d="M89.979 11.098c0-2.338-1.776-4.246-3.942-4.246h-4.785c2.162.005 3.932 1.914 3.932 4.246 0 2.332-1.775 4.24-3.942 4.24h4.795c2.166 0 3.942-1.908 3.942-4.24z"
                        fill="#BCB7D6"
                    />
                    <path
                        d="M66.975 67.746v16.92c0 2.075.686 3.994 1.84 5.549 1.667 2.241 4.317 3.72 7.3 3.785h.396c5.042-.107 9.14-4.268 9.14-9.334V47.147c-2.58 1.721-6.764 1.721-9.338 0-2.58-1.72-6.758-1.72-9.338 0v20.599z"
                        fill="url(#c)"
                    />
                    <path
                        d="M76.313 64.11a3.342 3.342 0 000-6.686 3.344 3.344 0 100 6.687z"
                        fill="#FAB6BF"
                    />
                    <path
                        d="M85.65 84.666V47.147c-1.324.88-3.067 1.309-4.794 1.287v36.232c0 4.305-2.961 7.956-6.94 9.023a9.266 9.266 0 002.198.311h.397c5.042-.107 9.14-4.268 9.14-9.334z"
                        fill="url(#d)"
                    />
                    <path
                        d="M28.508 78.026a1.418 1.418 0 01-1-2.425l.015-.015a1.42 1.42 0 012.002 2.012l-.017.016a1.415 1.415 0 01-1 .412zM40.093 73.485a1.418 1.418 0 01-1.003-2.422l.016-.015a1.42 1.42 0 012.007 2.006l-.016.016c-.278.277-.64.415-1.004.415z"
                        fill="#A5D3B2"
                        fillRule="nonzero"
                    />
                    <path
                        d="M74.119 74.252a1.418 1.418 0 01-1.003-2.422l.016-.016a1.42 1.42 0 012.007 2.006l-.017.017c-.277.276-.64.415-1.003.415zM77.144 85.087a1.418 1.418 0 01-1-2.425l.015-.015a1.42 1.42 0 012.002 2.011l-.016.017a1.415 1.415 0 01-1.001.412z"
                        fill="#FAB6BF"
                        fillRule="nonzero"
                    />
                    <path
                        d="M33.68 16.052c0 .783-.633 1.418-1.418 1.418h-6.194l.008-2.837h6.186c.785 0 1.419.636 1.419 1.419zM33.68 23.617c0 .783-.633 1.419-1.418 1.419h-6.21l.005-2.837h6.205c.785 0 1.419.633 1.419 1.418zM33.68 31.18c0 .786-.633 1.42-1.418 1.42h-6.24c.008-.178.012-.354.012-.528l.006-2.31h6.221c.786 0 1.42.636 1.42 1.419zM74.563 22.904a1.42 1.42 0 01-1.42 1.419h-6.168v-2.837h6.169c.783 0 1.419.633 1.419 1.418zM74.563 30.468c0 .785-.636 1.418-1.42 1.418h-6.168V29.05h6.169c.783 0 1.419.636 1.419 1.419zM74.563 38.039a1.42 1.42 0 01-1.42 1.418h-6.168V36.62h6.169c.783 0 1.419.636 1.419 1.419z"
                        fill="#2B4D66"
                        fillRule="nonzero"
                    />
                </g>
            </svg>

            <svg id="new_tech" width="100" height="104" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="a">
                        <stop stopColor="#2B2B2B" offset="0%" />
                        <stop stopColor="#131313" offset="100%" />
                    </linearGradient>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b">
                        <stop stopColor="#2B2B2B" offset="0%" />
                        <stop stopColor="#131313" offset="100%" />
                    </linearGradient>
                    <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="c">
                        <stop stopColor="#7396CF" offset="0%" />
                        <stop stopColor="#ADC7F2" offset="19.542%" />
                        <stop stopColor="#D2D6DC" offset="90.849%" />
                        <stop stopColor="#939393" offset="100%" />
                    </linearGradient>
                    <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="d">
                        <stop stopColor="#949494" offset="0%" />
                        <stop stopColor="#D8D8D8" offset="100%" />
                    </linearGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                    <path
                        fill="url(#a)"
                        d="M0 38.288l160 89.351L0 321.015z"
                        transform="matrix(-1 0 0 1 210 -86)"
                    />
                    <path
                        fill="url(#b)"
                        transform="translate(-270 -86)"
                        d="M160 0l160 127.64L160 432z"
                    />
                    <g>
                        <g>
                            <path
                                d="M22.327 49.43c4.742 0 12.01-4.751 21.804-14.254l8.708-4.588c16.484 4.665 28.292 7.98 35.423 9.941C88.262 15.32 62.802 0 40.458 0S0 18.146 0 40.53c0 1.968.14 3.904.41 5.797 1.538 0 16.3 3.103 21.917 3.103z"
                                fill="url(#c)"
                            />
                            <path
                                fill="url(#d)"
                                d="M88.262 40.53L99.743 57.27 58.076 40.53 60.86 61.67l32.083 13.238-11.606 2.696-5.763 17.477-5.305 1.332L60.859 91 16.452 75.204 44.433 34.93l8.406-4.342z"
                            />
                            <path
                                d="M.41 46.327L13.286 52l3.167 23.204c5.826 2.88 12.047 7.135 18.663 12.765 9.923 8.444 17.78 2.627 22.982 3.877 3.469.833 7.525 2.356 12.17 4.567L41.986 71.37a4647.848 4647.848 0 01-2.29-8.711c8.116-.277 20.818-16.332 7.106-29.682-9.14-8.9-24.604-4.45-46.39 13.35z"
                                fill="#0D080F"
                            />
                            <ellipse
                                fill="#D8D8D8"
                                cx="35.115"
                                cy="46.118"
                                rx="14.504"
                                ry="14.529"
                            />
                            <ellipse fill="#0D0810" cx="35.115" cy="46.118" rx="9.924" ry="9.941" />
                            <ellipse fill="#D8D8D8" cx="35.115" cy="46.118" rx="6.87" ry="6.882" />
                            <path
                                fill="#0D080F"
                                d="M58.076 40.53l2.783 21.14 30.23 12.351 6.749-17.506z"
                            />
                            <path
                                d="M13.906 72.923c1.697 7.998 1.697 16.905 0 26.721 9.76 4.696 22.868 5.457 39.323 2.286v-7.643c-5.46-8.044-12.383-12.716-20.768-14.016-8.385-1.3-14.57-3.749-18.555-7.348z"
                                fill="#C7C7C7"
                            />
                            <path
                                fill="#707070"
                                d="M92.942 74.908L60.859 61.67l-8.85 3.891 29.327 12.043z"
                            />
                            <path
                                fill="#D8D8D8"
                                d="M58.097 40.53l41.646 16.745L88.262 40.53l-35.423-9.94z"
                            />
                        </g>
                    </g>
                </g>
            </svg>

            <svg id="fast_work" width="104" height="104" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="a">
                        <stop stopColor="#2B2B2B" offset="0%" />
                        <stop stopColor="#131313" offset="100%" />
                    </linearGradient>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b">
                        <stop stopColor="#2B2B2B" offset="0%" />
                        <stop stopColor="#131313" offset="100%" />
                    </linearGradient>
                    <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="c">
                        <stop stopColor="#828282" offset="0%" />
                        <stop offset="100%" />
                    </linearGradient>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d">
                        <stop stopColor="#7C7C7D" offset="0%" />
                        <stop stopColor="#464647" offset="100%" />
                    </linearGradient>
                    <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="e">
                        <stop stopColor="#A7FF4D" offset="0%" />
                        <stop stopColor="#FF7C00" offset="51.896%" />
                        <stop stopColor="red" offset="100%" />
                    </linearGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                    <path
                        fill="url(#a)"
                        d="M0 142.91l160-15.27L0 321.014z"
                        transform="translate(-108 -83)"
                    />
                    <path
                        fill="url(#b)"
                        transform="matrix(-1 0 0 1 372 -83)"
                        d="M160 0l160 127.64L160 432z"
                    />
                    <g>
                        <circle fill="url(#c)" cx="52" cy="52" r="52" />
                        <path
                            d="M51.898 34.274c9.712 0 17.584 7.878 17.584 17.584 0 9.715-7.872 17.584-17.584 17.584-9.707 0-17.584-7.872-17.584-17.584 0-9.706 7.878-17.584 17.584-17.584z"
                            fill="#26A6D1"
                        />
                        <path
                            d="M51.898 75.306c-11.863 0-21.643-8.815-23.202-20.256L12.534 27.024l-.018-.041-1.808 2.61c-.446.819-.88 1.648-1.278 2.495l-.865 2.022a45.115 45.115 0 00-.826 2.125c-.287.8-.536 1.609-.774 2.42l-.521 1.867c-.217.87-.402 1.741-.569 2.618l-.316 1.849c-.13.858-.229 1.711-.305 2.564l-.152 2.043c-.038.78-.053 1.556-.053 2.335 0 .78.012 1.56.053 2.336l.152 2.043c.08.853.182 1.711.305 2.564l.316 1.85c.17.876.352 1.746.569 2.617l.521 1.866c.24.806.487 1.62.774 2.421.255.715.542 1.419.826 2.125.282.674.551 1.35.865 2.019.398.847.832 1.67 1.28 2.497l.584 1.146.27.419c.515.882 1.084 1.723 1.658 2.564l.92 1.369c.555.756 1.161 1.477 1.768 2.204l1.213 1.453c.528.577 1.094 1.128 1.65 1.682.557.56 1.105 1.134 1.685 1.653l1.454 1.22c.727.6 1.448 1.207 2.204 1.763l1.357.926c.844.578 1.69 1.146 2.564 1.66l.416.27 1.143.582c.82.446 1.647.888 2.494 1.284l.243.126 1.187.486c3.171 1.351 6.483 2.307 9.859 2.937l13.378-23.2a24.73 24.73 0 01-4.859.493z"
                            fill="#3DB39E"
                        />
                        <path
                            d="M98.63 48.664l-.061-.774c-.332-3.915-1.94-9.583-3.277-13.387H67.618c4.733 4.287 7.725 10.462 7.725 17.355 0 7.438-3.473 14.052-8.865 18.346L49.993 98.795c5.797 0 13.601-1.046 19.216-3.29l.191-.062.299-.126c1.914-.794 3.807-1.665 5.65-2.732 1.65-.95 3.195-2.016 4.686-3.13l.085-.067a47.762 47.762 0 004.065-3.464l.2-.173.647-.66a46.764 46.764 0 007.26-9.357l.225-.33.407-.824a47.69 47.69 0 001.77-3.555l.692-1.627a47.66 47.66 0 001.222-3.481l.484-1.513c.448-1.632.814-3.28 1.087-4.947l.114-.95c.203-1.43.346-2.869.42-4.322l.026-1.164a50.423 50.423 0 00-.109-4.357z"
                            fill="#EFC75E"
                        />
                        <path
                            d="M92.49 28.413c-.981-1.7-2.08-3.285-3.235-4.815l-.378-.469a45.31 45.31 0 00-3.297-3.807l-.786-.806a47.519 47.519 0 00-3.982-3.531l-.305-.258a46.313 46.313 0 00-4.83-3.239l-.334-.223-1.27-.659c-.732-.395-1.462-.791-2.215-1.146-.724-.337-1.453-.636-2.183-.938l-1.837-.732c-.888-.32-1.785-.59-2.685-.865l-1.494-.434a49.651 49.651 0 00-2.951-.641l-1.395-.276a43.835 43.835 0 00-2.887-.343l-1.58-.161c-.826-.053-1.65-.047-2.482-.059L50.33 5l-1.582.114a46.79 46.79 0 00-10.436 1.9l-.712.193c-.87.281-1.73.624-2.591.961l-1.653.653c-.71.302-1.41.657-2.113 1.006a44.47 44.47 0 00-2.03 1.043l-.763.39-1.125.727c-.666.41-1.325.83-1.973 1.275a59.12 59.12 0 00-1.867 1.357l-1.611 1.286a49.675 49.675 0 00-1.943 1.709l-1.196 1.166a45.94 45.94 0 00-2.016 2.14l-.437.527L29.62 44.585c3.062-9.381 11.875-16.172 22.281-16.172h40.59z"
                            fill="#E2574C"
                        />
                        <circle fill="url(#d)" cx="52" cy="52" r="47" />
                        <path
                            d="M52 99c.276 0-.239-94 0-94C26.043 5 5 26.043 5 52s21.043 47 47 47z"
                            fill="#000"
                            opacity=".199"
                        />
                        <path
                            d="M52 10c22.964 0 41.623 18.43 41.994 41.305L94 52c-4.5 1.56-9 2.34-13.5 2.34s-9-.78-13.5-2.34c0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15-4.5 1.56-9 2.34-13.5 2.34s-9-.78-13.5-2.34c0-23.196 18.804-42 42-42z"
                            fill="#FFF"
                        />
                        <path
                            d="M52 12c21.42 0 38.909 16.838 39.95 38h-7.006C83.939 32.153 69.574 18 52 18c-17.574 0-31.94 14.153-32.944 32H12.05C13.091 28.838 30.58 12 52 12z"
                            fill="url(#e)"
                        />
                        <path
                            d="M52 10c22.52 0 42 18.167 42 42a33.017 33.017 0 01-3.528 1.104C88.167 26.18 70.475 14.476 52 14.476S16.886 25.818 13.49 53.104A33.812 33.812 0 0110 52c0-23.882 19.48-42 42-42z"
                            fill="#000"
                            opacity=".142"
                        />
                        <path d="M58.62 43.356l20.81-7.837-16.69 14.694L52 52z" fill="#3F3F40" />
                        <circle fill="#FFF" cx="52" cy="52" r="8" />
                        <circle fill="#5F5F60" cx="52" cy="52" r="5" />
                        <text
                            fontFamily="Roboto-Bold, Roboto"
                            fontSize="14"
                            fontWeight="bold"
                            fill="#FFF"
                        >
                            <tspan x="31.257" y="80">SPEED</tspan>
                        </text>
                        <path stroke="#979797" strokeLinecap="square" d="M51.5 19.5v8" />
                        <path
                            stroke="#979797"
                            opacity=".4"
                            strokeLinecap="square"
                            d="M30.672 29.672l5.656 5.656M71.328 29.672l-5.656 5.656"
                        />
                    </g>
                </g>
            </svg>

            <svg id="chrome_logo" width="94" height="94" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
                        <stop stopColor="#2B2B2B" offset="0%" />
                        <stop stopColor="#131313" offset="100%" />
                    </linearGradient>
                    <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="b">
                        <stop stopColor="#2B2B2B" offset="0%" />
                        <stop stopColor="#131313" offset="100%" />
                    </linearGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                    <path
                        fill="url(#a)"
                        d="M0 0l160 127.64L0 480z"
                        transform="translate(-113 -88)"
                    />
                    <path
                        fill="url(#b)"
                        transform="matrix(-1 0 0 1 367 -88)"
                        d="M160 0l160 127.64L160 161z"
                    />
                    <path
                        d="M46.898 29.274c9.712 0 17.584 7.878 17.584 17.584 0 9.715-7.872 17.584-17.584 17.584-9.707 0-17.584-7.872-17.584-17.584 0-9.706 7.878-17.584 17.584-17.584z"
                        fill="#26A6D1"
                    />
                    <path
                        d="M46.898 70.306c-11.863 0-21.643-8.815-23.202-20.256L7.534 22.024l-.018-.041-1.808 2.61c-.446.819-.88 1.648-1.278 2.495l-.865 2.022a45.115 45.115 0 00-.826 2.125c-.287.8-.536 1.609-.774 2.42l-.521 1.867c-.217.87-.402 1.741-.569 2.618L.56 39.989c-.13.858-.229 1.711-.305 2.564l-.152 2.043c-.038.78-.053 1.556-.053 2.335 0 .78.012 1.56.053 2.336l.152 2.043c.08.853.182 1.711.305 2.564l.316 1.85c.17.876.352 1.746.569 2.617l.521 1.866c.24.806.487 1.62.774 2.421.255.715.542 1.419.826 2.125.282.674.551 1.35.865 2.019.398.847.832 1.67 1.28 2.497l.584 1.146.27.419c.515.882 1.084 1.723 1.658 2.564l.92 1.369c.555.756 1.161 1.477 1.768 2.204l1.213 1.453c.528.577 1.094 1.128 1.65 1.682.557.56 1.105 1.134 1.685 1.653l1.454 1.22c.727.6 1.448 1.207 2.204 1.763l1.357.926c.844.578 1.69 1.146 2.564 1.66l.416.27 1.143.582c.82.446 1.647.888 2.494 1.284l.243.126 1.187.486c3.171 1.351 6.483 2.307 9.859 2.937l13.378-23.2a24.73 24.73 0 01-4.859.493z"
                        fill="#3DB39E"
                    />
                    <path
                        d="M93.63 43.664l-.061-.774c-.332-3.915-1.94-9.583-3.277-13.387H62.618c4.733 4.287 7.725 10.462 7.725 17.355 0 7.438-3.473 14.052-8.865 18.346L44.993 93.795c5.797 0 13.601-1.046 19.216-3.29l.191-.062.299-.126c1.914-.794 3.807-1.665 5.65-2.732 1.65-.95 3.195-2.016 4.686-3.13l.085-.067a47.762 47.762 0 004.065-3.464l.2-.173.647-.66a46.764 46.764 0 007.26-9.357l.225-.33.407-.824a47.69 47.69 0 001.77-3.555l.692-1.627a47.66 47.66 0 001.222-3.481l.484-1.513c.448-1.632.814-3.28 1.087-4.947l.114-.95c.203-1.43.346-2.869.42-4.322l.026-1.164a50.423 50.423 0 00-.109-4.357z"
                        fill="#EFC75E"
                    />
                    <path
                        d="M87.49 23.413c-.981-1.7-2.08-3.285-3.235-4.815l-.378-.469a45.31 45.31 0 00-3.297-3.807l-.786-.806a47.519 47.519 0 00-3.982-3.531l-.305-.258a46.313 46.313 0 00-4.83-3.239l-.334-.223-1.27-.659c-.732-.395-1.462-.791-2.215-1.146-.724-.337-1.453-.636-2.183-.938l-1.837-.732c-.888-.32-1.785-.59-2.685-.865l-1.494-.434A49.651 49.651 0 0055.708.85L54.313.574a43.835 43.835 0 00-2.887-.343L49.846.07C49.02.017 48.196.023 47.364.01L45.33 0l-1.582.114a46.79 46.79 0 00-10.436 1.9l-.712.193c-.87.281-1.73.624-2.591.961l-1.653.653c-.71.302-1.41.657-2.113 1.006a44.47 44.47 0 00-2.03 1.043l-.763.39-1.125.727c-.666.41-1.325.83-1.973 1.275a59.12 59.12 0 00-1.867 1.357l-1.611 1.286a49.675 49.675 0 00-1.943 1.709l-1.196 1.166a45.94 45.94 0 00-2.016 2.14l-.437.527L24.62 39.585c3.062-9.381 11.875-16.172 22.281-16.172h40.59z"
                        fill="#E2574C"
                    />
                </g>
            </svg>

            <svg id="ad_blocking" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                    <path fill="#000" d="M-322-110h686v554h-686z" />
                    <path fill="#131313" d="M-38-110h402v554H-38z" />
                    <path
                        d="M2 5h16a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V6a1 1 0 011-1zm0 14L18 1"
                        stroke="#67B279"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                    />
                </g>
            </svg>

            <svg id="miscellaneous" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                    <path fill="#000" d="M-322-159h686v554h-686z" />
                    <path fill="#131313" d="M-38-159h402v554H-38z" />
                    <path
                        d="M17 1.22H3a2 2 0 00-2 2v9.015a2 2 0 002 2h9.032l4.148 4.339v-4.339H17a2 2 0 002-2V3.22a2 2 0 00-2-2zM10 4.5V8m-.003 2.596c.008 0 .008-.063 0-.192"
                        stroke="#67B279"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                    />
                </g>
            </svg>

            <svg id="trackers_blocking" width="18" height="20" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                    <path fill="#000" d="M-323-206h686v554h-686z" />
                    <path fill="#131313" d="M-39-206h402v554H-39z" />
                    <path
                        d="M14.392 7.168c.87.699 1.739 1.567 2.608 2.604-2.667 3.333-5.333 5-8 5-.44 0-.879-.045-1.318-.136m-2.51-1.023C4.167 12.954 2.777 11.673 1 9.772 3.667 6.591 6.333 5 9 5c1.072 0 2.143.257 3.215.77m-4.63 5.644a2 2 0 012.66-2.98M1 19L17 1"
                        stroke="#67B279"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                    />
                </g>
            </svg>

            <svg id="languages" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                    <path fill="#000" d="M-322-254h686v554h-686z" />
                    <path fill="#131313" d="M-38-254h402v554H-38z" />
                    <path
                        d="M10 19a9 9 0 100-18 9 9 0 000 18zm2.5-17.5c.275 1.167.493 2.334.654 3.5M17 5a26.16 26.16 0 01-3.746.784 36.405 36.405 0 010 8.434c1.248.164 2.497.425 3.746.782m-3.846 0a38.054 38.054 0 01-.654 3.5m-5 0a38.053 38.053 0 01-.654-3.5M3 15a26.16 26.16 0 013.747-.784 36.178 36.178 0 010-8.433A26.024 26.024 0 013 5h0m3.846 0c.161-1.166.38-2.333.654-3.5h0m0 12.627a24.612 24.612 0 015 0m0-8.254a24.612 24.612 0 01-5 0M1 10h18"
                        stroke="#67B279"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                    />
                </g>
            </svg>

            <svg id="filters" width="18" height="14" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                    <path fill="#000" d="M-323-305h686v554h-686z" />
                    <path fill="#131313" d="M-39-305h402v554H-39z" />
                    <path
                        d="M1 1h16M1 5h12M1 9h16M1 13h8"
                        stroke="#67B279"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                    />
                </g>
            </svg>

            <svg id="user_rules" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                    <path fill="#000" d="M-323-351h686v554h-686z" />
                    <path fill="#131313" d="M-39-351h402v554H-39z" />
                    <path
                        d="M9 9a4 4 0 100-8 4 4 0 000 8zm-8 8v-1a5 5 0 015-5h6a5 5 0 015 5v1h0"
                        strokeWidth="1.5"
                        stroke="#67B279"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </g>
            </svg>

            <svg id="arrow" width="8" height="14" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                    <path fill="#000" d="M-592-257H94v554h-686z" />
                    <path fill="#131313" d="M-308-257H94v554h-402z" />
                    <path d="M1 13l6-6-6-6" stroke="#888" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </g>
            </svg>
        </svg>
    );
};