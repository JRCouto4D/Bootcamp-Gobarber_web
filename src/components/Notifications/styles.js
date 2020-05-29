import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import PerfectScrollBar from 'react-perfect-scrollbar';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  background: none;
  border: none;
  position: relative;
  margin-right: 20px;

  ${(props) =>
    props.hasUnread > 0 &&
    css`
      &::after {
        position: absolute;
        right: -7px;
        top: -9px;
        width: 15px;
        height: 15px;
        background: #ff892e;
        content: '${props.hasUnread}';
        font-size: 10px;
        color: #fff;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}
`;

export const NotificationList = styled.div`
  position: absolute;
  width: 270px;
  left: calc(50% - 145px);
  top: calc(100% + 30px);
  padding: 15px 5px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.6);
  display: ${(props) => (props.visible ? 'block' : 'none')};

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    top: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0, 0, 0, 0.6);
  }
`;

export const Scroll = styled(PerfectScrollBar)`
  max-height: 260px;
  padding: 5px 15px;
`;

export const Notification = styled.div`
  color: #fff;

  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  p {
    font-size: 13px;
    line-height: 18px;
  }

  time {
    display: block;
    margin: 5px 0;
    font-size: 12px;
    opacity: 0.6;
  }

  button {
    font-size: 12px;
    border: 0;
    background: none;
    color: ${lighten(0.2, '#7159c1')};
  }

  ${(props) =>
    props.unread &&
    css`
      &::after {
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        background: #ff892e;
        border-radius: 50%;
        margin-left: 5px;
      }
    `}
`;
