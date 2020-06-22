import React from 'react';
import styled from 'styled-components';
import {Box, Button, Grid} from '@material-ui/core'
import s from './styles/styles.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
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
    const Text = styled.p`
    color: white;
    text-align: left;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    `
    const BoxHeading = styled.h3`
    text-transform: uppercase;
    `
   return (
      <div>
            <Box bgcolor="primary.dark" color="primary.contrastText" p={4} >
       
                <Spacer height="10px"/>
               <Grid container alignItems="center" justify="center">
                   <Grid item md={8} xs={12}>
                   <h1  className={s.header} style={{textAlign: 'center'}}>Terms & Conditions               </h1>
                   </Grid>
               </Grid>
                
                <Box>
                    <Grid container justify="center" spacing={spacing}>
                    <Grid item md={8} style={{textAlign: 'left'}}>
<p>
Please read these Terms of Use before you start to use our Website or Apps and before using any service.
</p>
<p>
By using our Website or our Apps you confirm that you accept the Terms of Use and you agree to comply with them (whether you register with us or not). If you do not agree with these Terms of Use you must not use our Website or our Apps in any way.
</p>
<p>
For the avoidance of doubt, please note that references to our “Website” in these Website Terms include any current or future version of our website www.zeptron.co and our “Apps” any Zeptron mobile application through which you access our website or services.
</p>
<p>
We may change these Website & App Terms of Use from time to time, in which case an up to date version will be available via the Website and our Apps. We will not separately notify you of any change to these Website & App Terms of Use. You should check these Website & App Terms of Use regularly to ensure that you are happy with any changes we may make. You will be deemed to have accepted any changes to these Website & App Terms of Use and to have agreed to the updated Website & App Terms of Use that are current at the relevant time each time you access or use the Website or our Apps and/or continue to access or use the Website or our Apps.
</p>
<p>
Use of your personal information submitted via the Website is governed by our Privacy Policy.
</p>
<p>
The Website and our Apps are provided by Life Data Pty Ltd ACN 640 146 425 (Zeptron, “us”, “we” or “our” for short). “You” and “your” means you as the user of our Website or our App. “these Terms” means these Website & App Terms of Use (as amended from time to time).
</p>
<p>
The Website and our Apps’ main function is to aggregate, and provide a centralised platform for using, first and third party artificial intelligence and machine learning models from developers who want to offer their models for for sale via our Website and our Apps (“Vendors”).
</p>
<p>
The content and third party offers on our Website and our Apps are provided by us on an ‘as is’ basis and use of our Website and our Apps is at your own risk. We (nor any of our respective directors, officers, employees or agents) do not make any representation or warranty as to the accuracy, completeness, currency or reliability of the information contained on our Website or our Apps (including in relation to products or services offered by third parties).
</p>
<p>
Please note that these Terms do not govern the relationship between Zeptron and our Vendors. If you are an existing Vendor, please check the Vendor Terms of Business provided to you upon sign up. If you are not yet a Vendor but would like to apply to Zeptron to become one of our Vendors, please contact us.
</p>
<p><strong>
Accessing our Website and our Apps
</strong>
<p>
Access to our Website and our Apps is provided to you on a temporary basis. We reserve the right to withdraw or amend our Website or our Apps (and any products or services offered on them) without notice to you. We will not be liable to you if for any reason our Website, our Apps or any part of it or them is unavailable at any time or for any period.
</p>
<p>
Please note that we only provide our Website and our Apps for domestic and private use, and you agree not to use our Website or our App for any commercial or business purposes unless or until we have approved you as a Vendor.
</p>
<p>
We update our Website and our Apps from time to time and so may change the content at any time without notice to you. We reserve the right to withdraw, vary or suspend the Website or our Apps (or any part of them) at any time without notice to you.
</p>
<p><strong>
You are responsible for:
</strong>
</p>
<ul><li>
making all arrangements necessary to access and view this Website and our Apps and should ensure you have up to date anti-virus software on any device from which your access our Website or our App; and/or
</li>
<li>
ensuring that all persons accessing our Website or our Apps through your internet connection are aware of these Terms.
</li>
<li>
We specifically reserve the right to withdraw access to our Website and/or our App and/or cancel any order in the event that you fail any credit or fraud prevention check or where we reasonably suspect fraud or money laundering by you or someone using your account.
</li>
</ul>
<p><strong>
Payment
</strong>
</p>
<p>
Taxes: Prices for services offered by our Vendors via our Website or our Apps will be as quoted on the Website in Australian dollars. These prices include any applicable taxes (unless otherwise stated).
</p>
<p>
Incorrect pricing: It is possible that our Website or our Apps may include incorrect prices. This could be due to an error by us or by our Vendors. You will not be obliged to pay a higher price for a model than what was advertised on our Website or our Apps. 
</p>
<p>
Payment methods: Payment for model use may be made by an accepted credit or debit card through the Website or via our Apps or in cash or (subject to the Vendor’s discretion) debit/credit card to the Vendor at your appointment date/time.
</p>
<p>
Card payments: If you pay by credit or debit card, you may be required to show the card to the Vendor at the time of appointment as proof of identification and so that they can check that the card conforms with the receipt data for your model. Please note that from time to time there may be delays with the processing of card payments and transactions such that the relevant amount is not immediately or promptly deducted from your bank account or charged to your credit or debit card.
</p>
<p><strong>
Misuse of our Website or our App
</strong></p>
<p>
You must not misuse our Website or our Apps by:
</p>
<ul><li>
knowingly introducing viruses, trojans, worms, logic bombs, time bombs, keystroke loggers, spyware, adware or other material, programme or code which adversely affects the operation of any computer software or hardware (or is designed to do so); and/or
</li>
<li>
gaining or attempting to gain unauthorised access to the server on which our Website or our Apps are stored or any server, computer or database connected to our Website or our App; and/or
</li>
<li>
attacking our Website or our Apps via a denial-of-service attack or a distributed denial-of service attack.
</li>
<li>
Breach of this clause constitutes a breach of these Terms and may also constitute a criminal offence under the Australian Criminal Code. In addition to any rights under these Terms, we intend to report any such breach to the relevant law enforcement authorities and co-operate with those authorities by disclosing your identity to them. In the event of such a breach, we will exclude you from our Website and our Apps immediately.
</li></ul>
<p><strong>
Users
</strong></p>
<p>
If you are aged 18 years old or over, you may create an account and become a registered user of the Website and our Apps (“User”).
</p>
<p>
As a User you may have access to additional products or services and/or functionality, for example, the ability to create an account, save contact information, post user generated content (“UGC”) onto the Website or via our Apps, and receive information about promotions and special offers which are restricted to Users, if any.
</p>
<p>
Any personal information that you provide to us in the course of becoming a User or after registration will be held and used in accordance with any consent obtained from you and the terms of our Privacy and Cookies Policy and applicable law.
</p>
<p>
We also have the right to disable any user identification code or password, whether chosen by you or allocated by us, at any time, if in our reasonable opinion you have failed to comply with any of the provisions of any of these Terms. If you know or suspect that anyone other than you knows your username or password, you must promptly notify us at sydney@zeptron.co.
</p>
<p><strong>
Posting UGC
</strong></p>
<p>
If and where the functionality of the Website or our Apps allows, Users or other visitors to the Website or our Apps that log into a social media account via any widget or interface available on or off the Website may post UGC to the Website or via our App.
</p>
<p>
Any UGC posted by you will be attributed to the username you provide or the username of the social media account you log in with but we will not publish your email address on the Website or via our App.
</p>
<p>
We reserve the right to refuse to publish any UGC (or remove without notice any previously published UGC) you submit if it does not adhere to our User Generated Content Policy. We shall not be liable to you for any loss or damages whatsoever arising from our decision to refuse to publish (or to remove previously published) UGC.
</p>
<p>
We also reserve the right to close your User account and/or ban you from being able to post UGC to the Website or via our Apps if (in our sole opinion) you persistently and/or seriously breach the terms of the User Generated Content Policy.
</p>
<p>
Views and opinions expressed in UGC submitted by Users or other members of the public are those of the individual submitting the UGC, not ours and we accept no responsibility for the content of any UGC.
</p>
<p>
If you find any UGC on the Website to be in any way offensive, obscene, defamatory, racist, harmful, inaccurate, unlawful, illegal or deceptive in any way, please notify us by emailing us at sydney@zeptron.co.
</p>
<p><strong>
Intellectual property
</strong></p>
<p>
You may only view, print out, use, quote from and cite the Website or any information, images, and other content (except for UGC) displayed on the Website or via our Apps (“Materials”) for your own personal, non-commercial use and subject to the condition that you must give appropriate acknowledgement to Zeptron as owner of the Website and the Materials.
</p>
<p>
Nothing in the above licence impairs or restricts any author’s moral rights in respect of the Materials.
</p>
<p>
We expressly reserve all intellectual property rights in and to the Website, our Apps and the Materials and your use of the Website, our Apps and the Materials is subject to the following restrictions. You must not:
</p>
<ul>
<li>
remove any copyright or other proprietary notices contained in the Materials; and/or
</li>
<li>
use any Materials from the Website or our Apps in any manner that may infringe any copyright, intellectual property right or proprietary right of us or any third parties; and/or
</li>
<li>
use, or cause others to use, any automated system or software to extract content or data from this Website or via our Apps (“screen scraping”), except in cases where you or any applicable third party has entered into a written licence agreement directly with us that expressly permits such activity; and/or
</li>
<li>
reproduce, modify, display, perform, publish, distribute, disseminate, broadcast, frame (or use any other browser or border environment), communicate to the public or circulate to any third party or exploit this Website, our Apps and/or the Materials for any commercial purpose, without our prior written consent by way of a licence agreement.
</li>
</ul>

<p><strong>
Trade marks
</strong></p>
<p>
We expressly reserve all rights in and to the https://www.zeptron.co domain name and all related domains and sub-domains, the name "Zeptron", our logo device, service marks, trading names and/or trade marks. Other trade marks, products and company names mentioned on the Website or via our Apps may be trademarks of their respective owners or licensors and the rights in such marks are reserved to their respective owners or licensors.
</p>
<p><strong>
Linking to our Website
</strong></p>
<p>
You may link to any page of the Website, for non-commercial purposes, provided that you do so in a way that is fair and legal and which does not damage our reputation or take unfair advantage of it. For the avoidance of doubt, the linking site must not contain any adult or illegal material or any material that is offensive, harassing or that (in our sole opinion) is otherwise objectionable.
</p>
<p>
You must not link to our Website in such a way as to suggest any form of association, approval or endorsement by us of you or any activity or course of business you conduct. You must not remove or obscure (by framing or otherwise) advertisements, any copyright notice, or other information published on the Website.
</p>
<p>
If you would like to link to our Website for commercial purposes or any purpose not included above, or if you would like to become a Vendor, please contact sydney@zeptron.co.
</p>
<p>
We reserve the right to withdraw linking permission at any time and without notice.
</p>
<p><strong>
Privacy, your personal data and cookies
</strong></p>
<p>
The privacy of your personal data is important to us. Please see our Privacy Policy for details of how we will process your personal data, where it is provided to us, and how we use cookies.
</p>
Third party content and third party websites
<p>
Our Website and our Apps contain advertising submitted by third parties and other third party content. Those third parties are solely responsible for the content of any content submitted to our Website or our Apps and for ensuring that it complies with all relevant legislation and regulations. We do not accept any responsibility for the content of any third party content.
</p>
<p><strong>
Disclaimers and limitation of liability
</strong></p>
<p>
Materials and information posted on our Website or our Apps are not intended as advice and should not be relied upon as such. We disclaim all liability and responsibility, to the maximum extent permitted by applicable law, arising from any reliance placed on such information by you.
</p>
<p>
To the extent that we become liable to you for whatever reason at law, you acknowledge and agree that we will not have any liability to you for the following types of loss (even if the loss is foreseeable): loss of income or revenue, loss of business, loss of reputation, loss of profits, loss of anticipated savings, loss of data or waste of management or office time.
</p>
<p>
The Materials may contain inaccuracies and typographical errors. We do not warrant the accuracy or completeness of the Materials.
</p>
<p>
We shall not be liable to you for any loss caused as a result of your actions or inactions based on the Materials available on this Website or via our Apps. However, nothing in these Terms shall affect your statutory rights, and nothing in these Terms seeks to exclude or limit liability that cannot be excluded or limited by us under Australian law.
</p>
<p>
To the fullest extent permitted by law, our liability to you for any reason whatsoever (including breach of a non-excludable condition or warranty implied or imposed by law) is limited, at our option, to:
</p>
<ul><li>
supplying the relevant goods or services again; or
</li><li>
paying for the cost of having the relevant goods or services supplied again.
</li></ul>
<p><strong>
Serviced countries
</strong></p>
<p>
This Website and our Apps are provided for users in Australia only. Whilst access may be possible from outside of Australia, neither this Website nor our Apps are intended for such use and such users access the Website and our Apps at their own risk.
</p>
<p><strong>
Contact us
</strong></p>
<p>
If you have any concerns or queries about material which appears on our Website or our Apps or if you have questions about your use of this Website, our Apps or these Terms please email us at sydney@zeptron.co
</p>
<p><strong>
User Generated Content Policy
</strong></p>

<p>
Please read this User Generated Content Policy carefully before you submit UGC to our Website or via our Apps, as this policy and our Website & App Terms of Use will apply to your use of our Website, our Apps and the UGC you submit to it or them. We recommend that you print a copy of this for future reference. By using our Website or our Apps and submitting UGC to our Website or via our Apps, you confirm that you accept this User Generated Content Policy, our Privacy Policy and our Website & App Terms of Use, and that you agree to comply with them. If you do not agree to these terms and policies, you must not use our Website or Apps or submit UGC to (or via) it (or them). Capitalised but undefined words in this User Generated Content Policy shall have the meanings ascribed to them in our Terms of Use.
</p>
<p><strong>
Your UGC
</strong></p>
All content submitted to our Website or via our Apps by you (or on your behalf) via your User account (or other social media account, if applicable), including without limitation, your name, biographical information and all other names, usernames, pseudonyms, text, likenesses, graphics, logos, marks, images, photographs, code, and all other information and material shall be called your “UGC” for short.
</p>
<p>
You agree to submit UGC to the Website and via our Apps in accordance with the following rules (in particular, the Legal Standards and the Community Guidelines, as those terms are defined below). Please use caution and common sense when submitting UGC to the Website or via our App.
</p>
<p>
Publication of your UGC will be at our sole discretion and we are entitled to make additions or deletions to your UGC prior to publication, after publication or to refuse publication.
</p>
<p>
Please note, any UGC you submit to our Website or via our Apps will be considered non-confidential and non-proprietary.
</p>
<p><strong>
Rights, permissions & waivers
</strong></p>
<p>
You hereby grant to BookASalon Services Pty Ltd and any of our group companies and affiliates a non-exclusive, perpetual, irrevocable, transferable, royalty-free licence (including full rights to sub-license) to use, reproduce and publish your UGC (including, without limitation, the right to adapt, alter, amend or change your UGC) in any media or format (whether known now or invented in the future) throughout the world without restriction.
</p>
<p>
You warrant, represent and undertake to us that all UGC you submit is your own work or that you have obtained all necessary rights and permissions of the relevant owner of the work and that you have all relevant rights in your UGC to enable you to grant the rights and permissions in this clause 2.
</p>
<p>
Where your UGC contains images of people or names or identifies individuals, you warrant, represent and undertake to us as follows:
</p>
<ul><li>
that all featured or identified individuals that are over the age of 18 have expressly consented to their appearance in the UGC and to you submitting the UGC to our Website or via our Apps; and
</li>
<li>
where featured or identified individuals are under the age of 18, that you either:
</li>
<li>
are the parent or legal guardian or such featured or identified individuals, or
</li>
<li>
have obtained the express consent from a parent or legal guardian of such featured or identified individuals to their appearance in the UGC and to you submitting the UGC to our Website or via our Apps.
</li>
<li>
You hereby unconditionally and irrevocably waive and agree not to assert (or procure the same from any third party where applicable) any and all moral rights and any other similar rights and all right of publicity and privacy in any country in the world in connection with your UGC, to the maximum extent permissible by law.
</li></ul>

<p><strong>
Content standards – legal standards
</strong></p>
<p>
Each time you submit UGC to our Website or via our Apps, you warrant, represent and undertake to us that your UGC (including its use, publication and/or exploitation by us) does not:
</p>
<ul><li>
infringe the copyrights or database rights, trademarks, rights of privacy, publicity or other intellectual property or other rights of any other person or entity; and/or
</li><li>
contain any material which is defamatory of any person; and/or
</li><li>
contain misleading or deceptive statements or omissions or misrepresentation as to your identity (for example, by impersonating another person) or your affiliation with any person or entity; and/or
</li><li>
breach any legal or fiduciary duty owed to a third party, such as a contractual duty or a duty of confidence; and/or
</li><li>
advocate, promote, or assist discrimination based on race, sex, religion, nationality, disability, sexual orientation or age; and/or
</li><li>
contain any malicious code, such as viruses, worms, Trojan horses or other potentially harmful programmes, codes or material; and/or
</li><li>
violate any other applicable law, statute, ordinance, rule or regulation,
</li><li>
(together, or individually the “Legal Standards”).
</li></ul>
<p>
If your UGC contains any material that is not owned by or licensed to you and/or which is subject to third party rights, you are responsible for obtaining, prior to submission of your UGC, all releases, consents and/or licenses necessary to permit use and exploitation of your UGC by us without additional compensation.
</p>
<p><strong>
Content standards – community guidelines
</strong></p>
<p>
Each time you submit UGC to our Website or via our Apps, you warrant, represent and undertake to us that your UGC:
</p>
<ul><li>
is accurate, where it states facts; and/or
</li><li>
represents your genuinely held opinion, where it states opinions (for example, in product or services reviews); and/or
</li><li>
does not contain any material which:
</li><li>
is obscene, hateful, inflammatory, offensive or in any other way falls below commonly accepted standards of taste and decency in Australia; and/or
</li><li>
is reasonably likely to harass, upset, embarrass or alarm a person (including, by way of example only, so called “trolling” or cyber-bullying); and/or
</li><li>
is threatening, abusive or invades another’s privacy, or causes annoyance, inconvenience or anxiety; and/or
</li><li>
is sexually explicit; and/or
</li><li>
advocates, promotes, assists or depicts violence; and/or
</li><li>
advocates, promotes or assists any illegal activity or unlawful act or omission; and/or
</li><li>
could be deemed to be unsolicited or unauthorised advertising, promotional material, junk mail, or spam (including without limitation chain letters, pyramid schemes or other forms of solicitation or advertisements, commercial or otherwise); and/or
</li><li>
gives the impression that it emanates from Zeptron or is endorsed or connected with us, if this is not the case,
</li><li>
(together, or individually the “Community Guidelines”).
</li></ul>
<p><strong>
Consequences of breach
</strong></p>
<p>
We will determine (in our sole discretion) whether you have failed to comply with this User Generated Content Policy when you submit UGC to our Website or via our Apps. If we determine that you have failed to comply with this User Generated Content Policy, we reserve the right (in our sole discretion) to suspend you from using the Website and/or our Apps without notice to you and/or to edit or remove (in whole or part) any of your UGC from our Website and our Apps on a temporary or permanent basis.
</p>
<p>
In addition to our right to suspend your use of the Website and/or our Apps or remove your UGC, if you do not comply with this User Generated Content Policy and we suffer any loss or damage in connection with your failure to comply, you will be liable to us and you indemnify us for the full amount of any such loss or damage (including loss or damage resulting from any loss of income or revenue, loss of business, loss of reputation, loss of profits, or waste of management or office time) . This means that you will be fully responsible for any loss or damage we suffer as a result of your failure to comply with this User Generated Content Policy, including but not limited to our Legal Standards and/or Community Guidelines.
</p>
<p>
<p><strong>
We also reserve the right:
</strong></p>
</p>
<ul><li>
to pass on any UGC that gives us concern to the relevant authorities; and
</li><li>
to disclose your identity to any third party (or their professional advisor) who claims that any of your UGC constitutes a violation of their intellectual property rights, or of their right to privacy.
</li></ul>  
<p><strong>
Changes to this User Generated Content Policy
</strong></p>
<p>
We may change this User Generated Content Policy from time to time, in which case an up to date version will be available via the Website and our Apps. We will not separately notify you of any change to this User Generated Content Policy. You should check this User Generated Content Policy regularly to ensure that you are happy with any changes we may make. You will be deemed to have accepted any changes to this User Generated Content Policy and to have agreed to comply with our User Generated Content Policy that is current at the relevant time each time you submit UGC to the Website or via our Apps.
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

    
    

