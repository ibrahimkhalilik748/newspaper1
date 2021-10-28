import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import '../NewsStyles/NewsStyle.css'

const Business = () => {
    const { value2 } = useContext(userContext);
    const [dark, setDark] = value2;

    const [news, setNews] = useState([])
    // console.log(news.unshift(4, 5));
    const first0 = news.slice(0, 1)
    const first3 = news.slice(1, 4)
    const first8 = news.slice(3, 9)
    useEffect(() => {
        fetch('https://mighty-ridge-57000.herokuapp.com/paper')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])
    return (
        <div className="optionTop container">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Business|News</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className={dark ? "App dark aDark" : "App light aLight"}>
                <div className="container pt-3">
                    <div className="row">
                        <div className="col-md-7">
                            {
                                first0.map(news =>
                                    <div  className={dark ? "firstCard box-bg-dark sbcfpzgs" : "firstCard box-bg-light sbcfpzgs"}>
                                        <Link to={"/news/" + news._id}>
                                            <div className="img m-auto">
                                                <img className="box-img" src={news.imageURL} alt="" />
                                            </div>
                                            <div className="">
                                                <h2 className="p-2">{news.title}</h2>
                                                {/* <p className="p-1">{news.textarea}</p> */}
                                            </div>
                                        </Link>
                                    </div>
                                )
                            }
                        </div>
                        <div className="col-md-5"> 
                            {
                                first3.map(news =>
                                    <Link to={"/news/" + news._id}>
                                        <div className={dark ? "box-bg-dark row box-tow" : "box-bg-light row box-tow"}>

                                            <div className="col-6">
                                                <img className="box-img" src={news.imageURL} alt="" />
                                            </div>
                                            <div className="col-6 pt-3">
                                                <h6>{news.title}</h6>
                                                <p><small>{news.textarea}</small></p>
                                            </div>

                                        </div>
                                    </Link>
                                )
                            }
                        </div>
                    </div>
                    <div className="box-three mt-5">
                        {
                            news.map(news =>
                                <div className={dark ? "box-bg-dark" : "box-bg-light"}>
                                    <Link to={"/news/" + news._id}>
                                        <img className="box-img" src={news.imageURL} alt="" />
                                        <h5 className="p-1">{news.title}</h5>
                                    </Link>
                                </div>
                            )
                        }
                    </div>
                    <br /><br /><br />
                </div>
            </div>
        </div>
    );
};

export default Business;