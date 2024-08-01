

export default function Gallery() {
  return (
    <div className="flex flex-wrap  justify-center gap-2 ">

        <ImageCard img_url="https://shorturl.at/c6Mpx" />
        <ImageCard img_url="https://shorturl.at/c6Mpx" />
        <ImageCard img_url="https://shorturl.at/c6Mpx" />
        <ImageCard img_url="https://shorturl.at/c6Mpx" />
        <ImageCard img_url="https://shorturl.at/c6Mpx" />
        <ImageCard img_url="https://shorturl.at/c6Mpx" />


    </div>
  )
}




function ImageCard({ img_url }: { img_url: string }) {
  return (
    <div className="">
      <img className="w-full h-full object-cover md:h-80 lg:h-96 xl:h-bigCardHeight" src={img_url} alt="" />
    </div>
  )
}
