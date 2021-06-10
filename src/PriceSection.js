import React from 'react';

const PriceSection = () => {
    return (
        <div class="bg-white dark:bg-gray-800">
            <div class="container px-6 py-8 mx-auto">
            <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 class=" title-font mb-2 text-4xl font-extrabold leading-10 tracking-tight text-left sm:text-5xl sm:leading-none md:text-6xl">Bundle Pack</h1>
          <p class="lg:w-1/2 w-full leading-relaxed text-base">
            Enseigner c'est apprendre deux fois. J'aime partager mes connaissances et mes découvertses.
          </p>
        </div>
                <div class="flex flex-col items-center justify-center space-y-8 lg:-mx-4 lg:flex-row lg:items-stretch lg:space-y-0">
                    <div class="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-gray-800 dark:border-gray-700">
                        <div class="flex-shrink-0">
                            <h2 class="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-blue-400 uppercase rounded-lg bg-gray-50 dark:bg-gray-700">
                                Casual
                    </h2>
                        </div>
                        <div class="flex-shrink-0">
                            <span
                                class="pt-2 text-4xl font-bold text-gray-800 uppercase dark:text-gray-100"
                            >
                                Free
                    </span>
                        </div>
                        <ul class="flex-1 space-y-4">
                            <li class="text-gray-500 dark:text-gray-400">
                                Up to 5 projects
                    </li>
                            <li class="text-gray-500 dark:text-gray-400">
                                Up to 10 collaborators
                    </li>
                            <li class="text-gray-500 dark:text-gray-400">
                                2Gb of storage
                    </li>
                        </ul>

                        <button
                            class="inline-flex items-center justify-center px-4 py-2 font-semibold text-white uppercase transition-colors bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none"
                        >
                            Start free
                </button>
                    </div>

                    <div class="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-gray-800 dark:border-gray-700">
                        <div class="flex-shrink-0">
                            <h2
                                class="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-blue-400 uppercase rounded-lg bg-gray-50 dark:bg-gray-700"
                            >
                                Profesional
                    </h2>
                        </div>
                        <div class="flex-shrink-0">
                            <span
                                class="pt-2 text-4xl font-bold text-gray-800 uppercase dark:text-gray-100"
                            >
                                $24.90
                    </span>
                            <span class="text-gray-500 dark:text-gray-400">
                                /month
                    </span>
                        </div>
                        <ul class="flex-1 space-y-4">
                            <li class="text-gray-500 dark:text-gray-400">
                                Up to 10 projects
                    </li>
                            <li class="text-gray-500 dark:text-gray-400">
                                Up to 20 collaborators
                    </li>
                            <li class="text-gray-500 dark:text-gray-400">
                                10Gb of storage
                    </li>
                            <li class="text-gray-500 dark:text-gray-400">
                                Real-time collaborations
                    </li>
                        </ul>

                        <button
                            class="inline-flex items-center justify-center px-4 py-2 font-semibold text-white uppercase transition-colors bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none"
                        >
                            Start free trial
                </button>
                    </div>

                    <div class="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-gray-800 dark:border-gray-700">
                        <div class="flex-shrink-0">
                            <h2
                                class="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-blue-400 uppercase rounded-lg bg-gray-50 dark:bg-gray-700"
                            >
                                Expert
                    </h2>
                        </div>
                        <div class="flex-shrink-0">
                            <span
                                class="pt-2 text-4xl font-bold text-gray-800 uppercase dark:text-gray-100"
                            >
                                $49.90
                    </span>
                            <span class="text-gray-500 dark:text-gray-400">
                                /month
                    </span>
                        </div>
                        <ul class="flex-1 space-y-4">
                            <li class="text-gray-500 dark:text-gray-400">
                                Unlimited projects
                    </li>
                            <li class="text-gray-500 dark:text-gray-400">
                                Unlimited collaborators
                    </li>
                            <li class="text-gray-500 dark:text-gray-400">
                                Unlimited storage
                    </li>
                            <li class="text-gray-500 dark:text-gray-400">
                                Real-time collaborations
                    </li>
                            <li class="text-gray-500 dark:text-gray-400">
                                24x7 Support
                    </li>
                        </ul>

                        <button
                            class="inline-flex items-center justify-center px-4 py-2 font-semibold text-white uppercase transition-colors bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none"
                        >
                            Start free trial
                </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PriceSection;