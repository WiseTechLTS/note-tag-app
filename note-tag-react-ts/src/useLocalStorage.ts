import { useEffect, useState }  from 'react';

//  useLocalStorage hook is a custom hook that allows you to use localStorage in React
// https://usehooks.com/useLocalStorage/

// Usage:
//  const [value, setValue] = useLocalStorage('key', initialValue);

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
    const [value, setValue] =  useState<T>(() => {
        const jsonValue = localStorage.getItem(key)
        if (jsonValue == null) {
            if (typeof initialValue === "function") {
                return (initialValue as () => T)()
            }  else {
                return initialValue
            }
        }  else {
            return JSON.parse(jsonValue)
        }
    })
     // Update localStorage when value changes
     // Note: useEffect will only run if value changes
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue] as [T, typeof setValue]
}