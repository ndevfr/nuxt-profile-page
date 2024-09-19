<template>
  <div :id="'wrap-button-' + $props.mode">
    <div
      :id="'save-button-' + $props.mode"
      :onClick="makeVCard"
      :style="
        'background:' + colors.accent + ';color:' + colors.backgroundTop + ';'
      "
    >
      Enregistrer le contact
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { profile, links, jobs, base64Avatar, colors } from "../../config.json";

const props = defineProps({
  mode: String,
});
</script>

<script lang="ts">
function downloadToFile(
  content: string,
  filename: string,
  contentType: string
) {
  const a = document.createElement("a");
  const file = new Blob([content], { type: contentType });

  a.href = URL.createObjectURL(file);
  a.download = filename;
  a.click();

  URL.revokeObjectURL(a.href);
}

function makeVCard() {
  let vcard = `BEGIN:VCARD
VERSION:3.0
N:${profile.firstname + " " + profile.lastname}
FN:${profile.lastname},${profile.firstname}
ORG:${jobs[0].company}
TITLE:${jobs[0].position}
TEL;TYPE=HOME,VOICE:${profile.phone.replaceAll(" ", "")}
EMAIL:${profile.email}
ADR;TYPE=HOME,PREF:;;${profile.city}`;
  links.forEach((link, index) => {
    vcard += `
item${index}.URL;type=pref:${link.url}
item${index}.X-ABLabel:${link.label}`;
  });
  vcard += `
REV:${new Date().toISOString()}
PHOTO;TYPE=JPEG;ENCODING=b:${base64Avatar.replace(
    "data:image/jpeg;base64,",
    ""
  )}
END:VCARD`;
  downloadToFile(vcard, "vcard.vcf", "text/vcard");
}
</script>
