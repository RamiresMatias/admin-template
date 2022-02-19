import Sidebar from './Sidebar'
import Topbar from './Topbar'
import Content from './Content'
import useAppData from '../../data/hook/useAppData'
import ForceAuthentication from '../../components/auth/ForceAuthentication'

interface LayoutProps {
    title: string,
    subtitle: string,
    children?: any
}

export default function Layout(props: LayoutProps) {

    const {theme} = useAppData()

    return (
        <ForceAuthentication>
            <div className={`${theme} flex h-screen w-screen`}>
                <Sidebar />
                <div className={`
                    flex flex-col 
                    w-full p-7 bg-gray-400 dark:bg-gray-800
                `}>
                    <Topbar title={props.title} subtitle={props.subtitle} />
                    <Content>
                        {props.children}
                    </Content>
                </div>
            </div>
        </ ForceAuthentication>
    )
}