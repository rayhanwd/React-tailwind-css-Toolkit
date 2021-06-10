import React from 'react';
import { Link } from 'react-router-dom';
import laptopPhoto from '../src/images/laptop.png';
const Header = () => {
    return (
        <header class="bg-white dark:bg-gray-800">
            <nav class="bg-white dark:bg-gray-800">
                <div class="container flex justify-between p-6">
                    <Link class="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Bonding</Link>
                    <div class="flex justify-between mt-6 text-gray-600 capitalize dark:text-gray-300">
                        <div>
                            <Link href="#" class="text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">Home</Link>

                            <Link href="#" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Services</Link>

                            <Link href="#" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Portfolio</Link>

                            <Link href="#" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Contact</Link>

                            <Link href="#" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">blog</Link>
                        </div>
                        <div class="">
                            <Link href="#" class="px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md md:inline hover:bg-blue-400">Download</Link>
                        </div>
                    </div>
                </div>
            </nav>

            <div class="container flex flex-col px-6 py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
                <div class="flex flex-col items-center w-full md:flex-row md:w-1/2">
                    <div class="max-w-lg md:mx-12 md:order-2">
                        <h1 class="text-3xl font-medium tracking-wide text-gray-800 dark:text-white md:text-4xl">The best Apple Watch apps</h1>
                        <p class="mt-4 text-gray-600 dark:text-gray-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos accusantium cumque.</p>
                        <div class="mt-6">
                            <Link href="#" class="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md md:inline hover:bg-blue-400">Download from App Store</Link>
                        </div>
                    </div>
                </div>

                <div class="flex items-center justify-center w-full h-96 md:w-1/2">
                    <img class="object-cover w-full h-full max-w-2xl rounded-md" src={laptopPhoto} alt="apple watch photo" />
                </div>
            </div>
        </header>
    );
};

export default Header;