import React from "react";
import "../css/SiteForm.css";
export default function SiteForm() {
  return (
    <div className=" bg-gray-800 flex items-center justify-center ">
      <div className="h-full w-screen bg-gray-900 rounded-lg shadow-2xl p-8 max-w-2xl  relative overflow-hidden">
        {/* Spotlight effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-20 blur-3xl animate-spotlight"></div>

        {/* Form Container */}
        <div className="relative z-10">
          <h1 className="text-3xl font-bold  text-white mb-6 text-center">
            Host Your Website
          </h1>

          {/* Website Name Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2 ">
              Website Name
            </label>
            <input
              type="text"
              placeholder="Enter your website name"
              className="w-full px-4 py-3 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent placeholder-gray-400"
            />
          </div>

          {/* Domain Name Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Domain Name
            </label>
            <input
              type="text"
              placeholder="Enter your domain name"
              className="w-full px-4 py-3 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent placeholder-gray-400"
            />
          </div>

          {/* File Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Upload Files
            </label>
            <div className="flex items-center justify-center w-full bg-black rounded-lg border-2 border-dashed border-gray-700 p-6">
              <input type="file" className="hidden" id="file-upload" />
              <label
                htmlFor="file-upload"
                className="cursor-pointer text-gray-400 hover:text-white"
              >
                <span className="text-sm">Drag & drop files or</span>
                <span className="text-purple-500 font-medium ml-1">browse</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-cyan-800 text-white py-3 rounded-lg font-semibold hover:bg-gray-600 transition duration-300">
            Host Website
          </button>
        </div>
      </div>
    </div>
  );
}
