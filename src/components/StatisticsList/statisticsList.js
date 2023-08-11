import { Container, ContainerLi, ContainerSec } from './statistics.styled';

export const Statistics = ({ lists }) => {
  return (
    <ContainerSec class="statistics">
      <h2 class="title">Upload stats</h2>
      <Container class="stat-list">
        {lists.map(list => (
          <ContainerLi key={list.id}>
            {list.label}
            <p>{list.percentage} %</p>
          </ContainerLi>
        ))}
      </Container>
    </ContainerSec>
  );
};
