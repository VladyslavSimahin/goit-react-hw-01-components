import { Container, ContainerLi, ContainerSec } from './statistics.styled';

export const Statistics = ({ lists }) => {
  return (
    <ContainerSec className="statistics">
      <h2 className="title">Upload stats</h2>
      <Container className="stat-list">
        {lists.map(list => (
          <ContainerLi key={list.id} className="colorLi">
            {list.label}
            <p>{list.percentage} %</p>
          </ContainerLi>
        ))}
      </Container>
    </ContainerSec>
  );
};
