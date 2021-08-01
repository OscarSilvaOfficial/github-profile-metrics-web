<template>
  <div>
    <Timeline v-if="repository" :repository="repository" />
  </div>
</template>

<script>
  import Timeline from '@/components/Timeline.vue'
  import { getUserMetrics } from '@/services/user'

  export default {
    name: 'Home',
    components: {
      Timeline
    },
    data() {
      return {
        repository: false
      }
    },
    async beforeCreate() {
      const userMetrics = await getUserMetrics({ user: 'OscarSilvaOfficial', test: true })
      userMetrics.map(metrics => {
        if ('commits' in metrics) {
          metrics.commits.map(commit => {
            metrics.name = commit.sha
          })
        }
        // console.log(metrics)
      })
      this.repository = userMetrics
    },
  }
</script>
