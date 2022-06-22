import React from "react";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Getfollowers from "./Getfollowers";
import Footer from '../Footer/Footer'
const Faq = () => {
  return (
    <>
      <div style={{ textAlign: "center", marginBottom: "5%",paddingTop: "100px"}}>
        <Typography variant="h4">Frequently Asked Questions</Typography>
        <Typography
          style={{
            fontSize: "150%",
            display: "flex",
            flexWrap: "wrap",
            paddingTop: "12px",
            justifyContent: "center",
          }}
        >
          Below are answers to our most commonly asked questions. If you cannot
          find an answer here, please contact us.
        </Typography>
      </div>
      <div
       
        style={{
          backgroundColor: "aliceblue",
          paddingTop: "4%",
          paddingBottom: "4%",
        }}
      >
        <div  style={{ marginLeft: "2%", marginRight: "2%" }}>
          <div>
            <Accordion
              elevation={0}
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                boxShadow: "#ddd 1px 1px 1px 1px",
                marginBottom: "15px",
                borderRadius: "10px",
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle1">
                  How do I start using Insphantom?
                </Typography>
              </AccordionSummary>

              <AccordionDetails
                style={{
                  background: "#dddddd87",
                }}
              >
                <Typography variant="subtitle2">
                  To get started, you must first click the “REGISTER” button at
                  the top right corner, or click “Premium Services” from the
                  toolbar along the top if you are purchasing bulk services such
                  as Followers, Likes, Views and Comments. You are then required
                  to Log into and Register in our Mr. Insta Members Area. To do
                  this you simply enter your Instagram Username, Email address,
                  and create a password. Then click on the “Create Account”
                  button. Shortly after you will be sent a verification email to
                  your email address. Simply open and verify the email. You will
                  then be asked to select 4 or 5 of your interests from a group
                  of options such as Arts & Crafts, Business, Culture & Art etc.
                  We will use these selections to match you up with followers of
                  similar interests once a plan is activated. Finally you are
                  taken to the Members Area where you can select a plan. You may
                  choose our Free Plans which allow you to activate every 12
                  hours, or our Paid Plans that require you to simply set it up
                  once and you are done. Please Note: We do not obtain your
                  login information or have ANY access to your Instagram
                  account. You are NOT required to provide any password you use
                  for your Instagram account. You ARE required to keep your
                  account Public in order to use our services though.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div>
            <Accordion
              elevation={0}
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                boxShadow: "#ddd 1px 1px 1px 1px",
                marginBottom: "15px",
                borderRadius: "10px",
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle1">
                  Why should I become a Insphantom member?
                </Typography>
              </AccordionSummary>

              <AccordionDetails
                style={{
                  background: "#dddddd87",
                }}
              >
                <Typography variant="subtitle2">
                  Instagram is an important tool for many people in this day in
                  age. Increasing your Followers and/or Likes has been proven to
                  increase your online presence, sales offers, help get you
                  discovered and so much more. Whether you simply wish to
                  increase the activity on your Personal Account or you are a
                  Professional with a specific goal for your Instagram, we at
                  Mr. Insta can provide realistic and sustainable growth to meet
                  your needs. Instagram has more than 200 Million people using
                  their service. Social Media is everything and Instagram is one
                  of the most important platforms to increase your exposure for
                  whatever it is that you do! Let us partner with you to take
                  your account to the next level!
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div>
            <Accordion
              elevation={0}
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                boxShadow: "#ddd 1px 1px 1px 1px",
                marginBottom: "15px",
                borderRadius: "10px",
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle1">
                  Is Insphantom safe to use for my Instagram account?
                </Typography>
              </AccordionSummary>

              <AccordionDetails
                style={{
                  background: "#dddddd87",
                }}
              >
                <Typography variant="subtitle2">
                  Of Course! We are a safe and trusted service used by over
                  100,000+ clients, and growing. Your privacy and security is
                  our #1 priority, which is why we have developed very strong
                  coding and safe guarded the website using 256-bit encryption.
                  We can’t say the same for other websites. It is very important
                  you purchase these services from a reputable provider. We have
                  been providing these services since 2013 and we are experts in
                  the Industry. Remember, often times you get what you paid for,
                  so if you see services that are so cheap you are likely going
                  to get something that isn’t safe for your profile. We DO NOT
                  require your Instagram Password, and do not have any access to
                  your Instagram account.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div>
            <Accordion
              elevation={0}
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                boxShadow: "#ddd 1px 1px 1px 1px",
                marginBottom: "15px",
                borderRadius: "10px",
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle1">
                  Is Insphantom safe to use for my Instagram account?
                </Typography>
              </AccordionSummary>

              <AccordionDetails
                style={{
                  background: "#dddddd87",
                }}
              >
                <Typography variant="subtitle2">
                  Of Course! We are a safe and trusted service used by over
                  100,000+ clients, and growing. Your privacy and security is
                  our #1 priority, which is why we have developed very strong
                  coding and safe guarded the website using 256-bit encryption.
                  We can’t say the same for other websites. It is very important
                  you purchase these services from a reputable provider. We have
                  been providing these services since 2013 and we are experts in
                  the Industry. Remember, often times you get what you paid for,
                  so if you see services that are so cheap you are likely going
                  to get something that isn’t safe for your profile. We DO NOT
                  require your Instagram Password, and do not have any access to
                  your Instagram account.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div>
            <Accordion
              elevation={0}
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                boxShadow: "#ddd 1px 1px 1px 1px",
                marginBottom: "15px",
                borderRadius: "10px",
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle1">
                  Is Insphantom safe to use for my Instagram account?
                </Typography>
              </AccordionSummary>

              <AccordionDetails
                style={{
                  background: "#dddddd87",
                }}
              >
                <Typography variant="subtitle2">
                  Of Course! We are a safe and trusted service used by over
                  100,000+ clients, and growing. Your privacy and security is
                  our #1 priority, which is why we have developed very strong
                  coding and safe guarded the website using 256-bit encryption.
                  We can’t say the same for other websites. It is very important
                  you purchase these services from a reputable provider. We have
                  been providing these services since 2013 and we are experts in
                  the Industry. Remember, often times you get what you paid for,
                  so if you see services that are so cheap you are likely going
                  to get something that isn’t safe for your profile. We DO NOT
                  require your Instagram Password, and do not have any access to
                  your Instagram account.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div>
            <Accordion
              elevation={0}
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                boxShadow: "#ddd 1px 1px 1px 1px",
                marginBottom: "15px",
                borderRadius: "10px",
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle1">
                  Is Insphantom safe to use for my Instagram account?
                </Typography>
              </AccordionSummary>

              <AccordionDetails
                style={{
                  background: "#dddddd87",
                }}
              >
                <Typography variant="subtitle2">
                  Of Course! We are a safe and trusted service used by over
                  100,000+ clients, and growing. Your privacy and security is
                  our #1 priority, which is why we have developed very strong
                  coding and safe guarded the website using 256-bit encryption.
                  We can’t say the same for other websites. It is very important
                  you purchase these services from a reputable provider. We have
                  been providing these services since 2013 and we are experts in
                  the Industry. Remember, often times you get what you paid for,
                  so if you see services that are so cheap you are likely going
                  to get something that isn’t safe for your profile. We DO NOT
                  require your Instagram Password, and do not have any access to
                  your Instagram account.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div>
            <Accordion
              elevation={0}
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                boxShadow: "#ddd 1px 1px 1px 1px",
                marginBottom: "15px",
                borderRadius: "10px",
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle1">
                  Is Insphantom safe to use for my Instagram account?
                </Typography>
              </AccordionSummary>

              <AccordionDetails
                style={{
                  background: "#dddddd87",
                }}
              >
                <Typography variant="subtitle2">
                  Of Course! We are a safe and trusted service used by over
                  100,000+ clients, and growing. Your privacy and security is
                  our #1 priority, which is why we have developed very strong
                  coding and safe guarded the website using 256-bit encryption.
                  We can’t say the same for other websites. It is very important
                  you purchase these services from a reputable provider. We have
                  been providing these services since 2013 and we are experts in
                  the Industry. Remember, often times you get what you paid for,
                  so if you see services that are so cheap you are likely going
                  to get something that isn’t safe for your profile. We DO NOT
                  require your Instagram Password, and do not have any access to
                  your Instagram account.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div>
            <Accordion
              elevation={0}
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                boxShadow: "#ddd 1px 1px 1px 1px",
                marginBottom: "15px",
                borderRadius: "10px",
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle1">
                  Is Insphantom safe to use for my Instagram account?
                </Typography>
              </AccordionSummary>

              <AccordionDetails
                style={{
                  background: "#dddddd87",
                }}
              >
                <Typography variant="subtitle2">
                  Of Course! We are a safe and trusted service used by over
                  100,000+ clients, and growing. Your privacy and security is
                  our #1 priority, which is why we have developed very strong
                  coding and safe guarded the website using 256-bit encryption.
                  We can’t say the same for other websites. It is very important
                  you purchase these services from a reputable provider. We have
                  been providing these services since 2013 and we are experts in
                  the Industry. Remember, often times you get what you paid for,
                  so if you see services that are so cheap you are likely going
                  to get something that isn’t safe for your profile. We DO NOT
                  require your Instagram Password, and do not have any access to
                  your Instagram account.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <Getfollowers/>
      </div>
      <Footer />
    </>
  );
};
export default Faq;
