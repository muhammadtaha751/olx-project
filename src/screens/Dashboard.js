import { Navbar, Slider, DashSec, Footer, DetailCard } from '../components'
import { getAds } from "../config/firebase"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Dashboard() {
    const [ads, setAds] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const adsData = await getAds()
        setAds(adsData)
    }
    function nav() {
        navigate('/addetail')
    }

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <ul className="ul">
                    <div className="categories">
                        <a href="#"><li>All categories</li></a>
                    </div>
                    <a href="#"><li>Mobile Phones</li></a>
                    <a href="#"><li>Cars</li></a>
                    <a href="#"><li>Motorcycles</li></a>
                    <a href="#"><li>House</li></a>
                    <a href="#"><li>TV-Video-Audio</li></a>
                    <a href="#"><li>Tablets</li></a>
                    <a href="#"><li>Land & Plots</li></a>
                </ul>
            </div>
            <div>
                <Slider />
            </div>

            <div>
                <DashSec />
            </div>
            <div>
                <h1>Cars</h1>
                {ads.map(item => {
                    return <div className="CarsCard" onClick={nav}>
                        <DetailCard data={item} />
                    </div>
                })}
            </div>
            <div>
                <Footer />
            </div>

        </div>
    )
}