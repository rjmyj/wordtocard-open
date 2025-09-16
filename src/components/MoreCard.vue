<template>
  <div>
    <div v-show="false" >
      <a-input-search style="width: 80%;margin: auto;margin-left: 1%"
                      v-model:value="valueSearch"
                      placeholder="搜索卡片名称"
                      enter-button
                      @search="onSearch"
      />
    </div>

    <div style="height: 2vh"></div>
    <el-scrollbar height="70vh">
      <a-radio-group v-model:value="valueCard">
        <a-flex wrap="wrap" gap="small">
          <div v-for="item in optionsSelectMore" style="width: 180px;float: left;margin: 2px;font-size: 14px;line-height: 30px;text-align: center;font-weight: bold">
            <el-card style=";border-radius: 15px;padding: -10px" @click="selectMore(item.value)">
              <div style="width: 100%;height: 170px;padding: 5px;border-radius: 18px">
                <a-image v-if="item.value == '蓝色卡片'" :src="bbacrd" style="width: 100%;"  />
                <a-image v-if="item.value == '绿色卡片'" :src="GreenCard" style="width: 100%;"  />
                <a-image v-if="item.value == '冰晶晨曦'" :src="IceCrystalDawn" style="width: 100%;"  />
                <a-image v-if="item.value == '紫色元界'" :src="PurpleMetaverse" style="width: 100%;" />
                <a-image v-if="item.value == '紫梦暖阳'" :src="wittydeer12" style="width: 100%;" />
                <a-image v-if="item.value == '霓虹彩灯'" :src="moodynewt4" style="width: 100%;" />
                <a-image v-if="item.value == '霓虹边界'" :src="lovelydonkey55" style="width: 100%;" />
                <a-image v-if="item.value == '蓝色书本'" :src="lovelybook" style="width: 100%;" />
                <a-image v-if="item.value == '绿色便签'" :src="GreenStickyNotes" style="width: 100%;" />
                <a-image v-if="item.value == '窗口卡片'" :src="YellowCard" style="width: 100%;" />
                <a-image v-if="item.value == '抽屉卡片'" :src="CobpCard" style="width: 100%;" />
                <a-image v-if="item.value == '苹果视窗'" :src="MackOSCard" style="width: 100%;" />
                <a-image v-if="item.value == '发票卡片'" :src="SlipperyGecko23" style="width: 100%;" />
                <a-image v-if="item.value == '炫酷黑暗'" :src="blueMole92" style="width: 100%;" />
                <a-image v-if="item.value == '知识白色'" :src="silentSheep14" style="width: 100%;" />
                <a-image v-if="item.value == '暗黑红色'" :src="fastRabbit51" style="width: 100%;" />
                <a-image v-if="item.value == '青色卡片'" :src="ChingCard" style="width: 100%;" />
                <a-image v-if="item.value == '蓝色三角化'" :src="GlassCard" style="width: 100%;" />
                <a-image v-if="item.value == '黄色三角化'" :src="YellowGlassCard" style="width: 100%;" />
                <a-image v-if="item.value == '赛博朋克'" :src="CyberpunkCard" style="width: 100%;" />
                <a-image v-if="item.value == '蓝色格子'" :src="BlueCheckCard" style="width: 100%;" />
                <a-image v-if="item.value == '尊贵卡片'" :src="VipCard" style="width: 100%;" />
              </div>
              <div style="height: 8px"></div>
              <a-radio :value="item.value" style="text-align: left">
                {{ item.label }}
              </a-radio>
            </el-card>
          </div>
        </a-flex>

        <div style="clear: both"></div>
      </a-radio-group>
      <div style="height: 20vh"></div>
    </el-scrollbar>
  </div>
</template>
<script setup lang="ts">
import bbacrd from "@/assets/card/bbacrd.png";
import VipCard from "@/assets/card/VipCard.png";
import CyberpunkCard from "@/assets/card/CyberpunkCard.png";
import GlassCard from "@/assets/card/GlassCard.png";
import YellowGlassCard from "@/assets/card/YellowGlassCard.png";
import ChingCard from "@/assets/card/ChingCard.png";
import fastRabbit51 from "@/assets/card/fastRabbit51.png";
import BlueCheckCard from "@/assets/card/BlueCheckCard.png";
import PurpleMetaverse from "@/assets/card/PurpleMetaverse.png";
import wittydeer12 from "@/assets/card/wittydeer12.png";
import moodynewt4 from "@/assets/card/moodynewt4.png";
import lovelydonkey55 from "@/assets/card/lovelydonkey55.png";
import lovelybook from "@/assets/card/lovelybook.png";
import GreenStickyNotes from "@/assets/card/GreenStickyNotes.png";
import YellowCard from "@/assets/card/YellowCard.png";
import CobpCard from "@/assets/card/CobpCard.png";
import MackOSCard from "@/assets/card/MackOSCard.png";
import SlipperyGecko23 from "@/assets/card/SlipperyGecko23.png";
import blueMole92 from "@/assets/card/blueMole92.png";
import silentSheep14 from "@/assets/card/silentSheep14.png";
import IceCrystalDawn from "@/assets/card/IceCrystalDawn.png";
import GreenCard from "@/assets/card/GreenCard.png";
import {ref,onMounted} from "vue";
import {SelectProps} from "ant-design-vue";
const valueCard = ref('蓝色卡片');
const valueSearch = ref('');
const optionsSelectMore = ref([
  { value: '蓝色卡片', label: '蓝色卡片' },
  { value: '绿色卡片', label: '绿色卡片' },
  { value: '冰晶晨曦', label: '冰晶晨曦' },
  { value: '紫色元界', label: '紫色元界' },
  { value: '紫梦暖阳', label: '紫梦暖阳' },
  { value: '霓虹彩灯', label: '霓虹彩灯' },
  { value: '霓虹边界', label: '霓虹边界' },
  { value: '蓝色书本', label: '蓝色书本' },
  { value: '绿色便签', label: '绿色便签' },
  { value: '窗口卡片', label: '窗口卡片' },
  { value: '抽屉卡片', label: '抽屉卡片'},
  { value: '苹果视窗', label: '苹果视窗' },
  { value: '发票卡片', label: '发票卡片' },
  { value: '炫酷黑暗', label: '炫酷黑暗' },
  { value: '知识白色', label: '知识白色'},
  { value: '暗黑红色', label: '暗黑红色' },
  { value: '青色卡片', label: '青色卡片'},
  { value: '蓝色三角化', label: '蓝色三角化'},
  { value: '黄色三角化', label: '黄色三角化' },
  { value: '赛博朋克', label: '赛博朋克' },
  { value: '蓝色格子', label: '蓝色格子' },
  { value: '尊贵卡片', label: '尊贵卡片' },
]);
onMounted(() => {
  valueCard.value = sessionStorage.getItem('valueSearch');
});

function selectMore(se) {
  valueCard.value = se;
  sessionStorage.setItem('valueSearch', se);
}
const onSearch = (searchValue: string) => {
  console.log('use value', searchValue);
  console.log('or use this.value', valueCard.value);
};
defineExpose({ valueCard });
</script>

<style scoped>
img{
  box-shadow: rgba(0, 0, 0, 0.057) 1px 1px 1px;
}
</style>
