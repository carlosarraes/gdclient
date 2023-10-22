import { RepoType } from '@/types/RepoType'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'

interface RepoProps {
  repo: RepoType
}

const Repo = ({ repo }: RepoProps) => {
  const entries = Object.entries(repo.languages)

  return (
    <Card className="flex flex-col mt-4 w-5/12">
      <CardHeader>
        <CardTitle className="truncate">{repo.full_name.split('/')[1]}</CardTitle>
        <CardDescription>{repo.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <section className="flex flex-col gap-2">
          <p className="text-sm text-gray-400">Linguagem: {repo.language}</p>
          <p className="text-sm text-gray-400">Outras:</p>
          <ul className="list-disc list-inside">
            {entries.map(([key, value]) => (
              <li key={key} className="text-xs text-gray-400">
                {key}: {value}
              </li>
            ))}
          </ul>
        </section>
      </CardContent>
      <CardFooter className="flex-end">
        <Button variant="outline" className="w-full self-end">
          Ver no Github
        </Button>
      </CardFooter>
    </Card>
  )
}

export default Repo
