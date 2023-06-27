<template>
    <section id="facts">
        <h2>Facts</h2>
        <div>
            <article class="facts-section">
                <h3>Current weight (in kg)</h3>
                <p>{{ factsInfos?.weight }}</p>
            </article>
            <article class="facts-section">
                <h3>Current BMI</h3>
                <p>{{ factsInfos?.bmi }}</p>
            </article>
            <article class="facts-section">
                <h3>Your weight history</h3>
                <button>
                    Show history
                </button>
            </article>
        </div>
    </section>
</template>

<script setup lang="ts">
    import { ref, watch } from 'vue'

    import { FactsInfos } from '@/modules/FactsInfos'

    const props = defineProps({
        factsInfos: FactsInfos
    })

    watch(props, () => {
        console.log(props.factsInfos);
        
    })
</script>

<style scoped>
    #facts h2 {
        text-align: left;
    }
    #facts {
        min-width: 45%;
    }
    #facts div {
        min-width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        grid-gap: 2rem;
        justify-items: center;
    }
    .facts-section {
        margin: 2%;
        display: flex;
        flex-direction: column;
    }
</style>