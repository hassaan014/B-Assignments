import React from 'react'
import Card from './Card'
import "./Body.css"

const Body = () => {
    return (
        <div id='main' style={{ width: "100%", backgroundColor: "rgb(245,245,245)" }}>

            <div style={{fontSize: "32px", width: "100%", fontWeight: "700", marginLeft: "5%", marginRight: "5%", marginTop:"3%", marginBottom: "3%"}}>SmartPhones</div>
            
            <Card name="realme C75" cap="Dhulai Horai Hai" price="49,999"
                img="https://image01.realme.net/general/20241212/1733967866096fa2982967549485db8c3259a0f9a1fe7.png.webp" />

            <Card name="realme 13+ 5G" cap="Speed To Victory" price="89,999"
                img="https://image01.realme.net/general/20241108/1731062061605d960daec82634da8ae53a2b5bba2b081.png.webp" />

            <Card name="realme GT 6" cap="Power Meets AI" price="149,999"
                img="https://image01.realme.net/general/20240930/17276898714837028c74b7ec64f578595a0bec73bd213.png.webp" />

            <Card name="realme Note 60" cap="Champion Quality" price="26,999"
                img="https://image01.realme.net/general/20240919/17267273214814cc35277c25042d580c622fec0dad738.png.webp" />

            <Card name="realme C61" cap="Hard To Break" price="32,999"
                img="https://image01.realme.net/general/20240827/17247517057780f136750f9ab445193022ca17ab4b885.png.webp" />

            <Card name="realme C65" cap="Unbreakable Champion" price="49,999"
                img="https://image01.realme.net/general/20240726/17219881569684931245943754b279da88be96c1ba769.png.webp" />

            <Card name="realme 12" cap="Power in Every Shot" price="59,999"
                img="https://image01.realme.net/general/20240624/171922460925609665c170ea145d0a40db9866d4a1d51.png.webp" />

            <Card name="realme 12+ 5G" cap="Power in Every Shot" price="74,999"
                img="https://image01.realme.net/general/20240620/1718869504893402543bcb87c4708aedfe7ce612e8725.png.webp" />

            <Card name="realme C63" cap="3 min Charge, 60 min T20 Match" price="39,999"
                img="https://image01.realme.net/general/20240607/1717742184050e38a613e33f146b49dfa47720aea45cf.png.webp" />

            <Card name="realme Note 50" cap="Long Lasting Value Beast" price="24,999"
                img="https://image01.realme.net/general/20240919/17267273214814cc35277c25042d580c622fec0dad738.png.webp" />

            <Card name="realme C67" cap="108MP 3x In-sensor Zoom Camera, Snapdragon 685" price="39,999"
                img="https://image01.realme.net/general/20240105/1704419834105be51d94716d4469084d9ba9b1a904eb6.png.webp" />

            <Card name="realme C53" cap="Champion Gold, 33W Champion Charge" price="39,999"
                img="https://image01.realme.net/general/20231129/17012403962026a15564d103748a6931a17233c223eb7.png.webp" />

            <div style={{fontSize: "32px", width: "100%", fontWeight: "700", marginLeft: "5%", marginRight: "5%", marginTop:"3%", marginBottom: "3%"}}>Accessories</div>

            <Card name="realme Buds T110" cap="Listen in Full Color" price="4,999"
                img="https://image01.realme.net/general/20240628/1719540050662f1db6cdfd9104e5896203287689d7d2d.png.webp" />

            <Card name="realme Buds Q" cap="Music Never Ends" price="7,999"
                img="https://image01.realme.net/general/20201111/1605080175371.jpg.webp" />

        </div>
    )
}

export default Body