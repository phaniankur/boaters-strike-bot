// var express = require('express');
const axios = require('axios');
const dotenv = require('dotenv')
dotenv.config();

async function emailNotification(data){
    let EMAIL_URL = 'https://cuba.bybrisk.com/mail';
    let EMAIL = `<!DOCTYPE html>
    <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">

    <head>
        <title></title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
        <!--[if !mso]><!-->
        <link href="https://fonts.googleapis.com/css?family=Cormorant+Garamond" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Droid+Serif" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Fira+Sans" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Lora" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Quattrocento" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Merriweather" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css">
        <!--<![endif]-->
        <style>
            * {
                box-sizing: border-box;
            }

            body {
                margin: 0;
                padding: 0;
            }

            a[x-apple-data-detectors] {
                color: inherit !important;
                text-decoration: inherit !important;
            }

            #MessageViewBody a {
                color: inherit;
                text-decoration: none;
            }

            p {
                line-height: inherit
            }

            .desktop_hide,
            .desktop_hide table {
                mso-hide: all;
                display: none;
                max-height: 0px;
                overflow: hidden;
            }

            @media (max-width:730px) {
                .desktop_hide table.icons-inner {
                    display: inline-block !important;
                }

                .icons-inner {
                    text-align: center;
                }

                .icons-inner td {
                    margin: 0 auto;
                }

                .image_block img.big,
                .row-content {
                    width: 100% !important;
                }

                .mobile_hide {
                    display: none;
                }

                .stack .column {
                    width: 100%;
                    display: block;
                }

                .mobile_hide {
                    min-height: 0;
                    max-height: 0;
                    max-width: 0;
                    overflow: hidden;
                    font-size: 0px;
                }

                .desktop_hide,
                .desktop_hide table {
                    display: table !important;
                    max-height: none !important;
                }

                .row-2 .column-1 .block-1.heading_block h1 {
                    font-size: 18px !important;
                }

                .row-7 .column-1 .block-1.heading_block h1 {
                    font-size: 16px !important;
                }
            }
        </style>
    </head>

    <body style="background-color: #FFFFFF; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
        <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF;">
            <tbody>
                <tr>
                    <td>
                        <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f7f6f5;">
                            <tbody>
                                <tr>
                                    <td>
                                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #072b52; color: #000000; width: 710px;" width="710">
                                            <tbody>
                                                <tr>
                                                    <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                        <table class="heading_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                            <tr>
                                                                <td class="pad" style="text-align:center;width:100%;padding-top:20px;padding-bottom:20px;">
                                                                    <h1 style="margin: 0; color: #ffffff; direction: ltr; font-family: 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; font-size: 38px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">boatrr.</span></h1>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f7f6f5;">
                            <tbody>
                                <tr>
                                    <td>
                                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f2d7d9; color: #000000; width: 710px;" width="710">
                                            <tbody>
                                                <tr>
                                                    <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                        <table class="heading_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                            <tr>
                                                                <td class="pad" style="text-align:center;width:100%;">
                                                                    <h1 style="margin: 0; color: #072b52; direction: ltr; font-family: 'Lora', Georgia, serif; font-size: 28px; font-weight: 400; letter-spacing: 1px; line-height: 200%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong>Thank you for choosing to ride with us</strong></h1>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f7f6f5;">
                            <tbody>
                                <tr>
                                    <td>
                                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f5efe6; color: #000000; width: 710px;" width="710">
                                            <tbody>
                                                <tr>
                                                    <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                        <table class="text_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                            <tr>
                                                                <td class="pad" style="padding-bottom:10px;padding-left:15px;padding-right:15px;padding-top:10px;">
                                                                    <div style="font-family: 'Trebuchet MS', Tahoma, sans-serif">
                                                                        <div class style="font-size: 12px; font-family: 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 21.6px; color: #222222; line-height: 1.8;">
                                                                            <p style="margin: 0; font-size: 20px; text-align: center; mso-line-height-alt: 36px;"><span style="font-size:20px;color:#072b52;"><span style>Dear<strong> ${data.username},</strong></span></span></p>
                                                                            <p style="margin: 0; font-size: 20px; text-align: center; mso-line-height-alt: 39.6px;"><span style="font-size:22px;color:#072b52;"><span style><span style="font-size:20px;">Your ride is successfully booked with <span style="background-color:#072b52;color:#ffffff;"><strong>boatrr.</strong></span></span></span></span></p>
                                                                            <p style="margin: 0; font-size: 20px; text-align: center; mso-line-height-alt: 36px;"><span style="font-size:20px;color:#072b52;"><strong><span style>&nbsp;</span></strong><span style>Scheduled on</span><strong><span style> ${data.rideDetails.rideDate} | ${data.rideDetails.rideTime}</span></strong></span></p>
                                                                            <p style="margin: 0; font-size: 20px; text-align: center; mso-line-height-alt: 36px;"><span style="font-size:20px;color:#072b52;"><span style>OrderID:</span><strong><span style> ${data.orderDetails.orderID}</span></strong></span></p>
                                                                            <p style="margin: 0; font-size: 20px; text-align: center; mso-line-height-alt: 36px;"><span style="color:#072b52;font-size:20px;"><span style>Pick-up</span><span style> Station: </span><span style><strong>${data.rideDetails.pickupGhat}</strong></span></span></p>
                                                                            <p style="margin: 0; font-size: 20px; text-align: center; mso-line-height-alt: 36px;"><span style="color:#072b52;font-size:20px;"><span style>Amount Paid</span><span style> Station: </span><span style><strong>${data.orderDetails.bookingPrice}</strong></span></span></p>
                                                                            <p style="margin: 0; font-size: 20px; text-align: center; mso-line-height-alt: 27px;"><span style="font-size:15px;color:#072b52;">Boatman's detail will be sent 1 hours before the ride</span></p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table class="divider_block block-2" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                            <tr>
                                                                <td class="pad">
                                                                    <div class="alignment" align="center">
                                                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                            <tr>
                                                                                <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #072B52;"><span>&#8202;</span></td>
                                                                            </tr>
                                                                        </table>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="row row-4" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                            <tbody>
                                <tr>
                                    <td>
                                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #072b52; border-radius: 0; color: #000000; width: 710px;" width="710">
                                            <tbody>
                                                <tr>
                                                    <td class="column column-1" width="75%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                        <table class="heading_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                            <tr>
                                                                <td class="pad" style="padding-top:15px;text-align:center;width:100%;padding-bottom:5px;">
                                                                    <h3 style="margin: 0; color: #8a3c90; direction: ltr; font-family: 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; font-size: 24px; font-weight: 400; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder" style="color: #ffffff;">Know more about us.</span></h3>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <td class="column column-2" width="25%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                        <table class="button_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                            <tr>
                                                                <td class="pad" style="text-align:center;padding-top:5px;padding-bottom:5px;">
                                                                    <div class="alignment" align="center">
                                                                        <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:46px;width:137px;v-text-anchor:middle;" arcsize="18%" stroke="false" fillcolor="#ff9494"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:18px"><![endif]-->
                                                                        <div style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#ff9494;border-radius:8px;width:auto;border-top:0px solid transparent;font-weight:700;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;padding-top:5px;padding-bottom:5px;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:20px;padding-right:20px;font-size:18px;display:inline-block;letter-spacing:normal;"><span dir="ltr" style="word-break: break-word; line-height: 36px;"><strong>
                                                                        <a href="https://www.boatrr.in/" style="text-decoration: none;">Know More</a></strong></span></span></div>
                                                                        <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="row row-5" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                            <tbody>
                                <tr>
                                    <td>
                                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f5efe6; border-radius: 0; color: #000000; width: 710px;" width="710">
                                            <tbody>
                                                <tr>
                                                    <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                        <table class="divider_block block-1" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                            <tr>
                                                                <td class="pad">
                                                                    <div class="alignment" align="center">
                                                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                            <tr>
                                                                                <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #072B52;"><span>&#8202;</span></td>
                                                                            </tr>
                                                                        </table>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table class="image_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                            <tr>
                                                                <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
                                                                    <div class="alignment" align="center" style="line-height:10px"><img class="big" src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/882978_867168/emailbanner1.png" style="display: block; height: auto; border: 0; width: 710px; max-width: 100%;" width="710"></div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table class="divider_block block-3" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                            <tr>
                                                                <td class="pad">
                                                                    <div class="alignment" align="center">
                                                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                            <tr>
                                                                                <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #F5EFE6;"><span>&#8202;</span></td>
                                                                            </tr>
                                                                        </table>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table class="paragraph_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                            <tr>
                                                                <td class="pad">
                                                                    <div style="color:#072b52;direction:ltr;font-family:'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;font-size:20px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:24px;">
                                                                        <p style="margin: 0; margin-bottom: 8px;">Get free Tickets to:</p>
                                                                        <p style="margin: 0;"><strong>Ramnagar Fort / </strong><strong>BHU Art Gallary / </strong><strong>Man Mandir Observatory</strong></p>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table class="button_block block-5" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                            <tr>
                                                                <td class="pad">
                                                                    <div class="alignment" align="center">
                                                                        <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:42px;width:227px;v-text-anchor:middle;" arcsize="20%" stroke="false" fillcolor="#ff9494"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:16px"><![endif]-->
                                                                        <div style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#ff9494;border-radius:8px;width:auto;border-top:0px solid transparent;font-weight:700;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;padding-top:5px;padding-bottom:5px;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:20px;padding-right:20px;font-size:16px;display:inline-block;letter-spacing:normal;"><span dir="ltr" style="word-break: break-word; line-height: 32px;">
                                                                        <a href="https://api.whatsapp.com/send/?phone=919566015464&text=Claim%20my%20benefits.%20OrderID%3A%20${data.orderDetails.orderID}&type=phone_number&app_absent=0" style="text-decoration: none;">Claim your free benefits!</a></span></span></div>
                                                                        <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table class="divider_block block-6" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                            <tr>
                                                                <td class="pad">
                                                                    <div class="alignment" align="center">
                                                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                            <tr>
                                                                                <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #072B52;"><span>&#8202;</span></td>
                                                                            </tr>
                                                                        </table>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="row row-6" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                            <tbody>
                                <tr>
                                    <td>
                                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f2d7d9; color: #000000; width: 710px;" width="710">
                                            <tbody>
                                                <tr>
                                                    <td class="column column-1" width="58.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                        <table class="heading_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                            <tr>
                                                                <td class="pad" style="padding-top:20px;text-align:center;width:100%;padding-bottom:5px;">
                                                                    <h3 style="margin: 0; color: #8a3c90; direction: ltr; font-family: 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; font-size: 17px; font-weight: 700; letter-spacing: normal; line-height: 200%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong><span class="tinyMce-placeholder" style="color: #072b52;">We would love to feature you!</span></strong></h3>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <td class="column column-2" width="41.666666666666664%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                        <table class="image_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                            <tr>
                                                                <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;padding-top:5px;">
                                                                    <div class="alignment" align="center" style="line-height:10px">
                                                                    <a href="https://www.instagram.com/boatrr.in/"><img src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/882978_867168/insta.png" style="display: block; height: auto; border: 0; width: 59px; max-width: 100%;" width="59">
                                                                    </a></div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table class="heading_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                            <tr>
                                                                <td class="pad" style="text-align:center;width:100%;padding-bottom:5px;">
                                                                    <h3 style="margin: 0; color: #8a3c90; direction: ltr; font-family: 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; font-size: 14px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder" style="color: #072b52;">Follow us on Instagram</span></h3>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="row row-7" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f7f6f5;">
                            <tbody>
                                <tr>
                                    <td>
                                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f2d7d9; color: #000000; width: 710px;" width="710">
                                            <tbody>
                                                <tr>
                                                    <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                        <table class="heading_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                            <tr>
                                                                <td class="pad" style="padding-bottom:35px;padding-left:5px;padding-right:5px;padding-top:5px;text-align:center;width:100%;">
                                                                    <h1 style="margin: 0; color: #072b52; direction: ltr; font-family: 'Lora', Georgia, serif; font-size: 19px; font-weight: 400; letter-spacing: 1px; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">Share your ride memories with us on Instagram with tag <strong>#boatrr </strong>and<strong> <span id="0284a285-3d8a-431a-bb5e-7965076cc732">@boatrr.in</span></strong></span></h1>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="row row-8" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                            <tbody>
                                <tr>
                                    <td>
                                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f5efe6; color: #000000; width: 710px;" width="710">
                                            <tbody>
                                                <tr>
                                                    <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                        <table class="divider_block block-1" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                            <tr>
                                                                <td class="pad">
                                                                    <div class="alignment" align="center">
                                                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                            <tr>
                                                                                <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 2px solid #072B52;"><span>&#8202;</span></td>
                                                                            </tr>
                                                                        </table>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table class="text_block block-2" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                            <tr>
                                                                <td class="pad">
                                                                    <div style="font-family: sans-serif">
                                                                        <div class style="font-size: 12px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #555555; line-height: 1.2;">
                                                                            <p style="margin: 0; font-size: 16px; text-align: center; mso-line-height-alt: 19.2px;"><span style="color:#072b52;font-size:18px;"><strong>For any queries</strong></span></p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table class="text_block block-3" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                            <tr>
                                                                <td class="pad">
                                                                    <div style="font-family: sans-serif">
                                                                        <div class style="font-size: 12px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 21.6px; color: #555555; line-height: 1.8;">
                                                                            <p style="margin: 0; font-size: 18px; text-align: center; mso-line-height-alt: 32.4px;"><span style="font-size:18px;color:#072b52;">Email us at <span style><strong>support@boatrr.in</strong></span></span></p>
                                                                            <p style="margin: 0; font-size: 18px; text-align: center; mso-line-height-alt: 32.4px;"><span style="font-size:18px;color:#072b52;">Phone<strong>: <span style="color:#072b52;">+91 9566015464</span></strong></span></p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table class="divider_block block-4" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                            <tr>
                                                                <td class="pad">
                                                                    <div class="alignment" align="center">
                                                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                            <tr>
                                                                                <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 2px solid #072B52;"><span>&#8202;</span></td>
                                                                            </tr>
                                                                        </table>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="row row-9" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f7f6f5;">
                            <tbody>
                                <tr>
                                    <td>
                                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #072b52; color: #000000; width: 710px;" width="710">
                                            <tbody>
                                                <tr>
                                                    <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                        <table class="text_block block-1" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                            <tr>
                                                                <td class="pad">
                                                                    <div style="font-family: Tahoma, Verdana, sans-serif">
                                                                        <div class style="font-size: 12px; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 18px; color: #f7f6f5; line-height: 1.5;">
                                                                            <p style="margin: 0; text-align: center; mso-line-height-alt: 21px;"><span style="font-size:14px;"><a title="http://www.example.com/" href="http://www.example.com/" target="_blank" style="text-decoration: underline; color: #f7f6f5;" rel="noopener">Terms & Conditions</a></span></p>
                                                                            <p style="margin: 0; text-align: center; mso-line-height-alt: 21px;">Rescheduling can only be made once, within 2 hours before the ride time</p>
                                                                            <p style="margin: 0; text-align: center; mso-line-height-alt: 21px;">Booking can only be made through Strike app, no third party vendors are indulged.</p>
                                                                            <p style="margin: 0; text-align: center; mso-line-height-alt: 21px;">Refund on cancellation of booking can happen within 2hours of booking. After exceeding 2 hours, refunds cannot be initiated.</p>
                                                                            <p style="margin: 0; font-size: 12px; text-align: left; mso-line-height-alt: 18px;"><span style="color:#c0c0c0;"><br><br></span></p>
                                                                            <p style="margin: 0; text-align: center; mso-line-height-alt: 18px;"><span style="background-color:#ffffff;color:#072b52;">boatrr.in</span> | © Copyright 2022</p>
                                                                            <p style="margin: 0; text-align: center; mso-line-height-alt: 18px;">&nbsp;All Rights Reserved.</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table><!-- End -->
    </body>

    </html>`

    try{
       //sending email to customer
    let boatrrBody = {
    //     bot_id: "60f85e1578ff70b14e454c7c",
    // user_id: "60d8a01aa406cf23fac7726b",
    // to: 'ankur.phani@gmail.com',
        user_id: data.userId,
        bot_id: data.businessId,
        to: data.riderEmail,
        user_id: data.userId,
        bot_id: data.businessId,
        to: data.riderEmail,
        subject: 'Your ride is scheduled | Boatrr',
        // body: `Hi ${data.username},<br>Thank you for riding with Boatrr.<br>Here is your booking details.<br>Ride Date: ${data.rideDetails.rideDate}<br>Ride Time: ${data.rideDetails.rideTime}<br>Number of people:<br>Pick Up Ghat: ${data.rideDetails.pickupGhat}<br>Paid Amount: ${data.orderDetails.bookingPrice}<br>Order ID: ${data.orderDetails.orderID}<br><br>For your queries, please contact +91 9566015464 <br><br>Regards,<br>Team Boatrr`
        body: EMAIL
    }

    await axios.post(EMAIL_URL, boatrrBody,
    {auth: {
        username: process.env.MAIL_USERNAME,
        password: process.env.MAIL_PASSWORD
    }})
    .then(res=> console.log('Boatrr mail sent.',res.data))
    .catch(err=> console.log(err))

    //sending email to admin
    let adminBody = {
        user_id: data.userId,
        bot_id: data.businessId,
        to: 'contact.boatrr@gmail.com',
        subject: `New Booking ALERT! | OrderID: ${data.orderDetails.orderID} Boatrr`,
        body: `Booking Details:<br><br><h1>ORDERID: ${data.orderDetails.orderID}</h1><br> Ride Date: ${data.rideDetails.rideDate}<br>Ride Time: ${data.rideDetails.rideTime}<br> Paid Amount: ${data.orderDetails.bookingPrice}<br><br>Regards,<br>Team boatrr.`
    }

    await axios.post(EMAIL_URL, adminBody,
    {auth: {
        username: process.env.MAIL_USERNAME,
        password: process.env.MAIL_PASSWORD
    }})
    .then(res=> console.log('Admin mail sent.',res.data))
    .catch(err=> console.log(err))
    }catch{
        console.log(err)
    }

}

module.exports = emailNotification