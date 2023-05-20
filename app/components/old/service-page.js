import Image from 'next/image'
import Link from 'next/link'
import insulScreenWall from '/public/insulScreenWall.webp'
import { ChatBubbleLeftRightIcon, WrenchScrewdriverIcon, DocumentMagnifyingGlassIcon, ShareIcon } from '@heroicons/react/24/solid'


const features = [
  {
    name: 'Consultations',
    description:
      'On-site consultations to assess optimal soundproofing remedies to meet your personal and budget particular needs.',
    href: '#',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Installation & Remodeling',
    description:
      'Extensive experience mitigating noise in single & multifamily homes, mixed-use developments, and commercial properties.',
    href: '#',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'Compliance Reports',
    description:
      'Acoustical testing, design services, and compliance reports satisfying Title 25 and Section 1207 of the California State Building Code.',
    href: '#',
    icon: DocumentMagnifyingGlassIcon,
  },
  {
    name: 'Social Services',
    description:
      'Mediation between sensitive parties; legal consultations in special situations. Escrow Evaluations & Real Estate Noise Audits.',
    // 'Sensitive mediation between parties; legal consultations in special situations, as well as escrow evaluations and real estate noise audits.',
    href: '#',
    icon: ShareIcon,
  },
]

export default function Example() {
  return (
      <main className="bg-gray-100 w-screen h-screen">
        {/* Hero */}
        <div className="flex flex-col border-b border-gray-200 lg:border-0">
          <div className="relative">
            <div aria-hidden="true" className="absolute hidden h-full w-1/2 bg-gray-100 lg:block" />
            <div className="relative bg-gray-100 lg:bg-transparent">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8">
                <div className="mx-auto max-w-2xl py-12 lg:max-w-none lg:py-24">
                  <div className="font-serif lg:pr-16">
                    <div >
                    {/* <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"> */}
                      <dl className="">
                        {features.slice(2, 3).map((feature) => (
                          <div key={feature.name} className="flex flex-col">
                            <dt className=" font-semibold text-3xl lg:text-4xl leading-7 text-gray-900">
                              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                              </div>
                              {feature.name}
                            </dt>
                            <dd className="mt-4 flex flex-auto flex-col text-xl lg:text-2xl  text-gray-600">
                              <p className="flex-auto">{feature.description}</p>
                              
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-48 h-full sm:h-64 lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-1/2">
              <Image
                src={insulScreenWall}
                alt=""
                className="w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
        {/* Features */}

        {/* Sale and testimonials */}
        <div className="relative overflow-hidden">
          {/* Decorative background image and gradient */}
          <div aria-hidden="true" className="absolute inset-0">
            <div className="absolute inset-0 mx-auto  overflow-hidden">
              <Image
                src={insulScreenWall}
                alt=""
                className=" w-full object-cover object-center"
              />
            </div>
            <div className="absolute inset-0 bg-white bg-opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-t from-white " />
          </div>

          {/* Sale */}
          {/* <section
            aria-labelledby="sale-heading"
            className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8"
          >
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <h2 id="sale-heading" className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Achieve the noise reduction you need
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-xl text-gray-600">
                How can you know you will be getting your money’s worth to achieve the noise reduction you need?
              </p>
            </div>
          </section> */}

          
        </div>
      </main>
  )
}
  