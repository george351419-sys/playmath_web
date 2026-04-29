<template>
  <header class="bg-white shadow-md sticky top-0 z-50">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center py-4">
        <!-- Logo -->
        <div class="flex items-center">
          <router-link to="/" class="flex items-center">
            <span class="text-2xl font-bold text-primary-yellow">PlayMath</span>
            <span class="ml-2 text-sm text-primary-orange">像数学家一样玩</span>
          </router-link>
        </div>
        
        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-8">
          <router-link to="/" class="nav-link">首页</router-link>
          <router-link to="/about" class="nav-link">关于我们</router-link>
          <router-link to="/exhibition" class="nav-link">数学展</router-link>
          <router-link to="/products" class="nav-link">产品中心</router-link>
          <router-link to="/faq" class="nav-link">常见问题</router-link>
          <router-link to="/contact" class="nav-link">联系我们</router-link>
        </nav>
        
        <!-- Mobile Menu Button -->
        <button 
          class="md:hidden text-gray-600 focus:outline-none"
          @click="toggleMobileMenu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      
      <!-- Mobile Navigation -->
      <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t">
        <nav class="flex flex-col space-y-4">
          <router-link to="/" class="mobile-nav-link" @click="toggleMobileMenu">首页</router-link>
          <router-link to="/about" class="mobile-nav-link" @click="toggleMobileMenu">关于我们</router-link>
          <router-link to="/exhibition" class="mobile-nav-link" @click="toggleMobileMenu">数学展</router-link>
          <router-link to="/products" class="mobile-nav-link" @click="toggleMobileMenu">产品中心</router-link>
          <router-link to="/faq" class="mobile-nav-link" @click="toggleMobileMenu">常见问题</router-link>
          <router-link to="/contact" class="mobile-nav-link" @click="toggleMobileMenu">联系我们</router-link>
        </nav>
      </div>
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
  @apply text-gray-600 hover:text-primary-yellow font-medium transition-colors duration-300 py-2;
  &.router-link-active {
    @apply text-primary-yellow;
  }
}
</style>