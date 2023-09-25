import { Moon, Sun } from 'lucide-react'

import { useTheme } from '@/components/theme-provider'

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="flex items-center"
    >
      {theme === 'dark' ? <Sun /> : <Moon />}
    </button>
  )
}
