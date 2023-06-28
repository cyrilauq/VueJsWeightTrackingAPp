<script setup lang="ts">
    import { ref } from 'vue'
    
    import AddDataVue from './components/AddDataVue.vue'
    import FactsVue from './components/FactsVue.vue';
    import FooterVue from './components/global/FooterVue.vue'
    import HeaderVue from './components/global/HeaderVue.vue'
    
    import { FactsInfos } from '@/modules/FactsInfos'

    const currentData = ref(new FactsInfos())

    function addNewData(data: FactsInfos): void {
        console.log("Plus data");
        console.log(data);
        
        currentData.value = data
        console.log(currentData.value);
        
    }
</script>

<template>
    <HeaderVue />
    <!-- TODO: Add form for data adding (for weight with heigth and weight) -->
    <!-- TODO: Add fact section for displaying current wieght (last encoded), current BMI(computed with last data encoded), weight history(just display a button) -->
    <!-- TODO: Create a routeur to have different page: settings(update user informations), weights(history of weight), dashboard -->
    <!-- TODO: Use LocalStorage to store the data of the client -->
    <AddDataVue @addData="addNewData" />
    <FactsVue v-model:factsInfos="currentData" />
    <FooterVue />
</template>

<style scoped>

</style>
