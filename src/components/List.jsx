import ListHeader from './ListHeader'
import Listicles from './Listicles'
import Listicles2 from './Listicles2'

function List(){
  return (
    <>
    <ListHeader title='Companies'/>
<Listicles/>
<ListHeader title='Gloabal Companies'/>
<Listicles2/>
  
   </> 
    )
}

export default List