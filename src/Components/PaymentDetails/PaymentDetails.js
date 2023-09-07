import React from 'react';

const PaymentDetailsPage = () => {
  

  const sampleBankTransferDetails = {
    bankName: 'Sample Bank',
    branch: 'Main Street Branch',
    accountHolderName: 'John Doe',
    ifscCode: 'ABCD1234',
    accountType: 'Savings',
  };

  const sampleUPIDetails = {
    upiID: 'john.doe@upi',
    mobileNumber: '1234567890',
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <h2 className="text-2xl font-extrabold text-gray-900">Payment Details</h2>

          {/* Account Number
          <div className="mt-6">
            <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700">
              Account Number
            </label>
            <div className="mt-1">
              <input
                type="text"
                id="accountNumber"
                name="accountNumber"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                value={sampleAccountNumber}
                readOnly
              />
            </div>
          </div> */}

          {/* Bank Transfer Details */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700">Bank Transfer Details</label>
            <div className="mt-2">
              <p>Bank Name: {sampleBankTransferDetails.bankName}</p>
              <p>Branch: {sampleBankTransferDetails.branch}</p>
              <p>Account Holder Name: {sampleBankTransferDetails.accountHolderName}</p>
              <p>IFSC Code: {sampleBankTransferDetails.ifscCode}</p>
              <p>Account Type: {sampleBankTransferDetails.accountType}</p>
            </div>
          </div>

          {/* UPI Details */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700">UPI Details</label>
            <div className="mt-2">
              <p>UPI ID: {sampleUPIDetails.upiID}</p>
              <p>Mobile Number: {sampleUPIDetails.mobileNumber}</p>
            </div>
          </div>

          {/* QR Code */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700">Scan QR Code</label>
            <div className="mt-2">
              {/* Placeholder QR code image */}
              <img src="/placeholder-qr-code.png" alt="QR Code" className="w-48 h-48" />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            {/* <button
              type="button"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
            >
              Make Payment
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetailsPage;
