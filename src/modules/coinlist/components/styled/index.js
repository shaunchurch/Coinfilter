import styled from 'styled-components';

export const Row = styled.li`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  margin: 8px 0;
  padding: 8px 16px 8px 0;
  color: #999;
  transition: color .3s ease-out, background .3s ease-out,
    box-shadow .3s ease-out;
  cursor: pointer;
  border-radius: 6px;

  &:hover {
    color: #333;
    /*background: linear-gradient(0deg, #f1f1f1, #f6f6f6);*/
    box-shadow: 1px 1px 36px rgba(0, 0, 0, .1);
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
  width: 50px;
  color: #ccc;
`;
