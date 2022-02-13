import { createContext, useState } from "react";

type Tema = 'dark' | ''

interface AppContextProps {
    theme: Tema,
    changeTheme: () => void
}

const AppContext = createContext<AppContextProps>({
    theme: null,
    changeTheme: null
})

export function AppProvider(props) {
    const [theme, setTheme] = useState<Tema>('')

    function changeTheme() {
        setTheme(theme === 'dark' ? '' : 'dark')
    }

    return (
        <AppContext.Provider value={{
            theme,
            changeTheme
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext
export const AppConsumer = AppContext.Consumer