<template>
  <div>
    <a-card  :bordered="false" style="width:100%;margin: auto">
      <a-collapse  accordion>
        <a-collapse-panel key="1" header="使用方法">
          <a-image style="margin: auto;width: 100%" :src="gnnnn" />
        </a-collapse-panel>
        <a-collapse-panel key="2" header="如何拆分卡片">
          <p>1、在页面当中输入---然后回车即可</p>
          <p>2、在菜单栏当中有分割线直接插入分割线就可以实现卡片的拆分</p>
          <p>3、新增自动拆分功能，在右上角可以选择手动拆分和自动拆分</p>
        </a-collapse-panel>
        <a-collapse-panel key="3" header="移动分割线">
          <a-image style="margin: auto;width: 100%" :src="moveline" />
        </a-collapse-panel>
        <a-collapse-panel key="4" header="如何上传图片">
          <p>当您复制并粘贴在线图片到卡片中时，可能会遇到导出卡片时不显示图片的问题。这通常是由于原图片链接受跨域保护机制的限制所致。
            为了避免这种情况，建议您使用页面上方的“插入”功能来添加图片，
            这样可以确保图片正确无误地显示在导出的卡片中。这样做不仅能够绕过跨域限制，还能保证图片的质量和兼容性。</p>
        </a-collapse-panel>
      </a-collapse>
    </a-card>
  </div>
</template>
<script setup lang="ts">
import gnnnn from "@/assets/gnnnn.png";
import moveline from "@/assets/moveline.png";
</script>
<style scoped>

</style>
