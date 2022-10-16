import { Component } from "react";
import AboutMeHeader from "../components/AboutMeHeader";
import CustomModalForm from "../components/CustomModalForm";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default class Home extends Component {
  // Logic | Controller
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
    };
  }

  toggleAboutMe() {
    this.setState({isOpened: !this.state.isOpened})
    // alert('i am clicked')
    console.log(this.isOpened);
  }

  name = "Emmanuel Ogwu Berit";
  color = "chocolate";
  occupation = "Senior Software Engineer";
  bodySize = "lanky";
  phoneNumber = "07016588973";

  render() {
    return (
      <>
      <div style={{position: 'relative'}}>
        <Header />
        <div
          style={{
            padding: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "#ccc",
              width: "50%",
            }}
          >
            <AboutMeHeader myName={this.name} />
            {this.state.isOpened && (
              <div style={{ padding: 10 }}>
                <p>name: {this.name}</p>
                <p>color: {this.color}</p>
                <p>occupation: {this.occupation}</p>
                <p>body size: {this.bodySize}</p>
                <p>Phone number: {this.phoneNumber}</p>
              </div>
            )}

            <div style={{ width: "100%", display: "flex" }}>
              <button
                onClick={() => this.toggleAboutMe()}
                style={{
                  backgroundColor: "rgba(0, 170, 80, 0.8)",
                  color: "white",
                  border: "none",
                  width: "50%",
                }}
              >
                {this.state.isOpened ? "Close Me" : "Read About Me"}
              </button>
              <button
                style={{
                  backgroundColor: "rgba(0, 17, 180, 0.8)",
                  color: "white",
                  border: "none",
                  width: "50%",
                }}
              >
                Change My profile
              </button>
            </div>
          </div>
        </div>
        
        {/* <div style={{
          position: 'absolute',
          top: 0,
          background: "rgba(0,0,0,0.3)",
          bottom: 0,
          left: 0,
          right: 0,
          height: '100vh'
        }}>
          <CustomModalForm />
        </div> */}
      </div>
      <div
      style={{
        position: "absolute",
        bottom: 0,
        backgroundColor: "rgba(200, 100, 0, 0.9)",
        width: "100%",
        padding: 10,
      }}
    >
      <Footer />
    </div>
    </>
    );
  }
}
