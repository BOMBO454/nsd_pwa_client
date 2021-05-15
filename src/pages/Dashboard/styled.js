import { Title } from "src/components/ui/Card/styled";
import styled from "styled-components";
import Card from "../../components/ui/Card/Card";

export const CentredCard = styled(Card)`
  ${Title} {
    text-align: center;
    width: 100%;
    font-size: 14px;
  }
`;

export const MiniCard = styled(Card)`
  ${Title} {
    font-size: 14px;
    margin: 0;
  }
  display: flex;
  justify-content: space-between;
  p {
    margin: 0;
    font-weight: 600;
    font-size: 14px;
  }
`;

export const BigLetter = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

export const VerticalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    font-size: 15px;
    font-weight: bold;
    margin: 0;
  }
`;

export const Heading = styled.h2`
  font-weight: bold;
  font-size: 15px;
  text-align: center;
  margin: 0;
`;
