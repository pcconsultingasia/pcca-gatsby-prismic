import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import colors from "styles/colors";
import Logo from "components/_ui/Logo";
import spooch from "images/PC Consulting Asia.png";

const FooterContainer = styled("div")`
    padding-top: 3.75em;
    padding-bottom: 3em;
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
        max-width: 300px;
    }
`

const FooterAuthor = styled("a")`
    font-size: 0.75em;
    color: ${colors.grey700};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    margin-top: 1.5em;

     &:hover {
         color: ${colors.blue900};

        .FooterSpooch {
            animation-name: rotate;
            animation-duration: 1.5s;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
        }
    }

    @keyframes rotate {
        from {transform: rotate(0deg);}
        to {transform: rotate(360deg);}
    }
`

const FooterSpooch = styled("img")`
    max-width: 33px;
    margin-top: 0.25em;
`

const Footer = () => (
    <FooterContainer>
        <Link to="/">
            <Logo/>
        </Link>
        <FooterAuthor href="https://pcconsultingasia.com">
            © 2019 —Webmaster PC Consulting Asia
            49/78 Bandon-Cherngtalay Road, Cherngtalay Sub-District, Thalang District,Phuket 83110
            <FooterSpooch className="FooterSpooch" src={spooch} />
        </FooterAuthor>
    </FooterContainer>
)

export default Footer;