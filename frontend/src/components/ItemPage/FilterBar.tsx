import { faAngleDown, faAngleUp, faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";


export default function FilterBar() {
  const [filterBar, setFilterBar] = useState("hidden")

  const handleOpenBar = () =>{
    if (filterBar === "hidden") {
      setFilterBar("")
    }else {
      setFilterBar("hidden")
    }
  }

  return (
    <>
      <div className="font-kalra  text-brown-4 text-sm font-semibold">
        <div className="flex items-center gap-3 my-4">
          <FontAwesomeIcon className="size-4" icon={faSliders} />
          <button onClick={handleOpenBar} className="">
            Filter
            {filterBar === "hidden" ?<FontAwesomeIcon className="size-3 ml-1" icon={faAngleDown} /> : <FontAwesomeIcon className="size-3 ml-1" icon={faAngleUp} /> }
            </button>
        </div>
        <div className={filterBar}>
          <div className={`flex gap-4`}>
            <button className="border py-2 px-4 border-gray-400 hover:border-brown-4" >Size <FontAwesomeIcon className="size-3" icon={faAngleDown} /></button>
            <button className="border py-2 px-4 border-gray-400 hover:border-brown-4">Availability <FontAwesomeIcon className="size-3" icon={faAngleDown} /></button>
          </div>
        </div>

      </div>


    </>
  )
}
