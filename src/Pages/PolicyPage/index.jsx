import React from 'react';
import "./style.css";

//images
import HomeBG from "../../Assets/Images/propertyBg.png";
import apartMentImg from "../../Assets/Images/apartment-house-real.png";
import pageBackground from "../../Assets/Images/Pro_blackBg.jpg";
import paperCut from "../../Assets/Images/paperCut.png";
import inboxIcon from "../../Assets/Images/InboxIcon.png";
import mailIcon from "../../Assets/Images/sMailIcon.png";
import arrowIcon2 from "../../Assets/Images/blackArrow.png";
import bulletIcon from "../../Assets/Images/bulletIcon.png"

//components
import { Box, Typography } from '@mui/material';
import NavBar from "../../Components/NavBar";
import { AppBtn } from "../../Components/ButtonBox";
import Footer from "../../Components/Footer";
import FindApartment from "../../Components/FindApartment"


export default function PolicyPage() {
  const headerText = (
    <>
      Privacy Policy
    </>
  );

  return (
    <>
      <Box className="property aboutPage TermsPage policyPage">
        <Box className="propertyHomeSection">
          <img src={HomeBG} className='HomeBG' />
          <NavBar />
          <Typography className='propertyheaderText'>{headerText}</Typography>
        </Box>
        <Box className="termsMainSection">
          <img src={pageBackground} className='propertyBg' />
          <Box className="termsTextSection">
            <Typography className='termNText'>This Privacy Policy applies to all websites, applications, and other services offered by Socio Stays ("we," "us," or "Socio Stays"). Here, we explain how Socio Stays processes your personal data when you use our services. Personal data is any information that can be used to identify you, directly or indirectly.</Typography>
            <Box className="gapBox"></Box>
            {/* <Typography className='termNText'><span>Important Note: </span> Socio Stays is a metasearch platform connecting property owners with guests seeking accommodations. We do not own or operate any properties listed on our platform</Typography> */}

            <Typography className='termsHeader'>Changes to the Privacy Notice</Typography>
            <Typography className='termNText'>Due to continuous technological advancements, changes to our services, legal updates, or other reasons, we may need to modify this Privacy Notice. We will update this policy regularly, so please keep yourself informed of its contents.</Typography>

            <Typography className='termsHeader'>1. Who is Responsible for Your Data?</Typography>
            <Typography className='termNText'>Socio Stays N.V. controls the processing operations described in this Privacy Notice. Socio Stays is a company incorporated under the laws of India.</Typography>
            <Box className="gapBox"></Box>
            <Typography className='termNText'>Contacting Us</Typography>
            <Box className="gapBox"></Box>
            <Typography className='termNText'>For general data protection inquiries or to exercise your data rights, contact our privacy team.</Typography>
            <Box className="gapBox"></Box>
            <Typography className='termNText'>To reach our data protection officer directly, send an email to [email address removed] with the subject line "To the attention of the data protection officer." Please note, emails sent to this address will not be automatically confidential. If you require a confidential exchange, state so in your email, and we will arrange it.</Typography>


            <Typography className='termsHeader'>2. Your Rights Regarding Your Data</Typography>
            <Typography className='termNText'>You have the following data protection rights:</Typography>
            <Box className="gapBox"></Box>
            <Box className="gapBox"></Box>

            <Box className="bulletBox">
              <Box className="dotBox"><img src={bulletIcon} /></Box>
              <Typography className='termNText'><span>General Rights: </span> You have the right to information (Article 13 GDPR), access (Article 15 GDPR), deletion (Article 17 GDPR), correction (Article 16 GDPR), restriction of processing (Article 18 GDPR), and data portability (Article 20 GDPR) under applicable legal conditions.</Typography>
            </Box>
            <Box className="gapBox"></Box>

            <Box className="bulletBox">
              <Box className="dotBox"><img src={bulletIcon} /></Box>
              <Typography className='termNText'><span>Revoking Consent: </span> You can withdraw your consent to data processing at any time. This will prevent future processing based on your consent, but does not affect the legality of previously processed data.</Typography>
            </Box>
            <Box className="gapBox"></Box>

            <Box className="bulletBox">
              <Box className="dotBox"><img src={bulletIcon} /></Box>
              <Typography className='termNText'><span>Objecting to Processing Based on Legitimate Interests: </span>If we process your data based on legitimate interests, you have the right to object based on reasons arising from your particular situation. We will cease processing unless we can demonstrate compelling grounds that outweigh your interests, rights, and freedoms, or if processing aids legal claims.</Typography>
            </Box>
            <Box className="gapBox"></Box>

            <Box className="bulletBox">
              <Box className="dotBox"><img src={bulletIcon} /></Box>
              <Typography className='termNText'><span>Objecting to Direct Marketing: </span>You can object to receiving direct marketing communications at any time. See Section 6.1 for details on how to object</Typography>
            </Box>

            <Box className="gapBox"></Box>
            <Box className="bulletBox">
              <Box className="dotBox"><img src={bulletIcon} /></Box>
              <Typography className='termNText'><span>Complaining to a Supervisory Authority: </span> You have the right to complain to a data protection authority if you believe your data is being processed in violation of data protection laws. You can contact any data protection authority in the European Union, particularly your place of residence.</Typography>
            </Box>

            <Box className="gapBox"></Box>
            <Box className="gapBox"></Box>
            <Typography className='termsHeader'>3. Data We Collect from You</Typography>
            <Typography className='termNText'>When you use Socio Stays, we may collect these types of personal data:</Typography>
            <Box className="gapBox"></Box>
            <Box className="gapBox"></Box>

            <Box className="bulletBox">
              <Box className="dotBox"><img src={bulletIcon} /></Box>
              <Typography className='termNText'><span>User Data: </span> Information collected for creating a member account, such as your name, email address, and password.</Typography>
            </Box>

            <Box className="gapBox"></Box>
            <Box className="bulletBox">
              <Box className="dotBox"><img src={bulletIcon} /></Box>
              <Typography className='termNText'><span>Contact Details and Additional Information: </span> Contact details like your postal address, age, gender, country of residence, social network profiles, messages to our team, feedback, comments, survey/interview responses, and participation in promotional activities.
              </Typography>
            </Box>

            <Box className="gapBox"></Box>
            <Box className="bulletBox">
              <Box className="dotBox"><img src={bulletIcon} /></Box>
              <Typography className='termNText'><span>Usage Data: </span> Information about your use of our services, including search details (destination, date, number of guests, currency), viewed deals, and clicked links.</Typography>
            </Box>

            <Box className="gapBox"></Box>
            <Box className="bulletBox">
              <Box className="dotBox"><img src={bulletIcon} /></Box>
              <Typography className='termNText'><span>Marketing Communication Interaction: </span> We may collect information on your engagement with our marketing communications, like opening our newsletter or clicking hyperlinks within it.</Typography>
            </Box>

            <Box className="gapBox"></Box>
            <Box className="bulletBox">
              <Box className="dotBox"><img src={bulletIcon} /></Box>
              <Typography className='termNText'><span>Booking Data: </span> If you click a link to an accommodation offer and book it on the linked website, the online booking site may send us personal data related to the booking or reservation.</Typography>
            </Box>

            <Box className="gapBox"></Box>
            <Box className="bulletBox">
              <Box className="dotBox"><img src={bulletIcon} /></Box>
              <Typography className='termNText'><span>Location Data: </span> We may process approximate location information based on your IP address (country or city level). With your consent, we may use GPS data to provide personalized search results on your mobile device.</Typography>
            </Box>

            <Box className="gapBox"></Box>
            <Box className="bulletBox">
              <Box className="dotBox"><img src={bulletIcon} /></Box>
              <Typography className='termNText'><span>Bank Data: </span> Though not directly involved in the booking and payment process, we may ask for your bank details in some cases, such as issuing compensation.</Typography>
            </Box>

            <Box className="gapBox"></Box>
            <Box className="bulletBox">
              <Box className="dotBox"><img src={bulletIcon} /></Box>
              <Typography className='termNText'><span>Technical Data: </span> Examples include IP address, cookies, identification data (session ID, member ID, device ID), access status/HTTP status code, browser software and version, operating system and interface, internet service provider, language, and other configuration settings.</Typography>
            </Box>

            <Box className="gapBox"></Box>
            <Box className="gapBox"></Box>
            <Typography className='termsHeader'>4. Why and How We Use Your Data</Typography>
            <Typography className='termNText'>Below you'll find information about why we collect and use your data, the corresponding legal basis for each purpose, and the categories of personal data involved. Your data may be used for:</Typography>
            <Box className="gapBox"></Box>

            <Box className="gapBox"></Box>
            <Box className="bulletBox">
              <Box className="dotBox"><img src={bulletIcon} /></Box>
              <Typography className='termNText'><span>Providing Our Services: </span>This includes helping you compare accommodation prices and offers, finding your ideal accommodation. (Legal Basis: Performance of a contract, consent) (Data Used: User data, usage data, booking data, location data, technical data)
              </Typography>
            </Box>

            <Box className="gapBox"></Box>
            <Box className="bulletBox">
              <Box className="dotBox"><img src={bulletIcon} /></Box>
              <Typography className='termNText'><span>Creating and Maintaining a Safe Environment: </span>This includes maintaining a secure environment for your Socio Stays user account. (Legal Basis: Compliance with legal obligations, legitimate interest) (Data Used: Usage data, technical data)</Typography>
            </Box>

            <Box className="gapBox"></Box>
            <Box className="bulletBox">
              <Box className="dotBox"><img src={bulletIcon} /></Box>
              <Typography className='termNText'><span>Improving Our Services: </span>This includes understanding your usage and using your feedback to improve Socio Stays, identify industry trends, and develop new features. (Legal Basis: Consent, legitimate interest) (Data Used: User data, usage data, booking data, technical data)
              </Typography>
            </Box>

            <Box className="gapBox"></Box>
            <Box className="bulletBox">
              <Box className="dotBox"><img src={bulletIcon} /></Box>
              <Typography className='termNText'><span>Sending Direct Marketing: </span>This includes sending marketing communications about Socio Stays or related services, providing advertisements on our services and third-party websites (personalized or not), and managing promotional activities. (Legal Basis: Consent, legitimate interest) (Data Used: User data, usage data, technical data)
              </Typography>
            </Box>

            <Box className="gapBox"></Box>
            <Box className="bulletBox">
              <Box className="dotBox"><img src={bulletIcon} /></Box>
              <Typography className='termNText'><span>Communicating with You: </span>This includes responding to your questions, comments, and providing customer service. (Legal Basis: Performance of a contract, legitimate interest) (Data Used: User data, usage data, booking data, bank data)</Typography>
            </Box>

            <Box className="gapBox"></Box>
            <Box className="bulletBox">
              <Box className="dotBox"><img src={bulletIcon} /></Box>
              <Typography className='termNText'><span>Fulfilling Contractual Obligations: </span>This includes fulfilling contractual obligations with third parties like online booking sites listed on our platform. (Legal Basis: Performance of a contract, legitimate interest) (Data Used: User data, usage data, booking data)</Typography>
            </Box>

            <Box className="gapBox"></Box>
            <Box className="bulletBox">
              <Box className="dotBox"><img src={bulletIcon} /></Box>
              <Typography className='termNText'><span>Complying with Legal Obligations: </span>This includes complying with legal obligations, responding to law enforcement requests, preventing fraud, and establishing, exercising, or defending legal claims. (Legal Basis: Compliance with legal obligation, legitimate interest, performance of a contract) (Data Used: User data, usage data, booking data, technical data)</Typography>
            </Box>


            <Box className="gapBox"></Box>
            <Box className="gapBox"></Box>
            <Typography className='termsHeader'>5. Sharing Your Data with Third Parties</Typography>
            <Typography className='termNText'>We may share your personal data with the following categories of recipients, provided there is an appropriate legal basis:</Typography>
            <Box className="gapBox"></Box>

            <Box className="gapBox"></Box>
            <Box className="bulletBox">
              <Box className="dotBox"><img src={bulletIcon} /></Box>
              <Typography className='termNText'>Our wholly owned subsidiaries</Typography>
            </Box>

            <Box className="gapBox"></Box>
            <Box className="bulletBox">
              <Box className="dotBox"><img src={bulletIcon} /></Box>
              <Typography className='termNText'>Authentication partners (when you sign in using third-party services like Facebook, Google, or Apple).</Typography>
            </Box>

            <Box className="gapBox"></Box>
            <Box className="bulletBox">
              <Box className="dotBox"><img src={bulletIcon} /></Box>
              <Typography className='termNText'>Third-party service providers who offer data processing services to us, such as hosting and storage providers, customer service providers, communications providers, security and fraud prevention providers, debt collectors, analytics, advertising, and marketing providers.</Typography>
            </Box>

            <Box className="gapBox"></Box>
            <Box className="bulletBox">
              <Box className="dotBox"><img src={bulletIcon} /></Box>
              <Typography className='termNText'>Independent data controller service providers, such as security and fraud prevention services, social media networks, and advertising and marketing providers.</Typography>
            </Box>

            <Box className="gapBox"></Box>
            <Box className="bulletBox">
              <Box className="dotBox"><img src={bulletIcon} /></Box>
              <Typography className='termNText'>Business partners with whom we may offer joint products or services.</Typography>
            </Box>

            <Box className="gapBox"></Box>
            <Box className="bulletBox">
              <Box className="dotBox"><img src={bulletIcon} /></Box>
              <Typography className='termNText'>Third-party travel suppliers like hotels, airlines, car rentals, insurance providers, property owners, travel guide or activity providers.</Typography>
            </Box>

            <Box className="gapBox"></Box>
            <Box className="bulletBox">
              <Box className="dotBox"><img src={bulletIcon} /></Box>
              <Typography className='termNText'>Law enforcement authorities to prevent, detect, and prosecute illegal activities, threats to state or public security, and threats to people's lives. </Typography>
            </Box>

            <Box className="gapBox"></Box>
            <Box className="bulletBox">
              <Box className="dotBox"><img src={bulletIcon} /></Box>
              <Typography className='termNText'>As part of a corporate transaction like a merger, divestment, consolidation, or asset sale.</Typography>
            </Box>

            <Box className="gapBox"></Box>
            <Box className="bulletBox">
              <Box className="dotBox"><img src={bulletIcon} /></Box>
              <Typography className='termNText'>When transferring data to our service providers, they are only allowed to use the data to perform their tasks. These providers are carefully selected and instructed by us, contractually bound to our instructions, have appropriate technical and organizational measures, and are regularly monitored by us.</Typography>
            </Box>



          </Box>

        </Box>
        <Box className="propertyDetailSection">
          <img src={pageBackground} className='propertyBg' />
          <FindApartment />
        </Box>
        <Box className="aparEmailBox">
          <img src={paperCut} className='paperTop' />
          <Box className="aparMailBox">
            <img src={inboxIcon} />
            <Box >
              <Typography className='aptHeaderText'>Join Our Journey and
                Gain Industrial Experience</Typography>
              <Typography>Sign up to our newsletter for deals,
                inspo and other travel treats!</Typography>
            </Box>

            <Box className="mailSendBox">
              <img src={mailIcon} className='mailIcon' />
              <Box className="sendMailBtn">
                <img src={arrowIcon2} className='arrowIcon' />
              </Box>
              <input type="text" placeholder='Your Email address' />
            </Box>
          </Box>
        </Box>
        <Footer />
      </Box>

    </>
  )
}
