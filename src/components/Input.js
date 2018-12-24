import React, { useState } from "react";
import styled from "styled-components";

const Input = () => {
  const [focus, setFocus] = useState(false);
  return (
    <InputField
      focus={focus}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    >
      <Icon focus={focus} className="fas fa-search" />
      <StyledInput focus={focus} type="text" />
    </InputField>
  );
};

export default Input;

const InputField = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border: 0.1rem solid ${props => (props.focus ? "#00b7ff" : "#5f5f61")};
  border-radius: 0.4rem;
  padding: 0.3rem 0;
  transition: border 0.3s;
`;

const StyledInput = styled.input`
  outline: none;
  width: 100%;
  background-color: transparent;
  border: none;
  margin-left: 0.5rem;
  font-size: 1rem;
  color: ${props => (props.focus ? "#00b7ff" : "#5f5f61")};
`;

const Icon = styled.i`
  color: ${props => (props.focus ? "#00b7ff" : "#5f5f61")};
  margin-left: 0.5rem;
  font-size: 1rem;
  transition: color 0.3s;
`;
