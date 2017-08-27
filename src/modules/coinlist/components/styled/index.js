import styled from 'styled-components';

export const Row = styled.li`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  margin: 8px 0;
  padding: 8px 0;
  color: #999;
  transition: color .15s ease-in-out, background-color .15s ease-in-out;
  &:hover {
    color: #333;
    background-color: #f9f9f9;
  }
`;

export const Cell = styled.div`
  display: flex;
  min-width: 180px;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  align-items: center;
  text-align: right;
  justify-content: flex-end;
  font-family: 'menlo', 'monaco', 'courier', monospace;
`;

export const Price = Cell.extend`
  width: 110px;
  color: ${props => (props.moon ? props.theme.green : props.theme.red)};
`;

export const Logo = styled.div`width: 40px;`;

export const Rank = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  color: #ccc;
`;
