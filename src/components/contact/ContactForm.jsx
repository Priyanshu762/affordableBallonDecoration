import React from 'react';
import { 
  Calendar,
  DollarSign,
  Users,
  Palette,
  Send
} from 'lucide-react';
import Button from '../Button';
import AnimatedSection from '../AnimatedSection';

const FormInput = ({ icon, ...props }) => (
  <div className="relative">
    <div className="absolute inset-y-0 left-0 flex items-center" style={{ paddingLeft: '0.75rem' }}>
      {icon}
    </div>
    <input
      {...props}
      className="w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
      style={{ padding: '0.75rem 1rem 0.75rem 2.5rem' }}
    />
  </div>
);

const FormTextarea = (props) => (
  <textarea
    {...props}
    rows="4"
    className="w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
    style={{ padding: '0.75rem 1rem' }}
  ></textarea>
);

const ContactForm = ({ formData, handleInputChange, handleSubmit }) => {
  return (
    <div className="lg:col-span-2">
      <AnimatedSection animation="fadeInRight">
        <div className="bg-white rounded-2xl shadow-xl" style={{ padding: '2rem' }}>
          <h2 className="text-3xl font-bold font-poppins" style={{ marginBottom: '2rem' }}>
            Send Us a <span className="gradient-text">Message</span>
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col" style={{ gap: '1.5rem' }}>
            <div className="grid sm:grid-cols-2" style={{ gap: '1.5rem' }}>
              <FormInput
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                icon={<Users className="w-5 h-5 text-gray-400" />}
              />
              <FormInput
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                icon={<Users className="w-5 h-5 text-gray-400" />}
              />
            </div>
            <div className="grid sm:grid-cols-2" style={{ gap: '1.5rem' }}>
              <FormInput
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                icon={<Users className="w-5 h-5 text-gray-400" />}
              />
              <FormInput
                type="text"
                name="eventType"
                placeholder="Type of Event"
                value={formData.eventType}
                onChange={handleInputChange}
                required
                icon={<Calendar className="w-5 h-5 text-gray-400" />}
              />
            </div>
            <div className="grid sm:grid-cols-2" style={{ gap: '1.5rem' }}>
              <FormInput
                type="date"
                name="eventDate"
                placeholder="Event Date"
                value={formData.eventDate}
                onChange={handleInputChange}
                required
                icon={<Calendar className="w-5 h-5 text-gray-400" />}
              />
              <FormInput
                type="number"
                name="guestCount"
                placeholder="Number of Guests"
                value={formData.guestCount}
                onChange={handleInputChange}
                icon={<Users className="w-5 h-5 text-gray-400" />}
              />
            </div>
            <div className="grid sm:grid-cols-2" style={{ gap: '1.5rem' }}>
              <FormInput
                type="text"
                name="budget"
                placeholder="Estimated Budget"
                value={formData.budget}
                onChange={handleInputChange}
                icon={<DollarSign className="w-5 h-5 text-gray-400" />}
              />
              <FormInput
                type="text"
                name="location"
                placeholder="Event Location / Venue"
                value={formData.location}
                onChange={handleInputChange}
                required
                icon={<Users className="w-5 h-5 text-gray-400" />}
              />
            </div>
            <FormInput
              type="text"
              name="colorPreferences"
              placeholder="Color Preferences (e.g., blue, gold, white)"
              value={formData.colorPreferences}
              onChange={handleInputChange}
              icon={<Palette className="w-5 h-5 text-gray-400" />}
            />
            <FormTextarea
              name="message"
              placeholder="Tell us more about your event..."
              value={formData.message}
              onChange={handleInputChange}
              required
            />
            <FormInput
              type="text"
              name="hearAboutUs"
              placeholder="How did you hear about us?"
              value={formData.hearAboutUs}
              onChange={handleInputChange}
              icon={<Users className="w-5 h-5 text-gray-400" />}
            />
            <Button type="submit" size="lg" className="w-full">
              Send Inquiry
              <Send className="w-5 h-5" style={{ marginLeft: '0.5rem' }} />
            </Button>
          </form>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ContactForm;
