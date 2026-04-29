<template>
  <div class="products">
    <!-- Hero Section -->
    <section class="bg-products bg-overlay text-white py-24">
      <div class="container mx-auto px-4 text-center">
        <h1 class="heading h1 mb-6 fade-in">产品中心</h1>
        <p class="text-xl mb-8 fade-in" style="animation-delay: 0.2s;">
          数学教具和益智玩具
        </p>
      </div>
    </section>

    <!-- Products Section -->
    <section class="section bg-white">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 class="heading h2 mb-4 md:mb-0">产品展示</h2>
          <div class="flex flex-col sm:flex-row gap-4">
            <div class="relative">
              <input type="text" placeholder="搜索产品" class="px-4 py-2 rounded-md border border-gray-300 w-full sm:w-64">
              <svg class="w-5 h-5 text-gray-400 absolute right-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <select class="px-4 py-2 rounded-md border border-gray-300">
              <option value="all">全部分类</option>
              <option value="math">数学教具</option>
              <option value="puzzle">益智产品</option>
            </select>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Product 1 -->
          <div class="card hover:shadow-lg transition-all">
            <img src="/picture/展品1.png" alt="几何构建套装" class="w-full h-48 object-cover">
            <div class="p-6">
              <div class="flex justify-between items-center mb-2">
                <h3 class="heading h4">几何构建套装</h3>
                <span class="text-primary-yellow font-bold">199元</span>
              </div>
              <p class="text-gray-600 mb-4">通过搭建不同的几何形状，培养空间思维能力</p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">3-8岁</span>
                <span class="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">数学教具</span>
              </div>
              <div class="flex justify-between items-center">
                <div class="flex space-x-2">
                  <span class="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">安全材质</span>
                  <span class="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">可拼装</span>
                </div>
                <a href="#" class="text-primary-yellow hover:underline">查看详情</a>
              </div>
            </div>
          </div>

          <!-- Product 2 -->
          <div class="card hover:shadow-lg transition-all">
            <img src="/picture/展品2.png" alt="数字逻辑 puzzle" class="w-full h-48 object-cover">
            <div class="p-6">
              <div class="flex justify-between items-center mb-2">
                <h3 class="heading h4">数字逻辑 puzzle</h3>
                <span class="text-primary-yellow font-bold">129元</span>
              </div>
              <p class="text-gray-600 mb-4">通过解决数字谜题，培养逻辑思维能力</p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">6-12岁</span>
                <span class="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">益智产品</span>
              </div>
              <div class="flex justify-between items-center">
                <div class="flex space-x-2">
                  <span class="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">多种难度</span>
                  <span class="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">便携设计</span>
                </div>
                <a href="#" class="text-primary-yellow hover:underline">查看详情</a>
              </div>
            </div>
          </div>

          <!-- Product 3 -->
          <div class="card hover:shadow-lg transition-all">
            <img src="/picture/数学折纸1.jpg" alt="数学折纸套装" class="w-full h-48 object-cover">
            <div class="p-6">
              <div class="flex justify-between items-center mb-2">
                <h3 class="heading h4">数学折纸套装</h3>
                <span class="text-primary-yellow font-bold">89元</span>
              </div>
              <p class="text-gray-600 mb-4">通过折纸学习几何概念，培养空间想象力</p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">4-10岁</span>
                <span class="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">数学教具</span>
              </div>
              <div class="flex justify-between items-center">
                <div class="flex space-x-2">
                  <span class="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">环保纸张</span>
                  <span class="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">教学指导</span>
                </div>
                <a href="#" class="text-primary-yellow hover:underline">查看详情</a>
              </div>
            </div>
          </div>

          <!-- Product 4 -->
          <div class="card hover:shadow-lg transition-all">
            <img src="/picture/数学折纸2.jpg" alt="几何形状积木" class="w-full h-48 object-cover">
            <div class="p-6">
              <div class="flex justify-between items-center mb-2">
                <h3 class="heading h4">几何形状积木</h3>
                <span class="text-primary-yellow font-bold">249元</span>
              </div>
              <p class="text-gray-600 mb-4">通过搭建不同的几何形状，学习几何概念</p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">3-8岁</span>
                <span class="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">数学教具</span>
              </div>
              <div class="flex justify-between items-center">
                <div class="flex space-x-2">
                  <span class="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">安全材质</span>
                  <span class="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">收纳盒</span>
                </div>
                <a href="#" class="text-primary-yellow hover:underline">查看详情</a>
              </div>
            </div>
          </div>

          <!-- Product 5 -->
          <div class="card hover:shadow-lg transition-all">
            <img src="/picture/数学折纸3.jpg" alt="数字游戏棋盘" class="w-full h-48 object-cover">
            <div class="p-6">
              <div class="flex justify-between items-center mb-2">
                <h3 class="heading h4">数字游戏棋盘</h3>
                <span class="text-primary-yellow font-bold">159元</span>
              </div>
              <p class="text-gray-600 mb-4">通过游戏学习数字概念，培养数学思维</p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">5-12岁</span>
                <span class="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">益智产品</span>
              </div>
              <div class="flex justify-between items-center">
                <div class="flex space-x-2">
                  <span class="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">多人游戏</span>
                  <span class="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">便携设计</span>
                </div>
                <a href="#" class="text-primary-yellow hover:underline">查看详情</a>
              </div>
            </div>
          </div>

          <!-- Product 6 -->
          <div class="card hover:shadow-lg transition-all">
            <img src="/picture/数学折纸4.jpg" alt="数学启蒙卡片" class="w-full h-48 object-cover">
            <div class="p-6">
              <div class="flex justify-between items-center mb-2">
                <h3 class="heading h4">数学启蒙卡片</h3>
                <span class="text-primary-yellow font-bold">69元</span>
              </div>
              <p class="text-gray-600 mb-4">通过卡片学习数字和基本数学概念</p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">2-6岁</span>
                <span class="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">数学教具</span>
              </div>
              <div class="flex justify-between items-center">
                <div class="flex space-x-2">
                  <span class="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">双面印刷</span>
                  <span class="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">圆角设计</span>
                </div>
                <a href="#" class="text-primary-yellow hover:underline">查看详情</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Pagination -->
        <div class="flex justify-center mt-12">
          <nav class="flex items-center space-x-2">
            <a href="#" class="px-3 py-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50">上一页</a>
            <a href="#" class="px-3 py-2 rounded-md bg-primary-yellow text-dark font-medium">1</a>
            <a href="#" class="px-3 py-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50">2</a>
            <a href="#" class="px-3 py-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50">3</a>
            <a href="#" class="px-3 py-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50">下一页</a>
          </nav>
        </div>
      </div>
    </section>

    <!-- Core Concepts Section -->
    <section class="section bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="heading h2 text-center mb-12">核心数学概念</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="card p-6 text-center hover:shadow-lg transition-all">
            <div class="w-16 h-16 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
              </svg>
            </div>
            <h3 class="heading h4 mb-2">集合</h3>
            <p class="text-gray-600">培养分类和分组能力</p>
          </div>
          <div class="card p-6 text-center hover:shadow-lg transition-all">
            <div class="w-16 h-16 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="heading h4 mb-2">数感</h3>
            <p class="text-gray-600">建立数字概念和数量关系</p>
          </div>
          <div class="card p-6 text-center hover:shadow-lg transition-all">
            <div class="w-16 h-16 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            </div>
            <h3 class="heading h4 mb-2">图形</h3>
            <p class="text-gray-600">认识形状、对称和几何属性</p>
          </div>
          <div class="card p-6 text-center hover:shadow-lg transition-all">
            <div class="w-16 h-16 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="heading h4 mb-2">测量</h3>
            <p class="text-gray-600">理解长度、面积、体积等概念</p>
          </div>
          <div class="card p-6 text-center hover:shadow-lg transition-all">
            <div class="w-16 h-16 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
              </svg>
            </div>
            <h3 class="heading h4 mb-2">空间关系</h3>
            <p class="text-gray-600">发展空间思维和方向感</p>
          </div>
          <div class="card p-6 text-center hover:shadow-lg transition-all">
            <div class="w-16 h-16 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="heading h4 mb-2">模式</h3>
            <p class="text-gray-600">识别和创造规律</p>
          </div>
          <div class="card p-6 text-center hover:shadow-lg transition-all md:col-span-2 lg:col-span-3">
            <div class="w-16 h-16 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h3 class="heading h4 mb-2">数据分析</h3>
            <p class="text-gray-600">收集、整理和解读数据</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section bg-gradient-primary text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="heading h2 mb-6">更多数学产品</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">
          探索我们的数学教具和益智玩具，让孩子在游戏中学习数学
        </p>
        <a href="#" class="btn btn-outline">
          访问电商平台
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
// Products component
</script>

<style scoped lang="scss">
.products {
  .section {
    scroll-margin-top: 80px;
  }
}
</style>