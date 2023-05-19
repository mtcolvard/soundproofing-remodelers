import Image from 'next/image'
import leeShadow from 'public/leeShadow.webp'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function About() {
  return (
    <main>
      <div className="bg-white">
        <div className="flex flex-col border-b border-gray-200 lg:border-0">
          <div className="relative">
            <div aria-hidden="true" className="absolute hidden h-full w-1/2 bg-gray-100 lg:block" />
            <div className="relative bg-gray-100 lg:bg-transparent">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8">
                <div className="mx-auto max-w-2xl py-12 lg:max-w-none lg:pb-72 lg:pt-12">
                  <div className="font-serif lg:pr-36">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl xl:text-5xl">
                      Soundproofing Remodelers
                    </h1>
                    <p className="mt-4 lg:mb-16 lg:pb-9 text-xl text-gray-600">
                      Serving the San Francisco Bay Area since 1998
                    </p>
                    <p className="mt-4 text-xl text-gray-600">
                      Telephone: 415-308-8989
                    </p>
                    <p className="mt-4 text-xl text-gray-600">
                      Email: lee@bayareanoisecontrol.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#f5f6f8] sm:h-64 lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-1/2">
              <Image
                src={leeShadow}
                alt=""
                className=" w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}