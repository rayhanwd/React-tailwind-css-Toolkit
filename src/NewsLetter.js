import React from 'react';

const NewsLetter = () => {
    return (
<div class="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center py-5">
    <div class="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800 font-light">
        <div class="w-full max-w-6xl mx-auto pb-5">
            <div class="-mx-3 md:flex items-center">
                <div class="px-3 md:w-2/3 mb-10 md:mb-0">
                    <h1 class="text-6xl md:text-8xl font-bold mb-5 leading-tight">Stay <br class="hidden md:block"/>updated.</h1>
                    <h3 class="text-gray-600 mb-7 leading-tight">Subscribe now and receive the latest updates.</h3>
                    <div>
                        <span class="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                        <span class="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                        <span class="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                    </div>
                </div>
                <div class="px-3 md:w-1/3">
                    <form>
                        <div class="flex mb-3">
                            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                            <input type="email" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Enter your email address"/>
                        </div>
                        <div>
                            <button class="block w-full bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 transition-colors text-white rounded-lg px-3 py-2 font-semibold">Subscribe now.</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
    );
};

export default NewsLetter;