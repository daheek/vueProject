
<!-- App.vue는 Nuxt 3 프로젝트의 최상위 컴포넌트로, 모든 페이지를 감싸는 역할을 함
보통 App.vue는 페이지 간 공통적인 요소를 처리하며, <NuxtPage /> 컴포넌트를 통해 라우터에 따른 페이지를 표시한다.-->

<template>
    <div>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>


<script lang="ts" setup>
// 추가적인 스크립트나 전역 로직이 필요하다면 여기에 작성합니다.
</script>

<style>
/* 전역 스타일을 추가할 수 있습니다 */
</style>