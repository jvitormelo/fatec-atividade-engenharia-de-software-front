import { ImageCard } from '../../../components/dashboard/images/image_card'
import React from 'react'
import { useLastImagesController } from '../../../controllers/useLastImagesController'
import DashboardLayout from '../../../layout/DashboardLayout'

const IndexImages = () => {
  const { state, removeImageHandler } = useLastImagesController()
  return (
   <>
     <div className='flex flex-col mb-8'>
       <div className="text-xl mb-4 font-bold">Ultimas imagens</div>
       <div className='flex -my-2 -mx-2 flex-wrap flex-col md:flex-row lg:flex-row' >
         {state.images.map((image) => <div className="px-2 py-2" key={image.id}><ImageCard removeImageHandler={removeImageHandler} image={image}/> </div>)}
       </div>
     </div>
   </>
  )
}
IndexImages.layout = DashboardLayout
export default IndexImages
