import React from 'react';
import styled from 'styled-components';
import {Box, Grid} from '@material-ui/core'
import s from './styles/styles.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Spacer from 'react-spacer'
import Footer from './components/Common/Footer'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 200,
      width: 200,
      padding: theme.spacing(2),
      textAlign: 'center'

    },
    control: {
      padding: theme.spacing(4),
    },
  }));


  export default function Hero() {
    const [spacing, setSpacing] = React.useState(8);
    const classes = useStyles();
   
   return (
      <div>
            <Box bgcolor="primary.dark" color="primary.contrastText" p={4} >
       
                <Spacer height="10px"/>
               <Grid container alignItems="center" justify="center">
                   <Grid item md={8} xs={12}>
                   <h1  className={s.header} style={{textAlign: 'center'}}>Privacy Policy                </h1>
                   </Grid>
               </Grid>
                
                <Box>
                    <Grid container justify="center" spacing={spacing}>
                    <Grid item md={8} style={{textAlign: 'left'}}>
    <p>
Zeptron (“us”, “we”, or “our”) operates the https://www.zeptron.co website (the “Service”).</p>
<p>
This page informs you of our policies regarding the collection, use and disclosure of Personal Information when you use our Service.</p>
<p>
We will not use or share your information with anyone except as described in this Privacy Policy.
</p>
<p>
We use your Personal Information for providing and improving the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible at https://www.zeptron.co/terms
</p>
<p>
<strong>Information Collection And Use</strong>
</p>
<p>
While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to, your email address, name, phone number, other information (“Personal Information”). The purpose for which we collect personal information is to provide you with the best service experience possible on the Service and for our internal business purposes that form part of normal business practices. Some provision of personal information is optional. However, if you do not provide us with certain types of personal information, you may be unable to enjoy the full functionality of the Service.
</p>
<p>
<strong>Log Data</strong>
</p>
<p>
We may also collect information that your browser sends whenever you visit our Service (“Log Data”). This Log Data may include information such as your computers Internet Protocol (“IP”) address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages and other statistics.
</p>
<p>
In addition, we may use third party services such as Google Analytics that collect, monitor and analyze this type of information in order to increase our Service’s functionality. These third party service providers have their own privacy policies addressing how they use such information.
</p>
<p>
<strong>Cookies</strong>
</p>
<p>
Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer’s hard drive.
</p>
<p>
We use “cookies” to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
</p>
<p>
We send a session cookie to your computer when you log in to your User account. This type of cookie helps if you visit multiple pages on the Service during the same session, so that you don’t need to enter your password on each page. Once you log out or close your browser, this cookie expires.
</p>
<p>
We also use longer-lasting cookies for other purposes such as to display your Content and account information. We encode our cookie so that only we can interpret the information stored in them. Users always have the option of disabling cookies via their browser preferences. If you disable cookies on your browser, please note that some parts of our Service may not function as effectively or may be considerably slower.
</p>
<p>
<strong>Doubleclick Cookie</strong>
</p>
<p>
Google, as a third party vendor, uses cookies to serve ads on our Service. Google’s use of the DoubleClick cookie enables it and its partners to serve ads to our users based on their visit to our Service or other web sites on the Internet.
</p>
<p>
You may opt out of the use of the DoubleClick Cookie for interest-based advertising by visiting the Google Ads Settings web page: http://www.google.com/ads/preferences
</p>

<p>
<strong>Behavioural Remarketing</strong>
</p>
<p>
Zeptron uses remarketing services to advertise on third party web sites to you after you visited our Service. We, and our third party vendors, use cookies to inform, optimize and serve ads based on your past visits to our Service.
</p>
<p>
<strong>Google</strong>
</p>
<p>
Google AdWords remarketing service is provided by Google Inc.
</p>
<p>
You can opt-out of Google Analytics for Display Advertising and customize the Google Display Network ads by visiting the Google Ads Settings page: http://www.google.com/settings/ads
</p>
<p>
Google also recommends installing the Google Analytics Opt-out Browser Add-on - https://tools.google.com/dlpage/gaoptout - for your web browser. Google Analytics Opt-out Browser Add-on provides visitors with the ability to prevent their data from being collected and used by Google Analytics.
</p>
<p>
For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page: https://policies.google.com/privacy
</p>
<p>
<strong>Service Providers</strong>
</p>
<p>
We may employ third party companies and individuals to facilitate our Service, to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.
</p>
<p>
These third parties have access to your Personal Information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
</p>
<p>
<strong>Communications</strong>
</p>
<p>
We may use your Personal Information to contact you with newsletters, marketing or promotional materials and other information that may be of interest to you. You may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send or by contacting us.
</p>
<p>
<strong>Compliance with Laws</strong>
</p>
<p>
We may disclose personal information in special situations where we have reason to believe that doing so is necessary to identify, contact or bring legal action against anyone damaging, injuring or interfering (intentionally or unintentionally) with our rights or property, users or anyone else who could be harmed by such activities. We will disclose your Personal Information where required to do so by law or subpoena or if we believe that such action is necessary to comply with the law and the reasonable requests of law enforcement or to protect the security or integrity of our Service.
</p>
<p>
<strong>Business Transactions</strong>
</p>
<p>
In the event that we sell or buy businesses or their assets, or engage in transfers, acquisitions, mergers, restructurings, changes of control and other similar transactions, customer or user information is generally one of the transferable business assets. Thus, your personal information may be subject to such a transfer. In the unlikely event of insolvency, personal information may be transferred to a trustee or debtor in possession and then to a subsequent purchaser.
</p>
<p>
<strong>Security</strong>
</p>
<p>
The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
</p>
<p>
<strong>Access & Correction</strong>
</p>
<p>
Australian Privacy Principle 6 of the Privacy Act 1988 (Cth) allows you to get access to, and correct, the personal information we hold about you in certain circumstances. If you would like to obtain such access, please contact us on the details set out above.
</p>
<p>
Please note that the access and correction requirements under this Privacy Policy operates alongside and do not replace other informal or legal procedures by which an individual can be provided access to, or correction of, their personal information, including the requirements under the Freedom of Information Act 1982 (Cth).
</p>
<p>
<strong>Complaints</strong>
</p>
<p>
Australian Privacy Principle 1 of the Privacy Act 1988 (Cth) allows you to make a complaint about any alleged breaches of privacy. In order to lodge a complaint with us, please contact us using the details above with the following information:
</p>
<ul><li>Your name and address;</li>
<li>Details of the alleged breach of privacy; and</li>
<li>URL link to the alleged breach of privacy (if applicable).</li>
</ul>
<p>
Please allow us 30 days to investigate your complaint, after which we will contact you immediately to resolve the issue.
</p>
<p>
<strong>Retention of Information</strong>
</p>
<p>
We retain information for as long as required, allowed or we believe it useful, but do not undertake retention obligations. We may dispose of information in our discretion without notice, subject to applicable law that specifically requires the handling or retention of information. You must keep your own, separate back-up records.
</p>
<p>
<strong>Links To Other Sites</strong>
</p>
<p>
Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party’s site. We strongly advise you to review the Privacy Policy of every site you visit.
</p>
<p>
We have no control over, and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
</p>
<p>
<strong>Children's Privacy</strong>
</p>
<p>
Our Service does not address anyone under the age of 18 (“Children”).
</p>
<p>
We do not knowingly collect personally identifiable information from children under 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Information, please contact us. If we become aware that we have collected Personal Information from children under 18 without verification of parental consent, we take steps to remove that information from our servers or replace it with the Personal Information of the Children’s parent or guardian.
</p>
<p>
<strong>Changes To This Privacy Policy</strong>
</p>
<p>
We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
</p>
<p>
You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
</p>
<p>
If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us, or by placing a prominent notice on our website.
</p>
<p>
<strong>Consent</strong>
</p>
<p>
You warrant that you are able to give consents under Australian Law or, in the event that you do not have the capacity to give consent, you warrant that your guardian or attorney is able to give any consent required under this Privacy Policy on your behalf.
</p>
<p>
You hereby expressly and voluntarily grant your informed consent to us to deal with your personal information in accordance with the terms and conditions of this Privacy Policy. Should you retract your consent, please contact us. If you retract your consent, you acknowledge and agree that failure to provide certain types of personal information may not give you access to the full functionality of the Service.
</p>
<p>
<strong>Contact Us</strong>
</p>
<p>
If you have any questions about this Privacy Policy, please <a style={{color: 'white'}} href="/contact">contact us</a>.
</p>
                    </Grid>
                    </Grid>
                    </Box>
              
            
            <Spacer height="120px"/>
           
            <Box>
            <Grid container justify="center"    >
                <Grid item xs={12}>
                {/* <Button size="large" variant="contained" color="secondary" href="/auth">
                <span className={s.ctabutton}>Start Now for FREE</span>
              </Button> */}
              </Grid>
              </Grid>
              <Spacer height="80px"/>
              </Box>
            </Box>
            <Footer/>
         </div>
     )
    }

    
    

