<template>
    <div id="addDataForm">
        <h2>Add data</h2>
        <label>Enter your weight and height</label>
        <input type="number" v-model="wightInfo.weight" placeholder="Enter your weight(in kg)" />
        <input type="number" v-model="wightInfo.height" placeholder="Enter your heigh(in cm)" />
        <button @click="verifyDatas">
            Add data
        </button>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'

    import { FactsInfos } from '@/modules/FactsInfos'

    const wightInfo = ref(new FactsInfos())

    const props = defineProps({
        factsInfos: FactsInfos
    })

    const emits = defineEmits([
        'addData'
    ])

    function verifyDatas() {
        console.log(wightInfo.value);
        
        emits('addData', new FactsInfos({
            weight: wightInfo.value.weight,
            height: wightInfo.value.height
        }))
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