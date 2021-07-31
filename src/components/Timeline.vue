<template>
  <v-timeline>
    <v-timeline-item
      v-for="commit in commits"
      :key="commit.id"
      :color="commit.color"
      small
    >
      <template v-slot:opposite>
        <span
          :class="`headline font-weight-bold ${commit.color}--text`"
          v-text="convertToLocalDateTime(commit.created_at)"
        ></span>
      </template>
      <div class="py-4">
        <h2 
          v-html="replaceRepositoryName(commit.repo.name)" 
          :class="`headline font-weight-light mb-4 ${commit.color}--text`" 
        />
        <div>
          <pre>{{ commit }}</pre>
        </div>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>
<script>
  export default {
    props: ['commits'],
    methods: {
      convertToLocalDateTime(date) {
        return new Date(date).toLocaleDateString();
      },

      replaceRepositoryName(repository) {
        return repository.replace('/', ' | ');
      }
    },
  }
</script>