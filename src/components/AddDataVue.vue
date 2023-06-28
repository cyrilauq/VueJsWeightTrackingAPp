<template>
    <div id="addDataForm">
        <h2>Add data</h2>
        <label>Enter your weight and height</label>
        <input type="text" v-model="weight" placeholder="Enter your weight(in kg)" />
        <input type="text" v-model="height" placeholder="Enter your heigh(in cm)" />
        <button @click="verifyDatas">
            Add data
        </button>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'

    import { FactsInfos, factsInfosOf } from '@/modules/FactsInfos'

    const wightInfo = ref(new FactsInfos())
    const weight = ref("")
    const height = ref("")

    const emits = defineEmits([
        'addData'
    ])

    function verifyDatas() {
        emits('addData', factsInfosOf(weight.value, height.value))
    }
</script>

<style scoped>
    #addDataForm {
        display: flex;
        flex-direction: column;
        width: 50%;
        max-width: 200px;
        min-width: 100px;
    }
</style>