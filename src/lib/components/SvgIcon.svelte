<script>
    // https://javascript.plainenglish.io/how-to-add-customizable-svg-icons-in-svelte-js-app-488648d302c8
    export let fill = "none"
    export let stroke = "#4A5568"
    export let d = ""
    export let width = 24;
    export let height = 24;
    export let style = ""
</script>
    
<svg class={style} width={width} height={height} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path d={d} stroke={stroke} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    
<style>
.icon{
    position: relative;
    display:inline-block;
}
</style>