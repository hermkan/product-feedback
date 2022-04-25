import React from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowUp } from 'react-icons/md';

function DesignSystem() {
  return (
    <div className="theme-product-feedback">
      <header className="flex bg-secondary-2 justify-between items-center py-2  px-44 shadow-lg ">
        <span className="rounded-full p-10 gradient " />
        <p>Design system</p>
      </header>

      <section className="colors mt-16">
        <div className="title flex items-center gap-12">
          <div className=" bg-skin-fill text-white-200 w-32 flex justify-end pr-8 text-secondary-1 opacity-50 text-2xl font-mono font-black">
            01
          </div>
          <div>
            <h2 className="text-2xl font-mono font-black uppercase ">Colors</h2>
          </div>
        </div>
        <div className="colors-container text-secondary-1 mt-10  pl-40 pr-20 grid gap-4 grid-cols-4 ">
          <div className="bg-purple-100 p-8 rounded-md text-white-200">
            Purple-100 - #C75AF6
          </div>
          <div className="bg-purple-200 p-8 rounded-md text-white-200">
            Purple-200 - #AD1FEA
          </div>
          <div className="bg-blue-100 p-8 rounded-md text-white-200">
            Blue-100 - #CFD7FF
          </div>
          <div className="bg-violet-100 p-8 rounded-md text-white-200">
            Violet-100 - #7C91F9
          </div>
          <div className="bg-violet-200 p-8 rounded-md text-white-200">
            Violet-200 - #4661E6
          </div>
          <div className="bg-orange-100 p-8 rounded-md text-white-200">
            Orange-100 - #E98888
          </div>
          <div className="bg-orange-200 p-8 rounded-md text-white-200">
            Orange-200 - #D73737
          </div>
          <div className="bg-sky p-8 rounded-md text-white-200">
            Sky - #62BCFA
          </div>
          <div className="bg-slate p-8 rounded-md text-white-200 ">
            Slate - #647196
          </div>
          <div className="bg-dark-navy-100 p-8 rounded-md text-white-200  ">
            Dark-navy-100 - #656EA3
          </div>
          <div className="bg-dark-navy-200 p-8 rounded-md text-white-200  ">
            Dark-navy-200 - #3A4374
          </div>
          <div className="bg-dark-navy-300 p-8 rounded-md text-white-200  ">
            Dark-navy-300 - #373F68
          </div>
          <div className="theme-product-feedback">
            <div className=" bg-skin-fill text-secondary-3 p-8 border-4 rounded-md">
              test
            </div>
          </div>
          <div className=" bg-white-0  text-secondary-3 p-8 border-4 rounded-md">
            White-0 - #FFFF
          </div>
          <div className=" bg-white-200 text-secondary-3 p-8 rounded-md">
            White-200 - #F2F4FF
          </div>
          <div className=" bg-white-300 border-4 text-secondary-3 p-8 rounded-md">
            White-300 - #F7F8FD
          </div>
        </div>
      </section>

      <section className="typography mt-20">
        <div className="title flex items-center gap-12">
          <div className=" bg-slate text-white-200 w-32 flex justify-end pr-8 opacity-50 text-2xl font-mono font-black">
            02
          </div>
          <div>
            <h2 className="text-2xl font-mono font-black uppercase">
              Typography
            </h2>
          </div>
        </div>

        <div className="typo-container pl-44 pr-20 grid gap-10 grid-cols-2 mt-10">
          <div className="heading grid gap-10">
            <div className="grid gap-4">
              <p>H1 - Jost Bold | 24px; Line : 35px ; Spacing: -0.33 </p>
              <h1 className="text-xs font-bold ">
                Sed egestas ante et vulputate volutpat test
              </h1>
              <div className="px-8 py-2 bg-skin-fill">test</div>
            </div>
            <div className="grid gap-4">
              <p>H2 - Jost Bold | 20px; 29px Line; -0.25 Spacing </p>
              <h2 className="text-3xl font-bold">
                Vestibulum volutpat acus a ultrices sagittis
              </h2>
            </div>
            <div className="grid gap-4">
              <p>H3 - Jost Bold | 18px; 26px Line; -0.25 Spacing </p>
              <h3 className="font-bold text-2xl">
                Pellentesque a diam sit amet mi ullamcorper vehicula
              </h3>
            </div>
            <div className="grid gap-4">
              <p>H4 - Jost Bold | 14px; 20px Line; -0.2 Spacing </p>
              <h4 className="font-bold text-xl">
                Ut scelerisque hendrerit tellus. Integer sagittis
              </h4>
            </div>
          </div>

          <div className="body grid gap-10  theme-product-feedback">
            <div className="grid gap-4 ">
              <p> Body 1 - Jost Regular | 16px; 23px Line</p>
              <p className="font-ff-sans-normal text-xs">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
                neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
                ligula sollicitudin laoreet viverra, tortor libero sodales leo,
                eget blandit nunc tortor eu nibh. Nullam mollis.
              </p>
            </div>
            <div className="grid gap-4">
              <p>Body 2 - Jost Regular | 15px; 22px Line</p>
              <p className="text-lg">
                Sed egestas, ante et vulputate volutpat, eros pede semper est,
                vitae luctus metus libero eu augue. Morbi purus libero, faucibus
                adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent
                elementum hendrerit tortor. Sed semper lorem at felis.
                Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod
                dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu
              </p>
            </div>
            <div className="grid gap-4">
              <p>Body 3 - Jost Semibold | 13px; 19px Line</p>
              <p className="text-xs">
                Sed egestas, ante et vulputate volutpat, eros pede semper est,
                vitae luctus metus libero eu augue. Morbi purus libero, faucibus
                adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent
                elementum hendrerit tortor. Sed semper lorem at felis.
                Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod
                dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="buttons mt-20">
        <div className="title flex items-center gap-12">
          <div className="bg-slate text-white-200  w-32 flex justify-end pr-8 text-secondary-2 opacity-50 text-2xl font-mono font-black">
            05
          </div>
          <div>
            <h2 className="text-2xl font-mono font-black uppercase">Buttons</h2>
          </div>
        </div>
        <div className="buttons-container pl-44 pr-20 grid gap-4 grid-cols-4 mt-10">
          <div className="  flex flex-col items-center justify-center gap-2">
            <button
              type="button"
              className="w- rounded-md text-white-200 shadow-lg bg-purple-200 w-w-btn h-h-btn"
            >
              Button 1
            </button>
            <span>default</span>
          </div>
          <div className="  flex flex-col items-center justify-center gap-2">
            <button
              type="button"
              className="w- rounded-md text-white-200 shadow-lg bg-violet-200 w-w-btn h-h-btn"
            >
              Button 2
            </button>
            <span>default</span>
          </div>
          <div className="  flex flex-col items-center justify-center gap-2">
            <button
              type="button"
              className="w- rounded-md text-white-200 shadow-lg bg-dark-navy-200 w-w-btn h-h-btn"
            >
              Button 3
            </button>
            <span>default</span>
          </div>
          <div className="  flex flex-col items-center justify-center gap-2">
            <button
              type="button"
              className="w- rounded-md text-white-200 shadow-lg bg-orange-200 w-w-btn h-h-btn"
            >
              Button 4
            </button>
            <span>default</span>
          </div>
          <div className="  flex flex-col items-center justify-center gap-2">
            <button
              type="button"
              className="w- rounded-md text-white-200 shadow-lg bg-purple-100 w-w-btn h-h-btn"
            >
              Button 5
            </button>
            <span>hover</span>
          </div>
          <div className="  flex flex-col items-center justify-center gap-2">
            <button
              type="button"
              className="w- rounded-md text-white-200 shadow-lg bg-violet-100 w-w-btn h-h-btn"
            >
              Button 6
            </button>
            <span>Hover</span>
          </div>
          <div className="  flex flex-col items-center justify-center gap-2">
            <button
              type="button"
              className="w- rounded-md text-white-200 shadow-lg bg-dark-navy-100 w-w-btn h-h-btn"
            >
              Button 7
            </button>
            <span>Hover</span>
          </div>
          <div className="  flex flex-col items-center justify-center gap-2">
            <button
              type="button"
              className="w- rounded-md text-white-200 shadow-lg bg-orange-100 w-w-btn h-h-btn"
            >
              Button 8
            </button>
            <span>Hover</span>
          </div>
          <div className="  flex flex-col items-center justify-center gap-2">
            <button
              type="button"
              className="rounded-md flex items-center justify-center gap-x-4 text-slate w-w-btn h-h-btn"
            >
              <MdKeyboardArrowLeft className=" text-violet-200" />
              Go back
            </button>
            <span>default</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <button
              type="button"
              className="rounded-md flex items-center justify-center gap-x-4 text-slate shadow-lg w-w-btn h-h-btn "
            >
              <MdKeyboardArrowLeft className=" text-violet-200" />
              Go back
            </button>
            <span>default</span>
          </div>

          <div className="  flex flex-col items-center justify-center gap-2 col-start-1">
            <button
              type="button"
              className="rounded-md w-w-btn h-h-btn underline flex items-center justify-center gap-x-4 text-slate"
            >
              <MdKeyboardArrowLeft className=" text-violet-200" />
              Go back
            </button>
            <span>Hover</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <button
              type="button"
              className="rounded-md shadow-lg bg-primary-1 w-w-btn h-h-btn underline flex items-center justify-center gap-x-4 text-slate"
            >
              <MdKeyboardArrowLeft className=" text-violet-200" />
              Go back
            </button>
            <span>Hover</span>
          </div>
        </div>
      </section>

      <section className="interactive elements mt-20">
        <div className="title  flex items-center gap-12">
          <div className="bg-slate text-white-200 w-32 flex justify-end pr-8 text-secondary-2 opacity-50 text-2xl font-mono font-black">
            06
          </div>
          <div>
            <h2 className="text-2xl font-mono font-black uppercase">
              interactive elements
            </h2>
          </div>
        </div>
        <div className="indicators-dropdown-container flex gap-40 pl-60 pr-20 mt-12">
          <div className="indicators-container grid grid-cols-3 gap-20">
            <div className=" items-center justify-center flex flex-col gap-4">
              <div className="bg-white-200 rounded-10 w-w-ind h-h-ind flex flex-col items-center justify-center">
                <MdKeyboardArrowUp />
                99
              </div>
              <span className="text-xs">default</span>
            </div>
            <div className=" items-center justify-center flex flex-col gap-4">
              <div className="bg-blue-100 rounded-10 w-w-ind h-h-ind flex flex-col items-center justify-center">
                <MdKeyboardArrowUp />
                99
              </div>
              <span className="text-xs">hover</span>
            </div>
            <div className=" items-center justify-center flex flex-col gap-4">
              <div className="bg-violet-200 rounded-10 w-w-ind h-h-ind flex flex-col items-center justify-center text-white-200">
                <MdKeyboardArrowUp />
                99
              </div>
              <span className="text-xs">active</span>
            </div>
            <div className=" items-center justify-center flex flex-col gap-4">
              <div className="bg-white-200 rounded-10 w-w-ind-ux h-h-ind-ux flex flex-col items-center justify-center text-xs">
                UX
              </div>
              <span className="text-xs">default</span>
            </div>
            <div className=" items-center justify-center flex flex-col gap-4">
              <div className="bg-blue-100 rounded-10 w-w-ind-ux h-h-ind-ux flex flex-col items-center justify-center text-xs">
                UX
              </div>
              <span className="text-xs">hover</span>
            </div>
            <div className=" items-center justify-center flex flex-col gap-4">
              <div className="bg-violet-200 rounded-10 w-w-ind-ux h-h-ind-ux flex flex-col items-center justify-center text-white-200 text-xs">
                UX
              </div>
              <span className="text-xs">active</span>
            </div>
          </div>
          <div className="drop-down-menu-container">
            <div className="bg-">Sort by : Most upvotes</div>
            <div>sort by Most upvotes</div>
            <div>List</div>
          </div>
        </div>
      </section>

      <section className="form elements mt-10">
        <div className="title flex items-center gap-12">
          <div className="bg-slate text-white-200 w-32 flex justify-end pr-8 text-secondary-2 opacity-50 text-2xl font-mono font-black">
            06
          </div>
          <div>
            <h2 className="text-2xl font-mono font-black uppercase">
              Form elements
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DesignSystem;
