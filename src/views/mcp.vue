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
            <a-col :span="10" style="margin-top: 10px">
              <a-select ref="valueChaifen"
                        show-search
                        v-model:value="valueChaiFen"
                        label-in-value
                        :filter-option="filterOption"
                        style="width: 200px"
                        :options="optionsChaifen"
              ></a-select>
            </a-col>
            <a-col :span="4">
              <a-button type="primary" size="small" style="margin-top: 13px" @click="Refresh">刷新拆分</a-button>
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
let user =  sessionStorage.getItem('user');
// 定义公共参数
const optionsSelect = ref<SelectProps['options']>([
  { value: '未选', label: '未选' },
  { value: '紫梦暖阳', label: '紫梦暖阳' },
  { value: '霓虹彩灯', label: '霓虹彩灯' },
  { value: '霓虹边界', label: '霓虹边界' },
  { value: '蓝色书本', label: '蓝色书本' },
  { value: '绿色便签', label: '绿色便签' },
  { value: '蓝色卡片', label: '蓝色卡片' },
  { value: '窗口卡片', label: '窗口卡片' },
]);

const optionsSelect2 = ref<SelectProps['options']>([
  { value: '未选', label: '未选' },
  { value: '抽屉卡片', label: '抽屉卡片' },
  { value: '苹果视窗', label: '苹果视窗' },
  { value: '发票卡片', label: '发票卡片' },
  { value: '炫酷黑暗', label: '炫酷黑暗' },
  { value: '知识白色', label: '知识白色' },
  { value: '暗黑红色', label: '暗黑红色' },
]);

const optionsSelect3 = ref<SelectProps['options']>([
  { value: '未选', label: '未选' },
  { value: '青色卡片', label: '青色卡片' },
  { value: '蓝色三角化', label: '蓝色三角化' },
  { value: '黄色三角化', label: '黄色三角化' },
  { value: '赛博朋克', label: '赛博朋克' },
  { value: '蓝色格子', label: '蓝色格子' },
  { value: '尊贵卡片', label: '尊贵卡片' },
]);
const optionsChaifen = ref<SelectProps['options']>([
  {
    value: '手动拆分',
    label: '手动拆分',
  },
  {
    value: '自动拆分【1:1】【固定高度】',
    label: '自动拆分【1:1】【固定高度】',
  },
  {
    value: '自动拆分【1:1】【不固定高度】',
    label: '自动拆分【1:1】【不固定高度】',
  },
  {
    value: '自动拆分【小红书】【固定高度】',
    label: '自动拆分【小红书】【固定高度】',
  },
  {
    value: '自动拆分【小红书】【不固定高度】',
    label: '自动拆分【小红书】【不固定高度】',
  },
  {
    value: '自动拆分【3:4】【固定高度】',
    label: '自动拆分【3:4】【固定高度】',
  },
  {
    value: '自动拆分【3:4】【不固定高度】',
    label: '自动拆分【3:4】【不固定高度】',
  },
  {
    value: '自动拆分【9:16】【固定高度】',
    label: '自动拆分【9:16】【固定高度】',
  },
  {
    value: '自动拆分【9:16】【不固定高度】',
    label: '自动拆分【9:16】【不固定高度】',
  },
]);

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

const props = defineProps({
  valueHtml: {
    type: String,
    default: ''
  }
})
const options = ref({
  onSave: async  (content, page, document) => {

    return true
  }
})

const handleBlur = () => {
  console.log('blur');
};
const handleFocus = () => {
  console.log('focus');
};
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

function getMsg() {
  let htmlContent = editorRef.value.getEditor()
  console.log(htmlContent)
}

