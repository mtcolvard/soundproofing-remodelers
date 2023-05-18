import { ChatBubbleLeftRightIcon, WrenchScrewdriverIcon, DocumentMagnifyingGlassIcon, PuzzlePieceIcon, ScaleIcon, ShareIcon } from '@heroicons/react/24/solid'
import { Share } from 'next/font/google'


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

function ThreeFeatureSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            We provide
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            everything you need for your peace of mind.

          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.slice(0,3).map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a href={feature.href} className="text-sm font-semibold leading-6 text-indigo-600">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}


function FourFeatureSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            We provide
            </h2>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            everything you need for your peace of mind.
            </h2>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}



export default function FeatureSection() {
  return (
    <>
      {/* <ThreeFeatureSection /> */}
      <FourFeatureSection />
    </>
  )
}