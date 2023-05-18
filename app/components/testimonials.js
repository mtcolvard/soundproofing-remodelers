import Image from 'next/image'
import handCutMeasure from 'public/handCutMeasure.webp'

export default function Testimonials() {

  const testimonials = [
    {
      id: 1,
      quote:
        'I used Lee as a consultant to understand how to approach my noise problem; my woodworking studio and our house kitchen share a common door. He gave me such a good education that I started an incremental approach myself.\n It turned out to be an enormous bargain. I purchased exactly the materials I needed, and didn\'t waste a penny on anything I didn\'t. Perhaps most importantly, Lee kept me from pursuing techniques that wouldn\'t have worked nearly as well. Lee was a pleasure to work with and took an active interest in my project. Highly recommended.',
      attribution: 'Jon A. Cupertino',
    },
    {
      id: 2,
      quote:
        'Other contractor\’s consultations consisted of measuring the space and pointing out noises that could improve. Lee was the only one who pointed out structural quirks that could mean underlying complications. I appreciated the crew\'s attention to detail vs. rushing to meet a deadline. Our old building was far from a straightforward job, but Lee\'s decades of experience showed, and I don\'t think I would\'ve felt so confident or at ease with anyone else.',
      attribution: 'Tianyu I. San Francisco',
    },
    {
      id: 3,
      quote:
        'Alongside his technical and city planning department expertise, Lee is great with communication. With our project, we split our payments based on completion benchmarks, and he served as the coordinator amongst the structural engineer, city planning department, building inspector, and his construction crew... And what a finished product! Lee and his team did an absolutely amazing job.',
      attribution: 'Adele F. San Francisco',
    },
  ]

  return (

    <div className="font-sans bg-zinc-50 pb-32">
      <div className="relative isolate overflow-hidden pt-14">
        <Image
          src={handCutMeasure}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
        />
        {/* <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
        <div
        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style={{
          clipPath:
          'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
        />
      </div> */}
      <section
        aria-labelledby="testimonial-heading"
        className="relative mx-auto max-w-7xl pb-20 sm:px-6"
      >
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2 id="testimonial-heading" className="text-2xl font-bold tracking-tight text-gray-900">
            What are people saying?
          </h2>

          <div className="mt-8 space-y-16 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.id} className="sm:flex lg:block">
                <svg
                  width={24}
                  height={18}
                  viewBox="0 0 24 18"
                  aria-hidden="true"
                  className="flex-shrink-0 text-gray-400"
                >
                  <path
                    d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                    fill="currentColor"
                  />
                </svg>
                <div className="mt-8 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-10">
                  <p className="text-lg text-gray-800">{testimonial.quote}</p>
                  <cite className="mt-4 block font-semibold not-italic text-gray-900">
                    {testimonial.attribution}
                  </cite>
                </div>
              </blockquote>
            ))}
          </div>
         </div> 
        </section>
      </div>
    </div>
  )
}