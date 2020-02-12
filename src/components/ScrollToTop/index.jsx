import React, { Component } from "react";
import Fab from "@material-ui/core/Fab";
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";

class ScrollToTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function(e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true
      });
    } else {
      this.setState({
        is_visible: false
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    const { is_visible } = this.state;

    return (
      <div className="scroll-to-top">
        {is_visible && (
          <div onClick={() => this.scrollToTop()}>
            <Fab
              color="primary"
              aria-label="Go to Top"
              style={{ margin: "0px 0px 16px 16px" }}
            >
              <ArrowUpwardOutlinedIcon fontSize="small" />
            </Fab>
          </div>
        )}
      </div>
    );
  }
}

export default ScrollToTop;
