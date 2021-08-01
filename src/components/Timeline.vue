<template>
  <v-timeline>
    <v-timeline-item
      v-for="data in repository"
      :key="data.id"
      :color="getRamdomColor()"
      small
      v-show="haveCommits(data)"
    >
      <template v-slot:opposite>
        <span
          :class="`headline font-weight-bold`"
          v-text="convertToLocalDateTime(data.created_at)"
        ></span>
      </template>
      <div class="py-4">
        <h2 
          v-html="replaceRepositoryName(data.repo.name)" 
          :class="`headline font-weight-light mb-4`" 
        />
        <!-- Commit Author: {{ commit.actor.login }}
        <ul v-for="commitInfo of commit.commits" :key="commitInfo.id">
          <li>sha: {{ commitInfo.sha }}</li>
          <li>Commit Message: {{ commitInfo.message }}</li>
        </ul> -->
        <v-treeview :items="items"></v-treeview>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>
<script>
  import randomColor from 'random-material-color'
  export default {
    props: { repository: Array },
    methods: {
      convertToLocalDateTime(date) {
        return new Date(date).toLocaleDateString();
      },

      replaceRepositoryName(repository) {
        return repository.replace('/', ' | ');
      },

      haveCommits(commit) {
        return 'commits' in commit;
      },

      getRamdomColor() {
        return randomColor.getColor()
      }
    },
    mounted(){
      this.items[0].children = this.repository
    },
    data(){
      return {
        initiallyOpen: ['public'],
        icons: {
          html: 'mdi-language-html5',
          js: 'mdi-nodejs',
          json: 'mdi-code-json',
          md: 'mdi-language-markdown',
          pdf: 'mdi-file-pdf',
          png: 'mdi-file-image',
          txt: 'mdi-file-document-outline',
          xls: 'mdi-file-excel',
          pound: 'mdi-pound'
        },
        items: [
          {
            name: 'commits',
            children: false,
          },
        ],
      }
    },
  }
</script>