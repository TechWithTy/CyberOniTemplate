'use client'
import { AlertCircle, Mail, PlaneIcon, Send } from "lucide-react";
import React, { useState } from 'react';
import { LoadingCircle } from "../shared/icons";
import Balancer from "react-wrap-balancer";
import ClientInput from "../layout/ClientInput";

function ContactForm() {

  const referralOptions = [
    "Google",
    "Facebook",
    "Twitter",
    "Friend",
    "Other",
  ];


  const [showForm, setShowForm] = useState(true);
  const [showThanks, setShowThanks] = useState(false);
  const [showError, setShowError] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [referral, setReferral] = useState(referralOptions[0]);


  const handleInterestClick = (interest: string) => {
    setSelectedInterest(interest);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here, you can handle form submission, e.g., sending data to a server.
    console.log('Form submitted:', { selectedInterest, name, email, message });

    if (name && email && message) {
      let res = await fetch(`/api/marketing/contact`, { method: "POST", body: JSON.stringify({ name, email, subject: selectedInterest, message, referral }) })
      setShowForm(false)
      if (res.status === 200) {
        setShowThanks(true)
      }
      else {
        setShowError(true)
      }

    }
  };

  return (
    <div className="mx-auto h-full min-h-fit w-full rounded-lg bg-[#5001EAAD] p-6 shadow-lg">
      {showForm && (
        <form className="h-full w-full p-6" onSubmit={handleSubmit}>
          <h1 className="my-2 text-4xl">Contact us</h1>
          <div className="mb-4 h-1/6">
            <label
              htmlFor="name"
              className="text-sm text-white transition-all duration-300 ease-in-out"
            >
              Name :
            </label>
            <input
              type="text"
              id="name"
              className="autofill-neutral w-full border-0  border-b-2 bg-transparent p-2 placeholder-white outline-none  ring-0 focus:border-[#A91079] focus:border-transparent focus:outline-none"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="mb-2 block">
              Your Email:
            </label>
            <ClientInput
              type="email"
              id="email"
              className="autofill-neutral w-full  border-0 border-b-2 bg-transparent p-2 placeholder-white ring-0  focus:border-[#A91079] focus:border-transparent focus:outline-none"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="referral" className="mb-2 block">
              How did you hear about us?
            </label>
            <select
              id="referral"
              value={referral}
              onChange={(e) => setReferral(e.target.value)}
              className="autofill-neutral w-full border-0 border-b-2 bg-transparent p-2 placeholder-black ring-0 focus:border-[#A91079] focus:border-transparent focus:outline-none"
              required
            >
              {referralOptions.map((option, index) => (
                <option className="bg-slate-950" key={index} value={option} >
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="mb-2 block">
              Message:
            </label>
            <textarea
              id="message"
              rows={4}
              className="foucs:ring-0 autofill-neutral  w-full border-0 border-b-2 bg-transparent p-2 placeholder-white focus:border-b-2 focus:border-none focus:border-[#A91079] focus:outline-none"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="flex items-center justify-center rounded-lg bg-[#A91079] px-8 py-4 text-white hover:bg-blue-900"
          >
            <Send color="white" className="mx-2" />
            <span className="mx-2">Send Message</span>
          </button>
        </form>
      )}

      {!showForm && !showThanks && !showError && (
        <>
          <LoadingCircle></LoadingCircle>
        </>
      )}

      {showThanks && (
        <>
          <div className="flex w-full flex-col items-center justify-center p-10 text-center">
            <Mail />
            <Balancer>Check you email</Balancer>
          </div>
        </>
      )}

      {showError && (
        <>
          <div className="flex w-full flex-col items-center justify-center p-10 text-center">
            <AlertCircle color="red" />
            <Balancer>An error occurred</Balancer>
          </div>
        </>
      )}
    </div>
  );
}

export default ContactForm;
