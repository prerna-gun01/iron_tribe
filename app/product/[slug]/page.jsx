// import React from 'react'
// import { useRouter } from 'next/router'
// import data from './data.json'

// const Page = () => {

//     return (
//         <div className='container'>

//             {/* <section class="">
//                 <div class="py-24 mx-auto">
//                     <div class=" mx-auto flex  gap-4">
//                         <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
//                         <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
//                             <h2 class="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
//                             <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">Animated Night Hill Illustrations</h1>
//                             <div class="flex mb-4">
//                                 <a class="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">Description</a>
//                                 <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Reviews</a>
//                                 <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</a>
//                             </div>
//                             <p class="leading-relaxed mb-4">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.</p>
//                             <div class="flex border-t border-gray-200 py-2">
//                                 <span class="text-gray-500">Color</span>
//                                 <span class="ml-auto text-gray-900">Blue</span>
//                             </div>
//                             <div class="flex border-t border-gray-200 py-2">
//                                 <span class="text-gray-500">Size</span>
//                                 <span class="ml-auto text-gray-900">Medium</span>
//                             </div>
//                             <div class="flex border-t border-b mb-6 border-gray-200 py-2">
//                                 <span class="text-gray-500">Quantity</span>
//                                 <span class="ml-auto text-gray-900">4</span>
//                             </div>
//                             <div class="flex">
//                                 <span class="title-font font-medium text-2xl text-gray-900">$58.00</span>
//                                 <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
//                                 <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
//                                     <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
//                                         <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
//                                     </svg>
//                                 </button>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </section> */}
//         </div>
//     )
// }

// export default Page

// export default function Page({ params }) {
//     return <div>My Post: {params.slug}</div>
// }

import data from '../data.json';
import Custom from '@/app/components/Custom';
export async function generateStaticParams() {
    // Get the paths we want to pre-render based on products
    const paths = data.map((product) => ({
        slug: product.id.toString(),
    }));

    return paths;
}

async function getProductData(slug) {
    // Find the product that matches the id
    const product = data.find((product) => product.id.toString() === slug);

    if (!product) {
        return null;
    }

    return product;
}

export default async function ProductPage({ params }) {
    const { slug } = params;
    const product = await getProductData(slug);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div>

            <section class="">
                <div class="py-24 mx-auto">
                    <div class=" mx-auto flex flex-col md:flex-row  gap-4">
                        <div className="w-full h md:w-3/4 relative">
                            <div className="absolute h-72 w-72 bg-gray-300/20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] blur-2xl" ></div>
                            <Custom data={product.image} className="h-20 w-20"/>
                        </div>
                        <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                            <h1 class="text-3xl title-font tracking-widest m-5">{product.name}</h1>
                            {/* <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">Animated Night Hill Illustrations</h1> */}
                            <div class="flex mb-4 ">
                                <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Length</a>
                                <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Height</a>
                                <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Width</a>
                            </div>
                            <div class="flex mb-4">
                                <a class="flex-grow  py-2 text-lg px-1">{product.L}</a>
                                <a class="flex-grow py-2 text-lg px-1">{product.W}</a>
                                <a class="flex-grow  py-2 text-lg px-1">{product.H}</a>
                            </div>
                            <div className="m-5">
                                <p class="leading-relaxed mb-4">{product.description}</p>
                            </div>
                            {/* <div class="flex">
                                <span class="title-font font-medium text-2xl text-gray-900">{product.price}</span>
                                <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
                                <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                    </svg>
                                </button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
            {/* <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p> */}
        </div>
    );
}
