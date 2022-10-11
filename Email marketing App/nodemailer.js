require("dotenv").config({path:'./config/.env'});
const nodemailer = require("nodemailer");

const software_developmentTransporter = nodemailer.createTransport({
  // service: "Gmail",
  // host:"smtp.gmail.com",
  // port: 465,
  // secure: true, // use TLS
  service: "Outlook",
  // host:"smtp.office365.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PASS,
  }
});

module.exports.sendSoftware_developmentEmail = (email, video, firstDateEmail, firstDateEvent, secondDateEmail, secondDateEvent) => {
  software_developmentTransporter.sendMail({
    from: process.env.AUTH_USER,
    to: email,
    subject: "Your Newsletter from ...",
      html: `<!DOCTYPE html>
      <html
        lang="en"
        xmlns="http://www.w3.org/1999/xhtml"
        xmlns:v="urn:schemas-microsoft-com:vml"
        xmlns:o="urn:schemas-microsoft-com:office:office"
      >
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="x-apple-disable-message-reformatting" />
      
          <!-- CSS Reset : BEGIN -->
          <style>
            html,
            body {
              margin: 0 auto !important;
              padding: 0 !important;
              height: 100% !important;
              width: 100% !important;
              background: #f1f1f1;
            }
      
            /* What it does: Stops email clients resizing small text. */
            * {
              -ms-text-size-adjust: 100%;
              -webkit-text-size-adjust: 100%;
            }
      
            div[style*="margin: 16px 0"] {
              margin: 0 !important;
            }
      
            table,
            td {
              mso-table-lspace: 0pt !important;
              mso-table-rspace: 0pt !important;
            }
      
            table {
              position: relative !important;
              border-spacing: 0 !important;
              border-collapse: collapse !important;
              table-layout: fixed !important;
              margin: 0 auto !important;
            }
      
            img {
              -ms-interpolation-mode: bicubic;
            }
      
            a {
              text-decoration: none;
            }
      
            *[x-apple-data-detectors],
            .nstyle-auto-detected-links *,
            .aBn {
              border-bottom: 0 !important;
              cursor: default !important;
              color: inherit !important;
              text-decoration: none !important;
              font-size: inherit !important;
              font-family: inherit !important;
              font-weight: inherit !important;
              line-height: inherit !important;
            }
      
            .a6S {
              display: none !important;
              opacity: 0.01 !important;
            }
      
            .im {
              color: inherit !important;
            }
      
            img.g-img + div {
              display: none !important;
            }
      
            @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
              u ~ div .email-container {
                min-width: 320px !important;
              }
            }
      
            @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
              u ~ div .email-container {
                min-width: 375px !important;
              }
            }
      
            @media only screen and (min-device-width: 414px) {
              u ~ div .email-container {
                min-width: 414px !important;
              }
            }
          </style>
          <!-- CSS Reset : END -->
      
          <!-- Progressive Enhancements : BEGIN -->
          <style type="text/css">
            body {
              font-family: Roboto, "Helvetica Neue", Helvetica, Arial, "Droid Sans",
                sans-serif;
              /* font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif; */
              font-size: 15px;
              line-height: 1;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
      
            .email-section {
              padding: 2em;
            }
            .text {
              font-size: 15px;
            }
            .link {
              color: #fffffa !important;
              text-decoration: none;
            }
            .bold {
              font-weight: bold;
            }
      
            .heading-section-white {
              color: white;
            }
            .heading-section-black {
              color: black;
            }
      
            .bg-white {
              background-color: white;
            }
            .bg-black {
              background-color: black;
            }
      
            .layout-header {
              position: relative;
              z-index: 0;
            }
            .layout-header .overlay {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              content: "";
              width: 100%;
      
              z-index: -1;
              font-size: calc(10px + 2vmin);
              color: white;
            }
            .layout-logo {
              height: 80px;
              pointer-events: none;
            }
            .focus-in-contract-bck {
              padding-top: 500px;
            }
      
            ul.social {
              padding: 0;
            }
            ul.social li {
              display: inline-block;
            }
      
            .footer {
              color: rgba(255, 255, 255, 0.5);
              background-color: rgb(20, 20, 20);
            }
            .footer .heading {
              color: #ffffff;
              font-size: 20px;
            }
          </style>
      
          <title>Software development</title>

          <!-- Best way to style is using inline css -->
        </head>
        <body
          width="100%"
          style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly"
        >
          <center style="width: 100%; background-color: #282c34">
            <div
              style="
                display: none;
                font-size: 1px;
                max-height: 0px;
                max-width: 0px;
                opacity: 0;
                overflow: hidden;
                mso-hide: all;
                font-family: sans-serif;
              "
            >
              &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
            </div>
            <div style="max-width: 600px; margin: 0 auto" class="email-container">
              <table
                align="center"
                role="presentation"
                cellspacing="0"
                cellpadding="0"
                border="0"
                width="100%"
                style="margin: auto"
              >      
                <tr>
                  <td class="email-section heading-section-white bg-black">
                    <h2>Video example ...</h2>
                    <div class="container">
                      <a href="${video}" target="_blank" rel="noopener noreferrer">
                        <img
                          src="https://i.postimg.cc/t4PsLrF0/Fake.png"
                          alt="Auto"
                          style="
                            width: 100%;
                            height: auto;
                            margin: auto;
                            display: block;
                          "
                        />
                      </a>
                    </div>
                  </td>
                </tr>
      
                <table>
                  <tr>
                    <td
                      class="heading-section-white bg-black"
                      style="text-align: center"
                    >
                      <h2>
                        <a
                          class="link"
                          href="https://www.google.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          >>> Jetzt online Termin vereinbaren <<</a
                        >
                      </h2>
                      <table>
                        <tbody style="text-align: left">
                          <tr>
                            <td
                              style="
                                padding: 0 20px 0 20px;
                                border-right: 1px solid white;
                              "
                            >
                              ${firstDateEmail}
                            </td>
                            <td
                              style="
                                padding: 0 20px 0 20px;
                                border-right: 1px solid white;
                              "
                            >
                              <a
                                class="link"
                                href="https://www.google.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                >Wartung klein (Assyst A)</a
                              >
                            </td>
                            <td style="padding: 0 20px 0 20px">
                              <!--OWA button-->
                              <a
                                href="https://outlook.live.com/calendar/0/deeplink/compose?body=discretion&enddt=${firstDateEvent}&location=New%20Earth&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=${firstDateEvent}&subject=subject"
                                target="_blank"
                                rel="noopener noreferrer"
                                style="
                                  color: yellow;
                                  text-decoration: none;
                                  display: inline-block;
                                  mso-padding-alt: 0;
                                "
                                ><img
                                  src="https://i.postimg.cc/PJYhf6vk/schedule.png"
                                  alt="Outlook"
                                  style="width: 20px; height: 20px; margin: auto"
                              /></a>
                            </td>
                          </tr>
                          <tr>
                            <td
                              style="
                                padding: 0 20px 0 20px;
                                border-right: 1px solid white;
                              "
                            >
                              ${secondDateEmail}
                            </td>
                            <td
                              style="
                                padding: 0 20px 0 20px;
                                border-right: 1px solid white;
                              "
                            >
                              <a
                                class="link"
                                href="https://www.google.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                >Wartung groß (Assyst B)</a
                              >
                            </td>
                            <td style="padding: 0 20px 0 20px">
                              <!--OWA button-->
                              <a
                                href="https://outlook.live.com/calendar/0/deeplink/compose?body=discretion&enddt=${secondDateEvent}&location=New%20Earth&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=${secondDateEvent}&subject=subject"
                                target="_blank"
                                rel="noopener noreferrer"
                                style="
                                  color: yellow;
                                  text-decoration: none;
                                  display: inline-block;
                                  mso-padding-alt: 0;
                                "
                                ><img
                                  src="https://i.postimg.cc/PJYhf6vk/schedule.png"
                                  alt="Outlook"
                                  style="width: 20px; height: 20px; margin: auto"
                              /></a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </table>
      
                <table
                  align="center"
                  role="presentation"
                  cellspacing="0"
                  cellpadding="0"
                  border="0"
                  width="100%"
                  style="margin: auto"
                >
                  <tr>
                    <td valign="top" class="footer email-section">
                      <table>
                        <tr>
                          <td width="60%">
                            <table
                              role="presentation"
                              cellspacing="0"
                              cellpadding="0"
                              border="0"
                              width="100%"
                            >
                              <tr>
                                <td style="text-align: left; padding-right: 10px">
                                  <h3 class="heading">Über uns</h3>
                                  <p>
                                    Als Autorisierter Mercedes-Benz Verkauf und
                                    Service für Pkw und Nutzfahrzeuge sind wir eine
                                    feste Größe und weit über die Region für
                                    erstklassigen Service und kundenorientierte
                                    Beratung bekannt.
                                  </p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
      
                    <td valign="top" class="footer email-section" width="40%">
                      <table
                        role="presentation"
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                        width="100%"
                      >
                        <tr>
                          <td
                            style="
                              text-align: left;
                              padding-left: 5px;
                              padding-right: 5px;
                            "
                          >
                            <h3 class="heading">Kontakt</h3>
                            <p>
                              Bleses Kraftfahrzeuge GmbH & Co. KG
                              <br />
                              Gießener Str. 39 - 45, 51105 Köln
                              <br />
                              +49 221 828010
                            </p>
      
                            <ul class="social">
                              <li>
                                <a
                                  href="https://www.facebook.com/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  ><img
                                    src="https://i.postimg.cc/XJjzhs4v/facebook.png"
                                    alt="facebook"
                                    style="width: 30px; height: 30px; margin: auto"
                                /></a>
                              </li>
                              <li>
                                <a
                                  href="https://www.instagram.com/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  ><img
                                    src="https://i.postimg.cc/8PJnqJQL/instagram.png"
                                    alt="instagram"
                                    style="width: 30px; height: 30px; margin: auto"
                                /></a>
                              </li>
                              <li>
                                <a
                                  href="https://www.twitter.com/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <img
                                    src="https://i.postimg.cc/pV16GQ72/twitter.png"
                                    alt="twitter"
                                    style="width: 30px; height: 30px; margin: auto"
                                /></a>
                              </li>
                              <li>
                                <a
                                  href="https://www.linkedin.com/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  ><img
                                    src="https://i.postimg.cc/5yjk9jHd/linkedin.png"
                                    alt="linkedin"
                                    style="width: 30px; height: 30px; margin: auto"
                                /></a>
                              </li>
                              <li>
                                <a
                                  href="https://www.youtube.com/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <img
                                    src="https://i.postimg.cc/L57QJRfq/youtube.png"
                                    alt="youtube"
                                    style="width: 30px; height: 30px; margin: auto"
                                /></a>
                              </li>
                            </ul>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
      
                  <tr>
                    <td
                      colspan="2"
                      width="100%"
                      valign="middle"
                      class="footer"
                      style="text-align: center"
                    >
                      <p>&copy; 2022 JK. All Rights Reserved</p>
                    </td>
                  </tr>
                </table>
              </table>
            </div>
          </center>
        </body>
      </html>
      `,
  })

  // verify connection configuration
  software_developmentTransporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email has been successfully sent!");
    }
  });
};

