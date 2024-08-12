<template>
    <q-layout view="hHh lpR fFf" class="bg-grey-2">
        <q-header elevated class="bg-dark text-white">
            <q-toolbar>
                <q-toolbar-title> 다희의 구글로그인 테스트페이지 </q-toolbar-title>
            </q-toolbar>
        </q-header>
        <q-page-container :style="pageContainerStyle">
            <q-page class="flex flex-center">
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
                        <q-btn
                            label="Login with Google"
                            color="white"
                            text-color="black"
                            @click="loginWithGoogle"
                        />
                    </q-card-actions>
                </q-card>
            </q-page>
        </q-page-container>
    </q-layout>   
</template>

<script setup lang="ts">
import { ref } from 'vue'

const pageContainerStyle = computed(() => ({
    maxWidth: '1480px',
    margin: '0 auto',
}));

const email = ref('')
const password = ref('')

console.log('start');
email.value = 'daheek@kakao.com';
password.value = '1234';

const basicLogin = () => {
  // Your login logic here
    console.log('Email:', email.value);
    console.log('Password:', password.value);
}

const loginWithGoogle = () => {
  // Your Google login logic here
    console.log('Google login clicked');
}

</script>
