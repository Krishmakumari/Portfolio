<<<<<<< HEAD

import { Html,useProgress } from '@react-three/drei'
const CanvasLoader=()=> {
    const {progress}=useProgress();
  return (
    <Html
    as="div"
    center style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
    }}
    >
        <span className='canvas-loader'/>
        <p style={{fontSize:14, color:'#F1F1F1', fontWeight:800,marginTop:40}}>
            {progress != 0? `${progress.toFixed(2)}%`:'Loading...'}
        </p>
        CanvasLoader</Html>
  )
}

=======

import { Html,useProgress } from '@react-three/drei'
const CanvasLoader=()=> {
    const {progress}=useProgress();
  return (
    <Html
    as="div"
    center style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
    }}
    >
        <span className='canvas-loader'/>
        <p style={{fontSize:14, color:'#F1F1F1', fontWeight:800,marginTop:40}}>
            {progress != 0? `${progress.toFixed(2)}%`:'Loading...'}
        </p>
        CanvasLoader</Html>
  )
}

>>>>>>> 4b6c810f5a26ceb6dffa13bf8999e9d3226a77d2
export default CanvasLoader