import error404 from "../../../image/error404.avif"
import "./Layout404.css"

function Layout404(){
    return (
        <>
            <div className="image">
                <img src={error404}/>
                <div className="a">
                    <a href="http://localhost:3000/">Trang chủ</a>
                </div>
            </div>
        </>
    )
}

export default Layout404;