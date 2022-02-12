import {HomeIcon, SettingsIcon, BellIcon} from '../icons/index'
import SidebarItems from './SidebarItems'
import Logo from './Logo'

export default function Sidebar(){
    return (
        <aside>
            <div className={`
                flex flex-col items-center justify-center
                bg-gradient-to-r from-indigo-500 to-purple-800
                h-20 w-20
            `}>
                <Logo />
            </div>
            <ul>
                <SidebarItems url='/' text='Início' icon={HomeIcon}></SidebarItems>
                <SidebarItems url='/settings' text='Ajustes' icon={SettingsIcon}></SidebarItems>
                <SidebarItems url='/notifications' text='Notificações' icon={BellIcon}></SidebarItems>
            </ul>
        </aside>
    )
}