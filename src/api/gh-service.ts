import axios from 'axios'

const BASEURL = 'https://73vo4ecbf3elwb6ozwdu7jatim0upylc.lambda-url.sa-east-1.on.aws'

export const getGithubUser = async (user: string) => {
  const response = await axios.get(`${BASEURL}/users/${user}`)

  return response.data
}
