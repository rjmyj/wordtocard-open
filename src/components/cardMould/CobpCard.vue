<template>
  <!-- From Uiverse.io by kennyotsu -->
  <div>

    <a-spin :spinning="isLoading">
      <div>
        <div style="height: 30px"></div>
        <div v-for="(item,index) in htmlConList">
          <div class="container noselect" :id="index+'img'">
            <div class="card" >
              <div style="padding: 5px;font-weight: bold;height: 40px">
                <span style="margin-left: 5px">MOST POPULAR</span>
                <svg style="float: right;margin-right: 5px"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                >
                  <path
                      fill="currentColor"
                      d="M10.277 16.515c.005-.11.187-.154.24-.058c.254.45.686 1.111 1.177 1.412c.49.3 1.275.386 1.791.408c.11.005.154.186.058.24c-.45.254-1.111.686-1.412 1.176s-.386 1.276-.408 1.792c-.005.11-.187.153-.24.057c-.254-.45-.686-1.11-1.176-1.411s-1.276-.386-1.792-.408c-.11-.005-.153-.187-.057-.24c.45-.254 1.11-.686 1.411-1.177c.301-.49.386-1.276.408-1.791m8.215-1c-.008-.11-.2-.156-.257-.062c-.172.283-.421.623-.697.793s-.693.236-1.023.262c-.11.008-.155.2-.062.257c.283.172.624.42.793.697s.237.693.262 1.023c.009.11.2.155.258.061c.172-.282.42-.623.697-.792s.692-.237 1.022-.262c.11-.009.156-.2.062-.258c-.283-.172-.624-.42-.793-.697s-.236-.692-.262-1.022M14.704 4.002l-.242-.306c-.937-1.183-1.405-1.775-1.95-1.688c-.545.088-.806.796-1.327 2.213l-.134.366c-.149.403-.223.604-.364.752c-.143.148-.336.225-.724.38l-.353.141l-.248.1c-1.2.48-1.804.753-1.881 1.283c-.082.565.49 1.049 1.634 2.016l.296.25c.325.275.488.413.58.6c.094.187.107.403.134.835l.024.393c.093 1.52.14 2.28.634 2.542s1.108-.147 2.336-.966l.318-.212c.35-.233.524-.35.723-.381c.2-.032.402.024.806.136l.368.102c1.422.394 2.133.591 2.52.188c.388-.403.196-1.14-.19-2.613l-.099-.381c-.11-.419-.164-.628-.134-.835s.142-.389.365-.752l.203-.33c.786-1.276 1.179-1.914.924-2.426c-.254-.51-.987-.557-2.454-.648l-.379-.024c-.417-.026-.625-.039-.806-.135c-.18-.096-.314-.264-.58-.6m-5.869 9.324C6.698 14.37 4.919 16.024 4.248 18c-.752-4.707.292-7.747 1.965-9.637c.144.295.332.539.5.73c.35.396.852.82 1.362 1.251l.367.31l.17.145c.005.064.01.14.015.237l.03.485c.04.655.08 1.294.178 1.805"
                  ></path>
                </svg>
              </div>
              <div style="clear: both"></div>
              <div :class="card__content_css">
                <span v-html="item"></span>
              </div>
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
    lineCardHeight.value = Number(lineCardHeight.value.replace('px','')) - 60 + 'px'
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
}
.card {
  border-radius: 32px;
  padding: 10px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  background: linear-gradient(
      to top right,
      #975af4,
      #2f7cf8 40%,
      #78aafa 65%,
      #934cff 100%
  );
  color: white;
  opacity: 1;
}

.card__content {
  background: rgb(5, 6, 45);
  border-radius: 32px;
  width: 100%;
  height: 100%;
  padding: 20px;
}


.card__content_height {
  background: rgb(5, 6, 45);
  border-radius: 32px;
  width: 100%;
  height: v-bind('lineCardHeight');
  padding: 20px;
}
</style>
