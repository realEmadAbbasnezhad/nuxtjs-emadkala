<template>
    <div>
        <div class="tw-relative">
            <div class="tw-absolute tw-inset-0 tw-bg-primary-500 tw-shadow-lg
                tw-transform -tw-skew-y-6 sm:tw-skew-y-0 sm:-tw-rotate-6 sm:tw-rounded-2xl">
            </div>
            <div class="tw-relative tw-bg-background tw-shadow-lg sm:tw-rounded-2xl tw-border tw-border-primary-500">
                <slot/>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
</script>