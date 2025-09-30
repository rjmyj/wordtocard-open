<template>
  <!-- From Uiverse.io by kennyotsu -->
  <div>
    <a-spin :spinning="isLoading">
      <div>
        <div style="height: 30px"></div>
        <div v-for="(item,index) in htmlConList">
          <div class="container noselect" :id="index+'img'">
            <div class="card">
              <div :class="card__content_css"><span v-html="item"></span></div>
            </div>
            <div style="clear: both"></div>
          </div>
          <a-button type="primary" @click="convertAndDownloadById(index+'img')" style="float: right;margin: 5px">下载图片</a-button>
          <div style="clear: both"></div>
          <div style="height: 10px"></div>
        </div>
      </div>
    </a-spin>

  </div>

</template>
<script setup lang="ts">
import {onMounted, ref} from "vue";
import html2canvas from 'html2canvas';
import JSZip from 'jszip'
import { saveAs } from 'file-saver';
const emit = defineEmits([  "getPromptBaseData"])
import {message} from "ant-design-vue";
const isLoading = ref(false)
const imgIdList = ref<string[]>([]);
const htmlConList = ref([])
const props = defineProps({
  cardWidth:{
    type: String,
    default: '450px'
  },
  cardHeight:{
    type: String,
    default: '0px'
  },
  htmlList: {
    default: []
  }
})
const card__content_css = ref("card__content")
const lineCardWidth = ref("450px");
const lineCardHeight = ref("0px");
onMounted(()=>{
  htmlConList.value = props.htmlList
  lineCardWidth.value = props.cardWidth
  lineCardHeight.value = props.cardHeight
  if(lineCardHeight.value === '0px'){
    card__content_css.value = "card__content"
  } else {
    lineCardHeight.value = Number(lineCardHeight.value.replace('px','')) - 40 + 'px'
    card__content_css.value = "card__content_height"
  }
  for (let i = 0; i < htmlConList.value.length; i++) {
    imgIdList.value.push(i+'img')
  }
  console.log(htmlConList.value)
})

const convertAndDownload = async (elementId) => {
  isLoading.value = true
  try{
    const element = document.getElementById(elementId)
    if (!element) return
// 确保目标元素背景为透明
    element.style.backgroundColor = 'transparent';
    // 使用 html2canvas 将 DOM 元素转为 canvas，设置背景为透明
    const canvas = await html2canvas(element, {
      backgroundColor: null,
      scale: 4,              // 禁用自动缩放，保持与 DOM 实际尺寸一致
      useCORS: true,         // 处理跨域图片
      logging: false,        // 关闭调试日志
      allowTaint: true,      // 允许跨域图片
      windowWidth: element.offsetWidth, // 设置 canvas 宽度为元素实际宽度
      windowHeight: element.offsetHeight // 设置 canvas 高度为元素实际高度
    });
    // 将 canvas 转为 base64 图片数据
    // 3. 将 canvas 转为 Blob 并下载（兼容移动端）
    canvas.toBlob(blob => {
      if (blob) {
        saveAs(blob, `${elementId}.png`);
      }
    }, 'image/png');
  }catch (e) {
    console.log(e)
  }
  isLoading.value = false
}
const convertAndDownloadById = (id) => {
  if(htmlConList.value.length <= 0){
    message.error('内容不能为空！')
    return
  }
  convertAndDownload(id)
}
// 生成图片 Blob 的函数
const generateImageBlob = async (elementId) => {
  try{
    const element = document.getElementById(elementId)
    if (!element) return null
    // 设置透明背景
    element.style.backgroundColor = 'transparent'
    try {
      const canvas = await html2canvas(element, {
        backgroundColor: null,
        scale: 4,              // 禁用自动缩放，保持与 DOM 实际尺寸一致
        useCORS: true,         // 处理跨域图片
        logging: false,        // 关闭调试日志
        allowTaint: true,      // 允许跨域图片
        windowWidth: element.offsetWidth, // 设置 canvas 宽度为元素实际宽度
        windowHeight: element.offsetHeight // 设置 canvas 高度为元素实际高度
      })
      return new Promise((resolve) => {
        canvas.toBlob((blob) => {
          resolve(blob)
        }, 'image/png')
      })
    } catch (error) {
      console.error(`生成 ${elementId} 图片时出错:`, error)
      return null
    }
  }catch (e) {
    console.log(e)
  }
  return null
}

// 导出 ZIP 文件（不依赖 file-saver）


// 导出 ZIP 文件（不依赖 file-saver）





</script>
<style scoped >
.container {
  width: v-bind('lineCardWidth');
  margin: auto;
  background-color: white;
}
/* From Uiverse.io by adamgiebl */
.card {
  border-radius: 30px;
  background: #212121;
  padding: 20px;
  color: white;
}
.card__content {
  width: 100%;
  height: 100%;
}
.card__content_height {
  width: 100%;
  height: v-bind('lineCardHeight');
}
</style>
