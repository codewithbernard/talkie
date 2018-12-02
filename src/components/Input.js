import React, { useState } from "react";
import styled from "styled-components";

const Input = () => {
  const [focus, setFocus] = useState(false);
  return (
    <InputField onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}>
      <Icon focus={focus} className="fas fa-search" />
      <StyledInput focus={focus} type="text" />
    </InputField>
  );
};

export default Input;

const InputField = styled.div`
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input`
  outline: none;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${props => (props.focus ? "#00b7ff" : "#5f5f61")};
  padding-bottom: 5px;
  font-size: 22px;
  color: ${props => (props.focus ? "#00b7ff" : "#5f5f61")};

  transition: border-bottom 0.3s;
`;

const Icon = styled.i`
  color: ${props => (props.focus ? "#00b7ff" : "#5f5f61")};
  margin-right: 10px;
  font-size: 24px;
  transition: color 0.3s;
`;
