import React from 'react'
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const Rely = () => {
  return (
    <>
     <div className='container text-center py-5 my-5' id='rely'>
      <h1 className='text-5xl font-bold text-center'>RELIABLE TECH FOR STAYING CLOSE
</h1>
<p className='text-lg text-line '>
Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.
</p>

<div class="flex items-center justify-center">
    <img src="end.svg" alt="" />
</div>

<div className="py-5">
<div>
    <h1 className='text-3xl font-bold'>Ready to start journey?</h1>
</div>

<button className='my-5 sm:my-0 bg-black text-white rounded-full h-12 w-52  me-2'> <span><FileDownloadIcon/></span>Download for windows</button>

</div>

      </div> 
    </>
  )
}

export default Rely
