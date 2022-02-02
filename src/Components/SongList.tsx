import { ISearch } from '../Types/SongsType'
import { ISongs } from '../Types/SongsType'
import { useState } from 'react'
import { useEffect } from 'react'
import {Table} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


 const SongList = ({search}:ISearch) => {
    const [songs, setSongs] = useState<ISongs[]>([])


    const navigate = useNavigate()
useEffect(()=>{getSong()}, [search])



    const getSong = async () => {
        try {
            let res = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=' + { search })
            if (res.ok) {
                let data = await res.json()
                setSongs(data)
            } else {
                console.log("Something goes wrong fetching data")
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        songs?.map(s=>
<>

<h2>This is the SongList of {s.artist.name} </h2>
            <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>preview</th>
      <th>artist.name</th>
      <th>album.cover_small</th>
      <th>title</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{s.preview}</td>
      <td>{s.artist.name}</td>
      <td onClick={()=>navigate(`/track/${s.id}`)} style={{cursor:"pointer"}}>{s.album.cover_small}</td>
      <td>{s.title}</td>
    </tr>
    
  </tbody>
</Table>
</>
        
            
            
            )
        
    )
}

export default SongList