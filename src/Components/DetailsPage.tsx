import { useEffect } from "react"
import { ISongs } from "../Types/SongsType"
import { useState } from "react"
import { useParams } from "react-router-dom"

export const Details = () =>{

const [detail, setDetail] = useState<ISongs[]>([])
const {id} = useParams()

    const getDetailSong = async () => {
        try {
            let res = await fetch('https://striveschool-api.herokuapp.com/api/deezer/track/' + id)
            if (res.ok) {
                let data = await res.json()
                setDetail(data)
            } else {
                console.log("Something goes wrong fetching data")
            }

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
getDetailSong()
    }, [])

    return(
        <h1>This is the Details Page</h1>
    )
}