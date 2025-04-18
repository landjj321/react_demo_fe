import React, { useRef } from 'react';
import './index.less';
import { useMount } from 'ahooks'
const image = require('../../img/450.png');


const SubmitCheckDialog = (props) => {

    const { picUrl } = props;
    console.log(picUrl, 'picUrl')

    const submitCheckPicRef = useRef(null)

    useMount(() => {
        console.log('mounted')

        console.log(submitCheckPicRef.current)
        const $canvas = submitCheckPicRef.current;
        const $context = $canvas.getContext('2d');

        $canvas.style.width = '280px';
        $canvas.style.height = '280px';

        $canvas.width = '280px'
        $canvas.height = '280px'
        let imageObj = new Image();
        imageObj.onload = function () {
            $context.drawImage(imageObj, 0, 0, 280, 280)


        }
        imageObj.src = image;


        //初始化图片
    })

    return (

        <div className="submit-check-dialog">

            <div className="submit-check-wrapper">
                <canvas id="submit-check-pic"
                    ref={submitCheckPicRef}
                ></canvas>
            </div>




        </div>
    )
}

export default SubmitCheckDialog;