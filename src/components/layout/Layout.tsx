import { Props } from "models/form.model";
import { Footer, Header } from "components/common";

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
