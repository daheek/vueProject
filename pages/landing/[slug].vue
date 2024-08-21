<template>
<div>
    <h1>{{ slug }} Landing Page</h1>
    <p>여기에 {{ slug }}와 관련된 내용을 표시합니다.</p>
</div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const slug = route.params.slug;

definePageMeta({
    layout: 'landing-default' // layout 속성을 사용하여 레이아웃 설정
});
</script>

<style scoped>
/* 페이지 전용 스타일 */
</style>
