import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Skeleton } from './ui/skeleton'

type RepoSkellyProps = {
  amount?: number
}

const Skelly = () => {
  return (
    <Card className="flex flex-col mt-4 w-5/12">
      <CardHeader>
        <CardTitle className="truncate">
          <Skeleton className="w-3/4 h-6" />
        </CardTitle>
        <CardDescription>
          <Skeleton className="w-full h-4" />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <section className="flex flex-col gap-2">
          <Skeleton className="w-1/2 h-3" />
          <Skeleton className="w-1/2 h-3" />
          <ul className="list-disc list-inside flex flex-col gap-2">
            <li className="flex">
              <Skeleton className="ml-6 w-1/2 h-2" />
            </li>
            <li className="flex">
              <Skeleton className="ml-6 w-1/2 h-2" />
            </li>
          </ul>
        </section>
      </CardContent>
      <CardFooter className="flex-end">
        <Skeleton className="w-full h-12" />
      </CardFooter>
    </Card>
  )
}

const RepoSkelly = ({ amount = 1 }: RepoSkellyProps) => {
  return (
    <section className="w-full my-4">
      <section className="w-full flex flex-wrap gap-8 justify-center items-center">
        {[...Array(amount)].map((_, index) => (
          <Skelly key={index} />
        ))}
      </section>
    </section>
  )
}

export default RepoSkelly
