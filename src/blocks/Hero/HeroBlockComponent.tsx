import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Media } from '../../payload-types'

type CTAButton = {
  label: string
  link: string
  variant: 'primary' | 'secondary' | 'text'
}

type HeroProps = {
  heading: string
  subheading?: string
  description?: string
  backgroundImage?: Media
  ctaButtons?: CTAButton[]
  alignment: 'left' | 'center' | 'right'
}

export const HeroBlockComponent: React.FC<HeroProps> = ({
  heading,
  subheading,
  description,
  backgroundImage,
  ctaButtons,
  alignment,
}) => {
  const textAlignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  const buttonVariantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-dark',
    secondary: 'bg-white text-primary border border-primary hover:bg-gray-100',
    text: 'text-primary hover:underline',
  }

  return (
    <section className="relative w-full py-20">
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage.url || '/images/hero-bg-fallback.jpg'}
            alt={backgroundImage.alt || heading}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>
      )}

      {/* Content */}
      <div className={`relative z-10 container mx-auto px-4 ${textAlignmentClasses[alignment]}`}>
        <div className="max-w-4xl mx-auto">
          {subheading && (
            <h2
              className={`text-xl md:text-2xl font-medium mb-6 ${backgroundImage ? 'text-white' : 'text-gray-700'}`}
            >
              {subheading}
            </h2>
          )}
          <h1
            className={`text-4xl md:text-5xl font-bold mb-4 ${backgroundImage ? 'text-white' : 'text-gray-900'}`}
          >
            {heading}
          </h1>

          {description && (
            <div
              className={`prose max-w-none mb-8 ${backgroundImage ? 'text-white' : 'text-gray-600'}`}
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}

          {ctaButtons && ctaButtons.length > 0 && (
            <div
              className={`flex flex-wrap gap-4 mt-8 ${alignment === 'center' ? 'justify-center' : alignment === 'right' ? 'justify-end' : 'justify-start'}`}
            >
              {ctaButtons.map((button, index) => (
                <Link
                  key={index}
                  href={button.link}
                  className={`px-6 py-3 rounded-md font-medium transition-colors ${buttonVariantClasses[button.variant]}`}
                >
                  {button.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

