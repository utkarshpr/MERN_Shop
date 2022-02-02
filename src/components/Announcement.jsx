import styled from "styled-components";
import Flash from "react-reveal/Flash";
const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container>
      <Flash>Super deal ! Free shipping on all orders above ₹ 400 ..😎💖</Flash>
    </Container>
  );
};

export default Announcement;
