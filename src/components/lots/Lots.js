import Separator from "../separator/Separator"
import Timer from "../timer/Timer"
import popular from './../../icons/lots/popular.png'
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import {reduxThunkImg, onTimer} from './lotsSlice'

import uniqid from 'uniqid'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import './lots.sass'


const Lots = () => {
    
    const dispatch = useDispatch();
    const lots = useSelector((state)=> state.lotsSlice.lots);
    const deadline = useSelector((state)=> state.lotsSlice.deadline)
    useEffect(()=> {
        dispatch(reduxThunkImg())
    // eslint-disable-next-line   
    }, [])

    const swiperSlide = lots.map((item, i) =>{
        return(
            <SwiperSlide 
                key={uniqid()}>
                    <img src={item.img} alt=""/>
                    {/* deadline = {deadline[i]} */}
                    
            </SwiperSlide>
        )
    })


    return(
        <section className="lots container">
            <img 
                src={popular} 
                className="title title_lots"
                alt='title'>
            </img>
            <h2 className="sub-title sub-title_lots">
                лоты Под аукцион
            </h2>
            <Separator/> 
            <Swiper
                spaceBetween={100}
                slidesPerView={3}
                watchSlidesProgress= {true}
                breakpoints = {{
                    320: {
                        slidesPerView: 1,
                        grid: {
                                rows: 1,
                                fill: "row"
                        },
                    },
                    // when window width is >= 480px
                    632: {
                        slidesPerView: 2,
                        grid: {
                                rows: 1,
                                fill: "row"
                        }, 
                    },
                    992: 
                    {
                        grid: {
                                rows: 1,
                                fill: "row",
                        },
                        slidesPerView: 3,
                    },        
                }}
                rewind = {true}
                onSlideChange={() => console.log('slide change')}
                modules={[Grid]}
                grid = {{rows: 1,
                    fill: "row"}}>
                        
                {swiperSlide}
                {/* <SwiperSlides/> */}
            </Swiper>
            <Timer deadline = {"2022-12-07"}/>
            <Timer deadline = {"2022-11-27"}/>
        </section> 
    )
}

export default Lots