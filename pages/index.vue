<template>
    <q-card>
        <q-card-section>
            <div class="text-h6">Login</div>
        </q-card-section>

        <q-card-section>
            <q-input filled v-model="email" label="Email" />
            <q-input filled v-model="password" label="Password" type="password" />
        </q-card-section>

        <q-card-actions align="center">
            <q-btn label="Login" color="primary" @click="basicLogin" />
            <q-btn id="googleButton"/>
        </q-card-actions>
    </q-card>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

const email = ref('')
const password = ref('')

email.value = 'daheek@kakao.com';
password.value = '1234';

const basicLogin = () => {
  // Your login logic here
    console.log('Email:', email.value);
    console.log('Password:', password.value);
}

const handleCallback = (response) => {
    console.log(response);
    // JWT 토큰에서 유저 정보를 파싱
    const token = response.credential;
    const base64Payload = token.split('.')[1];
    const payload = atob(base64Payload); // base64 디코딩
    const result = JSON.parse(payload);
    console.log(result);
}

const googleInitialize = () => {
    if(window.google) {
        window.google.accounts.id.initialize({
            client_id: '클라이언트ID',
            callback: handleCallback,
            context: 'use',
        })

        // Google Sign-In 버튼 렌더링
        window.google.accounts.id.renderButton(
            document.getElementById('googleButton'),
            {
                type: 'icon', // 버튼 유형, standard, icon
                theme: 'outline', // 테마, outline, filled_blue, filled_black
                size: 'large', // 버튼 크기 large, medium, small
                text: 'signin_with', // 버튼 텍스트, signin_with, signup_with, continue_with, signIn
                shape: 'circle', // 버튼 모양, rectangular, pill, circle, square
                logo_alignment: 'center',
                width: '50',
            }
        )
    }else {
        console.error('Google API not loaded.');
    }
}

onMounted(() => {
    // Google API 초기화
    googleInitialize();
})

definePageMeta({
    layout: 'service-default', // service 레이아웃을 사용
});
</script>
