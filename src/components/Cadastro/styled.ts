import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 20px;
  width: 100%;
  margin: 0 auto;
  background-color: rgb(140, 145, 140);
  border: solid 1px aqua;
  color: #fff;
  margin-bottom: 40px;
`

export const Legenda = styled.label`
  font-size: 20px;
  background-color: rgb(140, 145, 140);
  color: #000;
  font-weight: bold;
`

export const Campo = styled.input`
  font-size: 18px;
  align-items: center;
  width: 50%;
  padding: 5px;
  background-color: rgb(177, 170, 162);
  border-radius: 5px;
  border: none;
  border-bottom: 3px solid #121f36;
`

export const Botao = styled.button`
  font-size: 16px;
  font-weight: 700;
  padding: 10px;
  background-color: aqua;
  color: #000;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin-bottom: 40px;
`
