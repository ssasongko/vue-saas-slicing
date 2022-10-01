<template>
  <div class="bg-white shadow-lg m-6 rounded-l-lg z-50">
		<div class="flex justify-between items-center mx-6 md:mx-24 py-3">
			<img src="/images/mdl.png" class="w-[150px] md:w-auto" alt="logo">
			<router-link :to="$route.meta.nextStep" exact>Skip to next step ></router-link>
		</div>
	</div>
</template>

<script>
export default {};
</script>
