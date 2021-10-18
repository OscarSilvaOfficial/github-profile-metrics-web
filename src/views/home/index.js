import { getUserMetrics } from '@/services/user'

const data = {
  userGithubStatistics: false
}

const created = async function () {
  const userGithubStatistics = await getUserMetrics({
    user: 'OscarSilvaOfficial',
    test: true
  })
  
  userGithubStatistics.map(statistics => {
    if ('commits' in statistics) statistics.commits.map(
      commit => statistics.name = commit.sha
    )
  })

  this.userGithubStatistics = userGithubStatistics
}

const filters = {
  formatEvent: (event) => {
    if ('PushEvent' == event) return 'Push'
    if ('CreateEvent' == event) return 'Create'
    return event
  }
}

export default {
  name: 'Home',
  data: () => data,
  created: created,
  filters: filters
}