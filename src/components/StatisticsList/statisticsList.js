import PropTypes from 'prop-types';
import { Container, ContainerLi, ContainerSec } from './statistics.styled';

export const Statistics = ({ lists, title }) => {
  return (
    <ContainerSec className="statistics">
      {title && <h2 className="title">{title}</h2>}
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
Statistics.propTypes = {
  title: PropTypes.string,
};
