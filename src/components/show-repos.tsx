import { RepoType } from '@/types/RepoType'
import { Separator } from './ui/separator'
import Repo from './repo'

type ShowReposProps = {
  repos: RepoType[]
}

const ShowRepos = ({ repos }: ShowReposProps) => {
  return (
    <section className="w-full my-4">
      <Separator />
      <section className="w-full flex flex-wrap gap-8 justify-center items-center">
        {repos.map((repo) => (
          <Repo key={repo.full_name} repo={repo} />
        ))}
      </section>
    </section>
  )
}

export default ShowRepos
