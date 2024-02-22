import React from 'react'
import { Button } from 'react-bootstrap'
import reactImage from "../Images/react.png";
import jsImage from "../Images/js.png";
import firebaseImage from "../Images/firebase.jpg";
import profileImage from "../Images/shiro.jpeg";
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container text-center">
      <h1>R.Nomoto</h1>

      <img src={profileImage} className="profileImage" />

      <p>企業：株式会社ミロク情報サービス<br />
        所属：モバイルグループ
        
        </p>

      <section class="page-section" id="services">
        <div className="service">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">PORTFOLIO</h2>
            <h3 class="section-subheading text-muted mb-5">
              個人学習作品
            </h3>
          </div>
          <div class="row text-center">
            <div class="col-md-4">
              <Link to="/todos">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fa-solid fa-check fa-stack-1x fa-inverse"></i>
              </span>
              </Link>
              <h4 class="my-3">Todo</h4>
              <p class="text-muted">
                
              </p>
            </div>
            <div class="col-md-4">
              <Link to="/login">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
              </span>
              </Link>
              <h4 class="my-3">ログインフォーム</h4>
              <p class="text-muted">
                
              </p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">ウェブセキュリティ</h4>
              <p class="text-muted">
            
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skill">
        <div class="text-center">
          <h1 class="title">スキル</h1>
          <div class="row text-center">
            <div class="col-md-4 services">
              <img src={reactImage} />
              <h4>React</h4>
              <p>Reactがつかえます</p>
            </div>
            <div class="col-md-4 services">
              <img src={jsImage} />
              <h4>HTML/CSS</h4>
              <p>HTML/CSSがつかえます</p>
            </div>
            <div class="col-md-4 services">
              <img src={firebaseImage} />
              <h4>Firebase</h4>
              <p>Firebaseがつかえます</p>
            </div>
          </div>
          <button type="button" class="btn btn-primary">
            スキル一覧
          </button>
        </div>
      </section>
    </div>
  )
}

export default HomePage