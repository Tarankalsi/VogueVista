
type CertificateProps = {
    logo: string,
    heading: string,
    detail: string
}

export default function Certificate({ logo, heading, detail }: CertificateProps) {
    return (
        <div className="flex justify-center">
            <div className="  text-brown-5 px-4 py-2 w-40 sm:w-52 md:w-56 lg:w-72">
                <img className=" h-8 md:h-14 lg:h-20" src={logo} alt="" />
                <div className="text-md md:text-xl mt-2">{heading}</div>
                <div className="mt-2 md:mt-1 text-xs md:text-sm w-40 md:w-62">{detail}</div>
            </div>
        </div>

    )
}

