import styled from "styled-components";
import { media } from "../../styles/Theme/theme";

export const SectionWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
  padding: 45px 0px;
  border-top: 3px solid ${props => props.theme.colors.greenComplem};

  ${media.md`
    flex-direction: column;
    justify-content: center;
    padding: 30px 0;
  `}

  .section-content {
    margin: 0 15px;
    padding: 15px;  
  }
`