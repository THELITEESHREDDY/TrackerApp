import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function EditHabitOrTask({ editDetailsId, sectionDetails }) {
  const [isOpen, setIsOpen] = useState(false);
  const [details, setDetails] = useState({
    name: "",
    isHabit: false,
    description: "",
    startTime: "",
    endTime: "",
    id: "",
  });

  const navigate=useNavigate();
  
  useEffect(() => {
    if (sectionDetails.section === "edit" ) {
      
      
      setDetails(sectionDetails);

      setIsOpen(true);
    } 
  }, [sectionDetails]);

  function handleChanges(e) {
    const { name, value, type, checked } = e.target;
    const finalValue = type === 'checkbox' ? checked : value;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: finalValue,
    }));
  }

  function handleClose(){
    setDetails({
      name: "",
      isHabit: false,
      description: "",
      startTime: "",
      endTime: "",
      id: "",
    })
    setIsOpen(false);
  }
  function handleSubmit() {
    editDetailsId(details);
    setDetails({
      name: "",
      isHabit: false,
      description: "",
      startTime: "",
      endTime: "",
      id: "",
    })
    setIsOpen(false);
     navigate("/")
  }

  return (
    <div className='w-full h-auto bg-white rounded-2xl border-2 my-1'>
      <button
        className='w-full h-auto bg-blue-600 rounded-2xl border p-2 text-center hover:bg-blue-500 cursor-pointer text-white'
        onClick={() => setIsOpen(true)}
      >
        Edit Task/Habit
      </button>
      {isOpen && (
        <div className='w-full h-auto rounded-b-2xl p-2'>
          <div className='w-full h-auto'>
            {details.isHabit && (
              <div className='p-1 text-red-600 animate-pulse'>
                Habit must be strictly followed for minimum of 21 days!!
              </div>
            )}

            <div className='w-full h-auto my-1 flex justify-evenly'>
              <label>
                <input
                  type="checkbox"
                  name="isHabit"
                  checked={details.isHabit}
                  onChange={handleChanges}
                />
                Is this a habit?
              </label>
            </div>

            <div className='w-full h-auto my-1'>
              <label htmlFor="taskName">
                {details.isHabit ? "Habit" : "Task"} Name:
              </label>
              <input
                type="text"
                id='taskName'
                name="name"
                className='border w-full p-1'
                value={details.name}
                onChange={handleChanges}
                placeholder='Task Name'
                required
              />
            </div>

            <div className='w-full h-auto my-1'>
              <label htmlFor="taskDescription">
                {details.isHabit ? "Habit" : "Task"} Description:
              </label>
              <input
                type="text"
                id='taskDescription'
                name="description"
                className='border w-full p-1'
                placeholder='Task Description'
                value={details.description}
                onChange={handleChanges}
                required
              />
            </div>

            <div className='w-full h-auto my-1'>
              <label htmlFor="StartTime">Start Time:</label>
              <input
                type="datetime-local"
                id='StartTime'
                name="startTime"
                className='border w-full p-1'
                value={details.startTime}
                onChange={handleChanges}
                required
              />
            </div>
            <div className='w-full h-auto my-1'>
              <label htmlFor="EndTime">End Time:</label>
              <input
                type="datetime-local"
                id='EndTime'
                name="endTime"
                className='border w-full p-1'
                value={details.endTime}
                onChange={handleChanges}
                required
              />
            </div>
          </div>

          <div className='w-full h-auto flex justify-between mt-4'>
            <button
              onClick={() => handleClose()}
              className='w-[30%] h-auto bg-white rounded-2xl border p-2 text-center hover:bg-blue-500 cursor-pointer'
            >
              Close
            </button>
            <button
              className='w-[30%] h-auto bg-blue-600 rounded-2xl border p-2 text-white text-center hover:bg-blue-500 cursor-pointer'
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default EditHabitOrTask;