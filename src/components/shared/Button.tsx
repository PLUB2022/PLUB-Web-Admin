import styled from '@emotion/styled';

interface ButtonProps {
  children: React.ReactNode;
  bgColor: string;
  width?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({
  children,
  bgColor,
  width,
  onClick,
  disabled,
}: ButtonProps) => {
  return (
    <CustomButton
      width={width || '100%'}
      bgColor={bgColor}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </CustomButton>
  );
};

export default Button;

const CustomButton = styled.button<{ width: string; bgColor: string }>`
  width: ${({ width }) => width};
  font-size: 14px;
  font-weight: 500;
  padding: 12px;
  color: #fff;
  background-color: ${({ bgColor }) => bgColor};
  border: none;
  cursor: pointer;
`;
