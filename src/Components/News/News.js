import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
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
                        <h1>{news.title}</h1>
                        <br />
                        <img className="img-fluid" src={news.imageURL} alt="" />
                        <p className="mt-2"><b>@{news.name}</b></p>
                        <p><small>Published: {news.date}, {news.time}</small> </p>
                        <p className="text-aria">{news.textarea}</p>
                    </div>
                )
            }
        </div>
    );
};

export default News;