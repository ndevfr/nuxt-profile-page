<template>
  <div class="social-button">
    <a
      :href="url"
      target="_blank"
      :title="title"
      :style="'color:' + colors.accent + ';border-color:' + colors.accent + ';'"
      :rel="nofollow ? 'noopener noreferrer nofollow' : 'noopener noreferrer'"
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
  nofollow: {
    type: Boolean,
    default: false,
  },
});
</script>
