import { faLock, faMinus, faPlus, faSackDollar, faShirt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { sizeButtonAtom } from "../../store/atoms/uiAtom"
import LightButton from "../general/LightButton"
import BrownButton from "../general/BrownButton"
import MoreInfo from "./MoreInfo"


type ProductProps = {
  name: string,
  offers: string[],
  stock: number,
  description: string,
  price: number
}

export default function ProductDetails({ product }: { product: ProductProps }) {

  const size = useRecoilValue(sizeButtonAtom)
  const [quantiy, setQuantiy] = useState(1)
  const [openDescription, setOpenDescription] = useState(false)
  const [openWashCare, setOpenWashCare] = useState(false)

  return (

    <div className="text-brown-4  space-y-4 ">
      <div>
        <div className="border px-1 py-2 border-black font-semibold text-2xs  fa-2xs text-black inline-block">NEW</div>
        <div className=" tracking-wide text-3xl mb-3">{product.name.toUpperCase()}</div>
        <div className="font-kalra">Rs {product.price}</div>
      </div>

      <div>
        <div className="text-lg font-semibold mb-2">OFFERS</div>

        <div className="border border-gray-400 py-4 px-7 lg:mr-10 font-kalra text-sm font-semibold">
          {
            product.offers.length > 0 &&
            <div className="mb-4  flex items-center"> <FontAwesomeIcon className="size-5 mr-2" icon={faSackDollar} />  {product.offers[0]}</div>
          }

          {
            product.offers.length > 1 &&
            <div className="flex items-center" > <FontAwesomeIcon className=" size-5 mr-2" icon={faSackDollar} />  {product.offers[1]}</div>
          }
        </div>

        <div className="font-kalra">
          <div className="mb-2.5 mt-6" >
            <span className="font-semibold mr-2">Size:</span>
            {size.toUpperCase()}
          </div>

          <div className="flex gap-2">
            <SizeButton label="s" />
            <SizeButton label="m" />
            <SizeButton label="l" />
            <SizeButton label="xl" />
            <SizeButton label="xxl" />
          </div>
        </div>

        <div className="font-kalra my-6">
          <div className="text-brown-4 font-semibold mb-1">Stock Remaining</div>
          <div className="text-brown-3 text-xs tracking-wide">Only {product.stock} left. Order Soon</div>
        </div>

        <div className="space-x-2 mx-4 ">
          <FontAwesomeIcon icon={faShirt} /> <span className="font-semibold text-sm">Model is 6'1 wearing size L</span>
        </div>

      </div>
      <div>
        <h2 className="font-kalra text-brown-4 font-semibold mb-2">Quantity</h2>
        <div className="border border-gray-400 inline-block hover:border-brown-4">
          <div className="flex items-center ">
            <button
              onClick={() => {
                if (quantiy > 1) {
                  setQuantiy(quantiy - 1)
                }
              }
              }
              className=" px-3 py-2 hover:bg-brown-2 hover:bg-opacity-50"><FontAwesomeIcon className="" icon={faMinus} />
            </button>

            <div className="text-lg px-4">{quantiy}</div>

            <button
              onClick={() => { setQuantiy(quantiy + 1) }}
              className=" px-3 py-2 hover:bg-brown-2 hover:bg-opacity-50 " ><FontAwesomeIcon className="" icon={faPlus} />
            </button>
          </div>
        </div>

        <div className="my-8">

          <div className="my-2 lg:mr-10">
            <LightButton label="Add to Bag" />
          </div>
          <div className="my-2 lg:mr-10">
            <BrownButton label="Buy it now" />
          </div>
          <div className="my-5">Tax included Shipping calculated at checkout</div>
          <div className="my-8  font-kalra tracking-wide flex items-center gap-4"><FontAwesomeIcon className="size-6" icon={faLock}/> 100% SECURE PAYMENT</div>
        </div>

        <div>
          <MoreInfo/>
        </div>

        <div>
          <div className="flex justify-between items-center lg:mr-10 px-4 border-t py-3 border-gray-400">
            <div className="font-semibold text-lg tracking-wider">DESCRIPTION</div>
            <button
            onClick={()=>{
              if (openDescription === false) {
                setOpenDescription(true)
              }else{
                setOpenDescription(false)
              }
            }}
            >
              {openDescription?<FontAwesomeIcon icon={faMinus}/> : <FontAwesomeIcon icon={faPlus}/> }
            </button>
          </div>
          {openDescription && 
          <div className=" text-brown-4 text-sm font-kalra ml-4 mr-16 mb-6 text-justify font-medium">
            This white button down shirt features a regular fit that flatters all body shapes. The broad collar adds a touch of class and professionalism to your look. Versatile enough for work, parties, or everyday wear. Upgrade your wardrobe with this timeless piece. 
            </div>}
        </div>
        <div>
          <div className="flex justify-between items-center lg:mr-10 px-4 border-t py-3  border-gray-400">
            <div className="font-semibold text-lg tracking-wider">WASH CARE</div>
            <button 
            onClick={()=>{
              if (openWashCare === false) {
                setOpenWashCare(true)
              }else{
                setOpenWashCare(false)
              }
            }}
            >{openWashCare?<FontAwesomeIcon icon={faMinus}/> : <FontAwesomeIcon icon={faPlus}/> }</button>
          </div>
          {openWashCare && 
          <div className=" text-brown-4 text-sm font-kalra flex flex-col mx-4 font-medium">
           <span>Warm Water Wash</span>
           <span>Use Mild Detergent</span>
           <span>Wash Dark Colours Separately</span>
           <span>Do Not Bleach</span>
           <span>Dry in Shade</span>
           <span>Do Not Wring By Hand</span>
           <span>Warm Iron</span>
            </div>}
        </div>

      </div>
    </div>
  )
}

type SizeButtonProps = {
  label: string;
};

function SizeButton({ label }: SizeButtonProps) {
  const [size, setSize] = useRecoilState(sizeButtonAtom);

  return (
    <button
      onClick={() => setSize(label)}
      className={`${size === label ? "border-brown-4 border-2" : "border-gray-400"
        } bg-primary border hover:border-brown-4 font-kalra  text-brown-4 px-4 py-1.5`}
    >
      {label.toUpperCase()}
    </button>
  );
}



