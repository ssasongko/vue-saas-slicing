<template>
  <div class="w-full h-screen flex bg-[#F8F8F8] overflow-auto md:overflow-hidden background ">
    <div class="relative hidden lg:flex w-0 md:w-2/3 rounded-br-[5em]">
      <div class="absolute left-0 bottom-[-100px] z-20">
        <svg width="418" height="342" viewBox="0 0 418 342" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_bdii_5254_146329)">
            <circle cx="-37.5" cy="428.5" r="326.5" fill="url(#paint0_linear_5254_146329)" />
            <circle cx="-37.5" cy="428.5" r="326.5" fill="url(#paint1_linear_5254_146329)" />
          </g>
          <defs>
            <filter id="filter0_bdii_5254_146329" x="-473" y="0" width="891" height="891" filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="12" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_5254_146329" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha" />
              <feMorphology radius="28" operator="dilate" in="SourceAlpha" result="effect2_dropShadow_5254_146329" />
              <feOffset dx="10" dy="17" />
              <feGaussianBlur stdDeviation="45.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend mode="normal" in2="effect1_backgroundBlur_5254_146329" result="effect2_dropShadow_5254_146329" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_5254_146329" result="shape" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="83" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.576471 0 0 0 0 0.678431 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="shape" result="effect3_innerShadow_5254_146329" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha" />
              <feOffset />
              <feGaussianBlur stdDeviation="50" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="effect3_innerShadow_5254_146329" result="effect4_innerShadow_5254_146329" />
            </filter>
            <linearGradient id="paint0_linear_5254_146329" x1="-297.115" y1="130.787" x2="140.224" y2="721.436"
              gradientUnits="userSpaceOnUse">
              <stop offset="0.216541" stop-color="#0093AD" />
              <stop offset="0.876628" stop-color="#1E2855" />
            </linearGradient>
            <linearGradient id="paint1_linear_5254_146329" x1="-297.115" y1="130.787" x2="140.224" y2="721.436"
              gradientUnits="userSpaceOnUse">
              <stop stop-color="#E22126" />
              <stop offset="0.876628" stop-color="#1E2855" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div class="absolute left-[-50px] bottom-20 z-10 text-white">
        <div class="relative z-20 flex items-center gap-4">
          <div class="green-circle rounded-full flex p-3">
            <div class="w-full h-full rounded-full bg-white flex justify-center items-center p-16">
              <img class="object-cover" src="/images/piala.png">
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <span>Penghargaan Utama</span>
            <p class="font-semibold text-[32px]">IDX Channel 2022</p>
          </div>
        </div>
      </div>

      <div class="mx-12 py-12 z-20">
        <img src="/images/mdl.png">
        <h2 class="mt-2 font-bold text-spacecadet-100 text-[28px]">With Software as a Service (SaaS) Technology, We
          provide a learning platform in collaboration with all organization in Indonesia to realize 9 million Indonesia
          digital
          talents</h2>
      </div>
    </div>

    <div class="h-full w-full lg:w-1/3 flex items-start md:items-center md:rounded-tl-[5em] bg-white overflow-auto">
      <div class="w-full flex flex-col gap-y-4 p-12">
        <h1 class="text-spacecadet-100 text-[28px] font-medium">Create an account</h1>
        <div class="flex flex-col gap-y-3">
          <div class="flex flex-col gap-y-1">
            <div>
              <label class="text-spacecadet-100 text-xs">URL Domain </label>
              <span class="text-red-500 text-xs">*</span>
            </div>
            <div class="flex border py-3 px-2 rounded-md">
              <input class="w-full text-xs !outline-none" placeholder="LoremIpsum" />
              <span class="font-semibold text-[#797F99] text-xs">digilearn.id</span>
            </div>
          </div>
          <div class="flex flex-col gap-y-1">
            <div>
              <label class="text-spacecadet-100 text-xs">Platform Name </label>
              <span class="text-red-500 text-xs">*</span>
            </div>
            <div class="flex border py-3 px-2 rounded-md">
              <input class="w-full text-xs !outline-none" placeholder="LoremIpsum" />
            </div>
          </div>
          <div class="flex flex-col gap-y-1">
            <div>
              <label class="text-spacecadet-100 text-xs">Fullname </label>
              <span class="text-red-500 text-xs">*</span>
            </div>
            <div class="flex border py-3 px-2 rounded-md">
              <input class="w-full text-xs !outline-none" placeholder="LoremIpsum" />
            </div>
          </div>
          <div class="flex flex-col gap-y-1">
            <div>
              <label class="text-spacecadet-100 text-xs">Email </label>
              <span class="text-red-500 text-xs">*</span>
            </div>
            <div class="flex border py-3 px-2 rounded-md">
              <input class="w-full text-xs !outline-none" placeholder="LoremIpsum" />
            </div>
          </div>
          <div class="flex flex-col gap-y-1">
            <div class="flex justify-between items-center">
              <div>
                <label class="text-spacecadet-100 text-xs">Password </label>
                <span class="text-red-500 text-xs">*</span>
              </div>
              <span class="text-virindian-60 text-xs">Forgot Password ?</span>
            </div>
            <div class="flex border py-3 px-2 rounded-md">
              <input class="w-full text-xs !outline-none" placeholder="LoremIpsum" />
            </div>
          </div>
        </div>
        <div>
          <p class="text-sm">By clicking Sign Up, you agree to our <span class="text-virindian-100">Terms</span> and
            that you have read
            our</p>
          <p class="text-sm text-virindian-100">Data User Policy</p>
        </div>
        <div class="flex justify-end">
          <router-link to="content">
            <button
              class="text-sm font-medium w-[160px] bg-virindian-100 py-2.5 px-5 text-white flex items-center justify-center gap-x-2 rounded-md">
              <span class="">Agree & Join</span>
              <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.15817 7.90866L5.65817 11.4087C5.5415 11.5253 5.42484 11.5837 5.24984 11.5837C5.07484 11.5837 4.95817 11.5253 4.8415 11.4087C4.60817 11.1753 4.60817 10.8253 4.8415 10.592L7.93317 7.50033L4.8415 4.40866C4.60817 4.17533 4.60817 3.82533 4.8415 3.59199C5.07484 3.35866 5.42484 3.35866 5.65817 3.59199L9.15817 7.09199C9.3915 7.32533 9.3915 7.67533 9.15817 7.90866Z"
                  fill="#1F2855" />
                <mask id="mask0_5503_9694" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="4" y="3" width="6"
                  height="9">
                  <path
                    d="M9.15817 7.90866L5.65817 11.4087C5.5415 11.5253 5.42484 11.5837 5.24984 11.5837C5.07484 11.5837 4.95817 11.5253 4.8415 11.4087C4.60817 11.1753 4.60817 10.8253 4.8415 10.592L7.93317 7.50033L4.8415 4.40866C4.60817 4.17533 4.60817 3.82533 4.8415 3.59199C5.07484 3.35866 5.42484 3.35866 5.65817 3.59199L9.15817 7.09199C9.3915 7.32533 9.3915 7.67533 9.15817 7.90866Z"
                    fill="white" />
                </mask>
                <g mask="url(#mask0_5503_9694)">
                  <rect y="0.5" width="14" height="14" fill="white" />
                </g>
              </svg>
            </button>
          </router-link>
        </div>
        <div>
          <p class="text-sm">Already have an Account? <span class="text-virindian-100 font-medium text-sm">Login</span>
          </p>
        </div>
        <div class="px-7 py-4 bg-[#E2F8F7] border-2 border-dashed border-[#16B3AC] flex items-center gap-x-2">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd"
              d="M27.75 12C29.8211 12 31.5 10.3211 31.5 8.25C31.5 6.17893 29.8211 4.5 27.75 4.5C25.6789 4.5 24 6.17893 24 8.25C24 10.3211 25.6789 12 27.75 12ZM27.75 31.5C29.8211 31.5 31.5 29.8211 31.5 27.75C31.5 25.6789 29.8211 24 27.75 24C25.6789 24 24 25.6789 24 27.75C24 29.8211 25.6789 31.5 27.75 31.5ZM12 27.75C12 29.8211 10.3211 31.5 8.25 31.5C6.17893 31.5 4.5 29.8211 4.5 27.75C4.5 25.6789 6.17893 24 8.25 24C10.3211 24 12 25.6789 12 27.75Z"
              fill="#16B3AC" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M8.25 12C10.3211 12 12 10.3211 12 8.25C12 6.17893 10.3211 4.5 8.25 4.5C6.17893 4.5 4.5 6.17893 4.5 8.25C4.5 10.3211 6.17893 12 8.25 12ZM15 7C15 6.44772 15.4477 6 16 6H20C20.5523 6 21 6.44772 21 7V8C21 8.55229 20.5523 9 20 9H16C15.4477 9 15 8.55229 15 8V7ZM16 27C15.4477 27 15 27.4477 15 28V29C15 29.5523 15.4477 30 16 30H20C20.5523 30 21 29.5523 21 29V28C21 27.4477 20.5523 27 20 27H16ZM6 16C6 15.4477 6.44772 15 7 15H8C8.55229 15 9 15.4477 9 16V20C9 20.5523 8.55229 21 8 21H7C6.44772 21 6 20.5523 6 20V16ZM28 15C27.4477 15 27 15.4477 27 16V20C27 20.5523 27.4477 21 28 21H29C29.5523 21 30 20.5523 30 20V16C30 15.4477 29.5523 15 29 15H28Z"
              fill="#16B3AC" />
          </svg>
          <div>
            <h5 class="text-sm text-[#3F4254] font-semibold">myDigiLearn Free Trial</h5>
            <h6 class="text-xs text-[#3F4254]">No credit card or commitment required. Cancel anytime.</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.background {
  background-image: url('/images/background.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.green-circle {
  width: 309px;
  height: 309px;
  background: linear-gradient(143.48deg, #0093AD 24.31%, #1E2855 77.43%);
  box-shadow: 10px 17px 91px 28px rgba(0, 0, 0, 0.1), inset 0px 0px 100px rgba(0, 0, 0, 0.25), inset 0px 4px 166px rgba(0, 147, 173, 0.25), inset 0px 4px 16px rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(12px);
}
</style>