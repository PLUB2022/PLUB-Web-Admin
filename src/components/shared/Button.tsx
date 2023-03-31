import styled from '@emotion/styled';

import { COLORS } from '../../constants/colors';

interface ButtonProps {
  children: React.ReactNode;
  fontSize?: string;
  color?: string;
  bgColor?: string;
  width?: string;
  borderRadius?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({
  children,
  fontSize,
  color,
  bgColor,
  width,
  borderRadius,
  onClick,
  disabled,
}: ButtonProps) => {
  return (
    <CustomButton
      fontSize={fontSize || '1.4rem'}
      width={width || '100%'}
      color={color || '#fff'}
      bgColor={bgColor || COLORS.MAIN}
      borderRadius={borderRadius || '0px'}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </CustomButton>
  );
};

export default Button;

const CustomButton = styled.button<{
  fontSize: string;
  color: string;
  width: string;
  bgColor: string;
  borderRadius: string;
}>`
  width: ${({ width }) => width};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 500;
  padding: 12px;
  color: ${({ color }) => color};
  background-color: ${({ bgColor }) => bgColor};
  border: none;
  border-radius: ${({ borderRadius }) => borderRadius};
  cursor: pointer;
`;
