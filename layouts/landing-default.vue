<template>
    <div>
        <header>
            <!-- 랜딩 페이지용 헤더 -->
            <h1>Landing Page</h1>
        </header>

        <main>
            <slot /> <!-- 페이지 콘텐츠가 여기에 렌더링됩니다 -->
        </main>

        <footer>
        <!-- 랜딩 페이지용 푸터 -->
            <p>&copy; 2024 Your Company. All rights reserved.</p>
        </footer>
    </div>
</template>

<script lang="ts" setup>
    // 필요한 스크립트를 여기에 추가하세요
</script>

<style scoped>
/* 랜딩 페이지 레이아웃 전용 스타일을 여기에 추가하세요 */
header {
    background-color: #f0f0f0;
    padding: 20px;
    text-align: center;
}

footer {
    background-color: #f0f0f0;
    padding: 10px;
    text-align: center;
}
</style>