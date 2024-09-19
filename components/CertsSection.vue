<template>
  <template v-for="(item, index) in certs" :key="index">
    <LineContentWithText
      :label="item.label"
      :desc="item.university"
      :content="item.degree"
    />
    <LineSpace />
  </template>
</template>

<script setup lang="ts">
import { certs } from "../config.json";
</script>
