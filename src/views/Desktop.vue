<template>
  <div>
    <a-row>
      <a-col :span="15" style="height: 100vh;position: fixed;width: 100%;z-index: 100">

        <umo-editor
            ref="editorRef"
            v-bind="options"
            @file-upload="onFileUpload"
            @changed="onChanged"
        />
      </a-col>
      <a-col :span="9" style="height: 100vh;position: fixed;width: 100%;float: right;right: 0px ">
        <div style="height: 14vh;">
          <a-row style="width: 90%;margin: auto">
            <a-col :span="2">
              <a href="https://www.wordtocard.com/">
                <img :src="logo"  style="height: 40px;width: 40px;margin-top: 5px">
              </a>
            </a-col>
            <a-col :span="6">

              <span  style="line-height: 50px;font-size: 16px;font-weight: bold;color: #3F84EB;text-align: left;margin-left: 10px">WordToCard</span>
            </a-col>
            <a-col :span="2">
              <a-button type="primary" size="small" style="margin-top: 13px" shape="circle" @click="openHelp = true">帮</a-button>
            </a-col>
          </a-row>
          <a-row style="width: 90%;margin: auto;line-height: 50px">
            <a-col :span="24">
              <div>
                <a-tag color="green">主题：  <span v-if="value4 != '未选'">{{ value4 }}</span></a-tag>
                <a-button :icon="h(ContainerOutlined)" type="primary"  @click="showModal">卡片样式</a-button>
              </div>
            </a-col>
          </a-row>
        </div>
        <div style="height: 1vh"></div>
        <el-scrollbar height="85vh">
          <div style="width: 450px;margin: auto" >
            <div v-if="!htmlConFlag" style="text-align: center">
              <div style="height: 10vh"></div>
              <a-spin size="large"  style="margin: auto"/>
              <div style="height: 1vh"></div>
              <div>生成中...</div>
            </div>
            <div v-if="value4 == '紫梦暖阳'">
              <wittydeer12  v-if="htmlConFlag" :cardHeight="cardHeight" :cardWidth="cardWidth" :htmlList="htmlConList"></wittydeer12>
            </div>
            <div v-if="value4 == '霓虹彩灯'">
              <moodynewt4  v-if="htmlConFlag" :cardHeight="cardHeight" :cardWidth="cardWidth" :htmlList="htmlConList"></moodynewt4>
            </div>
            <div v-if="value4 == '霓虹边界'">
              <lovelydonkey55  v-if="htmlConFlag" :cardHeight="cardHeight" :cardWidth="cardWidth" :htmlList="htmlConList"></lovelydonkey55>
            </div>
            <div v-if="value4 == '蓝色书本'">
              <lovelybook  v-if="htmlConFlag" :cardHeight="cardHeight" :cardWidth="cardWidth" :htmlList="htmlConList"></lovelybook>
            </div>
            <div v-if="value4 == '绿色便签'">
              <GreenStickyNotes  v-if="htmlConFlag" :cardHeight="cardHeight" :cardWidth="cardWidth" :htmlList="htmlConList"></GreenStickyNotes>
            </div>
            <div v-if="value4 == '蓝色卡片'">
              <BlueCard  v-if="htmlConFlag" :cardHeight="cardHeight" :cardWidth="cardWidth" :htmlList="htmlConList"></BlueCard>
            </div>
            <div v-if="value4 == '窗口卡片'">
              <YellowCard  v-if="htmlConFlag" :cardHeight="cardHeight" :cardWidth="cardWidth" :htmlList="htmlConList"></YellowCard>
            </div>
            <div v-if="value4 == '抽屉卡片'">
              <CobpCard  v-if="htmlConFlag" :cardHeight="cardHeight" :cardWidth="cardWidth" :htmlList="htmlConList"></CobpCard>
            </div>
            <div v-if="value4 == '苹果视窗'">
              <MackOSCard  v-if="htmlConFlag" :cardHeight="cardHeight" :cardWidth="cardWidth" :htmlList="htmlConList"></MackOSCard>
            </div>
            <div v-if="value4 == '发票卡片'">
              <SlipperyGecko23  v-if="htmlConFlag" :cardHeight="cardHeight" :cardWidth="cardWidth" :htmlList="htmlConList"></SlipperyGecko23>
            </div>
            <div v-if="value4 == '炫酷黑暗'">
              <blueMole92  v-if="htmlConFlag" :cardHeight="cardHeight" :cardWidth="cardWidth" :htmlList="htmlConList"></blueMole92>
            </div>
            <div v-if="value4 == '暗黑红色'">
              <fastRabbit51  v-if="htmlConFlag" :cardHeight="cardHeight" :cardWidth="cardWidth" :htmlList="htmlConList"></fastRabbit51>
            </div>
            <div v-if="value4 == '知识白色'">
              <silentSheep14  v-if="htmlConFlag" :cardHeight="cardHeight" :cardWidth="cardWidth" :htmlList="htmlConList"></silentSheep14>
            </div>
            <div v-if="value4 == '青色卡片'">
              <ChingCard  v-if="htmlConFlag" :cardHeight="cardHeight" :cardWidth="cardWidth" :htmlList="htmlConList"></ChingCard>
            </div>
            <div v-if="value4 == '蓝色三角化'">
              <GlassCard  v-if="htmlConFlag" :cardHeight="cardHeight" :cardWidth="cardWidth" :htmlList="htmlConList"></GlassCard>
            </div>
            <div v-if="value4 == '黄色三角化'">
              <YellowGlassCard  v-if="htmlConFlag" :cardHeight="cardHeight" :cardWidth="cardWidth" :htmlList="htmlConList"></YellowGlassCard>
            </div>
            <div v-if="value4 == '蓝色格子'">
              <BlueCheckCard  v-if="htmlConFlag" :cardHeight="cardHeight" :cardWidth="cardWidth" :htmlList="htmlConList"></BlueCheckCard>
            </div>
            <div v-if="value4 == '尊贵卡片'">
              <VipCard  v-if="htmlConFlag" :cardHeight="cardHeight" :cardWidth="cardWidth" :htmlList="htmlConList"></VipCard>
            </div>
            <div v-if="value4 == '紫色元界'">
              <PurpleMetaverse  v-if="htmlConFlag" :cardHeight="cardHeight" :cardWidth="cardWidth"  :htmlList="htmlConList"></PurpleMetaverse>
            </div>

            <div v-if="value4 == '冰晶晨曦'">
              <IceCrystalDawn  v-if="htmlConFlag" :cardHeight="cardHeight" :cardWidth="cardWidth"  :htmlList="htmlConList"></IceCrystalDawn>
            </div>
            <div v-if="value4 == '绿色卡片'">
              <GreenCard  v-if="htmlConFlag" :cardHeight="cardHeight" :cardWidth="cardWidth"  :htmlList="htmlConList"></GreenCard>
            </div>
            <div v-if="typeCard == 'cardBg'">
              <CardBgMould  v-if="htmlConFlag" :cardName="value4" :cardHeight="cardHeight" :cardWidth="cardWidth"  :htmlList="htmlConList"></CardBgMould>
            </div>
          </div>
          <div style="height: 15vh"></div>
        </el-scrollbar>
      </a-col>
    </a-row>
    <a-modal v-model:open="openMoreCard" title="更多卡片样式" @ok="handleOk" style="width: 90%;height: 500px">
      <template #footer>
        <a-button key="back" @click="handleCancel">取消</a-button>
        <a-button key="submit" type="primary"  @click="handleOk">确认</a-button>
      </template>
      <MoreCard ref="childRef" v-if="openMoreCard"></MoreCard>
    </a-modal>
    <a-modal v-model:open="htmlConHtmlFlagMd"  @ok="handleOk">
      <div style="text-align: center">
        <a-spin size="large" />
        <p>拆分中...</p>
      </div>
      <template #footer>
      </template>
    </a-modal>
    <a-drawer
        v-model:open="openHelp"
        class="custom-class"
        root-class-name="root-class-name"
        title="帮助"
        width="40%"
        placement="right"
    >
      <Help v-if="openHelp"></Help>
    </a-drawer>
  </div>
