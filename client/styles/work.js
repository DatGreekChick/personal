import { styled } from 'styled-components'

export const ProjectStyle = styled.div`
  align-items: center;
  justify-content: center;
  padding: 2% 0;
  font-size: 28pt;
  font-weight: 800;
  text-align: center;
  cursor: pointer;

  @media (min-width: 320px) and (max-width: 1024px) {
    padding: 6% 0;
    font-size: 20pt;
  }
`

export const Lines = styled.span`
  line-height: 0.5;
  display: inline-block;
  position: relative;

  &:hover {
    color: #e0bf9f;
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    height: 9px;
    border-bottom: 1px solid ghostwhite;
    border-top: 1px solid ghostwhite;
    top: 1px;
    width: 50%;
  }

  &:before {
    right: 100%;
    margin-right: 15px;
    padding-top: 5px;
  }

  &:after {
    left: 100%;
    margin-left: 15px;
    padding-top: 5px;
  }

  @media (min-width: 0px) and (max-width: 480px) {
    line-height: normal;
    font-size: 20pt;

    &:before,
    &:after {
      border: none;
      left: 0;
    }
  }

  @media (min-width: 480px) and (max-width: 1024px) {
    &:before,
    &:after {
      width: 22%;
    }
  }
`

export const Detail = styled.div`
  flex-direction: column;
  flex-wrap: wrap;
  font-size: 15px;
  font-weight: 300;
  padding: 5px 10%;
  cursor: default;
`

export const Role = styled.p`
  font-size: 20px;
  color: #e0bf9f;
  font-style: italic;
  font-weight: 800;
`

export const Description = styled.p`
  padding: 0 3%;
`

export const Tech = styled.div`
  border: 1px solid #e0bf9f;
  border-radius: 8px;
  padding: 7px 18px;
  margin-right: 10px;
  font-size: 12px;
  display: inline-block;

  @media (min-width: 320px) and (max-width: 480px) {
    padding: 4% 7%;
    margin: 1% 2%;
  }
`
