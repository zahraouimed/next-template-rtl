
import { ModeToggle } from "@/components/mode-toggle";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ExampleCardHebrew } from "@/components/example-card-hebrew";
import { ExampleFormArabic } from "@/components/example-form-arabic";
export default function Page() {
  return (
    <div className="min-h-screen flex flex-col p-6">
      <header className="flex justify-end items-center gap-4 p-4">
        <LanguageSwitcher />
        <ModeToggle />
      </header>
      <main className="flex-1 flex items-center justify-center">
        <div className="flex flex-col md:flex-row gap-12 items-start max-w-3xl mx-auto w-full">
          <ExampleCardHebrew />
          <ExampleFormArabic />
        </div>
      </main>
    </div>
  );
}
