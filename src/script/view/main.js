import $ from 'jquery';

import {fadeScroll, btnDisable} from "./effect.js";
import {sendData, getData} from "./../component/send-data.js";
import dataSource from "./../data/data-source";


const main = () => {
    $(window).scroll(fadeScroll);

    getData;

    btnDisable
    $('#negara').change(btnDisable)

    $('#search1').click(sendData)

    dataSource($('#nama').val(),$('#negara').val())
    $('#search2').click(() => {
        sendData;
        dataSource($('#nama').val(),$('#negara').val())
    })
}

export default main;