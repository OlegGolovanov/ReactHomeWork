// import {useSelector} from "react-redux"
import {useSelector} from "react-redux"
import { useMediaQuery } from "react-responsive";
import uniqid from 'uniqid';

import ornament from '../../img/range/ornament.png'
import "./range.sass"


const Range = () => {
    const itemsRange = useSelector((state)=> state.rangeSlice.itemsRange )
    const mediaMax949px = useMediaQuery({ query: '(max-width: 949px)' })
    const mediaMin950px = useMediaQuery({ query: '(min-width: 950px)' })
    const mediaMin768px = useMediaQuery({ query: '(min-width: 768px)' })
    

    const FigureRange = ({i}) => {
        const media_Min768px_Max948px = mediaMin768px && mediaMax949px && (itemsRange.length - 1 === i || itemsRange.length - 2  === i);
        const media_Min950px = mediaMin950px && (itemsRange.length - 1 === i || itemsRange.length - 2  === i || itemsRange.length - 3 === i) 
        return (
                <div 
                    style={media_Min768px_Max948px ? {'height': "310px"} : null}  
                    className="items-range__figure figure-range">
                    <div className="figure-range__square"></div>
                    <div className="figure-range__line"></div>
                    <div className="figure-range__round"></div>
                    <div className="figure-range__line"></div>
                    { media_Min768px_Max948px
                    ? <div className="figure-range__square"></div> 
                    : null}
                    { media_Min950px
                    ? <div className="figure-range__square"></div> 
                    : null}
                </div>
                )
    }

    const FigureRound = () => {
        return(
            <div className="items-range__figure-round">
            </div>
        )
    }
 
    const Li = () => itemsRange.map(({name, clazz}, i)=> {
        const even = i % 2 === 0 
        return (
            <li
                key = {uniqid()}
                className={`items-range__item items-range__item_${clazz}`}><span>{name}</span>
                {mediaMin950px ? <FigureRange i = {i}/> : null}
                {mediaMin768px && even ? <FigureRange i = {i}/> : null}
                <FigureRound/>
            </li>
        )
    })

    

    return (
        <section className="range  ">
            <div className="container container_range">
                <ul className="range__items items-range">
                    <Li/>
                </ul>
            </div>
            <div className="container">
                <div className="range__wrapper-dsc">
                    <img className="range__ornament"
                        src={ornament} alt="ornament"/>
                    <div className="range__dsc">
                        <p> ???? ???????? ???????????????????????????? ?????? ???? ???????????????????? ?????????????? ????????????????, ?????????? ???? ?????????????? ?????????? ?????????????????? ?????? ???????? ????????. 
                        ?????????????? ???? ?????????????? ???????????????????????? ???? ???????????? ???????????????? ?????????????? ?????????????????? ???????????????? ???????????????????????? ??????????-?????????????? ????????????????????????, ??????????, 
                        ?? ?????????????????????????? ????????????????????????, ?? ?????? ?????????? ??????????????. 
                        ?????????? ?????????? ???????????? ?? ???????? ???? ?????????????????? ???? ?????????????? ???????????????????????? ?????????????????????? ???? 30% ???? 80%.
                        ?????? ???????????? ?????????????? ???????????????????????? ???????????????? ???????????????????????? ?????????? ?? ???????????????? ?????? ?????????????? ????????????????????????.
                        </p>
                        <p>???? ???????? ???????????????????????????? ?????? ???? ???????????????????? ?????????????? ????????????????, ?????????? ???? ?????????????? ?????????? ?????????????????? ?????? ???????? ????????. 
                        ?????????????? ???? ?????????????? ???????????????????????? ???? ???????????? ???????????????? ?????????????? ?????????????????? ???????????????? ???????????????????????? ??????????-?????????????? ????????????????????????,
                        ??????????, ?? ?????????????????????????? ????????????????????????, ?? ?????? ?????????? ??????????????. ?????????? ?????????? ???????????? ?? ???????? ???? ?????????????????? ???? ?????????????? ???????????????????????? ?????????????????????? 
                        ???? 30% ???? 80%. ?????? ???????????? ?????????????? ???????????????????????? ???????????????? ???????????????????????? ?????????? ?? ???????????????? ?????? ?????????????? ????????????????????????.
                        </p>
                        <p>?????????????????????????? ????????????????????????, ?? ?????? ?????????? ??????????????. ?????????? ?????????? ???????????? ?? ???????? ???? ?????????????????? ???? ?????????????? ???????????????????????? ?????????????????????? ???? 30% ???? 80%.
                        </p>
                    </div>
                </div>         
            </div>
        </section>
    )
}

export default Range