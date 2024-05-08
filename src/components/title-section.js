export default function TitleSection({subtitle, title}) {
  return (
    <div className="px-3 @desktop:px-0 space-y-1 @desktop:mb-14 mb-8">
      <span className="text-sm @desktop:text-xl font-semibold text-white text-opacity-70">{subtitle}</span>
      <h2 className="text-2xl @desktop:text-5xl/tight text-white font-poppins">{title}</h2>
    </div>
  )
}