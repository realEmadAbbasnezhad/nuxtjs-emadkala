<script>
import {ref} from 'vue'
import CardBehindCard from "~/components/base/CardBehindCard.vue";

export default {
    components: {CardBehindCard},
    setup() {
        const $q = useQuasar()

        const phoneNumber = ref('')
        const isLoading = ref(false)

        return {
            phoneNumber,
            isLoading,

            async onSubmit() {
                isLoading.value = true

                $fetch('/Api/Account/Portal', {
                    method: 'POST',
                    body: {
                        'phoneNumber': phoneNumber.value.toString(),
                        'requestOtp': false
                    },
                    onResponseError: err => {
                        $q.notify({
                            type: 'negative',
                            caption: err.error.message,
                            message: 'خطا در سمت سرور'
                        })
                    },
                    onRequestError: err => {
                        $q.notify({
                            type: 'negative',
                            caption: err.error.message,
                            message: 'خطا در سمت کاربر'
                        })
                    }
                }).catch(() => isLoading.value = false).then(res => {
                    console.log(res)// TODO: create response handling logic
                })
            },
        }
    }
}
</script>

<template>
    <CardBehindCard class="tw-min-w-96">
        <q-form class="tw-p-4" @submit="onSubmit()">
            <h1 class="tw-mb-4 tw-text-2xl tw-text-center">پرتال کاربری</h1>
            <q-input class="tw-mb-3" filled label="شماره تلفن همراه" v-model="phoneNumber" lazy-rules type="tel"
                     hint="یک کد ۶ رقمی برای تایید به این شماره ارسال خواهد شد"

                     :rules="[val => val && val.length > 0 || 'شماره تلفن همراه الزامی است',
                         val => /(09)\d{2}\W?\d{4}\W?\d{3}/g.test(val) || 'شماره تلفن همراه نامعتبر است']"
            />
            <q-btn :loading="isLoading" class="full-width" label="تایید" type="submit" color="primary"/>
        </q-form>
    </CardBehindCard>
</template>