import React, { useState } from 'react'

interface TooltipProps {
    content:string;
    side:"left"|"right"|"top"|"bottom";
    children:React.ReactNode;
}

 const Tooltip = ({content,children,side="top"}:TooltipProps) => {
   const [show, setShow] = useState(false)
   console.log(side);
   
    return (
        <div className='relative inline-block
         '
         onMouseEnter={()=>setShow(true)}
         onMouseLeave={()=>setShow(false)}
         >
            {children}
            {show && side==="left" && (
                <div className='absolute right-full top-1/2 mr-2
                -translate-y-1/2 whitespace-nowrap rounded-md bg-gray-900 px-3 py-2text-sm text-white'>{content}
                 <div className="absolute top-1/2 left-full h-2 w-2 -translate-y-1/2 -translate-x-1/2 rotate-45 bg-gray-900 " />
   </div>
                
            )}

             {show && side==="right" && (
                <div className='absolute left-full top-1/2 ml-2
                -translate-y-1/2 whitespace-nowrap rounded-md bg-gray-900 px-3 py-2text-sm text-white'>{content}
                 <div className="absolute top-1/2 right-full h-2 w-2 -translate-y-1/2 -translate-x-1/2 rotate-45 bg-gray-900 " /></div>
            )}
            
           
              {show && side==="bottom" && (
                <div className='absolute top-full left-1/2 mt-2
                -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-900 px-3 py-2text-sm text-white'>{content}
                   <div className="absolute left-1/2 bottom-full h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-red-900 " /></div>
            )}

              {show && side==="top" && (
                <div className='  absolute bottom-full left-1/2 mb-2  -translate-x-1/2 whitespace-nowrap  rounded-md bg-gray-900 px-3 py-2 text-sm  text-white  shadow-lg  transition-all
  duration-200
'>{content}
          <div className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gray-900" /></div>
            )}
            
        </div>
    )
}
export default Tooltip