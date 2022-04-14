import React from 'react';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';

function Ds() {
  return (
    <div className="container">
      <section className="flow" id="interactive-elements">
        <h2 className="numbered-title">
          <span>03</span> Interactive elements
        </h2>

        {/* <!-- navigation --> */}
        <div />

        <div className="flex">
          <div>
            {/* <!-- vote button --> */}
            <button type="button" className="vote-button">
              <span>
                <MdOutlineKeyboardArrowUp
                  style={{
                    color: '#4661E6',
                    width: '28px',
                    height: '24px',
                  }}
                />
              </span>
              99
            </button>
          </div>

          <div>
            {/* <!-- Tabs --> */}

            {/* <!-- Dots --> */}

            {/* <!-- Numbers --> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Ds;
