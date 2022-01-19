import * as S from './styles';

export interface ButtonProps {
  children?: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return <S.Container>{children}</S.Container>;
};

export default Button;
