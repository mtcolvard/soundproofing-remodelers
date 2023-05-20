import Image from 'next/image'
import Link from 'next/link'
import insulScreenWall from '/public/insulScreenWall.webp'
import { ChatBubbleLeftRightIcon, WrenchScrewdriverIcon, DocumentMagnifyingGlassIcon, ShareIcon } from '@heroicons/react/24/solid'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'


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
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better workflow</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                iste dolor cupiditate blanditiis ratione.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.slice(2,3).map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            src={insulScreenWall}
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}
