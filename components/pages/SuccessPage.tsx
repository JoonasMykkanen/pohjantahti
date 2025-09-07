import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function SuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-6">
      <div className="bg-white p-12 rounded-lg shadow-xl max-w-lg">
        <CheckCircle size={80} className="mx-auto text-teal-500" />
        <h1 className="text-4xl font-bold text-gray-800 mt-6 mb-4">
          Thank You!
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Your message has been sent successfully. We will get back to you as soon as possible.
        </p>
        <Link href="/" className="inline-block bg-blue-900 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-800 transition-all duration-300 transform hover:scale-105 shadow-md">
            Return to Homepage
        </Link>
      </div>
    </div>
  );
}
