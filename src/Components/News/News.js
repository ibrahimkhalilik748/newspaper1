import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router';
import './News.css';

const News = () => {
    const { _id } = useParams()
    console.log(_id)
    const [news, setNews] = useState([])
    useEffect(() => {
        fetch(`https://mighty-ridge-57000.herokuapp.com/paper/${_id}`)
            .then(res => res.json())
            .then(data => setNews(data))
        // console.log(data)
    }, [_id])
    return (
        <div className="optionTop container news">
            <br />
            {
                news.map(news =>
                    <div className=" ">
                        <Helmet>
                            <meta charSet="utf-8" />
                            <title>{news.title}</title>
                            <link rel="canonical" href="http://mysite.com/example" />
                        </Helmet>
                        <h1>{news.title}</h1>
                        <br />
                        <img className="img-fluid d-block" src={news.imageURL} alt="" />
                        <br />
                        <div className="person d-block">
                            <img className="" src={news.photoURL} alt="" /><p className="mt-2 pl-1 d-inline"><b>{news.name}</b></p>
                        </div>
                        <p className=""><small>Published: {news.date}, {news.time}</small> </p>
                        <p className="text-aria">{news.textarea}</p>
                    </div>
                )
            }
        </div>
    );
};

export default News;