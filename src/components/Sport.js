import { useParams } from "react-router-dom";

export default function Sport ({sportsData}) {
    const params = useParams()
    console.log(params)
    const sport = sportsData.find(sport => sport.id === Number(params.id))
    return (
        <article><img width='100' src={sport.imageSrc} alt={sport.title} /></article>
    )
}