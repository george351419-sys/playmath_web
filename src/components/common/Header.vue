<template>
  <header class="bg-white shadow-md sticky top-0 z-50">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center py-3 md:py-4">
        <router-link to="/" class="flex items-center space-x-2">
          <span class="text-xl md:text-2xl font-bold text-primary-yellow">PlayMath</span>
          <span class="hidden sm:inline text-sm text-primary-orange">像数学家一样玩</span>
        </router-link>
        
        <nav class="hidden md:flex space-x-6 lg:space-x-8">
          <router-link to="/" class="nav-link">首页</router-link>
          <router-link to="/about" class="nav-link">关于我们</router-link>
          <router-link to="/exhibition" class="nav-link">数学展</router-link>
          <router-link to="/products" class="nav-link">产品中心</router-link>
          <router-link to="/faq" class="nav-link">常见问题</router-link>
          <router-link to="/contact" class="nav-link">联系我们</router-link>
        </nav>
        
        <button 
          class="md:hidden p-2 text-gray-600 hover:text-primary-yellow focus:outline-none"
          @click="toggleMobileMenu"
          aria-label="菜单"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      
      <Transition name="slide-down">
        <div v-if="mobileMenuOpen" class="md:hidden pb-4 border-t border-gray-100">
          <nav class="flex flex-col space-y-1 pt-4">
            <router-link to="/" class="mobile-nav-link" @click="toggleMobileMenu">首页</router-link>
            <router-link to="/about" class="mobile-nav-link" @click="toggleMobileMenu">关于我们</router-link>
            <router-link to="/exhibition" class="mobile-nav-link" @click="toggleMobileMenu">数学展</router-link>
            <router-link to="/products" class="mobile-nav-link" @click="toggleMobileMenu">产品中心</router-link>
            <router-link to="/faq" class="mobile-nav-link" @click="toggleMobileMenu">常见问题</router-link>
            <router-link to="/contact" class="mobile-nav-link" @click="toggleMobileMenu">联系我们</router-link>
          </nav>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<style scoped lang="scss">
.nav-link {
  @apply text-gray-600 hover:text-primary-yellow font-medium transition-colors duration-300;
  &.router-link-active {
    @apply text-primary-yellow;
  }
}

.mobile-nav-link {
  @apply text-gray-600 hover:text-primary-yellow font-medium transition-colors duration-300 py-3 px-2 rounded hover:bg-gray-50;
  &.router-link-active {
    @apply text-primary-yellow bg-primary-yellow bg-opacity-10;
  }
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>