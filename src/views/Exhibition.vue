<template>
  <div class="exhibition">
    <!-- Hero Section -->
    <section class="bg-exhibition bg-overlay text-white py-24">
      <div class="container mx-auto px-4 text-center">
        <h1 class="heading h1 mb-6 fade-in">数学展</h1>
        <p class="text-xl mb-8 fade-in" style="animation-delay: 0.2s;">
          爱丽丝漫游数学王国
        </p>
      </div>
    </section>

    <!-- Exhibition Introduction -->
    <section class="section bg-white">
      <div class="container mx-auto px-4">
        <h2 class="heading h2 text-center mb-12">展览介绍</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div class="fade-in">
            <img src="/picture/展览门头.jpg" alt="爱丽丝漫游数学王国" class="rounded-lg shadow-lg w-full h-[400px] object-cover">
          </div>
          <div class="fade-in" style="animation-delay: 0.2s;">
            <p class="text-gray-600 text-lg mb-6 leading-relaxed">
              你有没有想过，如果爱丽丝掉进兔子洞时，手里拿着一本数学书，会发生什么奇妙的事情？<br><br>
              "爱丽丝漫游数学王国"将经典童话故事与数学探索完美融合，带来一场前所未有的沉浸式数学体验。<br><br>
              我们将跟随爱丽丝的脚步，通过互动装置、艺术创作和游戏挑战，发现数学的乐趣与奥秘。
            </p>
            <div class="flex flex-wrap gap-3 mb-6">
              <span class="px-4 py-2 bg-primary-yellow text-dark rounded-full text-sm font-medium shadow-sm">
                儿童友好
              </span>
              <span class="px-4 py-2 bg-secondary-blue text-white rounded-full text-sm font-medium shadow-sm">
                互动体验
              </span>
              <span class="px-4 py-2 bg-accent-green text-white rounded-full text-sm font-medium shadow-sm">
                教育价值
              </span>
              <span class="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-medium shadow-sm">
                故事化设计
              </span>
            </div>
            <div class="grid grid-cols-3 gap-4">
              <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center hover:shadow-lg transition-all border border-blue-200">
                <p class="text-4xl font-bold text-secondary-blue mb-2">8+</p>
                <p class="text-gray-600 text-sm">主题展区</p>
              </div>
              <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center hover:shadow-lg transition-all border border-blue-200">
                <p class="text-4xl font-bold text-secondary-blue mb-2">50+</p>
                <p class="text-gray-600 text-sm">互动装置</p>
              </div>
              <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center hover:shadow-lg transition-all border border-blue-200">
                <p class="text-4xl font-bold text-secondary-blue mb-2">3岁+</p>
                <p class="text-gray-600 text-sm">适龄儿童</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- exhibition Highlights -->
    <section class="section bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="heading h2 text-center mb-12">展览亮点</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="card p-6 hover:shadow-lg transition-all">
            <div class="w-16 h-16 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h3 class="heading h4 mb-3 text-center">儿童友好的数学艺术展</h3>
            <p class="text-gray-600 text-center">
              符合儿童认知发展规律，循序渐进，启发式提问
            </p>
          </div>
          <div class="card p-6 hover:shadow-lg transition-all">
            <div class="w-16 h-16 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h3 class="heading h4 mb-3 text-center">故事情景导入</h3>
            <p class="text-gray-600 text-center">
              通过爱丽丝梦游仙境的故事背景，将数学概念融入故事情节
            </p>
          </div>
          <div class="card p-6 hover:shadow-lg transition-all">
            <div class="w-16 h-16 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h3 class="heading h4 mb-3 text-center">沉浸式体验</h3>
            <p class="text-gray-600 text-center">
              全感官沉浸式解密，让数学可以看得到
            </p>
          </div>
          <div class="card p-6 hover:shadow-lg transition-all">
            <div class="w-16 h-16 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h3 class="heading h4 mb-3 text-center">互动式体验</h3>
            <p class="text-gray-600 text-center">
              多种互动道具，让数学可以摸得到
            </p>
          </div>
          <div class="card p-6 hover:shadow-lg transition-all">
            <div class="w-16 h-16 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h3 class="heading h4 mb-3 text-center">基于七个核心数学概念</h3>
            <p class="text-gray-600 text-center">
              集合、数感、图形、测量、空间关系、模式、数据分析
            </p>
          </div>
          <div class="card p-6 hover:shadow-lg transition-all">
            <div class="w-16 h-16 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h3 class="heading h4 mb-3 text-center">打卡拍照</h3>
            <p class="text-gray-600 text-center">
              艺术家×数学家联手造梦，打卡会发光的巨型蘑菇等特色场景
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Exhibition Zones -->
    <section class="section bg-white">
      <div class="container mx-auto px-4">
        <h2 class="heading h2 text-center mb-12">核心展区</h2>

        <!-- Logic Gate Zone -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div class="fade-in">
            <div class="relative overflow-hidden rounded-lg shadow-lg">
              <div class="carousel-container flex transition-transform duration-500 ease-in-out" :ref="(el) => setCarouselRef(el, 'LogicGate')" data-current="0">
                <div class="carousel-item min-w-full">
                  <img src="/picture/展览入口.jpg" alt="逻辑之门" class="w-full h-80 object-cover">
                </div>
              </div>
              <button class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition-all" @click="prevSlide('LogicGate')">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <button class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition-all" @click="nextSlide('LogicGate')">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
              <div class="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                <button class="w-3 h-3 rounded-full bg-white bg-opacity-50 hover:bg-opacity-100 transition-all" @click="goToSlide('LogicGate', 0)"></button>
              </div>
            </div>
          </div>
          <div class="fade-in" style="animation-delay: 0.2s;">
            <h3 class="heading h3 mb-4">逻辑之门</h3>
            <p class="text-gray-600 mb-4">
              选择你的数学冒险之门，左边是通往"宏大数学世界"的大门，右边是通向"奇妙数学乐园"的小门。
              猜猜爱丽丝选了哪扇门，她可能会遇到什么呢？
            </p>
            <div class="flex flex-wrap gap-3 mb-6">
              <span class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">逻辑推理</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">选择互动</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">故事导入</span>
            </div>
          </div>
        </div>

        <!-- Mushroom Garden Zone -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div class="fade-in order-2 md:order-1" style="animation-delay: 0.2s;">
            <h3 class="heading h3 mb-4">奇偶蘑菇园</h3>
            <p class="text-gray-600 mb-4">
              通过蘑菇上白点数量，了解奇数和偶数的概念。在蘑菇园里破解奇偶数密码，
              体验数学的乐趣。
            </p>
            <div class="flex flex-wrap gap-3 mb-6">
              <span class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">数字启蒙</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">游戏体验</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">视觉效果</span>
            </div>
          </div>
          <div class="fade-in order-1 md:order-2">
            <div class="relative overflow-hidden rounded-lg shadow-lg">
              <div class="carousel-container flex transition-transform duration-500 ease-in-out" :ref="(el) => setCarouselRef(el, 'Mushroom')" data-current="0">
                <div class="carousel-item min-w-full">
                  <img src="/picture/奇偶数蘑菇园1.jpg" alt="奇偶蘑菇园" class="w-full h-80 object-cover">
                </div>
                <div class="carousel-item min-w-full">
                  <img src="/picture/奇偶数蘑菇园2.jpg" alt="奇偶蘑菇园" class="w-full h-80 object-cover">
                </div>
              </div>
              <button class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition-all" @click="prevSlide('Mushroom')">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <button class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition-all" @click="nextSlide('Mushroom')">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
              <div class="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                <button class="w-3 h-3 rounded-full bg-white bg-opacity-100 transition-all" @click="goToSlide('Mushroom', 0)"></button>
                <button class="w-3 h-3 rounded-full bg-white bg-opacity-50 hover:bg-opacity-100 transition-all" @click="goToSlide('Mushroom', 1)"></button>
              </div>
            </div>
          </div>
        </div>

        <!-- Candy House Zone -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div class="fade-in">
            <div class="relative overflow-hidden rounded-lg shadow-lg">
              <div class="carousel-container flex transition-transform duration-500 ease-in-out" :ref="(el) => setCarouselRef(el, 'Candy')" data-current="0">
                <div class="carousel-item min-w-full">
                  <img src="/picture/MR508659.jpg" alt="数字糖果屋" class="w-full h-80 object-cover">
                </div>
                <div class="carousel-item min-w-full">
                  <img src="/picture/MR508828.jpg" alt="数字糖果屋" class="w-full h-80 object-cover">
                </div>
              </div>
              <button class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition-all" @click="prevSlide('Candy')">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <button class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition-all" @click="nextSlide('Candy')">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
              <div class="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                <button class="w-3 h-3 rounded-full bg-white bg-opacity-100 transition-all" @click="goToSlide('Candy', 0)"></button>
                <button class="w-3 h-3 rounded-full bg-white bg-opacity-50 hover:bg-opacity-100 transition-all" @click="goToSlide('Candy', 1)"></button>
              </div>
            </div>
          </div>
          <div class="fade-in" style="animation-delay: 0.2s;">
            <h3 class="heading h3 mb-4">数字糖果屋</h3>
            <p class="text-gray-600 mb-4">
              专为低龄儿童打造的互动区，用趣味游戏开启数字与形状的初体验。
              通过糖果和甜点的形式，让孩子轻松学习数学概念。
            </p>
            <div class="flex flex-wrap gap-3 mb-6">
              <span class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">低龄友好</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">数字启蒙</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">动手互动</span>
            </div>
          </div>
        </div>

        <!-- Chessboard Zone -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div class="fade-in order-2 md:order-1" style="animation-delay: 0.2s;">
            <h3 class="heading h3 mb-4">红桃皇后的棋盘</h3>
            <p class="text-gray-600 mb-4">
              在二维平面上探索逻辑和策略。通过棋盘游戏，
              培养孩子的逻辑思维和策略思考能力。
            </p>
            <div class="flex flex-wrap gap-3 mb-6">
              <span class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">逻辑推理</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">策略思考</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">团队合作</span>
            </div>
          </div>
          <div class="fade-in order-1 md:order-2">
            <div class="relative overflow-hidden rounded-lg shadow-lg">
              <div class="carousel-container flex transition-transform duration-500 ease-in-out" :ref="(el) => setCarouselRef(el, 'Chessboard')" data-current="0">
                <div class="carousel-item min-w-full">
                  <img src="/picture/queens-chessboard.jpeg" alt="红桃皇后的棋盘" class="w-full h-80 object-cover">
                </div>
              </div>
              <button class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition-all" @click="prevSlide('Chessboard')">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <button class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition-all" @click="nextSlide('Chessboard')">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
              <div class="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                <button class="w-3 h-3 rounded-full bg-white bg-opacity-100 transition-all" @click="goToSlide('Chessboard', 0)"></button>
              </div>
            </div>
          </div>
        </div>

        <!-- Mad Hatter Party Zone -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div class="fade-in">
            <div class="relative overflow-hidden rounded-lg shadow-lg">
              <div class="carousel-container flex transition-transform duration-500 ease-in-out" :ref="(el) => setCarouselRef(el, 'MadHatter')" data-current="0">
                <div class="carousel-item min-w-full">
                  <img src="/picture/疯帽子茶话会.jpg" alt="疯帽子茶话会" class="w-full h-80 object-cover">
                </div>
                <div class="carousel-item min-w-full">
                  <img src="/picture/疯帽子茶话会2.jpg" alt="疯帽子茶话会" class="w-full h-80 object-cover">
                </div>
              </div>
              <button class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition-all" @click="prevSlide('MadHatter')">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <button class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition-all" @click="nextSlide('MadHatter')">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
              <div class="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                <button class="w-3 h-3 rounded-full bg-white bg-opacity-100 transition-all" @click="goToSlide('MadHatter', 0)"></button>
                <button class="w-3 h-3 rounded-full bg-white bg-opacity-50 hover:bg-opacity-100 transition-all" @click="goToSlide('MadHatter', 1)"></button>
              </div>
            </div>
          </div>
          <div class="fade-in" style="animation-delay: 0.2s;">
            <h3 class="heading h3 mb-4">疯帽子茶话会</h3>
            <p class="text-gray-600 mb-4">
              在荒诞又有趣的互动中，玩转密铺、估算、逻辑推理与几何创作。
              通过茶话会的形式，让数学学习变得更加有趣。
            </p>
            <div class="flex flex-wrap gap-3 mb-6">
              <span class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">动手互动</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">逻辑推理</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">情景沉浸</span>
            </div>
          </div>
        </div>

        <!-- Mirror World Zone -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div class="fade-in order-2 md:order-1" style="animation-delay: 0.2s;">
            <h3 class="heading h3 mb-4">爱丽丝镜中世界</h3>
            <p class="text-gray-600 mb-4">
              踏入镜面与光影构建的奇幻空间，探索反射、对称与无限的数学奥秘。
              通过镜子和光影效果，让孩子理解对称和空间关系。
            </p>
            <div class="flex flex-wrap gap-3 mb-6">
              <span class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">光影互动</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">对称探索</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">空间感知</span>
            </div>
          </div>
          <div class="fade-in order-1 md:order-2">
            <div class="relative overflow-hidden rounded-lg shadow-lg">
              <div class="carousel-container flex transition-transform duration-500 ease-in-out" :ref="(el) => setCarouselRef(el, 'Mirror')" data-current="0">
                <div class="carousel-item min-w-full">
                  <img src="/picture/数学艺术画廊.jpg" alt="爱丽丝镜中世界" class="w-full h-80 object-cover">
                </div>
                <div class="carousel-item min-w-full">
                  <img src="/picture/math-gallery-art.jpeg" alt="数学艺术画廊展品" class="w-full h-80 object-cover">
                </div>
              </div>
              <button class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition-all" @click="prevSlide('Mirror')">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <button class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition-all" @click="nextSlide('Mirror')">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
              <div class="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                <button class="w-3 h-3 rounded-full bg-white bg-opacity-100 transition-all" @click="goToSlide('Mirror', 0)"></button>
                <button class="w-3 h-3 rounded-full bg-white bg-opacity-50 hover:bg-opacity-100 transition-all" @click="goToSlide('Mirror', 1)"></button>
              </div>
            </div>
          </div>
        </div>

        <!-- Palace Zone -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div class="fade-in">
            <div class="relative overflow-hidden rounded-lg shadow-lg">
              <div class="carousel-container flex transition-transform duration-500 ease-in-out" :ref="(el) => setCarouselRef(el, 'Palace')" data-current="0">
                <div class="carousel-item min-w-full">
                  <img src="/picture/红桃皇后的宫殿1.jpg" alt="红桃皇后的宫殿" class="w-full h-80 object-cover">
                </div>
                <div class="carousel-item min-w-full">
                  <img src="/picture/红桃皇后的宫殿2.jpg" alt="红桃皇后的宫殿" class="w-full h-80 object-cover">
                </div>
              </div>
              <button class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition-all" @click="prevSlide('Palace')">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <button class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition-all" @click="nextSlide('Palace')">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
              <div class="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                <button class="w-3 h-3 rounded-full bg-white bg-opacity-100 transition-all" @click="goToSlide('Palace', 0)"></button>
                <button class="w-3 h-3 rounded-full bg-white bg-opacity-50 hover:bg-opacity-100 transition-all" @click="goToSlide('Palace', 1)"></button>
              </div>
            </div>
          </div>
          <div class="fade-in" style="animation-delay: 0.2s;">
            <h3 class="heading h3 mb-4">红桃皇后的宫殿</h3>
            <p class="text-gray-600 mb-4">
              在三维空间中探索几何形状和空间关系。通过宫殿的结构，
              让孩子理解三维几何和空间概念。
            </p>
            <div class="flex flex-wrap gap-3 mb-6">
              <span class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">3D体验</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">几何学习</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">空间思维</span>
            </div>
          </div>
        </div>

        <!-- Fantasy Forest Zone -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div class="fade-in order-2 md:order-1" style="animation-delay: 0.2s;">
            <h3 class="heading h3 mb-4">奇幻森林和神奇动物</h3>
            <p class="text-gray-600 mb-4">
              发现大自然中无处不在的数学。通过森林和动物的形式，
              让孩子了解数学在自然界中的应用。
            </p>
            <div class="flex flex-wrap gap-3 mb-6">
              <span class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">自然探索</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">数学应用</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">生态教育</span>
            </div>
          </div>
          <div class="fade-in order-1 md:order-2">
            <div class="relative overflow-hidden rounded-lg shadow-lg">
              <div class="carousel-container flex transition-transform duration-500 ease-in-out" :ref="(el) => setCarouselRef(el, 'Forest')" data-current="0">
                <div class="carousel-item min-w-full">
                  <img src="/picture/奇幻森林.jpg" alt="奇幻森林和神奇动物" class="w-full h-80 object-cover">
                </div>
                <div class="carousel-item min-w-full">
                  <img src="/picture/magical-animals.jpeg" alt="神奇动物" class="w-full h-80 object-cover">
                </div>
              </div>
              <button class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition-all" @click="prevSlide('Forest')">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <button class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition-all" @click="nextSlide('Forest')">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
              <div class="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                <button class="w-3 h-3 rounded-full bg-white bg-opacity-100 transition-all" @click="goToSlide('Forest', 0)"></button>
                <button class="w-3 h-3 rounded-full bg-white bg-opacity-50 hover:bg-opacity-100 transition-all" @click="goToSlide('Forest', 1)"></button>
              </div>
            </div>
          </div>
        </div>

        <!-- Math Art Gallery Zone -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div class="fade-in">
            <div class="relative overflow-hidden rounded-lg shadow-lg">
              <div class="carousel-container flex transition-transform duration-500 ease-in-out" :ref="(el) => setCarouselRef(el, 'MathArt')" data-current="0">
                <div class="carousel-item min-w-full">
                  <img src="/picture/MR508901.jpg" alt="数学艺术画廊" class="w-full h-80 object-cover">
                </div>
                <div class="carousel-item min-w-full">
                  <img src="/picture/infinite-cake.jpeg" alt="无限蛋糕" class="w-full h-80 object-cover">
                </div>
              </div>
              <button class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition-all" @click="prevSlide('MathArt')">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <button class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition-all" @click="nextSlide('MathArt')">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
              <div class="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                <button class="w-3 h-3 rounded-full bg-white bg-opacity-100 transition-all" @click="goToSlide('MathArt', 0)"></button>
                <button class="w-3 h-3 rounded-full bg-white bg-opacity-50 hover:bg-opacity-100 transition-all" @click="goToSlide('MathArt', 1)"></button>
              </div>
            </div>
          </div>
          <div class="fade-in" style="animation-delay: 0.2s;">
            <h3 class="heading h3 mb-4">数学艺术画廊</h3>
            <p class="text-gray-600 mb-4">
              展示数学与艺术的完美结合。通过艺术作品，
              让孩子理解数学的美学价值。
            </p>
            <div class="flex flex-wrap gap-3 mb-6">
              <span class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">视觉艺术</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">数学美学</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">创意表达</span>
            </div>
          </div>
        </div>

        <!-- Brain Teaser Zone -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="fade-in order-2 md:order-1" style="animation-delay: 0.2s;">
            <h3 class="heading h3 mb-4">互动烧脑区</h3>
            <p class="text-gray-600 mb-4">
              挑战多面体、数学拓扑、几何拼图等多个解谜互动装置，
              给大脑做个马拉松挑战。通过挑战，培养孩子的逻辑思维和解决问题的能力。
            </p>
            <div class="flex flex-wrap gap-3 mb-6">
              <span class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">高阶思维</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">动手互动</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">逻辑推理</span>
            </div>
          </div>
          <div class="fade-in order-1 md:order-2">
            <div class="relative overflow-hidden rounded-lg shadow-lg">
              <div class="carousel-container flex transition-transform duration-500 ease-in-out" :ref="(el) => setCarouselRef(el, 'Brain')" data-current="0">
                <div class="carousel-item min-w-full">
                  <img src="/picture/互动烧脑区.jpg" alt="互动烧脑区" class="w-full h-80 object-cover">
                </div>
                <div class="carousel-item min-w-full">
                  <img src="/picture/brain-zone2.jpeg" alt="互动烧脑区" class="w-full h-80 object-cover">
                </div>
              </div>
              <button class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition-all" @click="prevSlide('Brain')">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <button class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition-all" @click="nextSlide('Brain')">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
              <div class="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                <button class="w-3 h-3 rounded-full bg-white bg-opacity-100 transition-all" @click="goToSlide('Brain', 0)"></button>
                <button class="w-3 h-3 rounded-full bg-white bg-opacity-50 hover:bg-opacity-100 transition-all" @click="goToSlide('Brain', 1)"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isScrolled = ref(false)
