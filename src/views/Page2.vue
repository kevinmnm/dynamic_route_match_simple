<template>
    <div>
        <page2-nav></page2-nav>
        <page2-comp></page2-comp>
    </div>
</template>

<script>
import page2_comp from "@/components/page2-comp1.vue"
import page2_nav from "@/components/page2-nav.vue"

export default {
    components: {
        "page2-comp": page2_comp,
        "page2-nav": page2_nav
    }
}
</script>

<style>

</style>