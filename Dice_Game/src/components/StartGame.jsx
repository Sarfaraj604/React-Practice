import styled from 'styled-components'
const StartGame = () => {
  return (
    <Container>
      <div>
      <img src="/images/dices.png" alt="dices" />
      </div>
      <div className='content'>
        <h1>DICE GAME</h1>
        <Button>Play Now</Button>
      </div>


    </Container>
  )
}

export default StartGame
const Container = styled.div`
    max-width: 1180px;
    display: flex;
    margin: 0 auto;
    height: 100vh;
    align-items: center;
    .content{
        display: flex;
        flex-direction: column;
        align-items: end;
        h1{
            font-size: 96px;
            white-space: nowrap;
        }
        
    }
`;
const Button=styled.button`
  
  background: #000000;
  color: white;
  padding: 10px 18px;
  min-width: 220px;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.4s background ease-in;
  &:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: .3s background ease-in;
  }
`;