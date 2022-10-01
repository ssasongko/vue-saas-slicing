<template>
  <div class="bg-white flex flex-col gap-y-5 p-6 w-[60%] rounded relative">
    <div class="flex flex-col justify-center items-center gap-y-1">
      <h1 class="text-spacecadet-100 text-lg-2">Upgrade Plan</h1>
      <span class="text-spacecadet-60">Choose the best plan for user.</span>
    </div>
    <div class="flex flex-col items-center">
      <div class="flex gap-x-3">
        <span class="text-sm font-medium text-gray-900">Monthly</span>
        <label
          for="default-toggle"
          class="inline-flex relative items-center cursor-pointer"
        >
          <input
            type="checkbox"
            value=""
            id="default-toggle"
            class="sr-only peer"
          />
          <div
            class="w-11 h-6 p-2 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300-blue-800 rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-virindian-100"
          ></div>
        </label>
        <span class="text-sm font-medium text-gray-900">Anually</span>
      </div>
    </div>
    <div class="flex flex-col gap-y-2">
      <div class="flex flex-col gap-y-1">
        <div>
          <label class="text-spacecadet-100 text-xs">Choose Plan </label>
          <span class="text-red-500 text-xs">*</span>
        </div>
        <div class="flex border py-3 px-2 rounded-md">
          <select class="w-full text-xs !outline-none">
            <option>Standard - Rp 120.000/month/user (VPAC)</option>
            <option>Profesional - Rp 240.000/month/user (All)</option>
          </select>
        </div>
      </div>
      <div class="flex flex-col gap-y-1">
        <div>
          <label class="text-spacecadet-100 text-xs">User </label>
          <span class="text-red-500 text-xs">*</span>
        </div>
        <div class="flex border py-3 px-2 rounded-md">
          <input class="w-full text-xs !outline-none" value="3" type="number" />
        </div>
      </div>
    </div>
    <hr class="border border-spacecadet-100" />
    <div class="flex flex-row gap-x-2 gap-y-2">
      <div class="w-1/2 flex flex-col">
        <h3 class="font-semibold text-sm text-spacecadet-100">
          User current plan is Free plan
        </h3>
        <div class="flex gap-x-2">
          <span class="self-start text-virindian-100">Rp </span>
          <span class="self-center text-virindian-100 text-[49px]">0 </span>
          <span class="self-end text-spacecadet-60">/month</span>
        </div>
      </div>
      <div class="w-1/2 flex flex-col gap-y-2">
        <h3 class="font-semibold text-sm text-spacecadet-100">Selected Plan</h3>
        <div class="flex gap-x-2">
          <span class="self-start text-virindian-100">Rp </span>
          <span class="self-center text-virindian-100 text-[49px]"
            >120.0000
          </span>
          <span class="self-end text-spacecadet-60">/ month / User</span>
        </div>
      </div>
    </div>
    <hr class="border border-spacecadet-100" />
    <div class="flex flex-row gap-x-2 gap-y-4">
      <div class="w-1/2 flex flex-col shadow p-[15px] rounded justify-between">
        <h3 class="font-semibold text-spacecadet-100 text-[18px]">
          Price Details
        </h3>
        <div class="flex justify-between text-sm">
          <span class="text-spacecadet-60">Plan Price /month/user</span>
          <span class="text-spacecadet-100 font-semibold">Rp 120.000</span>
        </div>
        <div class="flex justify-between text-sm">
          <span class="text-spacecadet-60">Plan Payment</span>
          <span class="text-spacecadet-100 font-semibold">12 month</span>
        </div>
        <div class="flex justify-between text-sm">
          <span class="text-spacecadet-60">User</span>
          <span class="text-spacecadet-100 font-semibold">3 user</span>
        </div>
        <hr class="mt-2 text-[#B9B9C3]" />
        <div class="flex justify-between text-sm">
          <span class="text-spacecadet-100">Amounth Payable</span>
          <span class="text-[#0093AD]">Rp 4.320.000</span>
        </div>
      </div>
      <div
        class="w-1/2 flex flex-col gap-y-2 shadow p-[15px] rounded justify-between"
      >
        <h3 class="font-semibold text-spacecadet-100 text-[18px]">
          Payment Method
        </h3>
        <div class="flex flex-col gap-y-1">
          <div>
            <label class="text-spacecadet-100 text-xs">Payment Method </label>
            <span class="text-red-500 text-xs">*</span>
          </div>
          <div class="flex border py-3 px-2 rounded-md">
            <select class="w-full text-xs !outline-none">
              <option>Virtual Account</option>
              <option>Transfer Bank</option>
            </select>
          </div>
        </div>
        <div class="flex flex-col gap-y-1">
          <div>
            <label class="text-spacecadet-100 text-xs">Choose Plan </label>
            <span class="text-red-500 text-xs">*</span>
          </div>
          <div class="flex border py-3 px-2 rounded-md">
            <select class="w-full text-xs !outline-none">
              <option>Bank Mandiri</option>
              <option>Bank BCA</option>
            </select>
          </div>
        </div>
        <div class="flex flex-col">
          <span class="text-[#797F99] text-xs">Virtual Account</span>
          <span class="text-[#0093AD] text-lg">097237687162347</span>
        </div>
      </div>
    </div>
    <button class="bg-[#0093AD] text-white rounded p-[10px]">Purchase</button>
    <span
      class="bg-white shadow text-center rounded px-2 absolute right-[-10px] top-[-10px] cursor-pointer"
    >
      x
    </span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
