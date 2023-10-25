import Image from 'next/image'
import leeShadow from 'public/leeShadow.webp'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function About() {
  return (
    <main className="bg-gray-100 w-screen h-screen">
      {/* Hero */}
      <div className="flex flex-col border-b border-gray-200 lg:border-0">
        <div className="relative">
          <div aria-hidden="true" className="absolute hidden h-full w-1/2 bg-gray-100 lg:block" />
          <div className="relative bg-gray-100 lg:bg-transparent">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8">
              <div className="mx-auto max-w-2xl py-12 lg:max-w-none lg:pb-24 lg:pt-12">
                <div className="font-serif lg:pr-48">
                  <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl xl:text-3xl">
                    About
                  </h1>
                  <p className="mt-4 text-xl text-gray-600">Our passion for our work goes back to 2006, when our principal, Lee Brenner hired Matty Talty to began working with him in the professional audio field.</p>
                  <br />
                  <p className="text-xl text-gray-600">Recognizing the scarcity of resources for addressing everyday noise problems, they developed a commitment to improving the quality of life of those inundated by noise in high density urban environments.</p>
                  <br />
                  <p className="text-xl text-gray-600">As the business grew, we began to recognize that advice alone was not sufficient.
                    In order to ensure the proper installation of specialty soundproofing materials in the greater Houston area, Gulf Coast Noise Control \/ Soundproofing Remodelers began operations in 2023.</p>


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
    </main>
  )
}