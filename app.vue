<template>
  <div
    id="root"
    :style="`background:${colors.backgroundTop};background:linear-gradient(${colors.backgroundTop}, ${colors.backgroundBottom});color:${colors.primary};`"
  >
    <div id="wrapper">
      <div id="container">
        <HeaderSection />
        <SocialSection />
        <ContactsSection />
        <LinksSection />
        <JobsSection />
        <CertsSection />
        <ButtonDownload mode="normal" />
        <ButtonDownload
          mode="fixed"
          :style="`background:'${colors.backgroundTop}';color:${colors.primary};`"
        />
        <LineBottom />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { colors } from "./config.json";

const adaptPageToScreen = () => {
  var height = window.innerHeight;
  const containerEl = document.getElementById("container");
  const heightEl = containerEl ? containerEl.offsetHeight + 40 : 0;
  const wrapButtonNormal = document.getElementById("wrap-button-normal");
  const wrapButtonFixed = document.getElementById("wrap-button-fixed");
  if (wrapButtonNormal && wrapButtonFixed) {
    if (heightEl == 0) {
      wrapButtonNormal.style.display = "block";
      wrapButtonFixed.style.display = "none";
    } else if (height > heightEl) {
      wrapButtonNormal.style.display = "block";
      wrapButtonFixed.style.display = "none";
    } else {
      wrapButtonNormal.style.display = "none";
      wrapButtonFixed.style.display = "block";
    }
  }
};

onMounted(() => {
  window.addEventListener("resize", adaptPageToScreen);
  adaptPageToScreen();
});

onUnmounted(() => {
  window.removeEventListener("resize", adaptPageToScreen);
});
</script>

<script lang="ts">
import "~/assets/css/style.css";
</script>
