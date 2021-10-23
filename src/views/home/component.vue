<template>
  <v-row style="height: 100vh">
    <v-col
      cols="8"
      sm="4"
      offset-sm="4"
      class="d-flex justify-center align-center"
    >
      <v-card>
        <v-list two-line style="height: 500px; overflow: auto">
          <template v-for="statistics in userGithubStatistics">
            <v-list-item :key="statistics.id">
              <v-list-item-avatar>
                <img :src="statistics.actor.avatar" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  <a
                    v-html="statistics.repo.name"
                    style="text-decoration: none; color: #101010"
                    target="_blank"
                    :href="statistics.repo.name | formatGithubLink"
                  ></a>
                </v-list-item-title>
                <v-list-item-subtitle>
                  Ação: {{ statistics.type | formatEvent }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider :key="statistics.id" inset></v-divider>
          </template>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Home from "./index";
export default Home;
</script>
