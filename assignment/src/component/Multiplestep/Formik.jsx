

function Formik() {
  return (
    <div className="pt-10">
      <form action=" ">

        <div className="flex justify-around">
          <div className="w-1/2 pr-2">
            <label htmlFor="fullName" className="mb-2 block text-gray-600 text-sm">Full Name *</label> 
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="John"
              className="border border-gray-300 rounded-lg focus:outline-none p-1 pl-4 w-full" 
            />
          </div>

          <div className="w-1/2 pl-2">
            <label htmlFor="lastName" className="mb-2 block text-gray-600 text-sm">Last Name *</label> 
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Snow"
              className="border border-gray-300 rounded-lg focus:outline-none p-1 pl-4 w-full" 
            />
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="address1" className="mb-2 block  text-gray-600 text-sm">Address line 1 *</label> 
          <input
            type="text"
            name="address1"
            id="address1"
            placeholder="Street name and number"
            className="border border-gray-300 rounded-lg focus:outline-none p-1 pl-4 w-full" 
          />
        </div>

        <div className="mt-4">
          <label htmlFor="address2" className="mb-2 block  text-gray-600 text-sm">Address line 2 *</label> 
          <input
            type="text"
            name="address2"
            id="address2"
            placeholder="Street name and number"
            className="border border-gray-300 rounded-lg focus:outline-none p-1  pl-4 w-full" 
          />
        </div>

        <div className="flex justify-around mt-4">
          <div className="w-1/2 pr-2">
            <label htmlFor="city" className="mb-2 block text-gray-600 text-sm">City *</label> 
            <input
              type="text"
              name="city"
              id="city"
              placeholder="New York"
              className="border border-gray-300 rounded-lg focus:outline-none p-1 pl-4 w-full" 
            />
          </div>

          <div className="w-1/2 pl-2">
            <label htmlFor="state" className="mb-2 block text-gray-600 text-sm">State *</label> 
            <input
              type="text"
              name="state"
              id="state"
              placeholder="NY"
              className="border border-gray-300 rounded-lg focus:outline-none p-1  pl-4 w-full" 
            />
          </div>
        </div>

        <div className="flex justify-around mt-4">
          <div className="w-1/2 pr-2">
            <label htmlFor="zip" className="mb-2 block text-gray-600 text-sm">Zip / Postal Code *</label> 
            <input
              type="text"
              name="zip"
              id="zip"
              placeholder="1234"
              className="border border-gray-300 rounded-lg focus:outline-none p-1 pl-4  w-full" 
            />
          </div>

          <div className="w-1/2 pl-4">
            <label htmlFor="country" className="mb-2 block text-gray-600 text-sm ">Country *</label> 
            <input
              type="text"
              name="country"
              id="country"
              placeholder="United States"
              className="border border-gray-300 rounded-lg focus:outline-none p-1 pl-4  w-full" 
            />
          </div>
        </div>
        <input type="checkbox" name="" id=""  className="mt-16 mb-10 p-8"/>
           <span className="pl-2 text-gray-600">Use this address for payment details</span>
      </form>
    </div>
  );
}

export default Formik;
