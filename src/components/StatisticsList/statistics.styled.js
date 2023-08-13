import styled from 'styled-components';

export const Container = styled.ul`
  display: table;
  margin: 0 auto;
  padding: 0;
`;

export const ContainerLi = styled.li`
  float: left;
  list-style: none;
  padding-left: 15px;
  padding-right: 15px;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;
export const ContainerSec = styled.section`
  text-align: center;
  border: 2px solid rgba(0, 0, 0, 0.2);
  width: 339px;
  margin: 0 auto;
`;
const boxes = document.querySelectorAll('.colorLi');
const rainbowColors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff'];

boxes.forEach((box, index) => {
  box.style.backgroundColor = rainbowColors[index % rainbowColors.length];
});
