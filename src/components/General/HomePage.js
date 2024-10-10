import React from 'react'
import profileImage from "../../Images/shiro.jpeg";
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container text-center">

      <img src={profileImage} className="profileImage" />
      <section class="page-section" id="services">
        <div className="service">
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
              <Link to="/weather">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fa-solid fa-sun fa-stack-1x fa-inverse"></i>
              </span>
              </Link>
              <h4 class="my-3">天気</h4>
              <p class="text-muted">
              </p>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  )
}

export default HomePage