import { faBoxOpen, faReceipt, faTruck } from '@fortawesome/free-solid-svg-icons'
import { faCottonBureau } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function MoreInfo() {
    return (
        <div>
            <h2 className='text-xl font-semibold'>PRODUCT INFO</h2>

            <div className='mx-4 my-6 space-y-5 text-sm font-semibold'>
                <div className='flex items-center gap-4'>
                    <FontAwesomeIcon className='size-6' icon={faTruck} />
                    <span>Prepaid orders (Free Shipping)</span>
                </div>
                <div  className='flex items-center gap-4'>
                    <FontAwesomeIcon className='size-6'  icon={faCottonBureau} />
                    <span>100% Cotton</span>
                </div >
                <div className='flex items-center gap-4'>
                    <FontAwesomeIcon className='size-6' icon={faBoxOpen} />
                    <span>7 Days free Exchange or Return</span>
                </div>
                <div  className='flex items-center gap-4'>
                    <FontAwesomeIcon className='size-6' icon={faReceipt} />
                    <span>Cash on Delivery (Extra Charges)</span>
                </div>
            </div>
        </div>
    )
}
