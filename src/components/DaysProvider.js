import * as React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const daysContext = React.createContext(undefined)

export function DaysProvider({children}) {
    const days = useProvideDays()
    return <daysContext.Provider value={days}>{children}</daysContext.Provider>
}

export function useDays() {
    return React.useContext(daysContext)
}

export function useProvideDays() {
    const [days, setDays] = useLocalStorage("days", 30)

    return {days, setDays}
}

