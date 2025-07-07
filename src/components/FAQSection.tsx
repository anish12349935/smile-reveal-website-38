import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "faq-1",
    question: "How often should I visit the dentist?",
    answer: "We recommend visiting our dental clinic every 6 months for routine cleanings and checkups. Regular visits help prevent dental problems and catch any issues early when they're easier and less expensive to treat. However, some patients with specific conditions may need more frequent visits."
  },
  {
    id: "faq-2", 
    question: "Do you accept dental insurance?",
    answer: "Yes, we accept most major dental insurance plans. Our team will verify your benefits and help you understand your coverage before treatment. We also offer flexible payment plans and financing options to make dental care accessible for everyone."
  },
  {
    id: "faq-3",
    question: "What cosmetic dental procedures do you offer?",
    answer: "We offer a comprehensive range of cosmetic procedures including teeth whitening, porcelain veneers, dental bonding, smile makeovers, gum contouring, and orthodontic treatments. Our cosmetic dentists will create a personalized treatment plan to achieve your dream smile."
  },
  {
    id: "faq-4",
    question: "Are dental implants painful?",
    answer: "Dental implant procedures are performed under local anesthesia, so you won't feel pain during the treatment. Most patients experience minimal discomfort afterward, which can be managed with over-the-counter pain medications. Our advanced techniques and technology ensure the most comfortable experience possible."
  },
  {
    id: "faq-5",
    question: "How long does teeth whitening last?",
    answer: "Professional teeth whitening results typically last 1-3 years, depending on your lifestyle and habits. Avoiding staining substances like coffee, wine, and tobacco can help maintain your bright smile longer. We also provide take-home whitening kits for touch-ups."
  },
  {
    id: "faq-6",
    question: "What should I do in a dental emergency?",
    answer: "For dental emergencies, call our office immediately. We offer emergency dental care and can often see you the same day. For severe pain, knocked-out teeth, or facial swelling, seek immediate attention. Our emergency line is available 24/7 for urgent situations."
  },
  {
    id: "faq-7",
    question: "Do you treat children?",
    answer: "Yes, we provide comprehensive dental care for patients of all ages, including children. Our pediatric-friendly approach helps kids feel comfortable and builds positive associations with dental care. We recommend children visit starting at age 1 or within 6 months of their first tooth."
  },
  {
    id: "faq-8",
    question: "What technology do you use?",
    answer: "Our practice uses the latest dental technology including digital X-rays, intraoral cameras, laser dentistry, CAD/CAM same-day crowns, and 3D imaging. This advanced technology allows for more accurate diagnoses, comfortable treatments, and better outcomes for our patients."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-dental-gray max-w-2xl mx-auto">
            Have questions about our dental services? Find answers to the most 
            common questions our patients ask.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="bg-white rounded-lg shadow-md border-0 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-dental-gray-light text-foreground font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-dental-gray leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-dental-gray mb-4">
            Still have questions? We're here to help!
          </p>
          <div className="inline-flex items-center space-x-4">
            <span className="text-foreground font-medium">Call us at</span>
            <a 
              href="tel:(555)123-7645" 
              className="text-primary font-bold text-lg hover:text-dental-blue-dark transition-colors"
            >
              (555) 123-SMILE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;