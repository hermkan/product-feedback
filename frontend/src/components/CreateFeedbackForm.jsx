import React from 'react';
import AddFeedbackbuttonNoPlus from './AddFeedbackbuttonNoPlus';
import AddFeedbackIcon from './AddFeedbackIcon';
import CancelButton from './CancelButton';

function CreateFeedbackForm() {
  return (
    <div className="h-h-edit-cont w-w-edit-form flex items-end mt-10 relative">
      <div className="mt-10 w-w-edit-form h-h-edit-form bg-skin-fill rounded-10 pt-16 pl-10 ">
        <div className="absolute top-28 left-16">
          <AddFeedbackIcon />
        </div>
        <div className="w-w-edit-title h-h-edit-title">
          <h2 className="font-bold text-4xl text-skin-accent-navy w-full">
            Create New Feedback
          </h2>
        </div>

        <form action="" className="mt-10 flex flex-col gap-6">
          <div className="Feedback title h-24 flex flex-col gap-4">
            <label htmlFor="" className="h-1/2">
              <p className=" text-skin-accent-navy text-sm font-bold">
                Feedback Title
              </p>
              <p className="text-skin-accent-slate text-sm font-normal">
                Add a short, descriptive headline
              </p>
            </label>
            <input
              type="text"
              className="bg-com-slate-200  w-w-edit-input h-h-edit-input"
            />
          </div>

          <div className="Feedback title h-24 flex flex-col gap-4">
            <label htmlFor="" className="h-1/2">
              <p className=" text-skin-accent-navy text-sm font-bold">
                Feedback Title
              </p>
              <p className="text-skin-accent-slate text-sm font-normal">
                Add a short, descriptive headline
              </p>
            </label>
            <input
              type="text"
              className="bg-com-slate-200  w-w-edit-input h-h-edit-input"
            />
          </div>

          <div className="Feedback title flex flex-col gap-4">
            <label htmlFor="" className="h-1/2">
              <p className=" text-skin-accent-navy text-sm font-bold">
                Feedback Title
              </p>
              <p className="text-skin-accent-slate text-sm font-normal">
                Add a short, descriptive headline
              </p>
            </label>
            <textarea className="bg-com-slate-200  w-w-edit-input h-24">
              type your comments
            </textarea>
          </div>
          <div className="pr-10 mt-3 flex justify-end">
            <div className="btn-containers gap-4 flex">
              <AddFeedbackbuttonNoPlus />
              <CancelButton />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateFeedbackForm;
