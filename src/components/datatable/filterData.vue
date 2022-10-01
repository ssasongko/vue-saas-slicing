<template>
  <div class="bg-white shadow-xl px-4 py-2 rounded">
    <!-- Skill -->
    <div class="flex flex-col gap-4">
      <h1 class="font-bold text-sm text-spacecadet-100">Skill Level</h1>
      <div v-for="(el, i) in dataSkill" :key="i" class="flex items-center gap-2.5">
        <input type="radio" :value="el" name="skill" class="border-[1.5px] border-[#EFEFEF" />
        <p class="font-medium text-sm text-spacecadet-100">
          {{ el[0].toUpperCase() + el.slice(1) }}
        </p>
      </div>
    </div>
    <!-- End Skill -->
    <!-- Type -->
    <div class="flex flex-col gap-4 mt-10">
      <p class="font-bold text-sm text-spacecadet-100">Type</p>
      <div v-for="data in dataType" :key="data" class="flex gap-2.5">
        <input type="checkbox" :value="data" class="border-[1.5px] border-[#EFEFEF]" />
        <p class="font-medium text-sm text-spacecadet-100">
          {{ data }}
        </p>
      </div>
    </div>
    <!-- end Type -->
		<!-- Category -->
    <div class="flex flex-col gap-4 mt-10">
      <p class="font-bold text-sm text-spacecadet-100">Category</p>
      <div v-for="data in dataType" :key="data" class="flex gap-2.5">
        <input type="checkbox" :value="data" class="border-[1.5px] border-[#EFEFEF]" />
        <p class="font-medium text-sm text-spacecadet-100">
          {{ data }}
        </p>
      </div>
    </div>
    <!-- end Type -->
  </div>
</template>
<script>
export default {
  name: "FilterData",
  data() {
    return {
      dataSkill: ["beginner", "intermediate", "advanced"],
      dataType: ["Video", "Podcast", "Webinar", "Articles", "Coourse", "Karya Tulis", "Journey", "Program", "Survey", "Case Study", "Digilib"],
			dataCategories: ["Digital Strategy, Transformer & Investment", "Digital Network & Connectivity", "Digital Technology, Data & Platform", "Digital security & Business Sustainability", "Governance, Risk & Compliance", "Leading People & Organization", "Digital Content & Service", "Corporate Enabler", "SurLeading Businessey", "Health", "Investment"],
    };
  },
};
</script>
<style></style>
