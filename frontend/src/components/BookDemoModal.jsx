import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { toast } from 'sonner';

const BookDemoModal = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    service: '',
    message: '',
  });

  const services = [
    'Software Development',
    'Software Testing',
    'Business Intelligence/Data Analytics',
    'DevOps & Cloud Management',
    'UI/UX Design Solutions',
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.fullName || !formData.mobileNumber || !formData.email || !formData.service) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    // Mobile number validation
    const mobileRegex = /^[0-9]{10,15}$/;
    if (!mobileRegex.test(formData.mobileNumber.replace(/[\s\-\(\)]/g, ''))) {
      toast.error('Please enter a valid mobile number');
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare the template params
      const templateParams = {
        fullName: formData.fullName,
        email: formData.email,
        mobileNumber: formData.mobileNumber,
        service: formData.service,
        message: formData.message || 'No message provided'
      };

      console.log('Sending with params:', templateParams);

      // Send email using the correct method
      const result = await emailjs.send(
        'service_tabqcqt',
        'template_210z9dc',
        templateParams,
        '1aB3yBub8bl42Dm65'
      );

      console.log('Success:', result);
      toast.success('Demo request submitted successfully!');
      
      setFormData({
        fullName: '',
        mobileNumber: '',
        email: '',
        service: '',
        message: '',
      });
      
      onClose();
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">Free Consultation</DialogTitle>
          <DialogDescription className="text-gray-600">
            Fill in the details below and we'll get back to you shortly.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name <span className="text-red-500">*</span></Label>
            <Input
              id="fullName"
              value={formData.fullName}
              onChange={(e) => handleChange('fullName', e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="mobileNumber">Mobile Number <span className="text-red-500">*</span></Label>
            <Input
              id="mobileNumber"
              type="tel"
              value={formData.mobileNumber}
              onChange={(e) => handleChange('mobileNumber', e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="service">List of Services <span className="text-red-500">*</span></Label>
            <Select 
              value={formData.service} 
              onValueChange={(value) => handleChange('service', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service} value={service}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              rows={4}
            />
          </div>
          
          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookDemoModal;