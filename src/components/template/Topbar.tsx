import useAppData from '../../data/hook/useAppData'
import ButtonTheme from './ButtonTheme'
import Title from './Title' 

interface TopbarProps {
    title: string,
    subtitle: string,
}

export default function Topbar(props: TopbarProps) {
    const {theme, changeTheme} = useAppData()
    
    return (
        <div className={`flex`}>
            <Title title={props.title} subtitle={props.subtitle}></Title>
            <div className={`flex flex-grow justify-end`}>
                <ButtonTheme theme={theme} changeTheme={changeTheme}></ButtonTheme>
            </div>
        </div>
    )
}