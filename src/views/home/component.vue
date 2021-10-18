<template>
  <v-row>
    <v-col
      cols="12"
      sm="6"
      offset-sm="3"
    >
      <v-card>
        <v-list two-line>
          <template v-for="statistics in userGithubStatistics">
            <v-list-item
              :key="statistics.id"
            >
              <v-list-item-avatar>
                <img :src="statistics.actor.avatar">
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  <a target="_blank" :href="'https://github.com/' + statistics.repo.name">
                    {{ statistics.repo.name }}
                  </a>
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ statistics.type | formatEvent }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider
              :key="statistics.id"
              inset
            ></v-divider>
          </template>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Home from './index'
export default Home
</script>
