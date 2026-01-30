import React from 'react';

const social_share = [
    { link: 'https://www.linkedin.com/company/sri-shanmugha-educational-institutions', target: '_blank', icon: 'icon-linkedin2' },
    { link: 'https://www.youtube.com/@shanmughalive3140', target: '_blank', icon: 'icon-youtube' },
    { link: 'https://www.instagram.com/shanmughainstitutions', target: '_blank', icon: 'icon-instagram' },
];

const SocialShare = () => {
    return (
        <>
            {social_share.map((social, i) => (
                <li key={i}><a href={social.link} target={social.target ? social.target : ''}>
                <i className={social.icon}></i>
                </a></li>
            ))}
        </>
    )
}
export default SocialShare;