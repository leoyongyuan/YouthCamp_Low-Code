<template>
    <div>
        <ComponentWrapper
            v-for="(item,index) in componentData"
            :key="index"
            :config="item"
        />
    </div>
</template>

<script>
import ComponentWrapper from '@/components/Editor/ComponentWrapper'
import { mapState } from 'vuex'

export default {
    name: 'Publish',
    components: { ComponentWrapper },
    data() {
        return {
            
        }
    },
    computed: mapState([
        'componentData',
    ]),
    
}
</script>

<style>

</style>