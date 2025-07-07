import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, MapPin, Phone, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    preferredDate: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Appointment Request Received!",
      description: "We'll contact you within 24 hours to confirm your appointment.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
      preferredDate: ''
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-dental-gray-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Schedule Your Consultation
            </h2>
            <p className="text-xl text-dental-gray mb-8">
              Ready to transform your smile? Get in touch with our team to schedule 
              your personalized consultation.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Phone</h3>
                  <p className="text-dental-gray">(555) 123-SMILE</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <p className="text-dental-gray">info@dentalcare.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Location</h3>
                  <p className="text-dental-gray">123 Dental Street, Health City, HC 12345</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Hours</h3>
                  <p className="text-dental-gray">Mon-Fri: 8AM-6PM, Sat: 9AM-3PM</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-foreground">
                Book Your Appointment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="service">Service Needed</Label>
                    <Select onValueChange={(value) => handleChange('service', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="consultation">General Consultation</SelectItem>
                        <SelectItem value="cleaning">Teeth Cleaning</SelectItem>
                        <SelectItem value="whitening">Teeth Whitening</SelectItem>
                        <SelectItem value="implants">Dental Implants</SelectItem>
                        <SelectItem value="orthodontics">Orthodontics</SelectItem>
                        <SelectItem value="emergency">Emergency Care</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="preferredDate">Preferred Date</Label>
                  <Input
                    id="preferredDate"
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => handleChange('preferredDate', e.target.value)}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Additional Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Tell us about your dental concerns or questions..."
                    className="mt-1"
                    rows={4}
                  />
                </div>
                
                <Button type="submit" className="w-full text-lg py-6 bg-primary hover:bg-dental-blue-dark">
                  Schedule Appointment
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;