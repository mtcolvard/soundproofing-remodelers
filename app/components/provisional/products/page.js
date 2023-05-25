// import Image from 'next/image'
// import mlv from 'public/mlv.webp'
// import soundClip from 'public/resilient-sound-isolation-clip-rsic.webp'

// const categories = [
//   {
//     id: 1,
//     name: 'Mass Loaded Vinyl',
//     href: '#',
//     price: '$200',
//     description: 'Effective high density soundproofing material for stopping noise transmission in walls or ceilings.',
//     options: '1 lb or 2 lbs per square foot ',
//     imageSrc: mlv,
//     imageAlt: 'Rolls of mass loaded vinyl',
//   },
//   {
//     id: 2,
//     name: 'Sound Isolating clips',
//     href: '#',
//     price: '$32',
//     description: 'Excellent in decoupling sheetrock from wall studs or ceiling joists.',
//     options: 'Black',
//     imageSrc: soundClip,
//     imageAlt: 'Front of plain black t-shirt.',
//   },
//   // More products...
// ]



// export default function ProductCatagories() {
//   return (
//     <div className="bg-white">
//       <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//         <h2 className="text-2xl font-bold tracking-tight text-gray-900">Shop by Collection</h2>
//         <p className="mt-4 text-base text-gray-500">
//           Each season, we collaborate with world-class designers to create a collection inspired by the natural world.
//         </p>

//         <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
//           {categories.map((category) => (
//             <a key={category.name} href={category.href} className="group block">
//               <div
//                 aria-hidden="true"
//                 className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
//               >
//                 <Image
//                   src={category.imageSrc}
//                   alt={category.imageAlt}
//                   className="h-full w-full object-cover object-center"
//                 />
//               </div>
//               <h3 className="mt-4 text-base font-semibold text-gray-900">{category.name}</h3>
//               <p className="mt-2 text-sm text-gray-500">{category.description}</p>
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }




// // export default function Products() {
// //   return (
// //     <div className="bg-white">
// //       <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
// //         <h2 className="sr-only">Products</h2>

// //         <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
// //           {products.map((product) => (
// //             <div
// //               key={product.id}
// //               className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
// //             >
// //               <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
// //                 <Image
// //                   src={product.imageSrc}
// //                   alt={product.imageAlt}
// //                   className="h-full w-full object-cover object-center sm:h-full sm:w-full"
// //                 />
// //               </div>
// //               <div className="flex flex-1 flex-col space-y-2 p-4">
// //                 <h3 className="text-sm font-medium text-gray-900">
// //                   <a href={product.href}>
// //                     <span aria-hidden="true" className="absolute inset-0" />
// //                     {product.name}
// //                   </a>
// //                 </h3>
// //                 <p className="text-sm text-gray-500">{product.description}</p>
// //                 <div className="flex flex-1 flex-col justify-end">
// //                   <p className="text-sm italic text-gray-500">{product.options}</p>
// //                   <p className="text-base font-medium text-gray-900">{product.price}</p>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }
