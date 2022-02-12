import Sidebar from './Sidebar'
import Topbar from './Topbar'
import Content from './Content'

interface LayoutProps {
    title: string,
    subtitle: string,
    children?: any
}

export default function Layout(props: LayoutProps) {
    return (
        <div className={`dark flex h-screen w-screen`}>
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
    )
}