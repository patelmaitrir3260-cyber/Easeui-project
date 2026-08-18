import Tooltip from '@/components/Tooltip/Tooltip'
// import React from 'react'
import { Button } from '@/components'
import ComponentDemo from '../ComponentsDemo';
import PropsTable from '@/components/Personal/PropsTable';

// interface Props {
  
// }

export const TooltipPage = () => {

  const tooltipCode = `
<Tooltip content="This top tooltip" side="top">
  <Button
    variant="primary"
    size="sm"
    animation="fadeIn"
    hoverAnimation="jiggle"
  >
    Top
  </Button>
</Tooltip>

<Tooltip content="This left side content" side="left">
  <Button
    variant="secondary"
    size="sm"
    animation="fadeIn"
    hoverAnimation="bounce"
  >
    Left
  </Button>
</Tooltip>

<Tooltip content="This right side content" side="right">
  <Button
    variant="dark"
    size="lg"
    animation="fadeIn"
    hoverAnimation="jiggle"
  >
    Right
  </Button>
</Tooltip>

<Tooltip content="This bottom side content" side="bottom">
  <Button
    variant="destructive"
    size="sm"
    animation="fadeIn"
    hoverAnimation="scale"
  >
    Bottom
  </Button>
</Tooltip>
`;

const propsData = [
   {
    prop: "content",
    type: "string",
    default: "—",
    description: "The text or information displayed inside the tooltip.",
  },
  {
    prop: "side",
    type: '"top" | "bottom" | "left" | "right"',
    default: '"top"',
    description: "Controls the position of the tooltip relative to the element.",
  },
  {
    prop: "children",
    type: "React.ReactNode",
    default: "—",
    description: "The element that triggers the tooltip when hovered.",
  },
  ];
  return (
  <div className="max-w-4xl mx-auto p-4 space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Tooltip</h1>
        <p className="text-xl text-gray-600">
         Displays additional information when the user hovers over an element.
        </p>


         <ComponentDemo code={tooltipCode}>
            <div className='mt-6 h-[250px] flex flex-col justify-center items-center rounded-lg bg-gray-100 gap-4 p-5' >
 <Tooltip content=' Tooltip on Top ' side='top'>
  <Button 
   variant="primary"
    size="sm"
    animation="fadeIn"
    hoverAnimation="jiggle">Top</Button>
 </Tooltip>

 <div className='flex gap-9'>
  <Tooltip content='Tooltip on Left ' side='left'>
    <Button
      variant="secondary"
      size="sm"
      animation="fadeIn"
      hoverAnimation="bounce"
    >
      Left
    </Button>
  </Tooltip>
  
  

  <Tooltip content='Tooltip on Right ' side='right'>
    <Button
      variant="dark"
      size="lg"
      animation="fadeIn"
      hoverAnimation="jiggle"
    >
      Right
    </Button>
  </Tooltip>
 </div>

   <Tooltip content='Tooltip on bottom ' side='bottom'>
     <Button
      variant="destructive"
      size="sm"
      animation="fadeIn"
      hoverAnimation="scale"
    >
      Bottom
    </Button>
  </Tooltip>
      </div>
          </ComponentDemo>

 <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <PropsTable data={propsData} />
      </section>

      
      </div>
</div>
  )
}


export default TooltipPage;