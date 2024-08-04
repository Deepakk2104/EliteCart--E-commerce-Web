import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

function Layout({children}){
  return(
    <div>
      <Navbar />
      <div className="container">
        {children}
      </div>
      <Footer />
    </div>
  )
};

export default Layout;