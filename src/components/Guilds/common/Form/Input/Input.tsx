import React, { InputHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

export const baseInputStyles = css`
  border: 0.1rem solid ${({ theme }) => theme.colors.muted};
  border-radius: 1.5rem;
  padding: 0.5rem 0.8rem;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};

  ::placeholder {
    color: ${({ theme }) => theme.colors.proposalText.grey};
    font-size: ${({ theme }) => theme.fontSizes.body};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
  }
  :hover:enabled {
    color: ${({ theme }) => theme.colors.text};
    border-color: ${({ theme }) => theme.colors.border.hover};
  }

  :active:enabled {
    border: 0.1rem solid ${({ theme }) => theme.colors.muted};
  }
  width: -webkit-fill-available;

  :focus:enabled {
    outline: none;
    border-color: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.text};
  }
`;

const InputWrapper = styled.div`
  ${baseInputStyles}
  display: flex;
  align-items: center;
  width: 100%;
  &:hover,
  &:focus {
    border: 0.1rem solid ${({ theme }) => theme.colors.text};
  }
`;

const InputBase = styled.input`
  display: flex;
  border: none;
  width: 100%;
  color: ${({ theme }) => theme.colors.text};
  &:focus,
  &:active,
  &:hover {
    outline: none;
    border: none;
  }
  color: ${({ theme }) => theme.colors.proposalText.lightGrey};
  margin-left: 12px;
  padding: 0;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
`;

const BaseInput = styled.input`
  ${baseInputStyles}
`;

const InputText = styled(BaseInput)`
  width: 300px;
  margin: 0.2rem;
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactElement;
  iconRight?: React.ReactElement;
}

const Input: React.FC<InputProps> = ({
  icon = null,
  iconRight = null,
  ...rest
}) => {
  return !!icon || !!iconRight ? (
    <InputWrapper>
      {icon}
      <InputBase {...rest} />
      {iconRight}
    </InputWrapper>
  ) : (
    <BaseInput {...rest} />
  );
};

export { BaseInput, InputText, Input };
