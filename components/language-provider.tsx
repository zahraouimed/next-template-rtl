"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

type Language = "en" | "ar" | "he"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    // Get saved language from localStorage
    const savedLanguage = localStorage.getItem("language") as Language | null

    if (savedLanguage) {
      setLanguageState(savedLanguage)
      return
    }

    // Detect system language
    const systemLanguage = navigator.language.split("-")[0]
    let detectedLanguage: Language = "en"

    if (systemLanguage === "ar") {
      detectedLanguage = "ar"
    } else if (systemLanguage === "he") {
      detectedLanguage = "he"
    }

    setLanguageState(detectedLanguage)
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  if (!isClient) {
    return <>{children}</>
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
