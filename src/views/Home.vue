<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="bg-home bg-overlay text-white py-24">
      <div class="container mx-auto px-4 text-center">
        <h1 class="heading h1 mb-1 fade-in">
          <span class="text-primary-yellow">PlayMath</span>
        </h1>
        <p class="text-2xl md:text-3xl mb-8 fade-in" style="animation-delay: 0.2s;">
          像数学家一样玩
        </p>
        <p class="text-lg mb-12 max-w-2xl mx-auto fade-in" style="animation-delay: 0.4s;">
          让每个人都能触摸到数学之美，用数学思维乐享生活
        </p>
        <div class="flex flex-col md:flex-row justify-center gap-4 fade-in" style="animation-delay: 0.6s;">
          <router-link to="/exhibition" class="btn btn-primary">
            探索数学展
          </router-link>
          <router-link to="/products" class="btn btn-outline">
            浏览产品
          </router-link>
        </div>
      </div>
    </section>

    <!-- Exhibition Section -->
    <section class="section bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="heading h2 text-center mb-12">数学展</h2>

        <!-- Carousel -->
        <div class="mb-16">
          <div class="relative overflow-hidden rounded-lg shadow-lg">
            <div class="carousel-container flex transition-transform duration-500 ease-in-out" ref="carouselContainer">

              <div class="carousel-item min-w-full">
                <img src="/picture/展览门头.jpg" alt="展览门头" class="w-full h-96 object-cover">
              </div>
              <div class="carousel-item min-w-full">
                <img src="/picture/奇偶数蘑菇园1.jpg" alt="奇偶数蘑菇园" class="w-full h-96 object-cover">
              </div>
              <div class="carousel-item min-w-full">
                <img src="/picture/数学艺术画廊.jpg" alt="数学艺术画廊" class="w-full h-96 object-cover">
              </div>
              <div class="carousel-item min-w-full">
                <img src="/picture/红桃皇后的宫殿1.jpg" alt="红桃皇后的宫殿" class="w-full h-96 object-cover">
              </div>
              <div class="carousel-item min-w-full">
                <img src="/picture/疯帽子茶话会.jpg" alt="疯帽子茶话会" class="w-full h-96 object-cover">
              </div>
              <div class="carousel-item min-w-full">
                <img src="/picture/MR508901.jpg" alt="数学折纸" class="w-full h-96 object-cover">
              </div>
              <div class="carousel-item min-w-full">
                <img src="/picture/奇幻森林.jpg" alt="奇幻森林" class="w-full h-96 object-cover">
              </div>
            </div>
            <button class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center" @click="prevSlide">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <button class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center" @click="nextSlide">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
            <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              <button v-for="(slide, index) in slides" :key="index" class="w-3 h-3 rounded-full" :class="activeSlide === index ? 'bg-primary-yellow' : 'bg-white/60'" @click="goToSlide(index)"></button>
            </div>
          </div>
        </div>

        <!-- Exhibition Highlights -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="fade-in">
            <img src="/picture/展览入口.jpg" alt="爱丽丝漫游数学王国" class="rounded-lg shadow-lg w-full h-auto">
          </div>
          <div class="fade-in" style="animation-delay: 0.2s;">
            <h3 class="heading h3 mb-6">爱丽丝漫游数学王国</h3>
            <p class="text-gray-600 text-lg mb-8 leading-relaxed">
              "爱丽丝漫游数学王国"将经典童话故事与数学探索完美融合，我们将跟随爱丽丝的脚步，通过互动装置、艺术创作和游戏挑战，发现数学的乐趣与奥秘。
            </p>
            <ul class="space-y-2 mb-10">
              <li class="flex items-start">
                <svg class="w-6 h-6 text-primary-yellow mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">儿童友好的数学艺术展</span>
              </li>
              <li class="flex items-start">
                <svg class="w-6 h-6 text-primary-yellow mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">故事情景导入</span>
              </li>
              <li class="flex items-start">
                <svg class="w-6 h-6 text-primary-yellow mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">沉浸式互动体验</span>
              </li>
            </ul>
            <router-link to="/exhibition" class="btn btn-primary">
              了解更多
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Workshop Activities Section -->
    <section class="section bg-white">
      <div class="container mx-auto px-4">
        <h2 class="heading h2 text-center mb-12">工作坊与活动</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="card overflow-hidden hover:shadow-lg transition-all">
            <img src="/picture/workshop1.jpeg" alt="工作坊活动1" class="w-full h-64 object-cover">
            <div class="p-6">
              <h3 class="heading h4 mb-2">马丁加德纳·数学工作坊</h3>
              <p class="text-gray-600">通过折纸艺术学习几何图形和空间关系，发挥创意的同时培养数学思维</p>
            </div>
          </div>
          <div class="card overflow-hidden hover:shadow-lg transition-all">
            <img src="/picture/workshop2.jpeg" alt="工作坊活动2" class="w-full h-64 object-cover">
            <div class="p-6">
              <h3 class="heading h4 mb-2">数学游戏互动</h3>
              <p class="text-gray-600">通过趣味数学游戏，激发孩子对数学的兴趣和探索欲望</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Products Section -->
    <section class="section bg-white">
      <div class="container mx-auto px-4">
        <h2 class="heading h2 text-center mb-12">产品中心</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="card hover:shadow-lg transition-all">
            <img src="/picture/展品1.png" alt="几何构建套装" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="heading h4 mb-2">几何构建套装</h3>
              <p class="text-gray-600 mb-4">通过搭建不同的几何形状，培养空间思维能力</p>
              <router-link to="/products" class="text-primary-yellow hover:underline">查看详情</router-link>
            </div>
          </div>
          <div class="card hover:shadow-lg transition-all">
            <img src="/picture/展品2.png" alt="数字逻辑 puzzle" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="heading h4 mb-2">数字逻辑 puzzle</h3>
              <p class="text-gray-600 mb-4">通过解决数字谜题，培养逻辑思维能力</p>
              <router-link to="/products" class="text-primary-yellow hover:underline">查看详情</router-link>
            </div>
          </div>
          <div class="card hover:shadow-lg transition-all">
            <img src="/picture/product-set.jpeg" alt="数学教具套装" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="heading h4 mb-2">数学教具套装</h3>
              <p class="text-gray-600 mb-4">丰富的数学教具，帮助孩子直观理解数学概念</p>
              <router-link to="/products" class="text-primary-yellow hover:underline">查看详情</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Social Mission Section -->
    <section class="section bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="heading h2 mb-4 text-gray-800">品牌社会使命</h2>
          <p class="text-xl max-w-2xl mx-auto text-gray-600">
            让每一个孩子，都能触摸到数学之美
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
            <div class="w-16 h-16 bg-primary-yellow rounded-full flex items-center justify-center mb-6">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h3 class="heading h4 mb-3 text-gray-800">公立学校合作</h3>
            <p class="text-gray-600">对公立学校提供优惠以及免费的讲座或工作坊</p>
          </div>
          <div class="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
            <div class="w-16 h-16 bg-secondary-blue rounded-full flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 class="heading h4 mb-3 text-gray-800">社区合作</h3>
            <p class="text-gray-600">长期与社区图书馆、公益教育机构合作，提供免费内容</p>
          </div>
          <div class="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
            <div class="w-16 h-16 bg-accent-green rounded-full flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="heading h4 mb-3 text-gray-800">教育公平</h3>
            <p class="text-gray-600">致力于缩小教育资源差距，让更多孩子受益于优质数学教育</p>
          </div>
        </div>
        <div class="text-center mt-12">
          <router-link to="/about" class="btn btn-primary">
            了解更多
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const carouselContainer = ref(null)
const activeSlide = ref(0)
const slides = ref([1, 2, 3, 4, 5, 6, 7, 8])
let interval = null

const updateCarousel = () => {
  if (carouselContainer.value) {
    carouselContainer.value.style.transform = `translateX(-${activeSlide.value * 100}%)`
  }
}

const nextSlide = () => {
  activeSlide.value = (activeSlide.value + 1) % slides.value.length
  updateCarousel()
}

const prevSlide = () => {
  activeSlide.value = (activeSlide.value - 1 + slides.value.length) % slides.value.length
  updateCarousel()
}

const goToSlide = (index) => {
  activeSlide.value = index
  updateCarousel()
}

onMounted(() => {
  // 自动轮播
  interval = setInterval(nextSlide, 5000)
})

onUnmounted(() => {
  // 清除定时器
  if (interval) {
    clearInterval(interval)
  }
})
</script>

<style scoped lang="scss">
.home {
  .section {
    scroll-margin-top: 80px;
  }
}
</style>
