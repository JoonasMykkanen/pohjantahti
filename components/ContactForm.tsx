"use client"; // This is a client component

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/success');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="font-courier-prime text-4xl font-bold text-center text-gray-800 mb-2">
          Verkostoidutaanko?
        </h2>
        <div className="w-full flex justify-center">
        <p className="text-md text-center max-w-lg font-normal text-gray-600 mb-8">
          Ei hätää, en ole mikään myyntitykki. Olen korkeintaan hieman innostunut yrittäjä.
          Pistä vaan viestiä tulemaan, niin jutellaan ihan rennosti.
          <br />
          <br />
          Mulle saa myös soittaa vaikka ei olisi ostamassa mitään, tykkään sparrata ja vaihtaa ajatuksia
          yleisesti kaikesta mahdollisesta ja täten oppia uutta!
        </p>

        </div>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Nimi</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Puhelinnumero</label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Sähköposti</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Viesti</label>
              <textarea
                id="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
                required
              ></textarea>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* 3. Update button styles */}
              <button type="submit" className="hover:cursor-pointer w-full bg-blue-900 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-800 transition-all duration-300 transform hover:scale-105 shadow-md">
                Lähetä tiedustelu sähköpostiin
              </button>
              <a href="tel:+358401234567" className="hover:cursor-pointer w-full text-center bg-teal-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-500 transition-all duration-300 transform hover:scale-105 shadow-md">
                Soita Joonakselle
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
