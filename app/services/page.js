import Image from 'next/image'
import Link from 'next/link'
import insulScreenWall from '/public/insulScreenWall.webp'
import caulkApplication from '/public/caulkApplication.webp'
import mediation from '/public/mediation.webp'
import consultation from '/public/consultation.webp'
import { ChatBubbleLeftRightIcon, WrenchScrewdriverIcon, DocumentMagnifyingGlassIcon, ShareIcon } from '@heroicons/react/24/solid'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'


const features = [
  {
    name: 'Consultations',
    description:
      'On-site consultations to assess optimal soundproofing remedies to meet your personal and budget particular needs.',
    href: '#',
    icon: ChatBubbleLeftRightIcon,
    imageName: consultation,
    alt: '',
    id: 'consultations'
  },
  {
    name: 'Installation & Remodeling',
    description:
      'Extensive experience mitigating noise in single & multifamily homes, mixed-use developments, and commercial properties.',
    href: '#',
    icon: WrenchScrewdriverIcon,
    imageName: caulkApplication,
    alt: 'A builder applying acoustical caulk to a window',
    id: 'installations'
  },
  {
    name: 'Compliance Reports',
    description:
      'Acoustical testing, design services, and compliance reports satisfying Title 25 and Section 1207 of the California State Building Code.',
    href: '#',
    icon: DocumentMagnifyingGlassIcon,
    imageName: insulScreenWall,
    alt: 'Screenshot of acoustics measurement and design software',
    id: 'compliance'
  },
  {
    name: 'Social Services',
    description:
      'Mediation between sensitive parties; legal consultations in special situations. Escrow Evaluations & Real Estate Noise Audits.',
    // 'Sensitive mediation between parties; legal consultations in special situations, as well as escrow evaluations and real estate noise audits.',
    href: '#',
    icon: ShareIcon,
    imageName: mediation,
    alt: 'Several people talking around a table',
    id: 'socialServices'
  },
]


export default function Example() {
  return (
    <main className="overflow-hidden bg-gray-100 py-12 sm:py-24">
      {features.map((feature) => (
        <ServicesFeature
          key={feature.id}
          feature={feature} />
      ))}
    </main>
  )
}

function ServicesFeature({ feature }) {
  return (
    <div   className="mx-auto mb-24 max-w-7xl px-6 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:gap-x-16 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        <div className="lg:col-span-2 lg:pr-8 lg:pt-4">
          <div className="lg:max-w-lg">
            <div className="mx-auto max-w-2xl py-12 lg:max-w-none lg:py-24">
              <div className="font-serif lg:pr-16">
                <dl className="">
                    <div className="flex flex-col">
                      <dt className=" font-semibold text-3xl lg:text-4xl leading-7 text-gray-900">
                        <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-400">
                          <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </div>
                        {feature.name}
                      </dt>
                      <dd className="mt-4 flex flex-auto flex-col text-xl lg:text-2xl  text-gray-600">
                        <p className="flex-auto">{feature.description}</p>

                      </dd>
                    </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={feature.imageName}
          alt={feature.alt}
          className="lg:col-start-3 w-full md:w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0"
        />
      </div>
    </div>
  )
} 