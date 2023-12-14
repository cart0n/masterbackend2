import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'



function Actions() {

    var all
    async function getActions() {
        
        $.ajax({
            url:'/a',
            async: false,
            type: 'GET',
            success:function(data){
                console.log(JSON.parse(data))
                all = JSON.parse(data)
            },
            error: function (err) {
                console.log(err)
            }
        })
    }
    getActions()
    console.log(all)

  return (
    <main>
    <section class="container">
        <article class="minor-top-title">
            <div class="minor-top-nav">
                <a href="/">Головна</a>
                <i class="fas fa-long-arrow-alt-right"></i>
                <a>Акції</a>
            </div>
        <h1>Акції</h1>
        </article>
        <article class="news action">
            <div class="action-icon">
                <i class="fas fa-tags"></i>
            </div>
            <h2>{all.actions[0].title}</h2>
            <h4>{all.actions[0].date}</h4>
            <p>Шановні абоненти! <br /><br /> 
            {all.actions[0].text1} <br/>
            {all.actions[0].text2}</p>
        </article>
        <article class="news action">
            <div class="action-icon">
                <i class="fas fa-tags"></i>
            </div>
            <h2>{all.actions[1].title}</h2>
            <h4>{all.actions[1].date}</h4>
            <p>Шановні абоненти! <br /><br /> 
            {all.actions[1].text1}<br /><br /> 
            {all.actions[1].text2}<br />
            {all.actions[1].text3}</p>
        </article>
        <article class="news action">
            <div class="action-icon">
                <i class="fas fa-tags"></i>
            </div>
            <h2>{all.actions[2].title}</h2>
            <h4>{all.actions[2].date}</h4>
            <p>Шановні абоненти! <br /><br /> 
            {all.actions[2].text1}<br /><br /> 
            {all.actions[2].text2}<br />
            {all.actions[2].text3}</p>
        </article>
    </section>
    <footer className="container">
        <div className="main-footer" id="main-footer">
            <div className="footer-section">
                <img src="images/ArgoCom_logo.png" alt="" />
                <h5>Ваш надійний інтернет провайдер</h5>
            </div>
            <div className="footer-section">
                <h3>Де ми розміщені</h3>
                <div className="footer-nav">
                    <p className="districts-footer">Борщів</p>
                    <p className="districts-footer">Хоростків</p>
                    <p className="districts-footer">Збараж</p>
                    <p className="districts-footer">Ланівці</p>
                    <p className="districts-footer">Шумськ</p>
                </div>
            </div>
            <div class="footer-section">
                <h3>Контакти</h3>
                <p><i className="fas fa-map-marker-alt"></i>Тернопіль вулиця Лозовецька дім 3a</p>
                <p><i className="fas fa-phone-alt"></i>+380980363598</p>
                <p><i className="fas fa-envelope"></i>Abon@argocom.te.ua</p>
            </div>
        </div>
        <div className="smaller-footer">
            <h6>©2023 @cart0n_mc</h6>
        </div>
        </footer>
    </main>
  );
}

export default Actions;
