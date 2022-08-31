<template>
    <div>
        <v-app-bar
      floating
      fixed
      app
      dark
      flat
      :color="bg"
    >
        <v-app-bar-nav-icon @click="mini = !mini"></v-app-bar-nav-icon>
        <v-toolbar-title>{{ systemTitle }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text fab>
            <v-icon>mdi-dots-vertical</v-icon>
            <v-menu activator="parent" close-on-content-click left bottom>
                <v-list>
                    <v-list-item>
                        <v-list-item-title>Hi, </v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="() => {}">
                        <v-list-item-title>
                        Logout
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-btn>
    </v-app-bar>
    <v-navigation-drawer
        color="purple darken-2"
        expand-on-hover
        rail
        permanent
        fixed
        app
        bottom
        clipped
        dark
        flat
      >
        <!-- <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            title="Sandra Adams"
            subtitle="sandra_a88@gmailcom"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider> -->

        <v-list density="compact" nav>
          <v-list-item v-for="(item, key) in routes" :key="key" :prepend-icon="item.icon" :title="item.title" :to="item.route" :value="item.title"></v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>
</template>


<script setup lang="ts">

    import { onMounted  } from 'vue'
    import useAppStore from "@/stores/App/app.store"

    const appStore = useAppStore()

    const bg = "purple darken-2"
    const mini = false;
    const systemTitle = appStore.systemTitle;
    const routes = appStore.routes
    onMounted(() => {
        console.log(appStore.systemTitle)
    })

</script>