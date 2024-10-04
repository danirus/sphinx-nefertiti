const BACK_TO_TOP_BUTTON_ID = "back-to-top";
const BACK_TO_TOP_DIV_ID = "back-to-top-container";

// Uses the element ID of the navbar, to find out its height and
// put the back-to-top button below the navbar, 16px below it.
const NAVBAR_ID = "snftt-nav-bar";

// If it can't find out the navigation bar height, use the
// following default instead.
const DEFAULT_NAVBAR_HEIGHT = 60;  // pixels.


export class BackToTop {
  constructor() {
    this.btn = document.getElementById(BACK_TO_TOP_BUTTON_ID);
    this.prev_offset = 0;
    const navbar = document.getElementById(NAVBAR_ID);
    this.navbar_height = navbar.offsetHeight || DEFAULT_NAVBAR_HEIGHT;
    const btt_div = document.getElementById(BACK_TO_TOP_DIV_ID);
    btt_div.style.top = `${this.navbar_height + 16}px`;
  }

  _scrollHandler = (event) => {
    var y_offset = window.pageYOffset || document.documentElement.scrollTop;

    if (y_offset > this.prev_offset || y_offset <= this.navbar_height) {
      this.btn.classList.add("d-none");
    } else if (y_offset < this.prev_offset && y_offset > this.navbar_height) {
      this.btn.classList.remove("d-none");
    }

    this.prev_offset = y_offset <= 0 ? 0 : y_offset;
  }

  _scrollToTopHandler = (event) => {
    event.preventDefault();
    document.documentElement.scrollTop = 0;
  }

  init = () => {
    window.addEventListener("scroll", this._scrollHandler, false);
    this.btn.addEventListener("click", this._scrollToTopHandler, false);
  }
}