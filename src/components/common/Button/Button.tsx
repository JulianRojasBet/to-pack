import {
  FunctionComponent,
  DetailedHTMLProps,
  ButtonHTMLAttributes,
} from 'react'

import styles from './Button.module.css'

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  label: string
}

const Button: FunctionComponent<Props> = ({ label, ...rest }: Props) => {
  return (
    <button className={styles.button} {...rest}>
      {label}
    </button>
  )
}

export default Button
