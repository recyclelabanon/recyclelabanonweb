import { useState } from 'react';
import { Heart, CreditCard, Calendar } from 'lucide-react';
import useApi from '../../Hooks/useApi.js';

const Donate = () => {
  const { sendRequest, loading, error, success } = useApi();
  const [donationType, setDonationType] = useState(null);
  const [amount, setAmount] = useState(50);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const predefinedAmounts = [25, 50, 100, 250, 500];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDonate = async (e) => {
    e.preventDefault();
    if (!donationType || amount <= 0) {
      alert('Please select a donation type and enter a valid amount.');
      return;
    }

    const donationData = {
      donationType,
      amount,
      ...formData
    };

    try {
      await sendRequest(
        'https://recyclelabanonweb.onrender.com/api/donation',
        'POST',
        donationData
      );
      
      // Reset form after successful submission
      setDonationType(null);
      setAmount(50);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      error.response && alert(error.response.data.message);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full mx-4 bg-white rounded-xl shadow-lg p-8 text-center">
          <Heart className="h-12 w-12 text-green-600 mx-auto mb-6" />
          <h2 className="text-2xl font-bold mb-4">Thank You for Your Support!</h2>
          <p className="text-gray-600 mb-6">
            Your donation of ${amount} has been received successfully.
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Make Another Donation
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="h-12 w-12 text-green-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Seeds of change begin with you—plant them today.
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Seed a one-time gift or nurture monthly blooms to cultivate impact.
              Every contribution grows our shared vision for a collective future and thriving planet.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex gap-4 mb-8">
              <button
                className={`flex-1 py-4 rounded-lg transition-colors ${
                  donationType === 'one-time'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}
                onClick={() => setDonationType('one-time')}
              >
                <CreditCard className="h-6 w-6 mx-auto mb-2" />
                One-time Donation
              </button>
              <button
                className={`flex-1 py-4 rounded-lg transition-colors ${
                  donationType === 'monthly'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}
                onClick={() => setDonationType('monthly')}
              >
                <Calendar className="h-6 w-6 mx-auto mb-2" />
                Monthly Donation
              </button>
            </div>

            {donationType && (
              <form onSubmit={handleDonate}>
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
                  <div className="space-y-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                    <textarea
                      name="message"
                      placeholder="Optional Message (e.g. dedication note)"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      rows="3"
                    ></textarea>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Select Amount</h3>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {predefinedAmounts.map((preset) => (
                      <button
                        type="button"
                        key={preset}
                        className={`py-3 rounded-lg transition-colors ${
                          amount === preset
                            ? 'bg-green-600 text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                        onClick={() => setAmount(preset)}
                      >
                        ${preset}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Custom Amount</h3>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(Number(e.target.value))}
                      className="w-full pl-8 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      min="1"
                      required
                    />
                  </div>
                </div>

                {error && (
                  <div className="mb-4 text-red-600">
                    {error}
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full bg-green-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors disabled:opacity-50"
                >
                  {loading ? 'Processing...' : `Donate $${amount} ${donationType === 'monthly' ? 'Monthly' : 'Now'}`}
                </button>

                <p className="text-center text-gray-500 mt-4">
                  Your donation is tax-deductible to the extent allowed by law.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;