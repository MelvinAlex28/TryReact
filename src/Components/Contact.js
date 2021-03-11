import React, { Component } from 'react';
import dompurify from 'dompurify';

class Contact extends Component {
   componentDidMount() {
      const head = document.querySelector('head');
      const script = document.createElement('script');
      script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
      head.appendChild(script);
   }

   render() {

      const sanitizer = dompurify.sanitize;
      if (this.props.data) {
         // var name = this.props.data.name;
         // var street = this.props.data.address.street;
         // var city = this.props.data.address.city;
         // var state = this.props.data.address.state;
         // var zip = this.props.data.address.zip;
         // var phone = this.props.data.phone;
         // var email = this.props.data.email;
         var message = this.props.data.contactmessage;
      }

      return (
         <section id="contact">

            <div className="row section-head">

               {/* <div className="two columns header-col"> */}

               <h1>Get In Touch.</h1>

               {/* </div> */}

            </div>

            <div className="row">

               <div className="six columns">

                  <p className="lead" dangerouslySetInnerHTML={{__html: sanitizer(message)}}></p>

               </div>


               {/* calendly component starts*/}
               <div className="four columns">
                  <div id="schedule_form">
                  <div class="calendly-inline-widget" data-url="https://calendly.com/mandoor1997" style="min-width:320px;height:630px;"></div>
               </div>
               {/* calendly component ends */}


               {/* <aside className="four columns footer-widgets">
                  <div className="widget widget_contact">

                     <h4>Address and Phone</h4>
                     <p className="address">
                        <i className="fa fa-user"></i>&emsp;{name}<br />
                        <i className="fa fa-home"></i>&emsp;{street} <br />
                        {city}, {state} {zip}<br />
                        <i className="fa fa-phone"></i>&emsp;<span>{phone}</span><br />
                        <i className="fa fa-envelope"></i>&emsp;<span><a href="mailto:haramrit09k@gmail.com">{email}</a></span>
                     </p>
                  </div>
               </aside>
                */}
            
            </div>
         </section>
      );
   }
}

export default Contact;
