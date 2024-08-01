

export default function BrownButton({label}: {label : string}) {
  return (
    <div>
    <button className="border bg-brown-2 text-xs text-primary font-kalra w-full py-4 hover:bg-brown-6 transition duration-300">{label.toUpperCase()}</button>
  </div>
  )
}
