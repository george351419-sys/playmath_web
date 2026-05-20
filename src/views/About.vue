<template>
  <div class="about">
    <!-- Hero Section -->
    <section class="bg-about bg-overlay text-white py-16 md:py-24">
      <div class="container mx-auto px-4 text-center">
        <h1 class="heading h1 mb-4 md:mb-6 fade-in">关于我们</h1>
        <p class="text-lg md:text-xl mb-6 md:mb-8 fade-in" style="animation-delay: 0.2s;">
          PlayMath - 像数学家一样玩
        </p>
      </div>
    </section>

    <!-- Brand Story Section -->
    <section class="section bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div class="fade-in">
            <img src="/picture/红桃皇后的宫殿1.jpg" alt="PlayMath品牌故事" class="rounded-lg shadow-lg w-full h-48 sm:h-64 md:h-auto object-cover">
          </div>
          <div class="fade-in" style="animation-delay: 0.2s;">
            <h2 class="heading h2 mb-4 md:mb-6">品牌故事</h2>
            <p class="text-gray-600 mb-4 text-base md:text-lg">
              PlayMath诞生于对数学教育的热爱和创新。我们相信，数学不应该是抽象和枯燥的，而应该是生动有趣的。
            </p>
            <p class="text-gray-600 mb-4 text-base md:text-lg">
              通过展览、教具和玩具等多种形式，我们将抽象的数学概念转化为可视化、可互动的体验，
              激发儿童对数学的兴趣和探索欲。
            </p>
            <p class="text-gray-600 text-base md:text-lg">
              我们的使命是让每一个孩子都能触摸到数学之美，培养他们的数学思维和解决问题的能力。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Educational Philosophy Section -->
    <section class="section bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="heading h2 text-center mb-8 md:mb-12">教育理念</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div class="card p-4 sm:p-6 hover:shadow-lg transition-all">
            <div class="w-12 h-12 sm:w-16 sm:h-16 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg class="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h3 class="heading h4 mb-2 sm:mb-3 text-center">寓教于乐</h3>
            <p class="text-gray-600 text-center text-sm sm:text-base">
              通过游戏和互动，让孩子在快乐中学习数学，培养学习兴趣
            </p>
          </div>
          <div class="card p-4 sm:p-6 hover:shadow-lg transition-all">
            <div class="w-12 h-12 sm:w-16 sm:h-16 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg class="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 class="heading h4 mb-2 sm:mb-3 text-center">创新体验</h3>
            <p class="text-gray-600 text-center text-sm sm:text-base">
              结合现代技术和教育理念，创造独特的数学学习体验
            </p>
          </div>
          <div class="card p-4 sm:p-6 hover:shadow-lg transition-all sm:col-span-2 lg:col-span-1">
            <div class="w-12 h-12 sm:w-16 sm:h-16 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg class="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 class="heading h4 mb-2 sm:mb-3 text-center">亲子互动</h3>
            <p class="text-gray-600 text-center text-sm sm:text-base">
              鼓励家长参与孩子的数学学习，建立良好的亲子关系
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Social Mission Section -->
    <section class="section bg-gradient-primary text-white">
      <div class="container mx-auto px-4">
        <h2 class="heading h2 text-center mb-8 md:mb-12">品牌社会使命</h2>
        <p class="text-lg md:text-xl text-center mb-8 md:mb-12 max-w-3xl mx-auto">
          让每一个孩子，都能触摸到数学之美
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div class="bg-white bg-opacity-10 backdrop-blur-sm p-4 sm:p-6 rounded-lg">
            <h3 class="heading h4 mb-3 md:mb-4">公立学校合作</h3>
            <p class="mb-4 text-sm sm:text-base">
              我们对公立学校提供优惠以及免费的讲座或工作坊，
              帮助学校丰富数学教学内容和方法。
            </p>
            <ul class="space-y-2">
              <li class="flex items-center text-sm sm:text-base">
                <svg class="w-5 h-5 text-primary-yellow mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                免费数学讲座
              </li>
              <li class="flex items-center text-sm sm:text-base">
                <svg class="w-5 h-5 text-primary-yellow mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                优惠展览门票
              </li>
              <li class="flex items-center text-sm sm:text-base">
                <svg class="w-5 h-5 text-primary-yellow mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                教学资源支持
              </li>
            </ul>
          </div>
          <div class="bg-white bg-opacity-10 backdrop-blur-sm p-4 sm:p-6 rounded-lg">
            <h3 class="heading h4 mb-3 md:mb-4">社区合作</h3>
            <p class="mb-4 text-sm sm:text-base">
              长期与社区图书馆、公益教育机构合作，提供免费内容，
              让更多孩子受益于优质数学教育。
            </p>
            <ul class="space-y-2">
              <li class="flex items-center text-sm sm:text-base">
                <svg class="w-5 h-5 text-primary-yellow mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                免费数学游戏活动
              </li>
              <li class="flex items-center text-sm sm:text-base">
                <svg class="w-5 h-5 text-primary-yellow mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                社区展览
              </li>
              <li class="flex items-center text-sm sm:text-base">
                <svg class="w-5 h-5 text-primary-yellow mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                公益教育资源
              </li>
            </ul>
          </div>
          <div class="bg-white bg-opacity-10 backdrop-blur-sm p-4 sm:p-6 rounded-lg">
            <h3 class="heading h4 mb-3 md:mb-4">教育公平</h3>
            <p class="mb-4 text-sm sm:text-base">
              致力于缩小教育资源差距，让更多孩子受益于优质数学教育，
              不论他们的背景和条件如何。
            </p>
            <ul class="space-y-2">
              <li class="flex items-center text-sm sm:text-base">
                <svg class="w-5 h-5 text-primary-yellow mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                资源共享平台
              </li>
              <li class="flex items-center text-sm sm:text-base">
                <svg class="w-5 h-5 text-primary-yellow mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                公益活动
              </li>
              <li class="flex items-center text-sm sm:text-base">
                <svg class="w-5 h-5 text-primary-yellow mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                奖学金计划
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// About component
</script>

<style scoped lang="scss">
.about {
  .section {
    scroll-margin-top: 80px;
  }
}
</style>