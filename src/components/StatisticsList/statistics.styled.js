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
`;
export const ContainerSec = styled.section`
  text-align: center;

  border: 1px solid black;
  width: 330px;
  margin: 0 auto;
`;

const boxes = document.querySelectorAll('.colorLi');
const rainbowColors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff'];
let colorIndex = 0;

function changeColor() {
  boxes.forEach((box, index) => {
    box.style.backgroundColor =
      rainbowColors[(colorIndex + index) % rainbowColors.length];
  });
  colorIndex = (colorIndex + 1) % rainbowColors.length;
}

setInterval(changeColor, 1000);
