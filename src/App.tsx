import { ThemeProvider } from './components/theme-provider'
import { ModeToggle } from './components/mode-toggle'
import { FaOctopusDeploy } from 'react-icons/fa'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <section className="max-w-2xl mx-auto m-4">
        <header className="flex justify-between">
          <div className="flex justify-center items-center gap-4">
            <FaOctopusDeploy className="text-xl" />
            <h1 className="text-2xl">Gitder</h1>
          </div>
          <ModeToggle />
        </header>
        <main></main>
      </section>
    </ThemeProvider>
  )
}

export default App
