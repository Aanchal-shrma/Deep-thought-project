import React from 'react'
import meeting from '../Data/meeting.json'

function HeroSection() {
  return (
    <div>
         <div className="flex">
      <div className="notice-board h-96 w-28 border-gray-300 shadow-lg border-x-2 border-y-2 rounded-tr-2xl text-center rounded-bl-2xl rounded-br-2xl">
        <div className='bg-black h-10 rounded-tr-2xl'>
            <img src="" alt="" />
        </div>
        <p className='p-5 text-4xl text-blue-800'>1</p>
      </div>
     <div className="content flex flex-col">
     <div className="heading h-10 flex items-center w-[1300px] justify-between m-5">
     <h1 className='text-xl text-blue-800 font-bold'>Technical Project Management</h1>
     <button className='h-8 text-center border-none rounded-md w-32 font-bold bg-blue-800 text-white'>Submit task</button>
     </div>

   <div className="description h-46 w-[1300px] m-5 bg-gray-200 p-5 rounded-md">
   <h1 className='text-2xl font-bold pb-2'>Explore the world of management</h1>
    <p>As a Porject manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion.How? Do you manage each and every step of your life?  </p>
    </div>
               
         <div className="card-section w-[1300px] m-10">

          <div className="frst-row flex justify-between mb-5">

            <div className="frst-card h-[500px] w-[450px]  rounded-lg border-t-black shadow-lg">
              <div className="top h-10 bg-black rounded-t-lg text-white justify-center flex items-center">
                <h3>Technical project Management</h3>
                </div>
                <div className="mid p-5">
                <h5>Description: Story of Allignment Scope of Agility Specific Accountable Strategies Approach</h5>
               <img src={`/assets/${meeting.imgSrc}`} alt="" className='w-[1300px] mt-10'/>
               
                </div>
                <div className="bottom">
                  <img src="" alt="" />
                </div>
              
            </div>
            <div className="frst-card h-[500px] w-[450px]  rounded-lg border-t-black shadow-lg">
              <div className="top h-10 bg-black rounded-t-lg text-white justify-center flex items-center">
                <h3>Technical project Management</h3>
                </div>
                <div className="mid p-5">
                <h5>Description: Story of Allignment Scope of Agility Specific Accountable Strategies Approach</h5>
               <img src={`/assets/${meeting.imgSrc}`} alt="" className='w-[1300px] mt-10'/>
               
                </div>
                <div className="bottom">
                  <img src="" alt="" />
                </div>
              
            </div>
           </div>
           <div className="frst-row flex justify-between">

<div className="frst-card h-[500px] w-[450px]  rounded-lg border-t-black shadow-lg">
  <div className="top h-10 bg-black rounded-t-lg text-white justify-center flex items-center">
    <h3>Technical project Management</h3>
    </div>
    <div className="mid p-5">
    <h5>Description: Story of Allignment Scope of Agility Specific Accountable Strategies Approach</h5>
   <img src={`/assets/${meeting.imgSrc}`} alt="" className='w-[1300px] mt-10'/>
   
    </div>
    <div className="bottom">
      <img src="" alt="" />
    </div>
  
</div>
<div className="frst-card h-[500px] w-[450px]  rounded-lg border-t-black shadow-lg">
  <div className="top h-10 bg-black rounded-t-lg text-white justify-center flex items-center">
    <h3>Technical project Management</h3>
    </div>
    <div className="mid p-5">
    <h5>Description: Story of Allignment Scope of Agility Specific Accountable Strategies Approach</h5>
   <img src={`/assets/${meeting.imgSrc}`} alt="" className='w-[1300px] mt-10'/>
   
    </div>
    <div className="bottom">
      <img src="" alt="" />
    </div>
  
</div>
</div>
            
          </div>
          
          </div>
          </div>
          </div>
   )
   }


export default HeroSection;
