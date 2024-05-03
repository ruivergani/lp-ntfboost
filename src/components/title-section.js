export default function TitleSection({subtitle, title}) {
  return (
    <div className="space-y-1 mb-14">
      <span className="text-xl font-semibold text-white text-opacity-70">{subtitle}</span>
      <h2 className="text-5xl/tight text-white font-poppins">{title}</h2>
    </div>
  )
}