import Carousel from "./Component/Carousel";
import Footer from "./Component/Footer";
import Header from "./Component/Header";

function App() {
  return (
    <>
      <Header />
      <Carousel />

      {/* About Section */}
      <div className="container my-4">
        <div className="row">
          <div className="col-12">
            <div style={{ fontFamily: "Times New Roman" }}>
              <p className="px-3 px-md-4 py-3 text-justify">
                Welcome to <strong>AgroFresh</strong> — your trusted partner in post-harvest solutions. 
                From industry-leading quality and freshness systems to smart digital platforms, we’re 
                dedicated to supporting every step of your supply chain.
                <br /><br />
                As pioneers in ethylene management with 1-MCP technology and creators of Uvasys, 
                the world’s first laminated SO₂ generating sheet, we offer innovation that keeps your 
                produce fresher, longer.
                <br /><br />
                Discover how AgroFresh is redefining freshness with technology that meets your 
                unique agricultural needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <div className="container-fluid bg-light py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-12 mb-4">
              <h2 className="fw-bold">Our Solutions</h2>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="p-3 border h-100 rounded shadow-sm">
                <h5>Post-harvest Freshness</h5>
                <p>Advanced technologies to retain quality and shelf life.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="p-3 border h-100 rounded shadow-sm">
                <h5>Digital Monitoring</h5>
                <p>Real-time tools for tracking and traceability.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="p-3 border h-100 rounded shadow-sm">
                <h5>Ethylene Management</h5>
                <p>1-MCP and other innovative solutions to slow ripening.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="p-3 border h-100 rounded shadow-sm">
                <h5>Supply Chain Consulting</h5>
                <p>Tailored strategies for your agricultural operations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