const carousels = ref({})

const setCarouselRef = (el, name) => {
  if (el) {
    carousels.value[name] = el
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const nextSlide = (carouselName) => {
  const container = carousels.value[carouselName]
  if (container) {
    const slides = container.querySelectorAll('.carousel-item')
    if (slides.length > 0) {
      const currentIndex = parseInt(container.dataset.current || '0')
      const nextIndex = (currentIndex + 1) % slides.length
      container.dataset.current = nextIndex.toString()
      container.style.transform = `translateX(-${nextIndex * 100}%)`
    }
  }
}

const prevSlide = (carouselName) => {
  const container = carousels.value[carouselName]
  if (container) {
    const slides = container.querySelectorAll('.carousel-item')
    if (slides.length > 0) {
      const currentIndex = parseInt(container.dataset.current || '0')
      const prevIndex = (currentIndex - 1 + slides.length) % slides.length
      container.dataset.current = prevIndex.toString()
      container.style.transform = `translateX(-${prevIndex * 100}%)`
    }
  }
}

const goToSlide = (carouselName, index) => {
  const container = carousels.value[carouselName]
  if (container) {
    container.dataset.current = index.toString()
    container.style.transform = `translateX(-${index * 100}%)`
  }
}
</script>

<style scoped lang="scss">
.exhibition {
  .section {
    scroll-margin-top: 80px;
  }
}
</style>
