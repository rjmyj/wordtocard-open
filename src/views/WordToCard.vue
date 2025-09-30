<template>
  <div>
    <Desktop></Desktop>
  </div>
</template>
<script setup lang="ts">
import {ref, h,onMounted} from "vue";
import Desktop from "@/views/Desktop.vue";
const DeviceTypeValue = ref<string | undefined>("Desktop");
onMounted(() => {
 let DeviceType = detectDeviceType();
 if(DeviceType == 'Desktop'){
   DeviceTypeValue.value = 'Desktop'
 }else{
   DeviceTypeValue.value = 'phone'
 }

})

function detectDeviceType() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  // Check for iPad
  if (/iPad/i.test(userAgent)) {
    return "Tablet";
  }
  // Check for iPhone, iPod
  else if (/iPhone|iPod/i.test(userAgent)) {
    return "Mobile";
  }
      // Android-specific checks must come after iOS checks because Chrome on iOS also includes 'Android' in the user agent string
  // Check for Android tablets (roughly, since there's no definitive way to distinguish between phone and tablet for all Android devices)
  else if (/Android/i.test(userAgent) && !(/mobile/i.test(userAgent))) {
    return "Tablet";
  }
  // Check for Android phones
  else if (/Android/i.test(userAgent) && /mobile/i.test(userAgent)) {
    return "Mobile";
  }
  // Default case assumes Desktop if not matched as Tablet or Mobile
  else {
    return "Desktop";
  }
}

</script>

<style scoped>

</style>
