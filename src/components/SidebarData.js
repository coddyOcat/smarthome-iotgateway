import React from 'react'
// import { RiHomeWifiLine, VscDashboard, MdAutoAwesome, AiOutlineUser, MdLogout } from 'react-icons/fa';
import { AiOutlineHome } from "@react-icons/all-files/ai/AiOutlineHome";
import { VscDashboard } from "@react-icons/all-files/vsc/VscDashboard";
import { MdAutoAwesome } from "react-icons/md";
import { AiOutlineUser } from "@react-icons/all-files/ai/AiOutlineUser";

export const SidebarData = [
    {
        title: 'Home',
        icon: <AiOutlineHome/>,
        link: '/'
    },
    {
        title: 'Dashboard',
        icon: <VscDashboard/>,
        link: '/dashboard'
    },
    {
        title: 'Auto',
        icon: <MdAutoAwesome/>,
        link: '/auto'
    },
    {
        title: 'User',
        icon: <AiOutlineUser/>,
        link: '/myinfo'
    }
]