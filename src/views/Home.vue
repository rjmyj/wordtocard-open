<template>
  <div style="background-color: #F9F8FB">
    <div style="position: fixed;background-color: white;width: 100%;z-index: 1000">
      <a-row style="width: 90%;margin: auto">
        <a-col :span="18">
          <div>
            <div  style="float: left">
              <img :src="logo" style="height: 40px;width: 40px;margin-top: 5px">
            </div>
            <div style="float: left;padding-top: 12px;padding-left: 10px">
              <a href="https://www.wordtocard.com/">wordtocard<a/>
              <span  style="font-size: 20px;font-weight: bold;color: #3F84EB;">WordToCard</span>
            </div>
          </div>
          <div style="clear: both"></div>
        </a-col>
        <a-col :span="6">
          <div>
            <a-button type="primary" style="margin: 10px;width: 100px;float: right" size="large" @click="$router.push('/WordToCard')">开始使用</a-button>
          </div>
        </a-col>
      </a-row>
    </div>
    <div>
      <div class="bgcard"  :style="{  backgroundImage: 'url(' + bjhome + ')' }">
        <div style="height: 15vh"></div>
        <div style="text-align: center;font-size: 60px;font-weight: bold;color: #000000;"><a href="https://www.wordtocard.com/">wordtocard<a/></div>
        <div style="text-align: center;font-size: 50px;font-weight: bold;margin-top: 10px;">
          <span style="color: deeppink">文章</span>
          <span style="color: #000000">&nbsp;转&nbsp;</span>
          <span style="color:rgb(22,69,255);">知识卡片</span>
        </div>
        <div style="text-align: center;font-size: 20px;color: #000000;margin-top: 20px;font-weight: bold;">分享知识，不只是传递信息，更是一场静谧而深刻的美学之旅</div>
        <div style="text-align: center;margin-top: 2vh">
          <a-button type="primary" style="margin: 10px;width: 200px" size="large" @click="$router.push('/WordToCard')">开始使用</a-button>
          <a href="https://space.bilibili.com/3546822167496820" target="_blank">
            <a-button type="primary" style="margin: 10px;width: 200px;background-color: #ff00cc" size="large" >视频演示</a-button>
          </a>
          <a-button   type="primary" style="margin: 10px;width: 200px;background-color: #00ca4e" size="large" disabled >MCP 使用</a-button>
          <a-button type="primary" style="margin: 10px;width: 200px;background-color: #002fca" size="large" @click="warning" >Github</a-button>
        </div>
        <div style="text-align: center">
          <a-tag color="pink">免费</a-tag>
          <a-tag color="red">适合大多数人</a-tag>
          <a-tag color="orange">只需要会Word</a-tag>
          <a-tag color="green">免登录</a-tag>
          <a-tag color="cyan">简单使用</a-tag>
          <a-tag color="blue">丰富的模板</a-tag>
          <a-tag color="orange">制作图文封面都没有问题</a-tag>
          <a-tag color="green">开源免费</a-tag>
        </div>
      </div>
      <div>
        <div style="height: 10vh"></div>
        <h1 style="text-align: center;font-weight: bold">知识卡片</h1>
        <div style="height: 5px;width: 80px;background-color: #1677ff;margin: auto;border-radius: 50px"></div>
        <a-card v-if="imgFlag" :bordered="false" style="width:90%;margin: auto;">
          <a-row>
            <a-col :span="4">
              <a-card hoverable style="width: 90%;float: left;margin: 5px;">
                <template #cover>
                  <img alt="example" :src="card1" />
                </template>
              </a-card>
            </a-col>
            <a-col :span="4">
              <a-card hoverable style="width: 90%;float: left;margin: 5px;">
                <template #cover>
                  <img alt="example" :src="card2" />
                </template>
              </a-card>
            </a-col>
            <a-col :span="4">
              <a-card hoverable style="width:90%;float: left;margin: 5px;">
                <template #cover>
                  <img alt="example" :src="card3" />
                </template>
              </a-card>
            </a-col>
            <a-col :span="4">
              <a-card hoverable style="width:90%;float: left;margin: 5px;">
                <template #cover>
                  <img alt="example" :src="card4" />
                </template>
              </a-card>
            </a-col>
            <a-col :span="4">
              <a-card hoverable style="width:90%;float: left;margin: 5px;">
                <template #cover>
                  <img alt="example" :src="card5" />
                </template>
              </a-card>
            </a-col>
            <a-col :span="4">
              <a-card hoverable style="width:90%;float: left;margin: 5px;">
                <template #cover>
                  <img alt="example" :src="card7" />
                </template>
              </a-card>
            </a-col>
          </a-row>
        </a-card>
      </div>
      <div>
        <div style="height: 10vh"></div>
        <h1 style="text-align: center;font-weight: bold">卡片样式</h1>
        <div style="height: 5px;width: 80px;background-color: #1677ff;margin: auto;border-radius: 50px"></div>
        <a-card  :bordered="false" style="width:90%;margin: auto;text-align: center">
          <img v-if="imgFlag" style="margin: auto;width: 100%;border-radius: 18px" :src="kpysmb">
        </a-card>
      </div>
      <div>
        <div style="height: 10vh"></div>
        <h1 style="text-align: center;font-weight: bold">功能</h1>
        <div style="height: 5px;width: 80px;background-color: #1677ff;margin: auto;border-radius: 50px"></div>
        <a-card  :bordered="false" style="width:90%;margin: auto;text-align: center">
          <img v-if="imgFlag" style="margin: auto;width: 100%" :src="gnnnn">
        </a-card>
      </div>
      <div>
        <div style="height: 5vh"></div>
        <h1 style="text-align: center;font-weight: bold">常见问题</h1>
        <div style="height: 5px;width: 80px;background-color: #1677ff;margin: auto;border-radius: 50px"></div>
        <a-card  :bordered="false" style="width:90%;margin: auto">
          <a-collapse v-model:activeKey="activeKey" accordion>
            <a-collapse-panel key="1" header="如何拆分卡片">
              <p>1、在页面当中输入---然后回车即可</p>
              <p>2、在菜单栏当中有分割线直接插入分割线就可以实现卡片的拆分</p>
              <p>3、新增自动拆分功能，在右上角可以选择手动拆分和自动拆分</p>
            </a-collapse-panel>
            <a-collapse-panel key="2" header="如何上传图片">
              <p>当您复制并粘贴在线图片到卡片中时，可能会遇到导出卡片时不显示图片的问题。这通常是由于原图片链接受跨域保护机制的限制所致。
                为了避免这种情况，建议您使用页面上方的“插入”功能来添加图片，
                这样可以确保图片正确无误地显示在导出的卡片中。这样做不仅能够绕过跨域限制，还能保证图片的质量和兼容性。</p>
            </a-collapse-panel>
          </a-collapse>
        </a-card>
      </div>
      <div>
        <div style="height: 5vh"></div>
        <h1 style="text-align: center;font-weight: bold">关于我们</h1>
        <div style="height: 5px;width: 80px;background-color: #1677ff;margin: auto;border-radius: 50px"></div>
        <a-card  :bordered="false" style="width:90%;margin: auto">
          <a-flex wrap="wrap" gap="small">
            <a-card hoverable style="width: 20vw;float: left;margin: 5px;height: 200px;text-align: left;padding: 10px">
              <template #cover>
                <img :src="xhs" style="border-radius: 18px">
                <div style="margin: 20px">小红书</div>
              </template>
            </a-card>
            <a-card hoverable style="width: 20vw;float: left;margin: 5px;height: 200px;text-align: left;padding-top: 20px">
              <template #cover>
                <div style="height: 105px;width: 100px;padding-left: 30px;padding-top: 2vh">
                  <a href="https://code100.blog.csdn.net/" target="_blank">https://code100.blog.csdn.net/</a>
                </div>
                <div style="margin: 20px">CSDN</div>
              </template>
            </a-card>
            <a-card hoverable style="width: 20vw;float: left;margin: 5px;height: 200px;text-align: left">
              <template #cover>
                <img :src="wxgzh" style="height: 130px;width: 130px;margin: auto">
                <div style="margin: 20px">微信公众号</div>
              </template>
            </a-card>
            <a-card hoverable style="width: 20vw;float: left;margin: 5px;height: 200px">
              <template #cover>
                <img :src="qq" style="height: 130px;width: 130px;margin: auto">
                <div style="margin: 20px">QQ</div>
              </template>
            </a-card>
          </a-flex>
        </a-card>
      </div>
      <div>
        <div style="height: 10vh"></div>
        <a-card  :bordered="false" style="width:100%;margin: auto;text-align: center">
          © 2025 WordToCard 软件漫游记
        </a-card>
        <div style="height: 10vh"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {   ref ,onMounted} from 'vue';
import { message } from 'ant-design-vue';
import logo from "@/assets/logo.png";
import card1 from "@/assets/cardimg/card1.png";
import card2 from "@/assets/cardimg/card2.png";
import card3 from "@/assets/cardimg/card3.png";
import card4 from "@/assets/cardimg/card4.png";
import card5 from "@/assets/cardimg/card5.png";
import card6 from "@/assets/cardimg/card6.png";
import card7 from "@/assets/cardimg/card7.png";
import card8 from "@/assets/cardimg/card8.png";
import kpysmb from "@/assets/kpysmb.png";
import xhs from "@/assets/xhs.jpg";
import wxgzh from "@/assets/wxgzh.jpg";
import qq from "@/assets/qq.jpg";
import bjhome from "@/assets/bjhome.png";
import gnnnn from "@/assets/gnnnn.png";
const activeKey = ref([]);
const imgFlag = ref(false);
onMounted(() => {
  setTimeout(() => {
    imgFlag.value = true;
  }, 2000);
})
const warning = () => {
  message.warning('代码优化中，敬请期待');
};
</script>
<style scoped>
  .bgcard {
    width: 100%;
    height: 80vh;

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>
