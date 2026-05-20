<template>
  <div class="faq">
    <!-- Hero Section -->
    <section class="bg-faq bg-overlay text-white py-16 md:py-24">
      <div class="container mx-auto px-4 text-center">
        <h1 class="heading h1 mb-4 md:mb-6 fade-in">常见问题</h1>
        <p class="text-lg md:text-xl mb-6 md:mb-8 fade-in" style="animation-delay: 0.2s;">
          解答您的疑问
        </p>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <!-- Exhibition FAQ -->
          <div class="mb-8 md:mb-12">
            <h2 class="heading h3 mb-4 md:mb-6">展览相关</h2>
            <div class="space-y-3 md:space-y-4">
              <div class="border border-gray-200 rounded-lg overflow-hidden">
                <button class="w-full px-4 md:px-6 py-3 md:py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center" @click="toggleFaq(1)">
                  <span class="font-medium text-sm md:text-base pr-2">巡展是如何安排的？</span>
                  <svg class="w-5 h-5 text-gray-500 transition-transform flex-shrink-0" :class="{ 'transform rotate-180': faqOpen[1] }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div v-if="faqOpen[1]" class="px-4 md:px-6 py-3 md:py-4 border-t border-gray-200">
                  <p class="text-gray-600 text-sm md:text-base">
                    我们采用巡展模式，每个展览地点和时间不同，请关注官网或微信公众号获取最新巡展信息。
                  </p>
                </div>
              </div>
              <div class="border border-gray-200 rounded-lg overflow-hidden">
                <button class="w-full px-4 md:px-6 py-3 md:py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center" @click="toggleFaq(2)">
                  <span class="font-medium text-sm md:text-base pr-2">展览如何预约？</span>
                  <svg class="w-5 h-5 text-gray-500 transition-transform flex-shrink-0" :class="{ 'transform rotate-180': faqOpen[2] }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div v-if="faqOpen[2]" class="px-4 md:px-6 py-3 md:py-4 border-t border-gray-200">
                  <p class="text-gray-600 text-sm md:text-base">
                    免费展览可直接到场参观，付费展览请通过官网预约或联系工作人员获取预约方式。
                  </p>
                </div>
              </div>
              <div class="border border-gray-200 rounded-lg overflow-hidden">
                <button class="w-full px-4 md:px-6 py-3 md:py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center" @click="toggleFaq(3)">
                  <span class="font-medium text-sm md:text-base pr-2">展览适合什么年龄段的孩子？</span>
                  <svg class="w-5 h-5 text-gray-500 transition-transform flex-shrink-0" :class="{ 'transform rotate-180': faqOpen[3] }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div v-if="faqOpen[3]" class="px-4 md:px-6 py-3 md:py-4 border-t border-gray-200">
                  <p class="text-gray-600 text-sm md:text-base">
                    展览适合3-12岁的孩子，不同展区有不同的难度级别，适合不同年龄段的孩子。
                  </p>
                </div>
              </div>
              <div class="border border-gray-200 rounded-lg overflow-hidden">
                <button class="w-full px-4 md:px-6 py-3 md:py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center" @click="toggleFaq(4)">
                  <span class="font-medium text-sm md:text-base pr-2">展览门票价格是多少？</span>
                  <svg class="w-5 h-5 text-gray-500 transition-transform flex-shrink-0" :class="{ 'transform rotate-180': faqOpen[4] }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div v-if="faqOpen[4]" class="px-4 md:px-6 py-3 md:py-4 border-t border-gray-200">
                  <p class="text-gray-600 text-sm md:text-base">
                    展览采用混合模式，在科技馆里是免费的，在商业空间里是付费的，具体价格请关注当地展览信息。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Product FAQ -->
          <div class="mb-8 md:mb-12">
            <h2 class="heading h3 mb-4 md:mb-6">产品相关</h2>
            <div class="space-y-3 md:space-y-4">
              <div class="border border-gray-200 rounded-lg overflow-hidden">
                <button class="w-full px-4 md:px-6 py-3 md:py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center" @click="toggleFaq(5)">
                  <span class="font-medium text-sm md:text-base pr-2">产品在哪里购买？</span>
                  <svg class="w-5 h-5 text-gray-500 transition-transform flex-shrink-0" :class="{ 'transform rotate-180': faqOpen[5] }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div v-if="faqOpen[5]" class="px-4 md:px-6 py-3 md:py-4 border-t border-gray-200">
                  <p class="text-gray-600 text-sm md:text-base">
                    我们的产品在各大电商平台均有销售，您可以通过产品详情页跳转至购买链接。
                  </p>
                </div>
              </div>
              <div class="border border-gray-200 rounded-lg overflow-hidden">
                <button class="w-full px-4 md:px-6 py-3 md:py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center" @click="toggleFaq(6)">
                  <span class="font-medium text-sm md:text-base pr-2">产品适合什么年龄段的孩子？</span>
                  <svg class="w-5 h-5 text-gray-500 transition-transform flex-shrink-0" :class="{ 'transform rotate-180': faqOpen[6] }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div v-if="faqOpen[6]" class="px-4 md:px-6 py-3 md:py-4 border-t border-gray-200">
                  <p class="text-gray-600 text-sm md:text-base">
                    我们的产品有不同的年龄段设计，从2岁到12岁都有适合的产品，请查看产品详情页的年龄建议。
                  </p>
                </div>
              </div>
              <div class="border border-gray-200 rounded-lg overflow-hidden">
                <button class="w-full px-4 md:px-6 py-3 md:py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center" @click="toggleFaq(7)">
                  <span class="font-medium text-sm md:text-base pr-2">产品是否有质量保证？</span>
                  <svg class="w-5 h-5 text-gray-500 transition-transform flex-shrink-0" :class="{ 'transform rotate-180': faqOpen[7] }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div v-if="faqOpen[7]" class="px-4 md:px-6 py-3 md:py-4 border-t border-gray-200">
                  <p class="text-gray-600 text-sm md:text-base">
                    我们的产品均通过严格的质量检测，符合国家安全标准，如有质量问题，请联系客服处理。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Cooperation FAQ -->
          <div class="mb-8 md:mb-12">
            <h2 class="heading h3 mb-4 md:mb-6">合作相关</h2>
            <div class="space-y-3 md:space-y-4">
              <div class="border border-gray-200 rounded-lg overflow-hidden">
                <button class="w-full px-4 md:px-6 py-3 md:py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center" @click="toggleFaq(8)">
                  <span class="font-medium text-sm md:text-base pr-2">如何与PlayMath合作举办展览？</span>
                  <svg class="w-5 h-5 text-gray-500 transition-transform flex-shrink-0" :class="{ 'transform rotate-180': faqOpen[8] }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div v-if="faqOpen[8]" class="px-4 md:px-6 py-3 md:py-4 border-t border-gray-200">
                  <p class="text-gray-600 text-sm md:text-base">
                    我们欢迎科技馆、学校、商业空间等机构合作，请通过联系方式与我们联系，我们将提供详细的合作方案。
                  </p>
                </div>
              </div>
              <div class="border border-gray-200 rounded-lg overflow-hidden">
                <button class="w-full px-4 md:px-6 py-3 md:py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center" @click="toggleFaq(9)">
                  <span class="font-medium text-sm md:text-base pr-2">如何成为PlayMath的合作伙伴？</span>
                  <svg class="w-5 h-5 text-gray-500 transition-transform flex-shrink-0" :class="{ 'transform rotate-180': faqOpen[9] }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div v-if="faqOpen[9]" class="px-4 md:px-6 py-3 md:py-4 border-t border-gray-200">
                  <p class="text-gray-600 text-sm md:text-base">
                    我们欢迎各类合作伙伴，包括教育机构、电商平台、媒体等，请通过联系方式与我们联系，我们将提供详细的合作方案。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Social Mission FAQ -->
          <div>
            <h2 class="heading h3 mb-6">公益相关</h2>
            <div class="space-y-4">
              <div class="border border-gray-200 rounded-lg overflow-hidden">
                <button class="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center" @click="toggleFaq(10)">
                  <span class="font-medium">PlayMath的社会使命是什么？</span>
                  <svg class="w-5 h-5 text-gray-500 transition-transform" :class="{ 'transform rotate-180': faqOpen[10] }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div v-if="faqOpen[10]" class="px-6 py-4 border-t border-gray-200">
                  <p class="text-gray-600">
                    PlayMath的社会使命是"让每一个孩子，都能触摸到数学之美"，我们通过与公立学校、社区图书馆和公益教育机构合作，提供免费或优惠的数学教育资源。
                  </p>
                </div>
              </div>
              <div class="border border-gray-200 rounded-lg overflow-hidden">
                <button class="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center" @click="toggleFaq(11)">
                  <span class="font-medium">如何参与PlayMath的公益活动？</span>
                  <svg class="w-5 h-5 text-gray-500 transition-transform" :class="{ 'transform rotate-180': faqOpen[11] }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div v-if="faqOpen[11]" class="px-6 py-4 border-t border-gray-200">
                  <p class="text-gray-600">
                    您可以通过关注我们的公众号、参与我们的社区活动、或联系我们了解如何参与公益活动。我们欢迎志愿者和合作伙伴共同推动数学教育的普及。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="section bg-gray-50">
      <div class="container mx-auto px-4 text-center">
        <h2 class="heading h2 mb-4 md:mb-6">还有其他问题？</h2>
        <p class="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">
          如果您有其他问题，欢迎联系我们，我们将为您提供详细的解答
        </p>
        <router-link to="/contact" class="btn btn-primary">
          联系我们
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const faqOpen = ref({
  1: false,
  2: false,
  3: false,
  4: false,
  5: false,
  6: false,
  7: false,
  8: false,
  9: false,
  10: false,
  11: false
})

const toggleFaq = (id) => {
  faqOpen.value[id] = !faqOpen.value[id]
}
</script>

<style scoped lang="scss">
.faq {
  .section {
    scroll-margin-top: 80px;
  }
}
</style>