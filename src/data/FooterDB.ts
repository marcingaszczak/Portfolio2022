import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { AiFillFacebook } from "@react-icons/all-files/ai/AiFillFacebook";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";

export const footerLinks = [
    {
        id: 1,
        styleModifier: 'Footer__Contact__Tile--Mail',
        address: 'mailto:marcingaszczak@gmail.com',
        icon: AiOutlineMail
    },
    {
        id: 2,
        styleModifier: 'Footer__Contact__Tile--Facebook',
        address: 'https://www.facebook.com/marcin.gaszczak.7',
        icon: AiFillFacebook
    },
    {
        id: 3,
        styleModifier: 'Footer__Contact__Tile--Github',
        address: 'https://github.com/marcingaszczak',
        icon: AiFillGithub
    },
    {
        id: 4,
        styleModifier: 'Footer__Contact__Tile--LinkedIn',
        address: 'https://www.linkedin.com/in/marcin-g%C4%85szczak-886393218/',
        icon: AiFillLinkedin
    }
]