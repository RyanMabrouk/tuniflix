import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export function CardSkeleton(){
    return ( 
  <SkeletonTheme baseColor="#464a55" highlightColor="#16253d3c">
    <div className="card">
      <div className="card-img">
        <Skeleton height={350} />
      </div>
      <div className="card-body">
        <Skeleton height={20} width={200} />
        <Skeleton height={10} width={100} />
      </div>
    </div>
  </SkeletonTheme>)
}
export function BannerSkeleton(){
    return (<SkeletonTheme baseColor="#202020" highlightColor="#444">
                <Skeleton rectangle style={{ width: '100vw', height: '100vh', zIndex:'-1' }}/>
            </SkeletonTheme>)
}

export function ImgSkeleton(){
    return (<SkeletonTheme baseColor="#202020" highlightColor="#444">
                <Skeleton rectangle width={"100%"} height={"100%"}/>
            </SkeletonTheme>)
}
