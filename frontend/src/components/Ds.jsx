import React from 'react';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';

function Ds() {
  return (
    <div className="container">
      <section className="flow" id="interactive-elements">
        <h2 className="numbered-title">
          <span>03</span> Interactive elements
        </h2>

        <div />

        <div className="flex">
          <div>
            {/* <!-- vote button --> */}
            <button
              type="button"
              className="large-button uppercase ff-sans-normal fs-300 text-dark bg-white-200"
            >
              <MdOutlineKeyboardArrowUp className="arrow" size={30} />
              99
            </button>
            <button
              type="button"
              className="small-button uppercase ff-sans-normal fs-400 text-purple bg-white-200"
            >
              UX
            </button>
          </div>

          <div>
            {/* <!-- dropdown menu --> */}
            <div className="dropdown ff-sans-normal fs-400 text-white bg-navy-200">
              <div className="dropdown-content"> content</div>
            </div>
            {/* <!-- Dots --> */}

            {/* <!-- Numbers --> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Ds;
