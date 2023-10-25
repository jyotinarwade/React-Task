import React from 'react';
import './styles.css';



export default  function Login() {

    return(
      < div className="container-fluid">
        <div className='meet'>
             <div className='header'>
        {/* <img src="./assets/material-symbols-arrow-back-ios-rounded.png" width="30rem" id="arrow" alt="" /> */}
        <p style={{color:"white"}}  id="team">Team Meeting</p>
        </div>
      <div className='container'>
       
        
        <div className='row'>
            <div className='col-3'>
<img src="./assets/mdi-user-multiple.png" alt="" width="20%" />  
<p id="item-2">2</p>

          </div>
            <div className='col-3'>
            <img src="./assets/material-symbols-add-circle-rounded.png" alt="" width="20%"/>  
<p id="item-2">invite</p>
                </div>
                <div className='col-3'>
                <p id="item-3">Time Passed:</p>
                <p className="frame-3">25:30</p>
                 
                </div>
                <div className='col-3'>
                <img  src="./assets/material-symbols-grid-view-rounded.png" alt="" width="20%"/>
                  <img  src="./assets/vector.png" alt="" width="20%"/>
                </div>
              
        </div>
      </div>
      <div className='manager'>

      <button id="man" >Manager</button>
      
      <img src="./assets/rectangle-62-bg.png"  alt="" width="90rem" id="you"/>
      <button id="you-button" >You</button> 
      
      </div>
      </div>


      <div  className='footer'>
        <img src="./assets/group-7746.png" alt=""  width="3%"/>
       
        <button id="video"><img src="./assets/mdi-video.png"  alt="" width="35px" /></button>
        <button id="video"><img src="./assets/fluent-speaker-mute-20-regular.png"  alt="" width="35px" /></button>
        <button id="video"><img src="./assets/material-symbols-add-link-rounded.png"  alt="" width="35px" /></button>
        <button id="call"><img src="./assets/material-symbols-call-end-outline.png"  alt="" width="35px" /></button>
        
        <div className='chat'>
        <button id="video" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
          <img src="./assets/material-symbols-back-hand-outline.png"  alt="" width="30px" />
        </button>
        
        <div className="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false"
         tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel" >
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Chats</h5>
   
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className='line'>
    <p className='yes' id="yesterday"><span>Yesterday</span></p>
   </div>
  <div className="offcanvas-body">
     <img src="./assets/rectangle-50.png" alt=""  width="21%" id="mes" />

 <p id="message">It is a long established fact that a reader will be</p>
 
 <p id="me">eadable content of a page when looking at its layout.</p>
 <img src="./assets/rectangle-47.png" alt=""  width="10%" id="right"/>
 
 <img src="./assets/rectangle-50.png" alt=""  width="21%" id="mes" />

<p id="message">It is a long established fact that a reader will be</p><br/>

<img src="./assets/rectangle-47.png" alt=""  width="10%" id="righ"/>
<p id="m">eadable content of a page when looking at its layout.</p>
<p id="mess">It is a long established fact that a reader will be</p><br/>
 
  </div>


  <div className='line'>
    <p className='yes' id="yesterday"><span>Today</span></p>
   </div>
  <div className="offcanvas-body">
     <img src="./assets/rectangle-50.png" alt=""  width="21%" id="mes" />

 <p id="message">It is a long established fact that a reader will be</p>
 
 <p id="me">eadable content of a page when looking at its layout.</p>
 <img src="./assets/rectangle-47.png" alt=""  width="10%" id="right"/>
 
 <img src="./assets/rectangle-50.png" alt=""  width="21%" id="mes" />

<p id="message">It is a long established fact that a reader will be</p><br/>

<img src="./assets/rectangle-47.png" alt=""  width="10%" id="righ"/>
<p id="m">eadable content of a page when looking at its layout.</p>
<p id="mess">It is a long established fact that a reader will be</p><br/>
 
  </div>
  <div id="foot">
    <span id="foots"></span>
    <img src="./assets/vector-mRa.png" alt="" width="3%" height="30%" id="vector-1"/>
    <p id="write-message">Write a messge</p>

    <img src="./assets/ic-outline-emoji-emotions.png" alt="" id="emoji"  width="3%" height="30%"/>
    {/* <img src="./assets/vector-hZA.png" alt=""  id="dots" width="3%" height="30%"/> */}
    <img src="./assets/vector-DAG.png" alt="" id="send" width="5%" height="30%"/>
  </div>
</div>

        
</div>
       
        
        <button id="video" type="close"><img src="./assets/mdi-dots-vertical.png"  alt="" width="35px" /></button>
              
      </div> 
     
     
        </div>
       
    );
}