import React, { useState } from 'react';
import config from '../config/index.json';

const Features = () => {
  const { features } = config;
  const { title, subtitle, description } = features;

  // State for managing the email input
  const [email, setEmail] = useState('');

  // Function to handle changes in the email input
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // Function to handle form submission (you can customize this according to your needs)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add logic to handle the email submission (e.g., send to a server, integrate with Mailchimp, etc.)
    console.log('Submitted email:', email);
  };

  return (
    <div className={`py-12 bg-background`} id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2
            className={`text-base text-primary font-semibold tracking-wide uppercase`}
          >
            {title}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {subtitle}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {description}
          </p>
        </div>

        {/* Email subscription form */}
        <div className="mt-10 flex flex-col items-center">
          <div id="mc_embed_shell">
            <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
            <style type="text/css">
              {`
                #mc_embed_signup{background:#fff; false;clear:left; font:14px Helvetica,Arial,sans-serif; width: 600px;}
              `}
            </style>
            <div id="mc_embed_signup">
              <form
                action="https://njit.us21.list-manage.com/subscribe/post?u=88f422eebc51657070ba47a0d&amp;id=614a98dedd&amp;f_id=0019ece6f0"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
                onSubmit={handleSubmit}
              >
                <div id="mc_embed_signup_scroll">
                  <h2>Subscribe</h2>
                  <div className="indicates-required">
                    <span className="asterisk">*</span> indicates required
                  </div>
                  <div className="mc-field-group">
                    <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
                    <input
                      type="email"
                      name="EMAIL"
                      className="required email"
                      id="mce-EMAIL"
                      required
                      value={email}
                      onChange={handleEmailChange}
                    />
                    <span id="mce-EMAIL-HELPERTEXT" className="helper_text"></span>
                  </div>
                  <div id="mce-responses" className="clear foot">
                    <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                    <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
                  </div>
                  <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                    <input type="text" name="b_88f422eebc51657070ba47a0d_614a98dedd" tabIndex="-1" value="" />
                  </div>
                  <div className="optionalParent">
                    <div className="clear foot">
                      <input
                        type="submit"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                        className="button"
                        value="Subscribe"
                      />
                      <p style={{ margin: '0px auto' }}>
                        <a href="http://eepurl.com/iGdpq2" title="Mailchimp - email marketing made easy and fun">
                          <span style={{ display: 'inline-block', background: 'transparent', borderRadius: '4px' }}>
                            <img
                              className="refferal_badge"
                              src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                              alt="Intuit Mailchimp"
                              style={{ width: '220px', height: '40px', display: 'flex', padding: '2px 0px', justifyContent: 'center', alignItems: 'center' }}
                            />
                          </span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script>
            <script type="text/javascript">
              {`
                (function($) {
                  window.fnames = new Array(); window.ftypes = new Array();
                  fnames[0]='EMAIL'; ftypes[0]='email'; fnames[1]='FNAME'; ftypes[1]='text';
                  fnames[2]='LNAME'; ftypes[2]='text'; fnames[3]='ADDRESS'; ftypes[3]='address';
                  fnames[4]='PHONE'; ftypes[4]='phone'; fnames[5]='BIRTHDAY'; ftypes[5]='birthday';
                }(jQuery));
                var $mcj = jQuery.noConflict(true);
              `}
            </script>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
