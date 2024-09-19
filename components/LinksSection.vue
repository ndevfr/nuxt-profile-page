<template>
  <template v-for="(item, index) in links" :key="index">
    <LineContentWithIcon
      :icon="item.icon"
      :desc="item.title"
      :content="item.url.replace('https://', '').replace('http://', '')"
      :url="item.url"
    />
    <LineSpace v-if="index < links.length - 1" />
  </template>
  <LineBreak />
</template>

<script setup lang="ts">
import { links } from "../config.json";
</script>
