import { Link } from "react-router-dom"

export function Home() {
    return (
        <div className="containerHome">

            <div className="element1">
                <Link to={'/categoria/pantalones'}>
                    <div className="image-container">
                        <img src="./img/pantalones.webp" alt="" />
                        <div className="after"> Pantalones </div>
                    </div>
                </Link>
            </div>

            <div className="element2">
                <Link to={'/categoria/buzos'}>
                    <div className="image-container">
                        <img src="./img/buzos.webp" alt="" />
                        <div className="after"> Buzos </div>
                    </div>
                </Link>
            </div>

            <div className="element3">
                <Link to={'/categoria/remeras'}>
                    <div className="image-container">
                        <img src="./img/remeras1.jpg" alt="" />
                        <div className="after"> Remeras </div>
                    </div>
                </Link>
            </div>

        </div>
    )
}


