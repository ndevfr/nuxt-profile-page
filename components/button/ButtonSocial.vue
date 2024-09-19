<template>
  <div class="social-button">
    <a
      :href="url"
      target="_blank"
      :title="title"
      rel="noopener noreferrer"
      :style="'color:' + colors.accent + ';border-color:' + colors.accent + ';'"
    >
      <Icon :name="icon" size="2.7rem !important" class="social-icon" />
    </a>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { colors } from "../../config.json";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});
</script>
