<template>
  <div class="line-data">
    <div class="line-icon" :style="'color:' + colors.secondary + ';'">
      <Icon :name="icon" size="2em" />
    </div>
    <div class="line-content">
      <div class="line-content-type">{{ desc }}</div>
      <div class="line-content-value" v-if="url != ''">
        <a :href="url" :style="'color:' + colors.accent + ';'">{{ content }}</a>
      </div>
      <div class="line-content-value" v-else>{{ content }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { colors } from "../../config.json";

const props = defineProps({
  content: {
    type: String,
    default: "",
  },
  desc: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "uil:info-circle",
  },
  url: {
    type: String,
    default: "",
  },
});
</script>
