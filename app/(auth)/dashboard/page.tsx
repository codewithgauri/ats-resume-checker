// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

'use client';

import React, { useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import TailwindTable from '../../../components/ui/tailwindTable';
import pdfToText from 'react-pdftotext';


import { GoogleGenerativeAI } from "@google/generative-ai";
import DropZone from '../../../components/ui/fileInput'
import Loader from '../../../components/ui/loader'

import { generationConfig, value } from '../../constants/config';


const Dashboard = () => {
  const [file, setFile] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const [score, setScore] = useState('');
  const [improvements, setImprovements] = useState([]);
  const [loading, setLoading] = useState(false);
  const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_TOKEN||'');


  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };


  const handleUpload = async () => {
    if (file) {
      setLoading(true);
      // const storageRef = ref(storage, `resumes/${file.name}`);
      // await uploadBytes(storageRef, file);
      // const fileURL = await getDownloadURL(storageRef);

      try {
        // const response = await fetch(fileURL);
        // const blob = await file.blob();
        const resumeText = await pdfToText(file);
        const optimizedPrompt = `**Job Description:** ${jobDescription}

        **Resume:** ${resumeText}
        
        **Generate an atsScore and provide 20 improvement 30-50 word improvementspoints for this resume based on the given job description.  also tell improvementWeightage of that particular improvementpoint in field priority, no (*) and special characters`;
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash', generationConfig });
        const result = await model.generateContent(optimizedPrompt);
        const atsScore = result.response.candidates[0].content.parts[0].text;
        const parsedScore = JSON.parse(atsScore);
        setScore(parsedScore.atsScore);
        setImprovements(parsedScore.improvementPoints);
      } catch (error) {
        console.error("Failed to fetch and extract text from pdf", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (

    <div className="">
      <div className='md:w-[250px] lg:w-[900px] w-[300px]'>

        <h1 className='text-3xl font-semibold mb-8'>Upload Your Resume</h1>
        <DropZone className="" handleFileChange={handleFileChange} />
        <h1 className='text-3xl font-semibold mb-3 mt-5'>Job Description</h1>

        <textarea
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          placeholder="Job Description"
          id="message"
          className="block mt-2 p-2.5 h-[300px] w-full text-base text-gray-900 bg-gray-300 rounded-lg    border-gray-600 dark:placeholder-gray-400 dark:text-white  border-2 border-dashed" placeholder="Paste here Job Description"></textarea>
        <button onClick={handleUpload} className="bg-lime-600 text-white py-2 mt-2 px-4 rounded w-full">Get ATS Score</button>
      </div>

      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="text-center">
            <Loader />
          </div>
        </div>
      )}
      <div className='mt-20'>
        <h1 className='text-3xl font-semibold mb-3 mt-5'>ATS Score: {score}</h1>
        <TailwindTable data={improvements} />
      </div>
    </div>

  );
};

export default Dashboard;
