import { faInstagram, faPinterest, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const SocialMediaData = [
    {
        order: 1,
        icon: <FontAwesomeIcon icon={faInstagram} />,
        url: "https://www.instagram.com/by_danielledesign/"
    },
    {
        order: 2,
        icon: <FontAwesomeIcon icon={faPinterest} />,
        url: "https://www.pinterest.com/by_daniellestudio/"
    },
    {
        order: 3,
        icon: <FontAwesomeIcon icon={faFacebookF} />,
        url: "https://www.facebook.com/bydanielledesign"
    }
];