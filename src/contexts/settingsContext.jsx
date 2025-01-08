import { createContext, useState } from "react";

export const settingsContext = createContext({
    settings: {
        theme: "black"
    },
    setSettings: () => { }
})

const SettingsContext = ({ children }) => {
    const [settings, setSettings] = useState({
        theme: "black"
    })
    return (
        <>
            <settingsContext.Provider value={{settings,setSettings}}>
                {
                    children
                }
            </settingsContext.Provider>
        </>
    )
}

export default SettingsContext
