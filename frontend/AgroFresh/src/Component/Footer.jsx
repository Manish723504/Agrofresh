
function Footer() {

    return (
        <>
            <footer className="footer" style={{ width: "100%", height: "135px", background: "#508159",color:"white",textAlign:"center" }}>
                <div className="footer-content">
                    <h3>Agro Fresh</h3>
                    <p>Delivering farm-fresh produce directly to your doorstep.</p>
                   <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
          </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Agro Fresh. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
} export default Footer