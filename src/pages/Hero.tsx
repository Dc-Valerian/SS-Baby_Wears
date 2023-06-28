import styled from "styled-components"
import img from "../assets/hero.jpeg"

const Hero = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Title>
            Shine Bright
          </Title>
          <Sub>
            Like a SuperStar
          </Sub>
          <ButtonHold>
            <Button>
              Shop Girls
            </Button>
          </ButtonHold>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Hero
const Button = styled.div``

const ButtonHold = styled.div``

const Sub = styled.div`
color: rgb(255,255,255);
background-color: rgba(0,0,0,0);
font-size: 36px;
line-height: 36px;
letter-spacing: normal;
font-weight: 700;
text-align: center;
text-decoration: none solid rgb(255,255,255);
`

const Title = styled.div`
color: rgb(255,255,255);
background-color: rgba(0,0,0,0);
font-family: Hensa-Regular;
font-size: 100px;
line-height: 100px;
font-weight: 400;
text-align: center;
text-decoration: none solid rgb(255,255,255);
`

const Wrapper = styled.div`
/* background-color: yellowgreen; */
height: 100%;
width: 50%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

const Container = styled.div`
/* background-color: brown; */
width: 100%;
height: 600px;
display: flex;
align-items: center;
justify-content: center;
background-image: url(${img});
background-repeat: no-repeat;
background-size: cover;
`