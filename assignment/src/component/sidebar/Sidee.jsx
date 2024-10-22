import "./Sidee.css";

function Sidee() {
  return (
    <div className="main-container text-center py-24 space-y-8">
      <div className="heading text-lg  text-blue-600 font-bold">
        <h1>Sitemark</h1>
      </div>
      <div className="text">
        <h1 className="pr-10">Total</h1>
        <h1 className="text-lg font-bold">$134.98</h1>
      </div>
      <div className="main-div space-y-8 p-8">
        <div className="flex justfy-between">
          <div className="text-sm">
            <h2 className="font-semibold  pr-5">Professional plan</h2>
            <p className="font-normal text-gray-500">Monthly subscription</p>
          </div>
          <div className="font-semibold pl-32">
            <h5>$15.00</h5>
          </div>
        </div>
        <div className="flex justfy-between">
          <div className=" text-sm ">
            <h2 className="font-semibold pr-20">Dedicated Support</h2>
            <p className="font-normal text-gray-500  ">
              Include in the professional Plan
            </p>
          </div>
          <div className="font-semibold pl-20">
            <h5>free</h5>
          </div>
        </div>
        <div className="flex justfy-between ">
          <div className=" text-sm ">
            <h2 className="font-semibold pr-36">Hardware</h2>
            <p className="font-normal text-gray-500 ">
              Devices needed for development
            </p>
          </div>
          <div className="font-semibold pl-14">
            <h5>$69.99</h5>
          </div>
        </div>
        <div className="flex justfy-between px- ">
          <div className="  text-sm ">
            <h2 className="font-semibold">Landing page template</h2>
            <p className="font-normal text-gray-500 pr-24 ">License</p>
          </div>
          <div className="font-semibold  pl-28">
            <h5>$49.99</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidee;
