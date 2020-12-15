import React, { useState } from 'react';
import { Modal } from 'antd';
import styled from 'styled-components';

import ColorButton from './ColorButton';

const StyledButton = styled(ColorButton)`
  font-size: 20px;
  background-color: red;
}
`;

export default function() {
  const [visible, setVisible] = useState(false);
  const buttonText = ['small', 'large', 'somethingelse'];
  return (
    <>
      {
        buttonText.map(
          text => <StyledButton onClick={() => setVisible(true)}>{text}</StyledButton>
        )
      }

      <Modal visible={visible} onOk={() => setVisible(false)} onCancel={() => setVisible(false)} title="qiankun">
        Probably the most complete micro-frontends solution you ever met
      </Modal>
    </>
  );
};
