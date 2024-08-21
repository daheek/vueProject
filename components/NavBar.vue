<template>
    <nav>
        <ul>
            <li>
                <NuxtLink to="/">로그인페이지</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/service/ads">광고 관리</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/service/landing-forms">랜딩폼 관리</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/service/forms">폼 관리</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/service/inquiries">문의 관리</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/service/materials">소재 관리</NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts" setup>
// 여기에 필요에 따라 스크립트를 추가하세요
</script>

<style scoped>
nav {
    padding: 10px;
}

ul {
    list-style-type: none;
    display: flex;
    gap: 10px;
}

li {
    margin: 0;
}

a {
    color: white;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
</style>