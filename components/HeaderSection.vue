<template>
  <div id="profile">
    <div class="img-container">
      <img
        :src="base64Avatar"
        class="img-profile"
        id="pictureEl"
        alt="My picture"
        :style="
          'filter:' +
          colors.avatarFilter +
          ';border-color:' +
          colors.secondary +
          ';'
        "
      />
    </div>
    <div id="title">
      {{ profile.firstname + " " + profile.lastname }}
    </div>
    <div id="subtitle">
      {{ profile.subtitle }}
    </div>
  </div>
  <LineBreak />
</template>

<script setup lang="ts">
import { profile, base64Avatar, colors } from "../config.json";
</script>
