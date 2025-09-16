<template>
  <!-- From Uiverse.io by kennyotsu -->
  <div>
    <a-spin :spinning="isLoading">
      <div>
        <a-button type="primary" @click="exportToZip" style="margin: 1px">打包下载</a-button>
        <div style="height: 30px"></div>
        <div v-for="(item,index) in htmlConList">
          <div >
            <div class="container noselect" :id="index+'img'">
              <div class="canvas">
                <div class="card-ot">
                  <div class="card">
                    <div style="height: 3px;background-color: #feffe6;width: 50%;margin: auto;border-radius: 30px;margin-top: -5px"></div>
                    <div style="height: 10px"></div>
                    <div :class="card__content_css">
                      <span v-html="item"></span>
                    </div>
                  </div>
                  <div style="height: 35px">
                    <a-row style="width: 80%;margin: auto;text-align: center;margin-top: 10px">
                      <a-col :span="8" style="padding-top: 2px">
                        <svg t="1746622897375" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="931" width="20" height="20"><path d="M763.5456 399.7696a268.2368 268.2368 0 0 0-155.9552-161.5872 28.16 28.16 0 0 0-20.48 52.48 211.8656 211.8656 0 0 1 123.2384 127.6416 28.16 28.16 0 0 0 53.1968-18.5344z" fill="#333333" p-id="932"></path><path d="M768 798.72a403.9168 403.9168 0 1 0-45.824 33.024L819.2 946.5856a28.16 28.16 0 1 0 43.1104-36.1984zM162.7136 488.2944a347.392 347.392 0 1 1 347.392 347.4432 347.8016 347.8016 0 0 1-347.392-347.4432z" fill="#333333" p-id="933"></path></svg>
                      </a-col>
                      <a-col :span="8">
                        <div class="card-button">SING IN </div>
                      </a-col>
                      <a-col :span="8" style="padding-top: 2px">
                        <svg t="1746622925499" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1238" width="20" height="20"><path d="M758.4256 103.68H256.256A139.6736 139.6736 0 0 0 116.736 243.2512v543.744A139.6736 139.6736 0 0 0 256.256 926.72h502.1696a139.6736 139.6736 0 0 0 139.52-139.52V243.2512a139.6736 139.6736 0 0 0-139.52-139.5712z m83.2 683.3152A83.3024 83.3024 0 0 1 758.4256 870.4H256.256a83.3024 83.3024 0 0 1-83.2-83.4048V243.2512a83.3024 83.3024 0 0 1 83.2-83.2512h502.1696a83.3024 83.3024 0 0 1 83.2 83.2512z" fill="#333333" p-id="1239"></path><path d="M358.4 688.9984h297.984a51.8144 51.8144 0 0 0 51.712-51.7632v-66.56a51.5584 51.5584 0 0 0-18.5856-39.7312l-78.592-65.4848a139.5712 139.5712 0 1 0-207.0016 0l-78.6432 65.4336a51.6096 51.6096 0 0 0-18.688 39.8336v66.56A51.8144 51.8144 0 0 0 358.4 688.9984z m4.608-116.1216L465.92 487.5776a28.16 28.16 0 0 0-2.8672-45.4656 83.2512 83.2512 0 1 1 89.2928 0 28.16 28.16 0 0 0-2.8672 45.3632l102.4 85.4528v59.8528H362.9056z" fill="#333333" p-id="1240"></path><path d="M507.3408 495.4112a25.6 25.6 0 0 0-25.6 25.6v74.0864a25.6 25.6 0 0 0 51.2 0v-74.0864a25.6 25.6 0 0 0-25.6-25.6zM687.2576 747.9296H327.68a28.16 28.16 0 0 0 0 56.32h359.8336a28.16 28.16 0 0 0 0-56.32z" fill="#333333" p-id="1241"></path></svg>
                      </a-col>
                    </a-row>
                  </div>
                </div>

              </div>
            </div>
            <div style="clear: both"></div>
            <a-button type="primary" @click="convertAndDownloadById(index+'img')" style="float: right;margin: 5px">下载图片</a-button>
            <div style="clear: both"></div>
          </div>
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
    lineCardHeight.value = Number(lineCardHeight.value.replace('px','')) - 92 + 'px'
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
const exportToZip = async () => {
  if(htmlConList.value.length <= 0){
    message.error('内容不能为空！')
    return
  }
  isLoading.value = true
  try {
    const zip = new JSZip()
    // 逐个处理图片
    for (const id of imgIdList.value) {
      const blob = await generateImageBlob(id)
      if (blob) {
        zip.file(`${id}.png`, blob)
      }
    }
    // 生成 ZIP 并下载
    const content = await zip.generateAsync({ type: 'blob' })
    // 使用原生方式下载 ZIP
    const url = URL.createObjectURL(content)
    const link = document.createElement('a')
    link.href = url
    link.download = 'images.zip'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url) // 释放 URL
  } catch (error) {
    console.error('导出 ZIP 时出错:', error)
    alert('导出失败，请重试！')
  } finally {
    isLoading.value = false
  }
  isLoading.value = false
}

