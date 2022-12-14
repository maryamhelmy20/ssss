import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Box from "common/components/Box";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import Logo from "common/components/UIElements/Logo";
import Container from "common/components/UI/Container";
import FooterWrapper, { List, ListItem } from "./footer.style";
import { useRouter } from "next/router";
import en from "../../../locales/en";
import ar from "../../../locales/ar";

import LogoImage from "common/assets/image/saasClassic/logo.png";

import { FOOTER_WIDGET, FOOTER_WIDGET_AR } from "common/data/SaasClassic";

const Footer = ({
  row,
  col,
  colOne,
  colTwo,
  titleStyle,
  logoStyle,
  textStyle,
}) => {
  const router = useRouter();
  const { locale } = router;
  const footerWidget = locale === "ar" ? FOOTER_WIDGET_AR : FOOTER_WIDGET;
  return (
    <FooterWrapper>
      <Container className="footer_container" >
        <Box className="row" {...row} dir={locale === "ar" ? "rtl" : "ltr"}>
          <Box {...colOne}>
            <Logo
              href="#"
              logoSrc={LogoImage}
              title="Hosting"
              logoStyle={logoStyle}
            />
            <Text  content="help@systemha.com" {...textStyle} />
            <Text content="+966-50-555-3842" {...textStyle} />
          </Box>
          {/* End of footer logo column */}
          <Box {...colTwo} dir={locale === "ar" ? "rtl" : "ltr"}>
            {footerWidget.map((widget, index) => (
              <Box className="col" {...col} key={`footer-widget-${index}`}>
                <React.Fragment>
                  <Heading content={widget.title} {...titleStyle} />
                  <List>
                    {widget.menuItems.map((item, index) => (
                      <ListItem key={`footer-list-item-${index}`}>
                        <Link href={item.url} className="ListItem">
                          {item.text}
                        </Link>
                      </ListItem>
                    ))}
                  </List>
                </React.Fragment>
              </Box>
            ))}
          </Box>
          {/* End of footer List column */}
        </Box>
      </Container>
    </FooterWrapper>
  );
};

// Footer style props
Footer.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  colOne: PropTypes.object,
  colTwo: PropTypes.object,
  titleStyle: PropTypes.object,
  textStyle: PropTypes.object,
  logoStyle: PropTypes.object,
};

// Footer default style
Footer.defaultProps = {
  // Footer row default style
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-15px",
    mr: "-15px",
  },
  // Footer col one style
  colOne: {
    width: [1, "35%", "35%", "23%"],
    mt: [0, "13px"],
    mb: ["30px", 0],
    pl: ["15px", 0],
    pr: ["15px", "15px", 0],
  },
  // Footer col two style
  colTwo: {
    width: ["100%", "65%", "65%", "77%"],
    flexBox: true,
    flexWrap: "wrap",
  },
  // Footer col default style
  col: {
    width: ["100%", "50%", "50%", "25%"],
    pl: "15px",
    pr: "15px",
    mb: "30px",
  },
  // widget title default style
  titleStyle: {
    color: "#343d48",
    fontSize: "16px",
    fontWeight: "700",
    mb: "30px",
  },
  // Default logo size
  logoStyle: {
    width: "130px",
    mb: "15px",
  },
  // widget text default style
  textStyle: {
    color: "#0f2137",
    fontSize: "16px",
    mb: "10px",
  },
};

export default Footer;
