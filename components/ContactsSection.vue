<template>
  <LineContentWithIcon
    icon="uil:phone"
    desc="Téléphone"
    :content="profile.phone.replace('+33 ', '0')"
    :url="'tel:' + profile.phone.replaceAll(' ', '')"
  />
  <LineSpace />
  <LineContentWithIcon
    icon="uil:envelope"
    desc="E-mail"
    :content="profile.email"
    :url="'mailto:' + profile.email"
  />
  <LineSpace />
  <LineContentWithIcon
    icon="uil:map-marker"
    desc="Lieu de résidence"
    :content="profile.city"
  />
  <LineBreak />
</template>

<script setup lang="ts">
import { profile } from "../config.json";
</script>
