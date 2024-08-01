

export default function LightButton({label}: {label : string}) {
  return (
    <div>
      <button className="border border-brown-3 text-xs text-brown-3 transition duration-300 font-kalra w-full py-4 hover:bg-brown-2 hover:bg-opacity-20">{label.toUpperCase()}</button>
    </div>
  )
}
