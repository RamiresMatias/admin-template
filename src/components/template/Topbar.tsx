import Title from './Title' 

interface TopbarProps {
    title: string,
    subtitle: string,
}

export default function Topbar(props: TopbarProps) {
    return (
        <div>
            <Title title={props.title} subtitle={props.subtitle}></Title>
        </div>
    )
}