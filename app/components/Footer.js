import React from "react";

function Footer() {
  return (
    <footer class="bg-white rounded-lg shadow" >
      <div class="w-full max-w-screen-md mx-auto p-4 md:py-8 ">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/images/logoex.png"
              class="h-8"
              alt="Flowbite Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              체험단시대
            </span>
          </a>
          <ul class="grid grid-cols-2 gap-y-4 flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="https://www.youtube.com/@user-wb6rf5ie2z" class="hover:underline me-4 md:me-6">
                YouTube
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/blinee.moim/" class="hover:underline me-4 md:me-6">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://cafe.naver.com/katorifea" class="hover:underline me-4 md:me-6">
                NaverCafe
              </a>
            </li>
            <li>
              <a href="https://same-curve-e6b.notion.site/f8bee5fd323c43d28bc6f31f5aa5b25c" class="hover:underline">
                Event
              </a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-center text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 체험단시대. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