const it_supportTransporter = nodemailer.createTransport({
  // service: "Gmail",
  // host:"smtp.gmail.com",
  // port: 465,
  // secure: true, // use TLS
  service: "Outlook",
  port: 587,
  auth: {
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PASS,
  },
});

module.exports.sendIT_supportEmail = (email, video, firstDateEmail, firstDateEvent, secondDateEmail, secondDateEvent) => {
  it_supportTransporter.sendMail({
    from: process.env.AUTH_USER,
    to: email,
    subject: "Your Newsletter from ...",
      html: `<!DOCTYPE html>
      <html
        lang="en"
        xmlns="http://www.w3.org/1999/xhtml"
        xmlns:v="urn:schemas-microsoft-com:vml"
        xmlns:o="urn:schemas-microsoft-com:office:office"
      >
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="x-apple-disable-message-reformatting" />
      
          <!-- CSS Reset : BEGIN -->
          <style>
            html,
            body {
              margin: 0 auto !important;
              padding: 0 !important;
              height: 100% !important;
              width: 100% !important;
              background: #f1f1f1;
            }
      
            /* What it does: Stops email clients resizing small text. */
            * {
              -ms-text-size-adjust: 100%;
              -webkit-text-size-adjust: 100%;
            }
      
            div[style*="margin: 16px 0"] {
              margin: 0 !important;
            }
      
            table,
            td {
              mso-table-lspace: 0pt !important;
              mso-table-rspace: 0pt !important;
            }
      
            table {
              position: relative !important;
              border-spacing: 0 !important;
              border-collapse: collapse !important;
              table-layout: fixed !important;
              margin: 0 auto !important;
            }
      
            img {
              -ms-interpolation-mode: bicubic;
            }
      
            a {
              text-decoration: none;
            }
      
            *[x-apple-data-detectors],
            .nstyle-auto-detected-links *,
            .aBn {
              border-bottom: 0 !important;
              cursor: default !important;
              color: inherit !important;
              text-decoration: none !important;
              font-size: inherit !important;
              font-family: inherit !important;
              font-weight: inherit !important;
              line-height: inherit !important;
            }
      
            .a6S {
              display: none !important;
              opacity: 0.01 !important;
            }
      
            .im {
              color: inherit !important;
            }
      
            img.g-img + div {
              display: none !important;
            }
      
            @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
              u ~ div .email-container {
                min-width: 320px !important;
              }
            }
      
            @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
              u ~ div .email-container {
                min-width: 375px !important;
              }
            }
      
            @media only screen and (min-device-width: 414px) {
              u ~ div .email-container {
                min-width: 414px !important;
              }
            }
          </style>
          <!-- CSS Reset : END -->
      
          <!-- Progressive Enhancements : BEGIN -->
          <style type="text/css">
            body {
              font-family: Roboto, "Helvetica Neue", Helvetica, Arial, "Droid Sans",
                sans-serif;
              /* font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif; */
              font-size: 15px;
              line-height: 1;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
      
            .email-section {
              padding: 2em;
            }
            .text {
              font-size: 15px;
            }
            .link {
              color: #fffffa !important;
              text-decoration: none;
            }
            .bold {
              font-weight: bold;
            }
      
            .heading-section-white {
              color: white;
            }
            .heading-section-black {
              color: black;
            }
      
            .bg-white {
              background-color: white;
            }
            .bg-black {
              background-color: black;
            }
      
            .layout-header {
              position: relative;
              z-index: 0;
            }
            .layout-header .overlay {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              content: "";
              width: 100%;
      
              z-index: -1;
              font-size: calc(10px + 2vmin);
              color: white;
            }
            .layout-logo {
              height: 80px;
              pointer-events: none;
            }
            .focus-in-contract-bck {
              padding-top: 500px;
            }
      
            ul.social {
              padding: 0;
            }
            ul.social li {
              display: inline-block;
            }
      
            .footer {
              color: rgba(255, 255, 255, 0.5);
              background-color: rgb(20, 20, 20);
            }
            .footer .heading {
              color: #ffffff;
              font-size: 20px;
            }
          </style>
      
          <title>IT support</title>

          <!-- Best way to style is using inline css -->
        </head>
        <body
          width="100%"
          style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly"
        >
          <center style="width: 100%; background-color: #282c34">
            <div
              style="
                display: none;
                font-size: 1px;
                max-height: 0px;
                max-width: 0px;
                opacity: 0;
                overflow: hidden;
                mso-hide: all;
                font-family: sans-serif;
              "
            >
              &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
            </div>
            <div style="max-width: 600px; margin: 0 auto" class="email-container">
              <table
                align="center"
                role="presentation"
                cellspacing="0"
                cellpadding="0"
                border="0"
                width="100%"
                style="margin: auto"
              >      
                <tr>
                  <td class="email-section heading-section-white bg-black">
                    <h2>Video example ...</h2>
                    <div class="container">
                      <a href="${video}" target="_blank" rel="noopener noreferrer">
                        <img
                          src="https://i.postimg.cc/t4PsLrF0/Fake.png"
                          alt="Auto"
                          style="
                            width: 100%;
                            height: auto;
                            margin: auto;
                            display: block;
                          "
                        />
                      </a>
                    </div>
                  </td>
                </tr>
      
                <table>
                  <tr>
                    <td
                      class="heading-section-white bg-black"
                      style="text-align: center"
                    >
                      <h2>
                        <a
                          class="link"
                          href="https://www.google.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          >>> Jetzt online Termin vereinbaren <<</a
                        >
                      </h2>
                      <table>
                        <tbody style="text-align: left">
                          <tr>
                            <td
                              style="
                                padding: 0 20px 0 20px;
                                border-right: 1px solid white;
                              "
                            >
                              ${firstDateEmail}
                            </td>
                            <td
                              style="
                                padding: 0 20px 0 20px;
                                border-right: 1px solid white;
                              "
                            >
                              <a
                                class="link"
                                href="https://www.google.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                >Wartung klein (Assyst A)</a
                              >
                            </td>
                            <td style="padding: 0 20px 0 20px">
                              <!--OWA button-->
                              <a
                                href="https://outlook.live.com/calendar/0/deeplink/compose?body=discretion&enddt=${firstDateEvent}&location=New%20Earth&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=${firstDateEvent}&subject=subject"
                                target="_blank"
                                rel="noopener noreferrer"
                                style="
                                  color: yellow;
                                  text-decoration: none;
                                  display: inline-block;
                                  mso-padding-alt: 0;
                                "
                                ><img
                                  src="https://i.postimg.cc/PJYhf6vk/schedule.png"
                                  alt="Outlook"
                                  style="width: 20px; height: 20px; margin: auto"
                              /></a>
                            </td>
                          </tr>
                          <tr>
                            <td
                              style="
                                padding: 0 20px 0 20px;
                                border-right: 1px solid white;
                              "
                            >
                              ${secondDateEmail}
                            </td>
                            <td
                              style="
                                padding: 0 20px 0 20px;
                                border-right: 1px solid white;
                              "
                            >
                              <a
                                class="link"
                                href="https://www.google.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                >Wartung groß (Assyst B)</a
                              >
                            </td>
                            <td style="padding: 0 20px 0 20px">
                              <!--OWA button-->
                              <a
                                href="https://outlook.live.com/calendar/0/deeplink/compose?body=discretion&enddt=${secondDateEvent}&location=New%20Earth&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=${secondDateEvent}&subject=subject"
                                target="_blank"
                                rel="noopener noreferrer"
                                style="
                                  color: yellow;
                                  text-decoration: none;
                                  display: inline-block;
                                  mso-padding-alt: 0;
                                "
                                ><img
                                  src="https://i.postimg.cc/PJYhf6vk/schedule.png"
                                  alt="Outlook"
                                  style="width: 20px; height: 20px; margin: auto"
                              /></a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </table>
      
                <table
                  align="center"
                  role="presentation"
                  cellspacing="0"
                  cellpadding="0"
                  border="0"
                  width="100%"
                  style="margin: auto"
                >
                  <tr>      
                    <td valign="top" class="footer email-section" width="40%">
                      <table
                        role="presentation"
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                        width="100%"
                      >
                        <tr>
                          <td
                            style="
                              text-align: left;
                              padding-left: 5px;
                              padding-right: 5px;
                            "
                          >
                            <h3 class="heading">Kontakt</h3>
                            <p>
                              Bleses Kraftfahrzeuge GmbH & Co. KG
                              <br />
                              Gießener Str. 39 - 45, 51105 Köln
                              <br />
                              +49 221 828010
                            </p>
      
                            <ul class="social">
                              <li>
                                <a
                                  href="https://www.facebook.com/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  ><img
                                    src="https://i.postimg.cc/XJjzhs4v/facebook.png"
                                    alt="facebook"
                                    style="width: 30px; height: 30px; margin: auto"
                                /></a>
                              </li>
                              <li>
                                <a
                                  href="https://www.instagram.com/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  ><img
                                    src="https://i.postimg.cc/8PJnqJQL/instagram.png"
                                    alt="instagram"
                                    style="width: 30px; height: 30px; margin: auto"
                                /></a>
                              </li>
                              <li>
                                <a
                                  href="https://www.twitter.com/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <img
                                    src="https://i.postimg.cc/pV16GQ72/twitter.png"
                                    alt="twitter"
                                    style="width: 30px; height: 30px; margin: auto"
                                /></a>
                              </li>
                              <li>
                                <a
                                  href="https://www.linkedin.com/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  ><img
                                    src="https://i.postimg.cc/5yjk9jHd/linkedin.png"
                                    alt="linkedin"
                                    style="width: 30px; height: 30px; margin: auto"
                                /></a>
                              </li>
                              <li>
                                <a
                                  href="https://www.youtube.com/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <img
                                    src="https://i.postimg.cc/L57QJRfq/youtube.png"
                                    alt="youtube"
                                    style="width: 30px; height: 30px; margin: auto"
                                /></a>
                              </li>
                            </ul>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
      
                  <tr>
                    <td
                      colspan="2"
                      width="100%"
                      valign="middle"
                      class="footer"
                      style="text-align: center"
                    >
                      <p>&copy; 2022 JK. All Rights Reserved</p>
                    </td>
                  </tr>
                </table>
              </table>
            </div>
          </center>
        </body>
      </html>
      `,
  })

  // verify connection configuration
  it_supportTransporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email has been successfully sent!");
    }
  });
};
