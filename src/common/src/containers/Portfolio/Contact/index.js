/* eslint-disable no-useless-constructor */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Box from '../../../../../reusecore/src/elements/Box';
import Text from '../../../../../reusecore/src/elements/Text';
import Heading from '../../../../../reusecore/src/elements/Heading';
// import Image from '../../../../../reusecore/src/elements/Image';
import Button from '../../../../../reusecore/src/elements/Button';
import { LinkCustom } from '../../../../../reusecore/src/elements/Link';
import Container from '../../../components/UI/Container';
import { Icon } from 'react-icons-kit';
import { check } from 'react-icons-kit/fa/check';
import { slack } from 'react-icons-kit/fa/slack';
import { ButtonWrapper } from '../../Portfolio/portfolio.style';
// import Image from '../../../../../reusecore/src/elements/Image';
// import { ActiveStatus } from './contact.style';
// import Author from '../../../assets/image/portfolio/avatar.png';

import Input  from '../../../../../reusecore/src/elements/Input'
import { InputCustom, CardConfirm, CardDetail, CardIcon, CardAbout } from './contact.style'

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

class ContactSection extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
    isSend: false
  }


  handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => {
        this.setState({
          'name': '',
          'email': '',
          'subject': '',
          'message': '',
          'isSend': true
        });
        // alert('Success!');
      })
      .catch(error => alert(error));
    e.preventDefault();
  }

  handleInputName = e => this.setState({ name: e })
  handleInputEmail = e => this.setState({ email: e })
  handleInputSubject = e => this.setState({ subject: e })
  handleInputMessage = e => this.setState({ message: e })

  render() {
    const {
      sectionWrapper,
      secTitleWrapper,
      secTitle,
      secDescription,
      // replyWrapper,
      // replyTime,
      buttonStyle,
      buttonWrapper,
      contactSection,
      contactBlock,
      flexParent,
      // flexCol,
      id,
      slackSection,
      slackButton,
      cardTitle
    } = this.props;
    const { isSend } = this.state;
    return (
    <Box {...sectionWrapper} as="section" id={id}>
      <Container noGutter mobileGutter width="1200px">
        <Box {...secTitleWrapper}>
          <Heading {...secTitle} content="Travaillons Ensemble !" />
          <Text
            {...secDescription}
            content = "Vous souhaitez prendre contact, en savoir plus sur mon profil et mes compétences ? Vous avez un projet ou une mission que vous souhaiteriez me soumettre ? N'hésitez pas à m'envoyer un message !"
          />
          <Box {...buttonWrapper}>
            <ButtonWrapper>
              <LinkCustom
                href="mailto:benjamin-piel@benny.bzh"
                className="portfolio_button"
                {...buttonStyle}
              >
              benjamin-piel@benny.bzh
              </LinkCustom>
            </ButtonWrapper>
          </Box>
        </Box>
        <Box {...slackSection}>
          <Heading {...secTitle} content="Rejoignez mon Slack"/>
          <Box style={{textAlign: 'center'}}>
            <Icon size="50" icon={slack} />
          </Box>
          <Box {...slackButton}>
            <ButtonWrapper>
              <LinkCustom
                href="slack:bennybzh.slack.com"
                className="portfolio_button"
                {...buttonStyle}
              >
              bennybzh.slack.com
              </LinkCustom>
            </ButtonWrapper>
          </Box>
        </Box>
        <Box {...contactSection}>
            <Heading {...secTitle} content="Envoyez-moi un message" />
            {isSend ? 
            <Box {...flexParent}>
              <CardConfirm>
                <CardDetail>
                    <CardIcon>
                      <Icon icon={check} size={50} style={{color:'#3444F1'}} />
                    </CardIcon>
                    <CardAbout>
                      <Heading content={"Message envoyé"} {...cardTitle}  />
                    </CardAbout>
                </CardDetail>
              </CardConfirm>
            </Box>
            :
            <Fragment>
            <form onSubmit={this.handleSubmit}>
              <Box {...flexParent}>
                <Box {...contactBlock}>
                    <InputCustom required isMaterial={false} onChange={this.handleInputName} inputType="text" placeholder="Votre nom" />
                    <InputCustom required isMaterial={false} onChange={this.handleInputEmail} inputType="email" placeholder="Votre email" />
                    <InputCustom required isMaterial={false} onChange={this.handleInputSubject} inputType="text" placeholder="L'objet de votre message" />
                </Box>
                <Box {...contactBlock}>
                  <Input
                    inputType="textarea"
                    placeholder="Votre message"
                    isMaterial={false}
                    onChange={this.handleInputMessage}
                    className="textarea_input"
                  />
                </Box>
              </Box>
              <Box {...buttonWrapper}>
                <ButtonWrapper>
                  <Button
                    title="Envoyer le message"
                    className="portfolio_button"
                    {...buttonStyle}
                    type="submit"
                  />
                </ButtonWrapper>
              </Box>
            </form>
            </Fragment>
            }
        </Box>
      </Container>
    </Box>
    )
  }

}



ContactSection.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  secTitle: PropTypes.object,
  secDescription: PropTypes.object,
  replyWrapper: PropTypes.object,
  replyTime: PropTypes.object,
  buttonStyle: PropTypes.object,
  buttonWrapper: PropTypes.object,
};

ContactSection.defaultProps = {
  sectionWrapper: {
    pt: ['70px', '80px', '100px', '110px', '140px'],
    pb: ['60px', '80px', '100px', '110px', '140px'],
    bg: '#f9f9f9',
  },
  contactSection: {
    pt: ['70px', '80px', '80px', '90px', '120px'],
    pb: ['70px', '80px', '80px', '90px', '100px'],
    bg: '#f9f9f9',
  },
  slackSection: {
    pt: ['70px', '80px', '80px', '90px', '120px'],
    pb: ['70px', '80px', '80px', '90px', '100px'],
    bg: '#f9f9f9',
  },
  secTitleWrapper: {
    mb: '30px',
  },
  secTitle: {
    fontSize: ['22px', '26px', '26px', '30px', '30px'],
    fontWeight: '600',
    color: '#302b4e',
    lineHeight: '1.34',
    mb: ['15px', '18px', '18px', '20px', '20px'],
    textAlign: 'center',
  },
  secDescription: {
    fontSize: ['15px', '16px'],
    fontWeight: '400',
    color: '#43414e',
    lineHeight: '1.5',
    textAlign: 'center',
    width: '600px',
    maxWidth: '100%',
    ml: 'auto',
    mr: 'auto',
    mb: '0',
  },
  replyWrapper: {
    flexBox: true,
    alignItems: 'center',
    justifyContent: 'center',
  },
  replyTime: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#302b4e',
    mb: 0,
  },
  buttonStyle: {
    type: 'button',
    fontSize: '16px',
    fontWeight: '500',
    color: '#fff',
    pl: '23px',
    pr: '23px',
  },
  buttonWrapper: {
    flexBox: true,
    justifyContent: 'center',
    mt: '50px',
  },
  slackButton: {
    flexBox: true,
    justifyContent: 'center',
    mt: '20px',
  },
  flexParent: {
    flexBox: true,
    flexDirection: ['column', 'column', 'row'],
    justifyContent: 'space-around'
  },
  contactBlock: {
    flexBox: true,
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex:1,
    pr: ['12px'],
    pl: ['12px'],
  },
  cardTitle: {
    fontSize: ['30px'],
    fontWeight: '600',
    color: '#302b4e',
    mb: 0,
  },
};

export default ContactSection;
