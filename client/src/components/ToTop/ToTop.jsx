import React, { useEffect } from 'react';
import $ from 'jquery';
import './ToTop.css';

const ToTop = () => {

    useEffect(() => {
        $(window).scroll(function () {
          if ($(this).scrollTop() !== 0) {
            $("#toTop").fadeIn();
          } else {
            $("#toTop").fadeOut();
          }
        });
    
        $("#toTop").click(function () {
          $("body, html").animate({ scrollTop: 0 }, 800);
        });
      }, []);

    return (
        <div>
            <div id="toTop">⬆</div>
        </div>
    );
};

export default ToTop;