type FooterProps = {
  copyright: string;
  userTel: number;
  userEmail: string;
}

export const Footer: React.FC<FooterProps> = (props) => (
    <footer>
      <p>{props.copyright}</p>
      <span>tel: +{props.userTel}</span>
      <span>email: {props.userEmail}</span>
      </footer>
  )
