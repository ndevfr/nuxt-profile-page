<template>
  <template v-for="(item, index) in jobs" :key="index">
    <LineContentWithText
      :label="item.label"
      :desc="item.company"
      :content="item.position"
    />
    <LineSpace />
  </template>
</template>

<script setup lang="ts">
import { jobs } from "../config.json";
</script>
