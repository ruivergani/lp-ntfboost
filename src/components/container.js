import {twMerge} from 'tailwind-merge'
export default function ContainerGrid({ children, className }) {
  const defaultClass = 'w-full max-w-grid mx-auto px-3'
  const combinedClasses = twMerge(defaultClass, className)
  return (
    <div className={combinedClasses}>
      {children}
    </div>
  )
}