const getArticleContent = ()=> {
  const styleCss = "<style>.article table {\n" +
      "border: 1px solid black;\n" +
      "width: 100%;" +
      "}\n" +
      "\n" +
      ".article th, td {\n" +
      "padding: 2px;\n" +
      "border: 1px solid black;\n" +
      "}" +
      ".article table th, .article table td {\n" +
      "    padding: 2px;\n" +
      "    border: 1px solid black;\n" +
      "}\n" +
      "\n" +
      ".article table th {\n" +
      "    background-color: #F1F3F5; /* 设置第一行背景为灰色 */\n" +
      "}" +
      "pre{\n" +
      "  background-color: #dedede;\n" +
      "  color: #000000;border-radius: 8px;padding: 5px;width: 100%;margin: auto;\n" +
      "}\n" +
      "\n" +
      "\n" +
      "pre[theme=\"dark\"]{\n" +
      "    color: #c9d1d9;\n" +
      "    background: #1d2229;border-radius: 8px;padding: 5px;width: 100%;margin: auto;\n" +
      "}" +
      ".article p {\n" +
      "    line-height: 32px;\n" +
      "    margin-top: 0;\n" +
      "    margin-bottom: 0em;\n" +
      "}" +
      ".article img{\n" +
      "\tmargin: auto;\n" +
      "\tborder-radius: 18px;\n" +
      "\tdisplay: block;\n" +
      "margin: 0 auto;\n" +
      "}" +
      ".article blockquote {\n" +
      "    border-left: 3px solid var(--umo-primary-color);\n" +
      "    padding: .5em 1em;\n" +
      "    color: #777;\n" +
      "    background-color: #00000008;\n" +
      "    margin: 0;\n" +
      "}" +
      ".article ul {\n" +
      "    display: block;\n" +
      "    list-style-type: disc;\n" +
      "    margin-block-start: 0;\n" +
      "    margin-block-end:  0;\n" +
      "    margin-inline-start: 0px;\n" +
      "    margin-inline-end: 0px;\n" +
      "    padding-inline-start: 0px;\n" +
      "    unicode-bidi: isolate;\n" +
      "}" +
      "" +       ".article ol {\n" +
      "    display: block;\n" +
      "    list-style-type: disc;\n" +
      "    margin-block-start: 0;\n" +
      "    margin-block-end:  0;\n" +
      "    margin-inline-start: 0px;\n" +
      "    margin-inline-end: 0px;\n" +
      "    padding-inline-start: 0px;\n" +
      "    unicode-bidi: isolate;\n" +
      "}" +
      "" +
      ".article .indent-1 {\n" +
      "    text-indent: 2em;\n" +
      "}" +
      ".article .indent-2 {\n" +
      "    text-indent: 4em;\n" +
      "}" +
      ".article .indent-3 {\n" +
      "    text-indent: 6em;\n" +
      "}" +
      ".article .indent-4 {\n" +
      "    text-indent: 8em;\n" +
      "}" +
      ".article .indent-5 {\n" +
      "    text-indent: 10em;\n" +
      "}" +
      ".article .indent-6 {\n" +
      "    text-indent: 12em;\n" +
      "}" +
      "" +
      "</style>";
  htmlConFlag.value = false;
  setTimeout(()=>{
    try{
      let htmlContent = editorRef.value.getHTML()
      htmlContent = htmlContent.replace(/<p\b[^>]*>\s*<\/p>/g, '<p><br></p >');
      // 第一步：将各种写法统一成标准的 <hr>
      htmlContent = htmlContent.replace(/<\s*hr\s*[^>]*?\/?\s*>/gi, '<hr>');
      // 第二步：将多个连续的 <hr> 合并成一个
      htmlContent = htmlContent.replace(/(<hr>\s*)+/gi, '<hr>');
      let htmList = htmlContent.split('<hr>');
      htmList = htmList.map(item => {
        return '<div class="article" >' + item + '</div>' + styleCss;
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
  if(value4.value != "" && value4.value != "未选"  && value4.value != undefined){
    value.value = "未选"
    value2.value = "未选"
    value3.value = "未选"
  }
});

watch(valueChaiFen, (newVal, oldVal) => {
  if(htmlConHtmlFlag.value){
    ReSplitHtml()
  }
})

function Refresh() {
  ReSplitHtml()
}
function ReSplitHtml() {
  valueChaiFenSe.value = valueChaiFen.value.label
  let htmlContent = editorRef.value.getHTML()
  if(htmlContent == "" || htmlContent ==  "<p></p>"){
    message.warning('内容不能为空！');
    valueChaiFen.value = '手动拆分';
    valueChaiFenSe.value = '手动拆分';
    return;
  }
  htmlConHtmlFlag.value = false;
  htmlConFlag.value = false;
  htmlConHtmlFlagMd.value = true;
  setTimeout(()=>{
    if(valueChaiFenSe.value == '手动拆分') {
      cardHeight.value = '0px'
    }
    if(valueChaiFenSe.value == '自动拆分【1:1】【固定高度】') {
      cardHeight.value = '450px'
      htmlContent = htmlContent.replace(/<p\b[^>]*>\s*<\/p>/g, '<p><br></p >');
      htmlContent = htmlContent.replace(/<\s*hr\s*[^>]*?\/?\s*>/gi, '');
      setTimeout(()=>{
        htmlConList.value =  splitContentToPages(htmlContent,450)
        let htmlConListNew = "";
        for (let i = 0; i < htmlConList.value.length; i++) {
          let htmlConItem = htmlConList.value[i];
          if(i < htmlConList.value.length - 1){
            htmlConListNew += htmlConItem+'<hr>';
          }else{
            htmlConListNew += htmlConItem;
          }
        }
        editorRef.value.setContent(htmlConListNew)
      },1000)
    }
    if(valueChaiFenSe.value == '自动拆分【1:1】【不固定高度】') {
      cardHeight.value = '0px'
      htmlContent = htmlContent.replace(/<p\b[^>]*>\s*<\/p>/g, '<p><br></p >');
      htmlContent = htmlContent.replace(/<\s*hr\s*[^>]*?\/?\s*>/gi, '');
      setTimeout(()=>{
        htmlConList.value =  splitContentToPages(htmlContent,450)
        let htmlConListNew = "";
        for (let i = 0; i < htmlConList.value.length; i++) {
          let htmlConItem = htmlConList.value[i];
          if(i < htmlConList.value.length - 1){
            htmlConListNew += htmlConItem+'<hr>';
          }else{
            htmlConListNew += htmlConItem;
          }
        }
        editorRef.value.setContent(htmlConListNew)
      },1000)
    }
    if(valueChaiFenSe.value == '自动拆分【3:4】【固定高度】' || valueChaiFenSe.value == '自动拆分【小红书】【固定高度】') {
      cardHeight.value = '600px'
      htmlContent = htmlContent.replace(/<p\b[^>]*>\s*<\/p>/g, '<p><br></p >');
      htmlContent = htmlContent.replace(/<\s*hr\s*[^>]*?\/?\s*>/gi, '');
      setTimeout(()=>{
        htmlConList.value =  splitContentToPages(htmlContent,600)
        let htmlConListNew = "";
        for (let i = 0; i < htmlConList.value.length; i++) {
          let htmlConItem = htmlConList.value[i];
          if(i < htmlConList.value.length - 1){
            htmlConListNew += htmlConItem+'<hr>';
          }else{
            htmlConListNew += htmlConItem;
          }
        }
        editorRef.value.setContent(htmlConListNew)
      },1000)
    }
    if(valueChaiFenSe.value == '自动拆分【3:4】【不固定高度】' || valueChaiFenSe.value == '自动拆分【小红书】【不固定高度】') {
      cardHeight.value = '0px'
      htmlContent = htmlContent.replace(/<p\b[^>]*>\s*<\/p>/g, '<p><br></p >');
      htmlContent = htmlContent.replace(/<\s*hr\s*[^>]*?\/?\s*>/gi, '');
      setTimeout(()=>{
        htmlConList.value =  splitContentToPages(htmlContent,600)
        let htmlConListNew = "";
        for (let i = 0; i < htmlConList.value.length; i++) {
          let htmlConItem = htmlConList.value[i];
          if(i < htmlConList.value.length - 1){
            htmlConListNew += htmlConItem+'<hr>';
          }else{
            htmlConListNew += htmlConItem;
          }
        }
        editorRef.value.setContent(htmlConListNew)
      },1000)
    }
    if(valueChaiFenSe.value == '自动拆分【9:16】【固定高度】') {
      cardHeight.value = '800px'
      htmlContent = htmlContent.replace(/<p\b[^>]*>\s*<\/p>/g, '<p><br></p >');
      htmlContent = htmlContent.replace(/<\s*hr\s*[^>]*?\/?\s*>/gi, '');
      setTimeout(()=>{
        htmlConList.value =  splitContentToPages(htmlContent,800)
        let htmlConListNew = "";
        for (let i = 0; i < htmlConList.value.length; i++) {
          let htmlConItem = htmlConList.value[i];
          if(i < htmlConList.value.length - 1){
            htmlConListNew += htmlConItem+'<hr>';
          }else{
            htmlConListNew += htmlConItem;
          }
        }
        editorRef.value.setContent(htmlConListNew)
      },1000)
    }
    if(valueChaiFenSe.value == '自动拆分【9:16】【不固定高度】') {
      cardHeight.value = '0px'
      htmlContent = htmlContent.replace(/<p\b[^>]*>\s*<\/p>/g, '<p><br></p >');
      htmlContent = htmlContent.replace(/<\s*hr\s*[^>]*?\/?\s*>/gi, '');
      setTimeout(()=>{
        htmlConList.value =  splitContentToPages(htmlContent,800)
        let htmlConListNew = "";
        for (let i = 0; i < htmlConList.value.length; i++) {
          let htmlConItem = htmlConList.value[i];
          if(i < htmlConList.value.length - 1){
            htmlConListNew += htmlConItem+'<hr>';
          }else{
            htmlConListNew += htmlConItem;
          }
        }
        editorRef.value.setContent(htmlConListNew)
      },1000)
    }
    setTimeout(()=>{
      htmlConHtmlFlag.value = true;
      htmlConFlag.value = true;
      htmlConHtmlFlagMd.value = false;
      htmlConFlag.value = true;
    },1000)
  },1000)
}

// 创建一个隐藏的 div 用于测量内容高度
const createOffscreenDiv = () => {
  const div = document.createElement('div')
  div.style.position = 'absolute'
  div.style.visibility = 'hidden'
  div.style.width = cardWidth.value
  div.style.lineHeight = '32px'
  document.body.appendChild(div)
  return div
}
// 分割内容逻辑
const splitContentToPages = (originalContent,containerHeight) => {
  const offscreen = createOffscreenDiv()
  const parser = new DOMParser()
  const doc = parser.parseFromString(originalContent, 'text/html')
  const nodes = Array.from(doc.body.childNodes)
  const pageContents = []
  let currentPageHTML = ''

  const flushPage = () => {
    pageContents.push(currentPageHTML)
    currentPageHTML = ''
  }

  for (let node of nodes) {
    const tempNode = node.cloneNode(true)
    const tempWrapper = document.createElement('div')
    tempWrapper.appendChild(tempNode)
    const htmlToAdd = tempWrapper.innerHTML
    const combinedHTML = currentPageHTML + htmlToAdd

    offscreen.innerHTML = combinedHTML
    if (offscreen.scrollHeight > containerHeight) {
      // 当前内容放不下，先保存当前页
      flushPage()
      // 再尝试单独添加这个节点
      offscreen.innerHTML = htmlToAdd
      if (offscreen.scrollHeight > containerHeight) {
        console.warn('单个元素太高，无法放入一页')
      }
      currentPageHTML = htmlToAdd
    } else {
      currentPageHTML = combinedHTML
    }
  }

  if (currentPageHTML) flushPage()

  // 清理 offscreen 元素
  document.body.removeChild(offscreen)

  return pageContents;
}

defineExpose({
  getArticleContent,
  setArticleContent
})
</script>

<style scoped>

</style>
