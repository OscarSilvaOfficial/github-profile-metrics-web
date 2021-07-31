<template>
  <div>
    <Timeline :commits="commits" />
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
        commits: Array
      }
    },
    async created() {
      this.commits = await getUserMetrics({ user: 'OscarSilvaOfficial' })
    },
  }
</script>
