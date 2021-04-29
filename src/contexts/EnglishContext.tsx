import { createContext, useState, useContext } from 'react'

interface ContextProps {
  english: boolean
  setEnglish: (boolean) => void
}

export const EnglishContext = createContext({} as ContextProps)

export const  EnglishContextProvider = ({ children }) => {
  const [english, setEnglish] = useState(false)

  return (
    <EnglishContext.Provider value={{ english, setEnglish }}>
      {children}
    </EnglishContext.Provider>
  )
}

export const useEnglish = () => {
  return useContext(EnglishContext)
}
