<template>
  <div>
  	<button
  		@click="onClose"
	/>
    <slot />
  </div>
</template>

<script>
export default {
	props: ['onClose']
}
</script>
