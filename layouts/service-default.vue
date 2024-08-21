<template>
    <q-layout view="hHh lpR fFf" class="bg-grey-2">
        <q-header elevated class="bg-dark text-white">
            <q-toolbar>
                <q-toolbar-title> <NavBar /> </q-toolbar-title>
            </q-toolbar>
        </q-header>
        <q-page-container :style="pageContainerStyle">
            <q-page class="flex flex-center">
                <slot /> 
            </q-page>
        </q-page-container>
        <footer>
            <!-- 서비스 페이지용 푸터 -->
            <p>&copy; 2024 Your Company. All rights reserved.</p>
        </footer>
    </q-layout>
</template>



<script lang="ts" setup>
import NavBar from '~/components/NavBar.vue'
// NavBar는 서비스 레이아웃의 모든 페이지에서 사용됩니다.

const pageContainerStyle = computed(() => ({
    maxWidth: '1480px',
    margin: '0 auto',
}));
</script>

<style scoped>
footer {
    background-color: #333;
    color: white;
    padding: 10px;
    text-align: center;
}
</style>