</template>
<script setup lang="ts">
import {ref, watch,onMounted} from "vue";
import { h } from 'vue';
import { ContainerOutlined } from '@ant-design/icons-vue';

import { UmoEditor } from '@umoteam/editor';
import {message, Modal} from 'ant-design-vue';
import GreenCard from "@/components/cardMould/GreenCard.vue";
import CardBgMould from "@/components/cardBgMould/CardBgMould.vue";
import IceCrystalDawn from "@/components/cardMould/IceCrystalDawn.vue";
import VipCard from "@/components/cardMould/VipCard.vue";
import MoreCard from "@/components/MoreCard.vue";
import Help from "@/components/Help.vue";
import BlueCheckCard from "@/components/cardMould/BlueCheckCard.vue";
import PurpleMetaverse from "@/components/cardMould/PurpleMetaverse.vue";
import YellowGlassCard from "@/components/cardMould/YellowGlassCard.vue";
import GlassCard from "@/components/cardMould/GlassCard.vue";
import ChingCard from "@/components/cardMould/ChingCard.vue";
import fastRabbit51 from "@/components/cardMould/fastRabbit51.vue";
import MackOSCard from "@/components/cardMould/MackOSCard.vue";
import silentSheep14 from "@/components/cardMould/silentSheep14.vue";
import blueMole92 from "@/components/cardMould/blueMole92.vue";
import SlipperyGecko23 from "@/components/cardMould/SlipperyGecko23.vue";
import BlueCard from "@/components/cardMould/BlueCard.vue";
import CobpCard from "@/components/cardMould/CobpCard.vue";
import YellowCard from "@/components/cardMould/YellowCard.vue";
import wittydeer12 from "@/components/cardMould/witty-deer-12.vue";
import lovelybook from "@/components/cardMould/lovely-book.vue";
import moodynewt4 from "@/components/cardMould/moody-newt-4.vue";
import GreenStickyNotes from "@/components/cardMould/GreenStickyNotes.vue";
import lovelydonkey55 from "@/components/cardMould/lovely-donkey-55.vue";
import logo from "@/assets/logo.png";
import {SelectProps} from 'ant-design-vue';
const emit = defineEmits([  "getPromptImgValue"])
const childRef = ref(null);
const htmlConFlag = ref(true)
const valueChaifen = ref()
const htmlConHtmlFlag = ref(true)
const htmlConHtmlFlagMd = ref(false)
const openHelp = ref(false)
const openMoreCard = ref(false)
const htmlConList = ref([])
const cardWidth = ref('450px')
const cardHeight = ref('0px')
const valueChaiFen = ref<string | undefined>("手动拆分");
const valueChaiFenSe = ref<string | undefined>("手动拆分");
const value = ref<string | undefined>("蓝色卡片");
const value2 = ref<string | undefined>('未选');
const value3 = ref<string | undefined>('未选');
const value4 = ref<string | undefined>('蓝色卡片');
const typeCard = ref<string | undefined>('');



