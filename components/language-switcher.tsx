"use client"

import { useLanguage } from "./language-provider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function LanguageSwitcher() {
  const { language, setLanguage, isLoading } = useLanguage()

  const languages = [
    { code: "en", label: "English", nativeLabel: "English" },
    { code: "ar", label: "العربية", nativeLabel: "العربية" },
    { code: "he", label: "עברית", nativeLabel: "עברית" },
  ]

  if (isLoading) {
    return <div className="w-[120px] h-10" />
  }

  return (
    <Select value={language} onValueChange={(value) => setLanguage(value as "en" | "ar" | "he")}>
      <SelectTrigger className="w-[120px]">
        <SelectValue placeholder="Select language" />
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            {lang.nativeLabel}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