// 导出 ZIP 文件（不依赖 file-saver）
const exportToBaseUrl = async () => {
  if(htmlConList.value.length <= 0){
    message.error('内容不能为空！')
    return
  }
  isLoading.value = true
  try {
    // 逐个处理图片
    for (const id of imgIdList.value) {
      const element = document.getElementById(id)
      if (!element) return
      element.style.backgroundColor = 'transparent';
      const canvas = await html2canvas(element, {
        backgroundColor: null // 启用透明背景
      });
      // 将 canvas 转为 base64 图片数据
      const urlBase64 = canvas.toDataURL('image/png')
      //  saveFileBase
      emit("getPromptBaseData",
          {
            "baseData":urlBase64
          }
      )
    }
  } catch (error) {
    console.error('导出 ZIP 时出错:', error)
  } finally {
    isLoading.value = false
  }
  isLoading.value = false
}


async function getBaseUrl(elementId) {
  if(htmlConList.value.length <= 0){
    message.error('内容不能为空！')
    return
  }
  isLoading.value = true
  try{
    const element = document.getElementById(elementId)
    if (!element) return
    element.style.backgroundColor = 'transparent';
    const canvas = await html2canvas(element, {
      backgroundColor: null // 启用透明背景
    });
    // 将 canvas 转为 base64 图片数据
    const urlBase64 = canvas.toDataURL('image/png')
    //  saveFileBase
    emit("getPromptBaseData",
        {
          "baseData":urlBase64
        }
    )
  }catch (e) {
    console.log(e)
  }
  isLoading.value = false
}

</script>
<style scoped >
.container {
  width: v-bind('lineCardWidth');
  margin: auto;
}
.card {
  border-radius: 25px;
  background: linear-gradient(43deg, rgb(160, 25, 217) 0%, rgb(200, 80, 192) 46%, rgb(215, 15, 68) 100%);
  padding:20px;
  color: white;
  opacity: 1;

}
.card-button {
  border-radius: 20px;
  background: linear-gradient(43deg, rgb(160, 25, 217) 0%, rgb(200, 80, 192) 46%, rgb(215, 15, 68) 100%);
  padding:5px;
  color: white;
  opacity: 1;
  text-align: center;
  font-weight: bold;
}

.card-ot{
  background-color:#ECEFF3;
  border-radius: 25px;
}
#0img{
  height: 400px;
}
.tracker:hover ~ #card .title {
  opacity: 1;
}
.tracker:hover ~ #card #prompt {
  opacity: 0;
}
.tracker:hover ~ #card {
  filter: brightness(1.1);
}
.noselect {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.card__content {
  width:100%;
  height:100%;
}


.card__content_height {
  width:100%;
  height: v-bind('lineCardHeight');
}
</style>
