import React, { useRef, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Grid, TextField, Typography, Button, Alert, CircularProgress } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import emailjs from "emailjs-com";

const useStyles = makeStyles((theme) => ({
  title: {
    paddingTop: "20px",
    paddingBottom: "3rem",
    textAlign: "center",
  },
  field: {
    display: "inline-block",
    marginTop: "20px !important",
    background: "#CCC !important",
    borderRadius: "5px !important",
  },
  btn: {
    marginTop: "1rem !important",
    maxWidth: "150px !important",
    position: "relative",
  },
  inputs: {
    width: "100%",
    padding: '0 1rem !important',
    marginTop: '1rem !important'
    
  },
  textField: {
    padding: '0 1rem !important',
    marginTop: '1rem !important'

  },
  subtitle: {
    fontSize: "1.6rem !important",
    textAlign: "left",
  },
  headSec: {
    marginBottom: "20px !important",
    color: "rgba(255,255,255,.66)",
    background: "#222",
    lineHeight: "1.7 !important",
    fontSize: "16px",
    fontWeight: "300",
    padding: "1rem",
    borderRadius: "6px",
  },
  headText: {
    color: "rgb(255, 85, 51)",
    letterSpacing: ".1em !important",
    fontSize: "12px !important",
    fontWeight: "500 !important",
    marginBottom: "5px !important",
    textTransform: "uppercase",
  },
}));

export default function Contact({ contactRef }) {
  const classes = useStyles();
  const formRef = useRef();
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("success");
          setLoading(false);
          e.target.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
          setStatus("error");
          setLoading(false);
        }
      );
  };

  return (
    <section className="section" id="contact" ref={contactRef} style={{marginTop: '0', paddingTop: '0'}}>
      <Typography variant="h4" className={classes.title}>
        Get <strong>In Touch</strong>
      </Typography>

      <Grid container className={classes.contact}>
        <Grid item xs={12} sm={7} className={classes.inputs}>
          <Typography variant="h4" className={classes.subtitle}>
            Send me a mail
          </Typography>

          {status === "success" && (
            <Alert severity="success" sx={{ mt: 2 }}>
              Message sent successfully!
            </Alert>
          )}
          {status === "error" && (
            <Alert severity="error" sx={{ mt: 2 }}>
              Failed to send message. Please try again.
            </Alert>
          )}

          <form ref={formRef} onSubmit={sendEmail}>
            <TextField
              label="Your Name"
              name="from_name"
              variant="outlined"
              fullWidth
              margin="dense"
              className={classes.field}
              required
            />
            <TextField
              label="Your Email"
              name="reply_to"
              type="email"
              variant="outlined"
              fullWidth
              margin="dense"
              className={classes.field}
              required
            />
            <TextField
              label="Your Phone Number"
              name="phone"
              variant="outlined"
              fullWidth
              margin="dense"
              className={classes.field}
            />
            <TextField
              label="Enter Message"
              name="message"
              variant="outlined"
              fullWidth
              margin="dense"
              multiline
              rows={4}
              className={classes.field}
              required
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              endIcon={!loading && <SendIcon />}
              disabled={loading}
              className={classes.btn}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Send"
              )}
            </Button>
          </form>
        </Grid>

        <Grid item xs={10} sm={4} className={classes.textField}>
          <Typography variant="h4" className={classes.subtitle}>
            Contact Information
          </Typography>

          <div className={classes.headSec}>
            <Typography variant="h6" className={classes.headText}>
              Email
            </Typography>
            <Typography variant="body1">info.idoko@gmail.com</Typography>
          </div>
          <div className={classes.headSec}>
            <Typography variant="h6" className={classes.headText}>
              Phone
            </Typography>
            <Typography variant="body1">+234 915 155 7207</Typography>
          </div>
          <div className={classes.headSec}>
            <Typography variant="h6" className={classes.headText}>
              Location
            </Typography>
            <Typography variant="body1">Abuja, Nigeria</Typography>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}
