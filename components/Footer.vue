<template>
  <section>
    <UContainer>
      <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav class="flex flex-wrap justify-center -mx-5 -my-2">
          <div class="px-5 py-2">
            <ULink
              to=""
              active-class="text-yellow-500"
              inactive-class="text-white hover:text-yellow-300"
            >
              About
            </ULink>
          </div>
          <div class="px-5 py-2">
            <ULink
              to=""
              active-class="text-yellow-500"
              inactive-class="text-white hover:text-yellow-500"
            >
              Blog
            </ULink>
          </div>
          <div class="px-5 py-2">
            <ULink
              to=""
              active-class="text-yellow-500"
              inactive-class="text-white hover:text-yellow-300"
            >
              Team
            </ULink>
          </div>
          <div class="px-5 py-2">
            <ULink
              to=""
              active-class=" text-yellow-500"
              inactive-class="text-white hover:text-yellow-300"
            >
              Pricing
            </ULink>
          </div>
          <div class="px-5 py-2">
            <ULink
              to=""
              active-class=" text-yellow-500"
              inactive-class="text-white hover:text-yellow-300"
            >
              Contact
            </ULink>
          </div>
          <div class="px-5 py-2">
            <ULink
              to=""
              active-class=" text-yellow-500"
              inactive-class="text-white hover:text-yellow-300"
            >
              Terms
            </ULink>
          </div>
        </nav>
        <div class="flex justify-center mt-8 space-x-6">
          <a href="#" class="text-gray-400 hover:text-gray-500">
            <span class="sr-only">Facebook</span>
            <UIcon name="i-uil-facebook" class="text-4xl" />
          </a>
          <a href="#" class="text-gray-400 hover:text-gray-500">
            <span class="sr-only">Instagram</span>
            <UIcon name="i-uil-instagram" class="text-4xl" />
          </a>
          <a href="#" class="text-gray-400 hover:text-gray-500">
            <span class="sr-only">Twitter</span>
            <UIcon name="i-uil-twitter" class="text-4xl" />
          </a>
          <a href="#" class="text-gray-400 hover:text-gray-500">
            <span class="sr-only">GitHub</span>
            <UIcon name="i-uil-github" class="text-4xl" />

          </a>
        </div>
        <p class="mt-8 text-base leading-6 text-center text-gray-400">
          © 2021 SomeCompany, Inc. All rights reserved.
        </p>
      </div>
    </UContainer>
  </section>
</template>
