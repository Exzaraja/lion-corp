<template>
  <nav class="fixed bg-slate-500/10 z-50 w-full py-6 text-white">
    <UContainer>
      <div class="flex items-center justify-between gap-4">
        <!-- logo -->
        <div class="cursor-pointer">
          <span><img src="/img/lion.png" alt="" class="w-16"></span>
        </div>
        <!-- Navbar -->
        <div class="hidden md:block">
          <ul class="flex space-x-10 mr-auto text-xl font-sans">
            <li>
              <ULink
                to="/"
                active-class="text-yellow-600"
                inactive-class="text-white hover:text-yellow-300"
              >
                Home
              </ULink>
            </li>
            <li>
              <ULink
                to="/"
                active-class="text-yellow-600"
                inactive-class="text-white hover:text-yellow-300"
              >
                Profile
              </ULink>
            </li>
            <li>
              <ULink
                to="/"
                active-class="text-yellow-600"
                inactive-class="text-white hover:text-yellow-300"
              >
                Artikel
              </ULink>
            </li>
            <li>
              <ULink
                to="/"
                active-class="text-yellow-600"
                inactive-class="text-white hover:text-yellow-300"
              >
                SOP
              </ULink>
            </li>
            <li>
              <ULink
                to="/"
                active-class="text-yellow-600"
                inactive-class="text-white hover:text-yellow-300"
              >
                Produk Layanan
              </ULink>
            </li>
            <li>
              <ULink
                to="/"
                active-class="text-yellow-600"
                inactive-class="text-white hover:text-yellow-300"
              >
                Schedule
              </ULink>
            </li>
            <li>
              <ULink
                to="/"
                active-class="text-yellow-600"
                inactive-class="text-white hover:text-yellow-300"
              >
                Kontak
              </ULink>
            </li>
          </ul>
        </div>
        <div class="flex gap-2 mr-2">
          <UInput
            size="xl"
            color="yellow"
            :trailing="false"
            placeholder="Search..."
          />
          <UButton
            icon="i-heroicons-magnifying-glass-20-solid"
            size="xl"
            color="yellow"
            variant="solid"
          />
        </div>
      </div>
    </UContainer>
  </nav>
</template>
