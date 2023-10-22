import { ThemeProvider } from './components/theme-provider'
import { ModeToggle } from './components/mode-toggle'
import { FaOctopusDeploy } from 'react-icons/fa'
import { Input } from './components/ui/input'
import { useState } from 'react'
import { Button } from './components/ui/button'
import { getGithubUser } from './api/gh-service'
import { RepoType } from './types/RepoType'
import ShowRepos from './components/show-repos'
import RepoSkelly from './components/repo-skelly'

function App() {
  const [user, setUser] = useState('')
  const [repos, setRepos] = useState<RepoType[]>([])
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    try {
      setLoading(true)
      const data: RepoType[] = await getGithubUser(user.toLowerCase())
      console.log(data)

      setRepos(data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <section className="max-w-2xl mx-auto m-4">
        <header className="flex justify-between gap-8">
          <div className="flex justify-center items-center gap-4">
            <FaOctopusDeploy className="text-xl" />
            <h1 className="text-2xl">Gitder</h1>
          </div>
          <div className="flex gap-2 grow">
            <Input
              placeholder="Digite o nome do usuário"
              className="w-3/4 focus:outline-none"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <Button onClick={handleClick} variant="outline" disabled={loading}>
              Procurar
            </Button>
          </div>
          <ModeToggle />
        </header>
        <main className="w-full">
          {loading ? <RepoSkelly amount={8} /> : <ShowRepos repos={repos} />}
        </main>
      </section>
    </ThemeProvider>
  )
}

export default App
