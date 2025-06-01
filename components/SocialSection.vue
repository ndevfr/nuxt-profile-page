<template>
  <div id="socials">
    <div v-for="item in socials">
      <ButtonSocial
        :icon="item.icon"
        :title="item.title"
        :url="item.url"
        :nofollow="item.nofollow || false"
      />
    </div>
  </div>
  <LineBreak />
</template>

<script setup lang="ts">
import { socials } from "../config.json";
</script>
