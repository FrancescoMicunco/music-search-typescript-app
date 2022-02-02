import { ISearch } from '../Types/SongsType'
import { ISongs } from '../Types/SongsType'
import { useState } from 'react'
import { useEffect } from 'react'

// interface search {
//     search: ISearch
// }




export const SongList = ({search}:ISearch) => {
    const [songs, setSongs] = useState<ISongs[]>([])

useEffect(()=>{getSong()}, [search])



    const getSong = async () => {
        try {
            let res = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=' + { search })
            if (res.ok) {
                let data = await res.json()
                setSongs(data)
            } else {
                console.log("Somthing goes wrong fetching data")
            }

        } catch (error) {
            console.log(error)
        }
    }



    return (




        <h1>This is the SongList</h1>
    )
}