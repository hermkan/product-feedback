import React from 'react';
import AddFeedbackbuttonNoPlus from './AddFeedbackbuttonNoPlus';
import CancelButton from './CancelButton';
import DeleteButton from './DeleteButton';
import EditFeedBackIcon from './EditFeedBackIcon';
import GoBackButton from './GoBackButton';
import StatusDropDown from './StatusDropDown';

function EditFeedBackForm() {
  return (
    <div className="w-w-edit-feedb-form flex relative flex-col gap-14">
      <GoBackButton />
      <div className="w-w-edit-form h-h-edit-feed-form bg-skin-fill rounded-10 pt-16 pl-10">
        <div className="absolute top-14 left-16">
          <EditFeedBackIcon />
        </div>
        <div className=" w-w-edit-form-title h-h-edit-form-title">
          <h2 className="font-bold text-4xl text-skin-accent-navy w-full">
            Editing ‘Add a dark theme option’
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

          <div className="Feedback  title h-24 flex flex-col gap-4">
            <label htmlFor="" className="h-1/2">
              <p className=" text-skin-accent-navy text-sm font-bold">
                Category
              </p>
              <p className="text-skin-accent-slate text-sm font-normal">
                Choose a category for your feedback
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
                Update Status
              </p>
              <p className="text-skin-accent-slate text-sm font-normal">
                Change feature state
              </p>
            </label>
            <input
              type="text"
              className="bg-com-slate-200  w-w-edit-input h-h-edit-input"
            />
            <div className="absolute left-96 bottom-56">
              <StatusDropDown />
            </div>
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
            <textarea className="bg-com-slate-200  w-w-edit-input h-24" />
          </div>
          <div className="pr-10 mt-16 flex justify-end">
            <div className="btn-containers gap-4 flex justify-between w-full">
              <div>
                <DeleteButton />
              </div>
              <div className="flex gap-4">
                <CancelButton />
                <AddFeedbackbuttonNoPlus />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditFeedBackForm;
