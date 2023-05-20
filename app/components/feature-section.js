import { ChatBubbleLeftRightIcon, WrenchScrewdriverIcon, DocumentMagnifyingGlassIcon, ShareIcon } from '@heroicons/react/24/solid'
import { Share } from 'next/font/google'
import Link from 'next/link'



const features = [
  {
    name: 'Consultations',
    description:
      'On-site consultations to assess optimal soundproofing remedies to meet your personal and budget particular needs.',
    href: '/services/#consultations',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Installation & Remodeling',
    description:
      'Extensive experience mitigating noise in single & multifamily homes, mixed-use developments, and commercial properties.',
    href: 'services/#installations',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'Compliance Reports',
    description:
      'Acoustical testing, design services, and compliance reports satisfying Title 25 and Section 1207 of the California State Building Code.',
    href: 'services/#compliance',
    icon: DocumentMagnifyingGlassIcon,
  },
  {
    name: 'Social Services',
    description:
      'Mediation between sensitive parties; legal consultations in special situations. Escrow Evaluations & Real Estate Noise Audits.',
    href: '/services/#socialServices',
    icon: ShareIcon,
  },
]

export default function FeatureSection() {
  return (
    <div className="bg-[#f5f6f8] py-24 sm:py-32">
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
                <Link href={feature.href} >
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  {/* <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-800"> */}
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-400">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />              
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 text-base leading-7 text-gray-600">{feature.description}</dd>
                </Link>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