const showModal = () => {
  openMoreCard.value = true;
};

onMounted(() => {
  openMoreCard.value = false;
  if(htmlConFlag.value){
    getArticleContent()
  }
})
const handleOk = () => {
  value4.value = childRef.value.valueCard;
  openMoreCard.value = false;
  if(htmlConFlag.value){
    getArticleContent()
  }
};

const handleCancel = () => {
  openMoreCard.value = false;
};
const options = ref({
   onSave: async  (content, page, document) => {
     return true
  }
})
const filterOption = (input: string, option: any) => {
  return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};

const onFileUpload = async (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      // 返回包含Base64编码的对象
      resolve({
        id: new Date().getTime(), // 使用时间戳作为ID的一个简单示例
        url: reader.result // Base64编码的数据URL
      });
    };
    reader.onerror = error => reject(error);
    // 以DataURL格式读取文件
    reader.readAsDataURL(file);
  });
};
// 定义回调函数
const editorRef = ref(null);
const getArticleContent = ()=> {

  htmlConFlag.value = false;
  setTimeout(()=>{
    try{
      let htmlContent = editorRef.value.getHTML()
      let htmList = htmlContent.split('<hr>');
      htmList = htmList.map(item => {
        return '<div class="article" >' + item + '</div>';
      })
      htmlConList.value = htmList;
    }catch (e) {
      console.log(e)
    }
    htmlConFlag.value = true;
  },1000)

};

const setArticleContent = (con): string => {
  if (editorRef.value) {
    editorRef.value.setContent(con)
  }
  return '';
};

const onChanged = () => {
  if(htmlConFlag.value){
    getArticleContent()
  }
}

watch(value, (newVal, oldVal) => {
  if(value.value != "" && value.value != "未选"  && value.value != undefined){
    value2.value = "未选"
    value3.value = "未选"
    value4.value = "未选"
  }
});
watch(value2, (newVal, oldVal) => {
  if(value2.value != "" && value2.value != "未选"  && value2.value != undefined){
    value.value = "未选"
    value3.value = "未选"
    value4.value = "未选"
  }
});
watch(value3, (newVal, oldVal) => {
  if(value3.value != "" && value3.value != "未选"  && value3.value != undefined){
    value.value = "未选"
    value2.value = "未选"
    value4.value = "未选"
  }
});
watch(value4, (newVal, oldVal) => {
  typeCard.value = ''
  if(value4.value != "" && value4.value != "未选"  && value4.value != undefined){
    value.value = "未选"
    value2.value = "未选"
    value3.value = "未选"
    if(value4.value == '赛博朋克'){
      typeCard.value = 'cardBg'
    }
  }
});

watch(valueChaiFen, (newVal, oldVal) => {
  if(htmlConHtmlFlag.value){
    ReSplitHtml()
  }
})
const splitContentToPages = (html, maxHeight) => {
  const dummy = Object.assign(document.createElement('div'), {
    style: `position:absolute;visibility:hidden;width:${document.body.offsetWidth}px;line-height:32px;`
  });
  document.body.appendChild(dummy);

  const frag = new DOMParser().parseFromString(html, 'text/html').body;
  const pages = [''];

  for (let node of frag.childNodes) {
    const tempHTML = (pages.at(-1) + node.outerHTML).trim();
    dummy.innerHTML = tempHTML;

    if (dummy.scrollHeight > maxHeight) {
      // 放不下就新开一页
      pages.push(node.outerHTML);
    } else {
      // 能放下就追加
      pages[pages.length - 1] = tempHTML;
    }
  }

  // 清理
  document.body.removeChild(dummy);

  return pages.filter(Boolean); // 过滤空页
};

defineExpose({
  getArticleContent,
  setArticleContent
})
</script>

<style scoped>

</style>
